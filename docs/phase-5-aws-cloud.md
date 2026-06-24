# Phase 5 — Cloud: AWS

**Weeks 17–20** · `phase5_aws_cloud.html`

> The infrastructure layer every CTO must own. You rent computers; Amazon manages
> the hardware.

## What you'll learn

- **Mental model** — regions, availability zones; renting infrastructure via API
  instead of owning hardware.
- **EC2** — virtual machines; SSH, AMIs, security groups, Elastic IPs, instance
  types (`t3.micro` → `m6i.large`).
- **S3** — object storage for files; buckets, keys, public URLs. Never store
  uploads on the EC2 disk.
- **RDS** — managed PostgreSQL/MySQL; automated backups, multi-AZ failover, read
  replicas. Alternatives: Supabase, PlanetScale.
- **Lambda** — serverless functions triggered by HTTP, S3 events, or schedules;
  pay per invocation; watch cold starts.
- **IAM** — users, roles, policies; principle of least privilege; never hardcode
  access keys in application code.
- **VPC** — public subnets (load balancer) vs private subnets (app servers +
  databases). RDS always lives in a private subnet.
- **CloudWatch** — logs, metrics, alarms; the first stop when production breaks.
- **Route 53** — DNS, domain registration, health checks, failover routing.

## Standard production architecture

```
Route 53 → CloudFront (CDN) → ALB → EC2 (private subnet) → RDS (private subnet)
                                                          → S3 (assets/uploads)
                                                          → CloudWatch (monitoring)
```

## Mobile analogies

- **AWS** ≈ iCloud for everything — consume infrastructure via API without
  managing hardware.
- **S3** ≈ a global file server — store the URL in the DB, serve the file from
  the S3/CDN edge.

## Self-check

- Why does RDS belong in a private subnet, never a public one?
- What's the IAM "least privilege" principle, in one sentence?
- When is Lambda the right tool — and when do cold starts make it the wrong one?
- What's the first place you look when production is down?
