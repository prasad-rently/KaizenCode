#!/usr/bin/env node
// build-docs.mjs — convert the project's Markdown docs into styled, self-contained
// HTML pages that match the KaizenCode design (Apple-style, accent purple, dark mode).
//
// This is an OPTIONAL one-off generator, not part of serving the site. The .md files
// stay the source of truth (and render fine on GitHub); this just produces .html
// siblings so the docs look like the rest of the site. Re-run after editing any doc:
//
//     node scripts/build-docs.mjs
//
// Zero dependencies — uses a small, purpose-built Markdown subset parser.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SENT = ''; // private-use sentinel — never appears in prose

// Which files to convert → [ src, out, title ]
const TARGETS = [
  ['docs/README.md',                           'docs/README.html',                           'Documentation'],
  ['docs/00-project-setup.md',                 'docs/00-project-setup.html',                 'Project Setup & Hosting'],
  ['docs/expansion-analysis.md',               'docs/expansion-analysis.html',               'Expansion Analysis'],
  ['docs/future-roadmap.md',                   'docs/future-roadmap.html',                   'Future Roadmap'],
  ['docs/phase-1-http-backend-foundations.md', 'docs/phase-1-http-backend-foundations.html', 'Phase 1 — HTTP & Backend Foundations'],
  ['docs/phase-2-databases.md',                'docs/phase-2-databases.html',                'Phase 2 — Databases'],
  ['docs/phase-3-nextjs-mern-fullstack.md',    'docs/phase-3-nextjs-mern-fullstack.html',    'Phase 3 — Next.js & MERN'],
  ['docs/phase-4-docker-devops.md',            'docs/phase-4-docker-devops.html',            'Phase 4 — Docker & DevOps'],
  ['docs/phase-5-aws-cloud.md',                'docs/phase-5-aws-cloud.html',                'Phase 5 — Cloud: AWS'],
  ['docs/phase-6-distributed-systems-kafka.md','docs/phase-6-distributed-systems-kafka.html','Phase 6 — Distributed Systems & Kafka'],
  ['roadmap_summary_md.md',                    'roadmap_summary.html',                       'Roadmap Summary'],
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// inline: protect code first, then links → bold → italic, then restore code
function inline(text) {
  const codes = [];
  text = text.replace(/`([^`]+)`/g, (_, c) => {
    codes.push('<code>' + esc(c) + '</code>');
    return SENT + (codes.length - 1) + SENT;
  });
  text = esc(text);
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, href) => {
    href = href.replace(/\.md(#[\w-]+)?$/i, '.html$1')
               .replace(/roadmap_summary_md\.html/i, 'roadmap_summary.html');
    const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${href}"${ext}>${t}</a>`;
  });
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>');
  text = text.replace(new RegExp(SENT + '(\\d+)' + SENT, 'g'), (_, i) => codes[+i]);
  return text;
}

const cells = (row) => row.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());

function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // fenced code
    if (/^```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++; // closing fence
      out.push('<pre>' + esc(buf.join('\n')) + '</pre>');
      continue;
    }
    // blank
    if (/^\s*$/.test(line)) { i++; continue; }
    // heading
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) { const l = h[1].length; out.push(`<h${l}>${inline(h[2])}</h${l}>`); i++; continue; }
    // hr
    if (/^(-{3,}|\*{3,})\s*$/.test(line)) { out.push('<hr>'); i++; continue; }
    // table (header row + |---| separator)
    if (/\|/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/.test(lines[i + 1])) {
      const head = cells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /\|/.test(lines[i]) && lines[i].trim()) { rows.push(cells(lines[i])); i++; }
      let t = '<table><thead><tr>' + head.map((c) => `<th>${inline(c)}</th>`).join('') + '</tr></thead><tbody>';
      for (const r of rows) t += '<tr>' + r.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>';
      out.push(t + '</tbody></table>');
      continue;
    }
    // blockquote
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
      out.push('<blockquote>' + inline(buf.join(' ')) + '</blockquote>');
      continue;
    }
    // ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*\d+\.\s+/, '')); i++; }
      out.push('<ol>' + buf.map((b) => `<li>${inline(b)}</li>`).join('') + '</ol>');
      continue;
    }
    // unordered list
    if (/^\s*[-*]\s+/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*[-*]\s+/, '')); i++; }
      out.push('<ul>' + buf.map((b) => `<li>${inline(b)}</li>`).join('') + '</ul>');
      continue;
    }
    // paragraph (gather until a blank line or new block)
    const buf = [line];
    i++;
    while (i < lines.length && !/^\s*$/.test(lines[i]) &&
           !/^(#{1,6}\s|>|\s*[-*]\s|\s*\d+\.\s|```|-{3,})/.test(lines[i])) {
      buf.push(lines[i]); i++;
    }
    out.push('<p>' + inline(buf.join(' ')) + '</p>');
  }
  return out.join('\n');
}

