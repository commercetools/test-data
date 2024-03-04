---
'@commercetools-test-data/organization': minor
---

This package provides the data model for `Organization` and `Team`.

```ts
import {
  Organization,
  McOrganization,
  type TOrganization,
  type TMcOrganization,

  Team,
  TeamRest,
  type TTeam,
  type TTeamRest
} from '@commercetools-test-data/organization';

const organization = Organization.random().buildGraphql<TOrganization>();
const mcOrganization = McOrganization.random().buildGraphql<TMcOrganization>();

const team = Team.random().buildGraphql<TTeam>();
const teamRest = TeamRest.random().buildRest<TTeamRest>()
```
