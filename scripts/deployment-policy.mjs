export function amplifyIndexable(env) {
  return env.AWS_BRANCH === 'main' && !env.AWS_PULL_REQUEST_ID;
}
