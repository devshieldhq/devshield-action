# Examples

## GitHub Action

```yaml
- uses: devshieldhq/devshield-action@v1
```

## CLI

```bash
devshield scan
```

## JavaScript SDK

```javascript
import DevShield from "@devshield/sdk";

const ds = new DevShield(process.env.DEVSHIELD_API_KEY);

await ds.scan();
```
