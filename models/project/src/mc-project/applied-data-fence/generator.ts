import { fake, Generator } from '@commercetools-test-data/core';
import type { TAppliedDataFence } from './types';

const fakeDataFenceNames = [
  'viewCustomers',
  'viewOrders',
  'manageCustomers',
  'manageOrders',
];

const fakeDataFenceGroups = ['products', 'orders', 'prices', 'discounts'];
const fakeDataFenceStores = ['europe', 'usa'];

const generator = Generator<TAppliedDataFence>({
  fields: {
    type: fake(() => 'Store'),
    group: fake((f) => f.helpers.arrayElement(fakeDataFenceGroups)),
    name: fake((f) => f.helpers.arrayElement(fakeDataFenceNames)),
    value: fake((f) => f.helpers.arrayElement(fakeDataFenceStores)),
  },
});

export default generator;
