---
'@commercetools/composable-commerce-test-data': minor
---

Three new models have been added related to MC Gateway `OAuthClient` entity:

- `OAuthClient`
- `OAuthScope`
- `ProjectPermission`

They all can be consumed from this new entry point: `@commercetools/composable-commerce-test-data/oauth-client`.

They only have a GraphQL representation as the MC Gateway only exposes a GraphQL API.

Here's an example of how to use them:

```ts
import {
  OAuthClientGraphql,
  OAuthScopeGraphql,
  ProjectPermission,
} from '@commercetools/composable-commerce-test-data/oauth-client';

const oAuthClientModel = OAuthClientGraphql.random().permissions([
  ProjectPermissionGraphql.random().projectKey('my-project-key'),
]);

const oAuthScopeModel = OAuthScopeGraphql.random().name(
  OAuthScopeGraphql.constants.presets.viewCategories
);
```
