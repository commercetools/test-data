# @commercetools-test-data/associate-role

This package provides the data model for the commercetools platform `AssociateRole` representations

https://docs.commercetools.com/api/projects/associate-roles#representations

# Install

```bash
$ pnpm add -D @commercetools-test-data/associate-role
```

# Usage

```ts
import {
  AssociateRole,
  AssociateRoleDraft,
  type TAssociateRole,
  type TAssociateRoleDraft,
} from '@commercetools-test-data/associate-role';

const associateRole = AssociateRole.random().build<TAssociateRole>();
const AssociateRoleDraft =
  AssociateRoleDraft.random().build<TAssociateRoleDraft>();

// Presets
const emptyCustomerDraft = AssociateRole.presets
  .withAllBusinessUnitPermissions()
  .build<TAssociateRole>();
```
