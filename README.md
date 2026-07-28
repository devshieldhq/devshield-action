<p align="center">
  <img src="https://github.com/devshieldhq/devshield-action/blob/main/logo-navbar.png.png" width="320" alt="DevShield Logo">
</p>

<h1 align="center"> DevShield</h1>

<p align="center">
Developer-first Application Security Platform that detects vulnerabilities before deployment.
</p>

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-20+-green)
![License](https://img.shields.io/badge/License-MIT-green)
![GitHub Stars](https://img.shields.io/github/stars/devshieldhq/Devshield)
![Issues](https://img.shields.io/github/issues/devshieldhq/Devshield)
![Security](https://img.shields.io/badge/security-DevSecOps-red)
![Build](https://img.shields.io/github/actions/workflow/status/devshieldhq/Devshield/devshield.yml)

</p>

---

# 🛡️ What is DevShield?

DevShield is a developer-first application security platform built to help developers discover, understand, prioritize, and remediate security vulnerabilities before software reaches production.

Unlike traditional scanners that simply dump vulnerabilities into a report, DevShield provides actionable findings with file locations, affected code snippets, severity analysis, deployment protection, and an interactive dashboard designed for modern development teams.

DevShield combines:

- CLI security scanning
- Repository security analysis
- Deployment protection
- GitHub integration
- Interactive security dashboard
- CI/CD security automation

into a single developer-focused platform.

---

## Why DevShield?

Modern developers shouldn't have to choose between:

❌ Shipping fast

or

❌ Shipping securely

DevShield helps teams:

- Shift security left
- Catch vulnerabilities early
- Block insecure deployments
- Reduce remediation time
- Improve developer productivity
- Secure software without slowing development

 # Key Features

## 🔍 CLI Security Scanner

- Scan local projects in seconds
- Recursive file analysis
- Language-aware detection engine
- Existing vulnerability tracking
- Security baseline support
- Deployment protection
- Exit codes for CI/CD
- Rich console reporting

---

## 🌐 Interactive Security Dashboard

Monitor every project from a centralized web dashboard.

Features include:

- Project management
- Repository scanning
- Scan history
- Severity analytics
- Vulnerability explorer
- Code snippets
- File & line navigation
- Deployment status
- Security metrics

---

## 🔗 GitHub Integration

DevShield integrates directly with GitHub repositories.

Capabilities include:

- Repository validation
- Automatic repository download
- ZIP extraction
- Repository cleanup
- GitHub Actions integration
- SARIF report generation
- CI/CD deployment protection

---

## 🛑 Deployment Protection

DevShield prevents insecure code from reaching production.

Pipeline Guardian can:

- Block deployments
- Fail CI pipelines
- Enforce security thresholds
- Detect critical vulnerabilities
- Exit with proper status codes

Perfect for GitHub Actions and automated deployments.

---

## 📊 Multiple Report Formats

Generate reports for every workflow.

Supported formats:

- Console
- JSON
- HTML
- SARIF

These reports can be consumed by developers, CI/CD systems, or external security platforms.

---

## 🧠 Developer-Focused Experience

DevShield was built for developers—not security analysts.

Every finding includes:

- Severity
- Rule name
- File path
- Line number
- Code snippet
- Explanation
- Recommended remediation

Making vulnerabilities easy to understand and fix.
# 🏗️ Architecture Overview

DevShield is designed as a modular security platform where every component has a single responsibility. This makes it easy to extend, maintain, and integrate into existing developer workflows.

```text
                    ┌──────────────────────────┐
                    │        Developer         │
                    └────────────┬─────────────┘
                                 │
                                 │
                      CLI / Dashboard / API
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │     DevShield Engine     │
                    └────────────┬─────────────┘
                                 │
         ┌───────────────────────┼────────────────────────┐
         │                       │                        │
         ▼                       ▼                        ▼
 ┌────────────────┐     ┌────────────────┐      ┌────────────────┐
 │ Rule Engine    │     │ GitHub Module  │      │ Pipeline Guard │
 └────────────────┘     └────────────────┘      └────────────────┘
         │                       │                        │
         ▼                       ▼                        ▼
 ┌────────────────┐     ┌────────────────┐      ┌────────────────┐
 │ File Scanner   │     │ Repo Scanner   │      │ Deploy Check   │
 └────────────────┘     └────────────────┘      └────────────────┘
         │
         ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                     Reporting Engine                        │
 ├─────────────────────────────────────────────────────────────┤
 │ Console │ JSON │ HTML │ SARIF │ Dashboard │ API Responses   │
 └─────────────────────────────────────────────────────────────┘
```

---

## Core Components

### 🔍 Scanner Engine

The Scanner Engine is responsible for recursively analyzing source code, identifying vulnerabilities, collecting metadata, and generating structured findings.

Responsibilities:

- Project traversal
- File discovery
- Language detection
- Rule execution
- Finding aggregation

---

### 🧠 Rule Engine

The Rule Engine contains DevShield's security detection logic.

It evaluates every supported file against hundreds of security rules covering:

- Injection attacks
- Secrets exposure
- Authentication issues
- Cryptography misuse
- Dangerous APIs
- Configuration weaknesses
- Deployment risks

The modular design allows new security rules to be added without modifying the scanner itself.

---

### 🔗 GitHub Integration

The GitHub module enables DevShield to scan remote repositories directly.

Capabilities include:

- Repository validation
- Secure repository download
- ZIP extraction
- Temporary workspace management
- Cleanup
- GitHub Actions compatibility

---

### 🛑 Pipeline Guardian

Pipeline Guardian evaluates scan results before deployment.

It determines whether a build should:

- Pass
- Warn
- Fail

based on configurable security thresholds.

This allows DevShield to stop insecure code before it reaches production.

---

### 📊 Reporting Engine

Every scan can generate multiple report formats simultaneously.

Supported outputs:

- Terminal console
- JSON
- HTML
- SARIF
- Dashboard API responses

This allows DevShield to integrate seamlessly into developer workflows, CI/CD pipelines, and external security platforms.

# 📦 Installation

## Requirements

Before installing DevShield, ensure your environment meets the following requirements:

- Node.js 20+
- npm 10+
- Git (optional, for repository features)

Verify your installation:

```bash
node -v
npm -v
```

---

## Clone the Repository

```bash
git clone https://github.com/devshieldhq/Devshield.git
```

```bash
cd Devshield
```

---

## Install Dependencies

```bash
npm install
```

---

## Verify Installation

Run a scan against the current project.

```bash
node devshield/bin/devshield.js scan .
```

Expected output:

```text
✔ Files Scanned: 125

✔ Critical : 0
✔ High     : 1
✔ Medium   : 4
✔ Low      : 7

Deployment Status:
PASSED
```

---

# 🚀 CLI Usage

## Scan a Project

```bash
node devshield/bin/devshield.js scan .
```

---

## Scan Another Folder

```bash
node devshield/bin/devshield.js scan ./my-project
```

---

## Generate JSON Report

```bash
node devshield/bin/devshield.js scan . --json
```

---

## Generate HTML Report

```bash
node devshield/bin/devshield.js scan . --html
```

---

## Generate SARIF Report

```bash
node devshield/bin/devshield.js scan . --sarif
```

---

## Deployment Security Check

```bash
node devshield/bin/devshield.js deploy-check .
```

Pipeline Guardian automatically blocks deployment when configured security thresholds are exceeded.

---

## Create Security Baseline

```bash
node devshield/bin/devshield.js baseline .
```

Future scans compare findings against the saved baseline to distinguish existing issues from newly introduced vulnerabilities.

---

## Show Existing Vulnerabilities

```bash
node devshield/bin/devshield.js scan . --all
```

This displays both previously known findings and newly detected vulnerabilities.

# 🌐 REST API

DevShield provides a REST API for integrating repository scanning into dashboards, CI/CD pipelines, internal developer portals, and third-party applications.

---

## Base URL

```text
https://devshield.site/api
```

---

# Authentication

Every request requires your DevShield Project Key.

Example header:

```http
Authorization: Bearer YOUR_PROJECT_KEY
```

---

# Scan Repository

Analyze a GitHub repository remotely.

### Endpoint

```http
POST /api/analyze
```

---

### Request

```json
{
  "repository_url": "https://github.com/devshieldhq/Devshield"
}
```

---

### Example cURL

```bash
curl -X POST https://devshield.site/api/analyze \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_PROJECT_KEY" \
-d '{
  "repository_url":"https://github.com/devshieldhq/Devshield"
}'
```

---

### Success Response

```json
{
  "success": true,
  "summary": {
    "critical": 0,
    "high": 2,
    "medium": 5,
    "low": 7
  },
  "findings": [
    {
      "severity": "HIGH",
      "rule": "Hardcoded Secret",
      "file": "config.js",
      "line": 28,
      "message": "Potential API key detected."
    }
  ]
}
```

---

# Health Check

```http
GET /api/health
```

Example Response

```json
{
  "status": "ok"
}
```

---

# Error Response

```json
{
  "success": false,
  "error": "Repository download failed."
}
```

---

# Supported Repository Providers

Currently supported:

- GitHub Public Repositories
- GitHub Private Repositories (using Personal Access Token)

Coming soon:

- GitLab
- Bitbucket
- Azure DevOps

---

# Response Fields

| Field | Description |
|--------|-------------|
| severity | Vulnerability severity |
| rule | Detection rule |
| file | Affected file |
| line | Line number |
| message | Human-readable explanation |
| snippet | Vulnerable code snippet (when available) |

---

# Rate Limits

To ensure platform stability:

- Repository scans may be rate limited.
- Large repositories may take longer to analyze.
- Concurrent scans are processed in the order received.

Enterprise support with higher limits is planned.

# ⚡ GitHub Actions

DevShield integrates seamlessly with GitHub Actions to automatically scan every push and pull request before code reaches production.

---

## Basic Workflow

Create:

```text
.github/workflows/devshield.yml
```

```yaml
name: DevShield Security Scan

on:
  push:
    branches:
      - main

  pull_request:
    branches:
      - main

jobs:
  devshield:

    runs-on: ubuntu-latest

    permissions:
      contents: read
      security-events: write

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install

      - name: Run DevShield
        run: node devshield/bin/devshield.js deploy-check . --sarif
```

---

# Deployment Protection

Pipeline Guardian automatically blocks deployments whenever configured security thresholds are exceeded.

Example:

```text
Critical : 2
High     : 5

❌ Deployment Blocked

Exit Code: 1
```

If no blocking vulnerabilities exist:

```text
Critical : 0
High     : 0

✅ Deployment Approved

Exit Code: 0
```

---

# Generated Reports

During every workflow DevShield can generate:

- Console Report
- JSON Report
- HTML Report
- SARIF Report

---

# GitHub Code Scanning

For public repositories or repositories with GitHub Advanced Security enabled, SARIF reports can be uploaded directly into GitHub Code Scanning.

Example:

```yaml
- name: Upload SARIF
  if: always()
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: devshield-results.sarif
```

---

# Recommended CI/CD Flow

```text
Developer Push
       │
       ▼
GitHub Actions
       │
       ▼
DevShield Scan
       │
       ▼
Pipeline Guardian
       │
 ┌─────┴─────┐
 │           │
 ▼           ▼
PASS      BLOCK
 │           │
 ▼           ▼
Deploy     Stop Build
```

---

# Why Integrate with GitHub Actions?

✔ Automatic security scanning

✔ Blocks insecure deployments

✔ Detects vulnerabilities before production

✔ Produces machine-readable reports

✔ Integrates with existing CI/CD pipelines

✔ No additional infrastructure required
# 🗺️ Roadmap

DevShield is continuously evolving into a complete developer-first application security platform.

---

# ✅ Completed

### Core Security Engine

- Recursive project scanning
- Multi-language rule engine
- Vulnerability detection
- Severity classification
- Security baseline support
- Existing vulnerability tracking

---

### Developer Experience

- CLI Scanner
- Interactive Dashboard
- HTML Reports
- JSON Reports
- SARIF Reports
- Rich Console Output

---

### GitHub Integration

- Repository validation
- Repository download
- ZIP extraction
- Automatic cleanup
- GitHub Actions integration

---

### CI/CD Protection

- Pipeline Guardian
- Deployment blocking
- Exit code support
- Automated security gates

  # 🎯 Vision

Our mission is simple:

> Build the easiest security platform developers actually enjoy using.

Instead of slowing development down, DevShield enables teams to ship software faster—with confidence that security has already been checked before deployment.

# 💻 Supported Languages

DevShield currently supports security analysis for the following languages and technologies.

| Language | Supported |
|------------|:---------:|
| JavaScript | ✅ |
| TypeScript | ✅ |
| Node.js | ✅ |
| JSON | ✅ |
| YAML | ✅ |
| Dockerfile | 🚧 |
| Python | 🚧 |
| Java | 🚧 |
| Go | 🚧 |
| PHP | 🚧 |
| C# | 🚧 |
| Rust | 🚧 |

> More language support is continuously being added.

---

# 🛡️ Detection Coverage

DevShield currently detects a wide range of security issues.

| Category | Status |
|-----------|:------:|
| SQL Injection | ✅ |
| Command Injection | ✅ |
| Remote Code Execution | ✅ |
| Path Traversal | ✅ |
| Cross-Site Scripting (XSS) | ✅ |
| Prototype Pollution | ✅ |
| Server-Side Request Forgery (SSRF) | ✅ |
| Open Redirect | ✅ |
| Insecure Deserialization | ✅ |
| Hardcoded Passwords | ✅ |
| Hardcoded Secrets | ✅ |
| AWS Keys | ✅ |
| GitHub Tokens | ✅ |
| JWT Secrets | ✅ |
| API Keys | ✅ |
| Weak Cryptography | ✅ |
| Dangerous eval() Usage | ✅ |
| Child Process Abuse | ✅ |
| Insecure Randomness | ✅ |
| Deployment Risk Analysis | ✅ |
| AI Incident Prioritization | 🚧 |
| Blast Radius Analysis | 🚧 |
| Explainable AI | 🚧 |
| Confidence Scoring | 🚧 |

---

# 📁 Project Structure

```text
DevShield
│
├── api/                     REST API
├── dashboard/               Web dashboard
├── devshield/
│   ├── bin/                 CLI
│   ├── core/                Scanner engine
│   ├── github/              GitHub integration
│   ├── reporters/           Console, HTML, JSON, SARIF
│   ├── rules/               Detection rules
│   ├── utils/               Utilities
│   └── config/              Configuration
│
├── docs/                    Documentation
├── .github/                 GitHub Actions
├── action.yml               Marketplace Action
├── package.json
└── README.md
```

---

# 🤝 Contributing

We welcome contributions from the community.

You can contribute by:

- Reporting bugs
- Suggesting new features
- Improving documentation
- Writing detection rules
- Improving performance
- Adding language support
- Enhancing the dashboard
- Improving the CLI experience

### Getting Started

```bash
git clone https://github.com/devshieldhq/Devshield.git

cd Devshield

npm install
```

Create a feature branch:

```bash
git checkout -b feature/my-feature
```

Commit your changes:

```bash
git commit -m "Add amazing feature"
```

Push:

```bash
git push origin feature/my-feature
```

Open a Pull Request.

---

# 💬 Community

Join the DevShield community.

- 🌐 Website — https://devshield.site
- 🐞 GitHub Issues — https://github.com/devshieldhq/Devshield/issues
- ⭐ GitHub Repository — https://github.com/devshieldhq/Devshield

We're always looking for feedback from developers, security engineers, and open-source contributors.

---

# ❤️ Support DevShield

If DevShield helps you build more secure software:

⭐ Star the repository

🍴 Fork the project

🗣️ Share it with your team

🐛 Report bugs

💡 Suggest new features

Every contribution helps improve developer security for everyone.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
