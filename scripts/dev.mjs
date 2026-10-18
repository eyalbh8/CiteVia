import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import { buildStyles, styleSources } from './build-styles.mjs';

buildStyles();
const watchers = styleSources.map((path) => watch(path, buildStyles));
const child = spawn(
  process.execPath,
  ['node_modules/next/dist/bin/next', 'dev', ...process.argv.slice(2)],
  { stdio: 'inherit' },
);
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', (code) => {
  watchers.forEach((watcher) => watcher.close());
  process.exit(code ?? 0);
});