const STYLE = `*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#fbfbfd;color:#1a1a1a;padding:32px 20px 64px;max-width:740px;margin:0 auto;line-height:1.65}@media(prefers-color-scheme:dark){body{background:#0c0c0e;color:#e8e8e8}}.nav{display:flex;gap:14px;font-size:12.5px;font-weight:600;margin-bottom:28px;padding-bottom:16px;border-bottom:1px solid #ececf0}@media(prefers-color-scheme:dark){.nav{border-color:#222226}}.nav a{color:#5350B4;text-decoration:none}@media(prefers-color-scheme:dark){.nav a{color:#8f8cff}}.nav a:hover{text-decoration:underline}h1{font-size:30px;font-weight:700;letter-spacing:-.8px;margin:18px 0 10px;line-height:1.15}h2{font-size:21px;font-weight:700;letter-spacing:-.4px;margin:34px 0 10px;padding-top:18px;border-top:1px solid #ececf0}@media(prefers-color-scheme:dark){h2{border-color:#1d1d20}}h3{font-size:16px;font-weight:700;margin:22px 0 8px}p{font-size:15px;color:#33333a;margin:10px 0}@media(prefers-color-scheme:dark){p{color:#c4c4cc}}a{color:#5350B4}@media(prefers-color-scheme:dark){a{color:#8f8cff}}strong{color:#1a1a1a;font-weight:650}@media(prefers-color-scheme:dark){strong{color:#fff}}ul,ol{margin:10px 0 10px 24px}li{font-size:15px;color:#33333a;margin:5px 0}@media(prefers-color-scheme:dark){li{color:#c4c4cc}}code{font-family:'SF Mono','Fira Code',ui-monospace,monospace;font-size:13px;background:#ececf1;padding:1.5px 6px;border-radius:5px}@media(prefers-color-scheme:dark){code{background:#1c1c20;color:#e8e8e8}}pre{background:#f4f4f7;border:1px solid #e6e6ec;border-radius:10px;padding:14px 16px;overflow-x:auto;margin:14px 0;font-size:13px;line-height:1.7;font-family:'SF Mono','Fira Code',ui-monospace,monospace}pre code{background:none;padding:0}@media(prefers-color-scheme:dark){pre{background:#141417;border-color:#26262b}}blockquote{border-left:3px solid #5350B4;background:#f3f2ff;padding:12px 16px;margin:16px 0;border-radius:0 10px 10px 0;font-size:14.5px;color:#444}@media(prefers-color-scheme:dark){blockquote{background:#16142a;color:#cfcfe6;border-color:#8f8cff}}table{width:100%;border-collapse:collapse;font-size:13.5px;margin:16px 0;display:block;overflow-x:auto}th{background:#f0f0f4;font-weight:650;text-align:left;padding:9px 12px;border:1px solid #e2e2ea}td{padding:9px 12px;border:1px solid #e6e6ec;vertical-align:top}@media(prefers-color-scheme:dark){th{background:#17171b;border-color:#28282e}td{border-color:#222226}}hr{border:none;border-top:1px solid #ececf0;margin:26px 0}@media(prefers-color-scheme:dark){hr{border-color:#222226}}.footer{margin-top:48px;padding-top:20px;border-top:1px solid #ececf0;font-size:12.5px;color:#8a8a92}@media(prefers-color-scheme:dark){.footer{border-color:#222226}}`;

function page(title, bodyHtml, depth) {
  const home = depth === 0 ? 'index.html' : '../index.html';
  const docs = depth === 0 ? 'docs/README.html' : 'README.html';
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${esc(title)} · KaizenCode</title><style>${STYLE}</style></head><body>
<nav class="nav"><a href="${home}">← KaizenCode</a><a href="${docs}">📚 All docs</a></nav>
${bodyHtml}
<div class="footer">改 KaizenCode — generated from <code>${esc(title)}</code>. Edit the source <code>.md</code> and run <code>node scripts/build-docs.mjs</code> to regenerate.</div>
</body></html>
`;
}

let n = 0;
for (const [src, out, title] of TARGETS) {
  const md = readFileSync(join(ROOT, src), 'utf8');
  const depth = out.includes('/') ? 1 : 0;
  writeFileSync(join(ROOT, out), page(title, mdToHtml(md), depth));
  console.log('✓', out);
  n++;
}
console.log(`\nGenerated ${n} HTML docs.`);
