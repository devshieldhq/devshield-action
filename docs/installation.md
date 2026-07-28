# Installation

## Prerequisites

- GitHub repository
- GitHub Actions enabled
- DevShield account
- DevShield API Key

Create your free account:

https://devshield.site

---

## GitHub Action

Create a workflow:

```yaml
name: DevShield Scan

on:
  push:
    branches:
      - main

jobs:
  devshield:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: devshieldhq/devshield-action@v1
        with:
          api-key: ${{ secrets.DEVSHIELD_API_KEY }}
```

---

## Configure

Create a file:

```
devshield.config.js
```

Example:

```javascript
module.exports = {
  projectName: "My Project",
  scan: {
    security: true,
    performance: true,
    reliability: true
  }
};
```
