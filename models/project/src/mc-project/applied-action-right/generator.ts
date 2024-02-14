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

const generator = Generator<TAppliedActionRight>({
  fields: {
    // TODO: use more realistic values for action rights
    group: fake((f) => f.animal.type()),
    name: fake((f) => f.helpers.arrayElement(fakeActionRightNames)),
    value: fake(() => true),
  },
});

export default generator;
