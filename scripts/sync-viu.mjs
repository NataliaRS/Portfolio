#!/usr/bin/env node
/**
 * Refresh the vendored VIU Design System build.
 *
 * `@viu/ui` and `@viu/design-tokens` are private packages that live in
 * NataliaRS/Viu, so this repo vendors their *built* output under `vendor/`.
 * This script rebuilds them from a local checkout of that repo and copies the
 * result across — never hand-edit anything under `vendor/`.
 *
 *   node scripts/sync-viu.mjs [path-to-Viu-checkout]
 *
 * Defaults to ../Viu.
 */
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const viu = resolve(process.argv[2] ?? join(repoRoot, "..", "Viu"));

if (!existsSync(join(viu, "ui", "package.json"))) {
  console.error(`No VIU checkout at ${viu}.
Clone it first:  git clone https://github.com/NataliaRS/Viu.git`);
  process.exit(1);
}

const run = (cmd, args) => execFileSync(cmd, args, { cwd: viu, stdio: "inherit" });

run("npm", ["install", "--no-audit", "--no-fund"]);
run("npm", ["run", "build:tokens"]);
run("npm", ["run", "build", "-w", "@viu/ui"]);

const uiDist = join(repoRoot, "vendor", "viu-ui", "dist");
rmSync(uiDist, { recursive: true, force: true });
cpSync(join(viu, "ui", "dist"), uiDist, { recursive: true });
rmSync(join(uiDist, "index.js.map"), { force: true });

for (const file of ["tokens.css", "tokens.js", "tokens.d.ts", "tokens.json"]) {
  cpSync(join(viu, "dist", file), join(repoRoot, "vendor", "viu-design-tokens", "dist", file));
}

console.log("\nVendored VIU build refreshed. Run `npm run build` to verify.");
