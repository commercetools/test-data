import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TTaxedItemPrice } from './types';

// https://docs.commercetools.com/api/projects/carts#taxeditemprice

const generator = Generator<TTaxedItemPrice>({
  fields: {
    totalNet: fake(() => CentPrecisionMoney.random()),
    totalGross: fake(() => CentPrecisionMoney.random()),
    taxPortions: [],
    totalTax: null,
  },
});

export default generator;
