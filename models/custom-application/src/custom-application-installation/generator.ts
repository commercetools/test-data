import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import { CustomApplication } from '..';
import * as CustomApplicationInstallationPermission from '../custom-application-installation-permission';
import type { TCustomApplicationInstallation } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomApplicationInstallation>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    acceptedPermissions: fake(() => [
      CustomApplicationInstallationPermission.presets.ViewOnlyPermissions(),
      CustomApplicationInstallationPermission.presets.ManageOnlyPermissions(),
    ]),
    projects: fake(() => []), //TODO: add ProjectExtension
    installInAllProjects: fake((f) => f.datatype.boolean()),
    application: fake(() => CustomApplication.random()),
  },
});

export default generator;
