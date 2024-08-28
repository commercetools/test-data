import { Generator, fake } from '@commercetools-test-data/core';
import * as CentPrecisionMoney from '../cent-precision-money';
import type { TPriceTier } from './types';

// https://docs.commercetools.com/api/types#pricetier

const generator = Generator<TPriceTier>({
  fields: {
    minimumQuantity: fake((f) => f.number.int()),
    value: fake(() => CentPrecisionMoney.random()),
  },
});

export default generator;
