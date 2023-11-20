import { fake, Generator } from '@commercetools-test-data/core';
import { createRelatedDates } from '@commercetools-test-data/utils';
import * as CustomView from '../../custom-view';
import * as CustomViewInstallationPermission from '../../custom-view-installation-permission';
import type { TRestrictedCustomViewInstallationForOrganization } from './types';

const [getOlderDate, getNewerDate] = createRelatedDates();

const generator = Generator<TRestrictedCustomViewInstallationForOrganization>({
  fields: {
    id: fake((f) => f.string.uuid()),
    createdAt: fake(getOlderDate),
    updatedAt: fake(getNewerDate),
    customView: fake(() => CustomView.random()),
    acceptedPermissions: fake(() => [
      CustomViewInstallationPermission.presets.ViewOnlyPermissions(),
      CustomViewInstallationPermission.presets.ManageOnlyPermissions(),
    ]),
    projects: fake(() => []),
    installInAllProjects: fake((f) => f.datatype.boolean()),
  },
});

export default generator;
