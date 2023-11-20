---
'@commercetools-test-data/custom-view': minor
---

Allow to generate test data for Custom Views Installations.

```ts
import {
  RestrictedCustomViewInstallationForOrganization,
  type TRestrictedCustomViewInstallationForOrganizationGraphql,
} from '@commercetools-test-data/custom-view';

const restrictedCustomViewInstallationForOrganization =
  RestrictedCustomViewInstallationForOrganization.random().buildGraphql<TRestrictedCustomViewInstallationForOrganizationGraphql>();
```
