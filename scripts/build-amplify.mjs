import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { amplifyIndexable } from './deployment-policy.mjs';
import { buildStyles } from './build-styles.mjs';

buildStyles();

// Amplify does not forward build variables to SSR by default. Persist only the
// public origin/indexing policy, so generated pages and SSR share the same policy.
const env = {
  ...process.env,
  SITE_URL: 'https://citevia.io',
  SITE_INDEXABLE: String(amplifyIndexable(process.env)),
};
let existing = '';
try {
  existing = readFileSync('.env.production', 'utf8');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
const retained = existing.split('\n').filter((line) => !/^SITE_(URL|INDEXABLE)=/.test(line));
writeFileSync(
  '.env.production',
  [...retained, `SITE_URL=${env.SITE_URL}`, `SITE_INDEXABLE=${env.SITE_INDEXABLE}`, ''].join('\n'),
);
const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  env,
  stdio: 'inherit',
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
