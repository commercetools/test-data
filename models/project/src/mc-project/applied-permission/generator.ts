import { fake, Generator } from '@commercetools-test-data/core';
import type { TAppliedPermission } from './types';

const fakePermissions = [
  'canViewProducts',
  'canManageProductTypes',
  'canViewStates',
  'canManageStates',
  'canViewOrders',
  'canManageOrders',
  'canAddOrders',
  'canAddDiscountCodes',
  'canManageProjectSettings',
];

const generator = Generator<TAppliedPermission>({
  fields: {
    // TODO: use more realistic values for action rights
    name: fake((f) => f.helpers.arrayElement(fakePermissions)),
    value: fake(() => true),
  },
});

export default generator;
