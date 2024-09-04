import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TTaxPortion } from './types';

// https://docs.commercetools.com/api/projects/carts#taxportion

const generator = Generator<TTaxPortion>({
  fields: {
    name: null,
    rate: fake((f) => f.number.int()),
    amount: fake(() => CentPrecisionMoney.random()),
  },
});

export default generator;
