# @commercetools-test-data/custom-view-installation

This package provides the data model for the commercetools internal API `CustomViewInstallation` type

# Install

```bash
$ pnpm add -D @commercetools-test-data/custom-view-installation
```

# Usage

```ts
import {
  RestrictedCustomViewInstallationForOrganization,
  type TRestrictedCustomViewInstallationForOrganizationGraphql,
} from '@commercetools-test-data/custom-view-installation';

const restrictedCustomViewInstallationForOrganization =
  RestrictedCustomViewInstallationForOrganization.random().buildGraphql<TRestrictedCustomViewInstallationForOrganizationGraphql>();
```
