import { fake, Generator } from '../../../../core';
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
    name: fake((f) => f.helpers.arrayElement(fakePermissions)),
    value: fake(() => true),
  },
});

export default generator;
