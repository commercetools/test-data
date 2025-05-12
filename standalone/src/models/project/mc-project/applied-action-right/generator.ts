import { fake, Generator } from '../../../../core';
import type { TAppliedActionRight } from './types';

const fakeActionRightNames = [
  'addPrices',
  'editPrices',
  'addProducts',
  'publishProducts',
  'createReturns',
  'sendQuote',
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
