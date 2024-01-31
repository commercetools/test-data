import { fake, Generator } from '@commercetools-test-data/core';
import * as CentPrecisionMoneyDraft from '../../cent-precision-money/cent-precision-money-draft';
import { TPriceTierDraft } from '../types';

// https://docs.commercetools.com/api/types#pricetierdraft

const generator = Generator<TPriceTierDraft>({
  fields: {
    minimumQuantity: fake((f) => f.number.int()),
    value: fake(() => CentPrecisionMoneyDraft.random()),
  },
});

export default generator;
