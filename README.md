# DevOps Cookbook

A living, versioned reference covering DevOps, networking, infrastructure, and the SDLC —
built with [Docusaurus](https://docusaurus.io/) and published to GitHub Pages. Content is
plain Markdown with [Mermaid](https://mermaid.js.org/) diagrams; no build step needed to
just read and edit.

## ⚠️ Before you deploy

Open `docusaurus.config.js` and update these two constants at the top:

```js
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'; // your actual GitHub username/org
const REPO_NAME = 'devops-app';                 // change if you rename the repo
```

## Local development

```bash
npm install
npm start        # dev server at http://localhost:3000, hot-reloads on save
```

```bash
npm run build     # production build to ./build
npm run serve     # preview the production build locally
```

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys to GitHub
Pages automatically on every push to `main`. One-time setup on GitHub:

1. Push this repo to `github.com/<your-username>/devops-app`.
2. In the repo settings → **Pages**, set **Source** to "GitHub Actions".
3. Push to `main` — the workflow builds and deploys. Your site will be live at
   `https://<your-username>.github.io/devops-app/`.

(Alternative: `npm run deploy` uses Docusaurus's built-in deploy command against the
`gh-pages` branch instead, if you'd rather not use Actions.)

## Content structure

```
docs/
├── 01-foundations/                 # Part 1 — SDLC, Linux, networking, infra, cloud
├── 02-building-and-shipping/       # Part 2 — scripting, Git, CI/CD, IaC, containers…
├── 03-running-in-production/       # Part 3 — web servers, observability, security, releases
├── interview-questions/            # Q&A per topic (not yet populated)
└── examples/                       # Real configs/worked examples (not yet populated)
```

Each concept page follows the same recipe format:

**Overview → Diagram (Mermaid) → How It Works → Common Tools → Gotchas / Interview Angle → References**

Sidebar ordering comes from the numeric filename prefixes and each folder's
`_category_.json` — Docusaurus builds the whole nav automatically from the file tree, so
adding a new chapter is just adding a new numbered `.md` file.

## Status

All 20 concept chapters currently exist as **skeletons** (structure + a starter Mermaid
diagram + `_TODO_` markers) — ready to be fleshed out one at a time. `interview-questions/`
and `examples/` are stubbed and empty, meant to grow alongside the concepts.

## Roadmap

- [ ] Flesh out each concept chapter with real content
- [ ] Populate `interview-questions/` from each chapter's "Gotchas / Interview Angle" section
- [ ] Populate `examples/` with real configs (Terraform, GitHub Actions, K8s manifests, etc.)
- [ ] Custom domain / branding polish (logo, favicon, social card)
- [ ] Longer-term: an admin panel to add/edit chapters without touching Markdown directly
