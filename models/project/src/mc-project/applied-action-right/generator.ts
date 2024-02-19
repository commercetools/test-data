import { fake, Generator } from '@commercetools-test-data/core';
import type { TAppliedActionRight } from './types';

const fakeActionRightNames = [
  'canAddPrices',
  'canEditPrices',
  'canAddProducts',
  'canPublishProducts',
  'canCreateReturns',
  'canSendQuote',
];

const fakeActionRightGroups = ['products', 'orders', 'prices', 'discounts'];

const generator = Generator<TAppliedActionRight>({
  fields: {
    group: fake((f) => f.helpers.arrayElement(fakeActionRightGroups)),
    name: fake((f) => f.helpers.arrayElement(fakeActionRightNames)),
    value: fake(() => true),
  },
});

export default generator;
