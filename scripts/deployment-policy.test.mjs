import test from 'node:test';
import assert from 'node:assert/strict';
import { amplifyIndexable } from './deployment-policy.mjs';

test('only the production main branch is indexable on Amplify', () => {
  assert.equal(amplifyIndexable({ AWS_BRANCH: 'main' }), true);
  assert.equal(amplifyIndexable({ AWS_BRANCH: 'main', AWS_PULL_REQUEST_ID: '42' }), false);
  assert.equal(amplifyIndexable({ AWS_BRANCH: 'staging' }), false);
  assert.equal(amplifyIndexable({ AWS_BRANCH: 'feature/performance' }), false);
  assert.equal(amplifyIndexable({}), false);
});
