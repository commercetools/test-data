import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as CustomApplication from '../../custom-application';
import * as CustomApplicationInstallationPermission from '../../custom-application-installation-permission';
import type { TRestrictedCustomApplicationInstallationForOrganization } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator =
  Generator<TRestrictedCustomApplicationInstallationForOrganization>({
    fields: {
      id: fake((f) => f.string.uuid()),
      createdAt: fake(getOlderDate),
      updatedAt: fake(getNewerDate),
      application: fake(() => CustomApplication.random()),
      acceptedPermissions: fake(() => [
        CustomApplicationInstallationPermission.presets.ViewOnlyPermissions(),
        CustomApplicationInstallationPermission.presets.ManageOnlyPermissions(),
      ]),
      projects: fake(() => []),
      installInAllProjects: fake((f) => f.datatype.boolean()),
    },
  });

export default generator;
