
<div align="center">

# 🛡️ DevShield AI

### Autonomous Software Reliability Platform

**Detect • Diagnose • Repair • Learn**

> DevShield turns software monitoring into autonomous software engineering — a runtime SDK and a static analysis engine, both backed by AI agents that don't just flag problems, they investigate and fix them.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Stack](https://img.shields.io/badge/stack-Node.js%20%7C%20Supabase%20%7C%20Vercel-informational)
![License](https://img.shields.io/badge/license-Proprietary-lightgrey)
![Status](https://img.shields.io/badge/status-active--development-yellow)

</div>

---

## 📑 Table of Contents

- [What is DevShield?](#-what-is-devshield)
- [Why DevShield Exists](#-why-devshield-exists)
- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Architecture](#-architecture)
- [AI Pipeline](#-ai-pipeline)
- [Core AI Agents](#-core-ai-agents)
- [Features](#-features)
- [Dashboard](#-dashboard)
- [CLI](#-cli)
- [Runtime SDK](#-runtime-sdk)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Screenshots](#-screenshots)
- [Demo](#-demo)
- [Project Structure](#-project-structure)
- [Technical Stack](#-technical-stack)
- [Built With AI Assistance](#-built-with-ai-assistance)
- [Challenges](#-challenges)
- [Performance](#-performance)
- [Roadmap](#-roadmap)
- [Comparison](#-comparison)
- [Security](#-security)
- [Enterprise Vision](#-enterprise-vision)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧩 What is DevShield?

DevShield is two things bolted onto one AI pipeline: a **runtime SDK** (`agent.js`) that customers embed on their site to catch JS errors, unhandled rejections, and network failures live, and a **standalone static analysis CLI** (`devshield/`) that scans any codebase — 21 languages, 32 rule categories — for bugs, secrets, and security issues before they ship. Both feed the same AI layer: Guardian catches or detects the issue, Inspector gathers context, Diagnose explains root cause, and AutoFix executes a safe, whitelisted repair where one exists. Everything surfaces in a developer dashboard with per-project health, live incident feeds, and billing.

---

## 🎯 Why DevShield Exists

Traditional monitoring tools tell you *something failed*. DevShield tries to tell you:

- **why** it failed (root cause, not just a stack trace)
- **where** it's coming from (which file, which dependency, which request)
- **what the blast radius is** (impact/severity)
- **how to fix it** (a concrete repair plan, auto-applied when it's safe to)

---

## ❗ The Problem

- Developers spend hours searching logs and reproducing bugs that only show up in production
- Existing monitoring tools surface noise, not root cause
- Logs are voluminous and rarely point directly at the fix
- Repairs are manual, repetitive, and rarely documented for next time
- Institutional knowledge about "how we fixed this last time" disappears between incidents

## ✅ The Solution

DevShield replaces the standard `monitor → alert → human digs in` loop with:

Monitoring → AI Reasoning → Repair

A chain of purpose-built AI agents (Guardian → Inspector → Diagnose → AutoFix) handles detection, context-gathering, diagnosis, and — for a defined class of safe repairs — the fix itself, before a human has to open a terminal.

---

## 🏗️ Architecture

        Browser
           │
     Runtime SDK (agent.js)
           │
      Guardian AI  ──────► detects & fingerprints incidents
           │
     Inspector AI  ──────► gathers stack trace, browser state, timeline
           │
      Diagnose AI  ──────► root cause + confidence + severity
           │
       AutoFix AI  ──────► executes whitelisted repair (if safe)
           │
        Dashboard  ──────► developer sees the whole incident story
           │
            CLI    ──────► same AI layer, run against a codebase pre-commit/CI
           │
        Developer

The runtime path (SDK → Guardian → Inspector → Diagnose → AutoFix → Dashboard) runs against a *live* deployed app. The CLI (`devshield/`) runs the equivalent detection + AI diagnosis layer statically, against source code, independent of the deployed app — useful pre-commit or as a GitHub Action.

---

## 🔄 AI Pipeline

Guardian → Inspector → Diagnose → AutoFix → Learning

1. **Guardian** — watches for incidents, deduplicates by fingerprint, assigns a risk score
2. **Inspector** — pulls context: stack trace, browser/runtime state, dependency versions, event timeline
3. **Diagnose** — proposes root cause with a confidence score and severity rating
4. **AutoFix** — for whitelisted, safe repair types, executes automatically (retry failed requests, reload missing resources, clear stale state); everything else is surfaced with a suggested fix for a human to approve
5. **Learning** — incident outcomes and repair success/failure feed back into future ranking of repair strategies (`agent/guardian.js` learning history, `devshield/ai/LearningEngine.js`)

---

## 🤖 Core AI Agents

### Guardian (`agent/guardian.js`)
- Monitors runtime, detects incidents
- Fingerprints and deduplicates repeat errors
- Assigns a risk score
- Maintains learning history across incidents

### Inspector (`agent/inspector.js`, `devshield/pipeline-inspector.js`)
- Collects surrounding context: browser state, stack trace, dependency and timeline data (runtime path), or project structure/config (static-analysis path)

### Diagnose (`agent/diagnose.js`, `devshield/ai/DiagnosisEngine.js`)
- Determines likely root cause
- Attaches an AI confidence score and severity
- Produces human-readable recommendations (`devshield/ai/ExplanationEngine.js`)

### AutoFix (`agent/autofix_v2.js`, `agent/repairEngine.js`, `devshield/ai/FixEngine.js`)
- Builds a repair plan
- Only executes pre-approved, whitelisted, safe automations
- Designed for rollback/approval rather than blind auto-apply on anything high-risk

---

## ✨ Features

| Feature | Status |
|---|---|
| Runtime Monitoring | ✅ |
| AI Diagnosis | ✅ |
| Root Cause Analysis | ✅ |
| Risk Scoring | ✅ |
| AI Repair Plan | ✅ |
| Incident Timeline | ✅ |
| Developer Dashboard | ✅ |
| Admin Dashboard | ✅ |
| Static Analysis CLI (21 languages, 32 rule categories) | ✅ |
| GitHub Action | ✅ |
| Billing (Paystack) | ✅ |
| Auth (Supabase — email/password + Google/GitHub OAuth) | ✅ |
| Self-Learning repair ranking | ✅ (guardian + LearningEngine) |
| Predictive AI (pre-empting incidents before they occur) | 🚧 |
| CLI subcommands (`scan`/`diagnose`/`fix`/`monitor` as distinct verbs) | 🚧 (currently single-mode scan; see [CLI](#-cli)) |

---

## 📊 Dashboard

- **AI Health** — overall agent status across projects
- **Incident Feed** — live bug/error stream as it's classified
- **Performance** — performance metric ingestion and trends
- **Guardian panel** — active incident detection status
- **Diagnose panel** — root cause explanations per incident
- **AutoFix panel** — repair actions taken, pending, or requiring approval
- **Admin view** — platform-wide analytics, user management, billing overview (admin-gated)

---

## ⌨️ CLI

DevShield ships two CLI entry points — worth knowing which is which:

**Current / recommended** (`devshield/bin/devshield.js`, the npm `bin`):

devshield .                 # scan the current directory
devshield . --json          # JSON output
devshield . --html          # HTML report
devshield . --sarif         # SARIF (for GitHub code scanning)

This is a single-mode scanner — point it at a path, it detects languages, runs the matching rule sets, and reports findings by severity.

**Legacy pipeline** (`devshield/devshield-cli.js`):

node devshield/devshield-cli.js scan     # runs the full legacy check pipeline (default if no command given)
node devshield/devshield-cli.js login    # save a DevShield API key locally
node devshield/devshield-cli.js version  # print CLI version
node devshield/devshield-cli.js help     # list commands

Note: in the legacy CLI, any command other than `login`/`version`/`help` (including `scan`, `doctor`) currently runs the same full pipeline — there's no per-command branching for `diagnose`/`fix`/`monitor` yet. Distinct subcommands for those are a roadmap item, not current behavior.

---

## 📡 Runtime SDK

Guardian → Transport → Incident → Diagnosis → Repair

Drop one `<script>` tag (pointing at `agent.js`) into any site. The SDK captures JS errors, unhandled promise rejections, console errors, and network failures, tags them with your project's API key, and ships them to `/api/analyze` for classification and AI diagnosis.

---

## 🚀 Installation

git clone <your-repo-url>
cd Devshield-main
npm install

### Environment Variables

| Variable | Required | Used for |
|---|---|---|
| `SUPABASE_URL` | ✅ | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ | Server-side Supabase access |
| `SUPABASE_ANON_KEY` | ✅ | Public Supabase key, exposed via `/api/config` |
| `PAYSTACK_SECRET_KEY` | ✅ | Checkout, payment verification, webhook validation |
| `GMAIL_USER` / `GMAIL_APP_PASSWORD` | ✅ | Transactional email (Gmail SMTP via Nodemailer) |
| `APP_URL` | Optional | Base URL for email links |
| `VERCEL_URL` | Auto-set by Vercel | Password-reset redirect URLs |

---

## ⚡ Quick Start

Open dashboard → Generate an error → Guardian captures it → Diagnose explains it → AutoFix repairs it (if safe)

vercel dev        # serves index.html + /api/* together, matching prod routing

---

## 🖼️ Screenshots

_Add screenshots of the dashboard, Guardian incident feed, and Diagnose/AutoFix panels here before publishing — none are currently checked into the repo besides `logo-navbar.png` and `og-image.png`._

## 🎬 Demo

- **Live:** devshield1.vercel.app
- **GitHub:** _add repo URL_
- **Video walkthrough:** _add link once recorded_

---

## 📁 Project Structure

Devshield-main/
├── index.html              # Entire frontend — landing, auth, dashboard, admin, legal (single-page app)
├── agent.js                 # Runtime SDK — the script customers embed on their site
├── agent/
│   ├── guardian.js            # Incident detection, fingerprinting, risk scoring, learning history
│   ├── inspector.js            # Context collection
│   ├── diagnose.js              # Client-side diagnosis helpers
│   ├── repairEngine.js           # Executes whitelisted repair actions
│   └── autofix_v2.js              # AutoFix engine (v2) — repair planning + self-learning memory
├── security/                       # Client-side security modules loaded by index.html
│   ├── apiKeys.js, rateLimit.js, sanitize.js, authSecurity.js, abuseDetection.js
├── api/                              # Vercel serverless functions
│   ├── auth.js, analyze.js, errors.js, dashboard.js, admin.js, projects.js,
│   │   performance.js, account.js, config.js, checkout.js, verify-payment.js,
│   │   paystack-webhook.js
├── lib/                                # Shared backend utilities
│   ├── supabase.js, security.js, email.js, notifications.js, billing.js, eventClassifier.js
├── devshield/                            # Standalone multi-language static analysis CLI
│   ├── bin/devshield.js                    # Current CLI entry point (npm `bin`)
│   ├── devshield-cli.js                     # Legacy CLI entry (login/version/help/scan pipeline)
│   ├── core/                                 # scan-engine, ParallelScanner, MetricsEngine, rule-loader
│   ├── config/                                # default.js, loader.js
│   ├── detectors/                              # Per-language project detection
│   ├── languages/                               # 21 language scanners
│   ├── rules/                                    # 32 rule categories
│   ├── reporters/                                 # console, json, html, sarif
│   ├── plugins/                                    # Third-party rule plugin support
│   ├── ai/                                          # ConfidenceEngine, DiagnosisEngine, FixEngine,
│   │                                                   ExplanationEngine, LearningEngine
│   ├── security/                                     # devshield's own secret/key detectors
│   └── pipeline-*.js                                  # Legacy pipeline orchestration modules
├── manifest.json / sw.js / offline.html    # PWA support
├── package.json
└── vercel.json

---

## 🏗️ Technical Stack

| Layer | Technology |
|---|---|
| Frontend | Single-file HTML/CSS/JS SPA (no build step) |
| Backend | Node.js serverless functions (Vercel) |
| Database & Auth | Supabase (Postgres + Supabase Auth) |
| Payments | Paystack |
| Email | Gmail SMTP via Nodemailer |
| Hosting | Vercel |
| CI | GitHub Action (`action.yml`) wrapping the CLI |
| Offline support | Service Worker (`sw.js`) + PWA manifest |

---

## 🧠 Built With AI Assistance

**Debugging backend and frontend issues.:**
**Reviewing code for security improvements and performance.:**

---

## 🥊 Challenges

- Runtime monitoring across inconsistent browser environments
- Calibrating AI confidence scores so they're trustworthy enough to act on
- Deciding what AutoFix is allowed to touch automatically vs. what needs human approval
- Keeping the static-analysis CLI's language/rule coverage broad without false-positive noise

## 📈 Performance

_Fill in with real measured numbers once you have them — placeholders below are structural only, not verified figures:_

| Metric | Target |
|---|---|
| Incident Detection | _TBD_ |
| Diagnosis Latency | _TBD_ |
| AI Confidence | Dynamic, per-incident |
| Duplicate Detection | Enabled (Guardian fingerprinting) |

## 🗺️ Roadmap

**Phase 1 — Current**
Guardian · Inspector · Diagnose · AutoFix · CLI · Dashboard

**Phase 2**
Predictive AI · Repository intelligence · Distinct CLI subcommands (`scan`/`diagnose`/`fix`/`monitor`) · VS Code extension · Deeper CI/CD integration

**Phase 3**
Self-healing deployments · Enterprise/fleet monitoring · Distributed AI agents · Trained learning models (beyond current heuristic ranking)

## ⚖️ Comparison

| Capability | DevShield | Traditional Monitoring |
|---|---|---|
| Error Monitoring | ✅ | ✅ |
| AI Diagnosis | ✅ | ❌ |
| Root Cause Analysis | ✅ | Limited |
| Risk Scoring | ✅ | ❌ |
| Autonomous Repair | ✅ (whitelisted only) | ❌ |
| Static Multi-Language Scanning | ✅ (21 languages) | Varies |

## 🔒 Security

- No secrets checked into the repo (verified — hits in `devshield/rules` and `devshield/tests` are detector rule definitions and a deliberate test fixture, not real keys)
- Supabase Auth with Row Level Security on all data tables
- Rate limiting, input sanitization, and abuse detection modules (`security/`)
- Admin access gated by a hardcoded email allowlist, client-side (worth hardening server-side if this becomes customer-facing at scale)
- All required secrets loaded via environment variables, never hardcoded

## 🏢 Enterprise Vision

Longer-term direction: microservice-aware monitoring, Kubernetes/cloud-native deployments, and AI-driven operations for organizations running fleets of services rather than a single app.

## 🤝 Contributing

This is currently a solo-maintained project. _Add contribution guidelines here (issue process, PR expectations, code style) if/when you open it up._

## 📄 License

Proprietary — All rights reserved.
