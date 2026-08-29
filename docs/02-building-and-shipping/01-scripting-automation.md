---
sidebar_position: 1
title: Scripting & Automation
---

# Scripting & Automation

> Status: 🔲 skeleton

## Overview
_TODO: Why scripting is the "glue" of DevOps — automating the repetitive so humans handle the exceptions._

## Diagram

```mermaid
flowchart LR
    Manual[Manual, Repetitive Task] --> Script[Script / Automation]
    Script --> Scheduled[Scheduled / Triggered Run]
    Scheduled --> Idempotent[Idempotent, Safe to Re-run]
```

## How It Works

### Bash
- Variables, loops, conditionals
- Common one-liners (grep/awk/sed/find)
- Exit codes and error handling (`set -e`, `set -u`)

### Python for Ops
- Why Python over Bash for complex logic
- Common libraries: `subprocess`, `os`, `boto3`, `requests`

### Scheduling & Triggers
- Cron syntax
- Event-driven automation (webhooks, cloud functions)

### Idempotency
- Why scripts should be safe to run twice
- Example: check-before-create patterns

## Common Tools
| Tool | Use Case |
|------|----------|
| Bash | Quick system-level automation |
| Python | Complex logic, API integrations |
| cron | Scheduled jobs |

## Gotchas / Interview Angle
- Non-idempotent scripts causing duplicate resources/side effects
- Seed Q: "Write a script that safely retries a failed step without duplicating work."

## References
- _TODO_
