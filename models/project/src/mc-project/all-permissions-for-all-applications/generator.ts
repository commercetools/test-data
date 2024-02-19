import { fake, Generator } from '@commercetools-test-data/core';
import * as AppliedActionRight from '../applied-action-right';
import * as AppliedDataFence from '../applied-data-fence';
import * as AppliedPermission from '../applied-permission';
import * as AppliedMenuVisibilities from './applied-menu-visibilities';
import type { TAllPermissionsForAllApplications } from './types';

const generator = Generator<TAllPermissionsForAllApplications>({
  fields: {
    allAppliedActionRights: fake(() => [AppliedActionRight.random()]),
    allAppliedDataFences: fake(() => [AppliedDataFence.random()]),
    allAppliedPermissions: fake(() => [AppliedPermission.random()]),
    allAppliedMenuVisibilities: fake(() => [AppliedMenuVisibilities.random()]),
  },
});

export default generator;
