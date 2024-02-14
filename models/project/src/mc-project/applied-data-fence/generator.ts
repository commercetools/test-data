import { fake, Generator } from '@commercetools-test-data/core';
import type { TAppliedDataFence } from './types';

const fakeDataFenceNames = [
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

const generator = Generator<TAppliedDataFence>({
  fields: {
    type: fake(() => 'Store'),
    // TODO: use more realistic values for action rights
    group: fake((f) => f.animal.type()),
    name: fake((f) => f.helpers.arrayElement(fakeDataFenceNames)),
    value: fake(() => true),
  },
});

export default generator;
