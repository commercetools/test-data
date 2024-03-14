---
'@commercetools-test-data/organization': minor
---

This package provides the data model for `Organization` and `Team`.

```ts
import {
  Organization,
  McOrganization,
  Team,
  type TOrganization,
  type TMcOrganization,
  type TTeam,
} from '@commercetools-test-data/organization';

const organization = Organization.random().buildGraphql<TOrganization>();
const mcOrganization = McOrganization.random().buildGraphql<TMcOrganization>();
const team = Team.random().buildGraphql<TTeam>();
```
