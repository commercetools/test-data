import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as CustomViewInstallationPermission from '../../custom-view-installation-permission';
import type { TCustomViewInstallation } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TCustomViewInstallation>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    acceptedPermissions: fake(() => [
      CustomViewInstallationPermission.presets.ViewOnlyPermissions(),
      CustomViewInstallationPermission.presets.ManageOnlyPermissions(),
    ]),
    projects: fake(() => []),
    installInAllProjects: fake((f) => f.datatype.boolean()),
    owner: fake(() => ({})),
    ownerId: fake((f) => f.string.uuid()),
  },
});

export default generator;
