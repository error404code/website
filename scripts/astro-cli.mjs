import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const configHome = resolve(".astro-config");
mkdirSync(configHome, { recursive: true });

const astroEntry = resolve("node_modules", "astro", "astro.js");

const child = spawn(process.execPath, [astroEntry, ...process.argv.slice(2)], {
  stdio: "inherit",
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: "1",
    TELEMETRY_DISABLED: "1",
    APPDATA: configHome,
    XDG_CONFIG_HOME: configHome,
  },
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
