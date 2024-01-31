# @commercetools-test-data/organization

This package provides the data model for `Organization` and `Team`.

# Install

```bash
$ pnpm add -D @commercetools-test-data/organization
```

# Usage

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
