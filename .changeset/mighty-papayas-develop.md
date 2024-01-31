---
'@commercetools-test-data/organization': minor
---

This package provides the data model for `Organization` and `Team`.

```ts
import {
  Organization
  OrganizationDraft,
  type TOrganization,
  type TOrganizationDraft,
  Team,
  TeamDraft,
  type TTeam,
  type TTeamDraft,
} from '@commercetools-test-data/organization';

const organization = Organization.random().buildRest<TOrganization>();
const organizationDraft = OrganizationDraft.random().buildRest<TOrganizationDraft>();

const team = Team.random().buildRest<TTeam>();
const teamDraft = TeamDraft.random().buildRest<TTeamDraft>();
```
