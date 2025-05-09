import { fake, Generator } from '../../../../../core';
import { TAppliedMenuVisibilities } from './types';

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
