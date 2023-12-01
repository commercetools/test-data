---
'@commercetools-test-data/custom-view': minor
---

Allow to generate test data for Custom Views Installations.

```ts
import {
  CustomViewInstallation,
  RestrictedCustomViewInstallationForOrganization,
  type TCustomViewInstallationGraphql,
  type TRestrictedCustomViewInstallationForOrganizationGraphql,
} from '@commercetools-test-data/custom-view';

const customViewInstallation =
  CustomViewInstallation.random().buildGraphql<TCustomViewInstallationGraphql>();

const restrictedCustomViewInstallationForOrganization =
  RestrictedCustomViewInstallationForOrganization.random().buildGraphql<TRestrictedCustomViewInstallationForOrganizationGraphql>();
```
