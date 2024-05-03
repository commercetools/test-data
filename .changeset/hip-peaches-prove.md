---
'@commercetools-test-data/organization-extension': minor
---

Add OrganizationExtension Model

# Install

```bash
$ pnpm add -D @commercetools-test-data/organization-extension
```

# Usage

```ts
import {
  OrganizationExtension,
  type TOrganizationExtension,
  type TOrganizationExtensionGraphql,
} from '@commercetools-test-data/custom-view';

const organizationExtension =
  OrganizatiionExtension.random().build<TOrganizationExtension>();
const organizationExtensionGraphQL =
  OrganizatiionExtension.random().buildGraphql<TOrganizationExtensionGraphql>();
```
