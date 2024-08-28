import { fake, Generator } from '@commercetools-test-data/core';
import type { TAppliedMenuVisibilities } from './types';

const fakeMenuVisibilityNames = [
  'hideProducts',
  'hideOrders',
  'hidePrices',
  'hideDiscounts',
];

const generator = Generator<TAppliedMenuVisibilities>({
  fields: {
    name: fake((f) => f.helpers.arrayElement(fakeMenuVisibilityNames)),
    value: fake(() => true),
  },
});

export default generator;
