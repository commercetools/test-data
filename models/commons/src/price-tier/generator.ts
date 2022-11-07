import { fake, Generator } from '@commercetools-test-data/core';
import * as Money from '../money';
import type { TPriceTier } from './types';

const generator = Generator<TPriceTier>({
  fields: {
    minimumQuantity: fake((r) => r.datatype.number({ min: 2, max: 100 })),
    value: fake(() => Money.presets.withCurrency('EUR')),
  },
});

export default generator;
