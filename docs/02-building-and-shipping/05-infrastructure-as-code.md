---
sidebar_position: 5
title: Infrastructure as Code
---

# Infrastructure as Code (IaC)

> Status: 🔲 skeleton

## Overview
_TODO: Treating infra like software — version-controlled, reviewable, reproducible._

## Diagram

```mermaid
flowchart LR
    Code[IaC Code e.g. .tf files] --> Plan[Plan / Dry Run]
    Plan --> Review[Human Review]
    Review --> Apply[Apply]
    Apply --> State[State File]
    State -.drift check.-> Apply
```

## How It Works

### Declarative vs Imperative
- Terraform (declarative) vs scripted provisioning (imperative)

### State Management
- What Terraform state is, why it matters, remote state/locking

### Drift Detection
- What happens when reality diverges from code

## Common Tools
| Tool | Use Case |
|------|----------|
| Terraform | Multi-cloud provisioning |
| Pulumi | IaC using general-purpose languages |
| CloudFormation | AWS-native IaC |

## Gotchas / Interview Angle
- Terraform state file conflicts in team settings — how to handle
- Seed Q: "Someone manually changed a resource that Terraform manages. What happens on the next `terraform apply`, and how do you fix it?"

## References
- _TODO_
