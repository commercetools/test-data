---
'@commercetools-test-data/custom-view': minor
'@commercetools-test-data/custom-view-installation': minor
---

New package to generate test data for Custom Views Installations.

```ts
import {
  RestrictedCustomViewInstallationForOrganization,
  type TRestrictedCustomViewInstallationForOrganizationGraphql,
} from '@commercetools-test-data/custom-view-installation';

const restrictedCustomViewInstallationForOrganization =
  RestrictedCustomViewInstallationForOrganization.random().buildGraphql<TRestrictedCustomViewInstallationForOrganizationGraphql>();
```
