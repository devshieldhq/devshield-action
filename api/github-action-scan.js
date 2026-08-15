const fs = require("fs");
const path = require("path");

const API_URL =
  process.env.DEVSHIELD_API_URL ||
  "https://devshield.site/api/analyze";

const API_KEY = process.env.DEVSHIELD_API_KEY;

if (!API_KEY) {
  console.error("DEVSHIELD_API_KEY is not set.");
  process.exit(1);
}

async function main() {
  const repositoryUrl =
    process.env.GITHUB_SERVER_URL &&
    process.env.GITHUB_REPOSITORY
      ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}`
      : null;

  if (!repositoryUrl) {
    console.error("GitHub repository URL could not be determined.");
    process.exit(1);
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      action: "scan",
      repository_url: repositoryUrl
    })
  });

  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    console.error("DevShield returned invalid JSON:");
    console.error(text);
    process.exit(1);
  }

  if (!response.ok || !data.success) {
    console.error("DevShield scan failed:");
    console.error(JSON.stringify(data, null, 2));
    process.exit(1);
  }

  const outputDir = path.join(
    process.env.GITHUB_WORKSPACE || process.cwd(),
    "devshield-results"
  );

  fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(
    path.join(outputDir, "devshield-result.json"),
    JSON.stringify(data, null, 2)
  );

  const summary = data.findings?.summary || {};

  console.log("");
  console.log("DevShield Security Scan");
  console.log("--------------------------------");
  console.log(`Critical: ${summary.critical || 0}`);
  console.log(`High:     ${summary.high || 0}`);
  console.log(`Medium:   ${summary.medium || 0}`);
  console.log(`Low:      ${summary.low || 0}`);
  console.log("--------------------------------");
  console.log("DevShield scan completed.");

  if ((summary.critical || 0) > 0 || (summary.high || 0) > 0) {
    console.error("Security threshold exceeded.");
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("DevShield Action error:");
  console.error(error);
  process.exit(1);
});
