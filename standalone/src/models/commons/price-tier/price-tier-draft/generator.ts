import { fake, Generator } from '@/core';
import * as CentPrecisionMoneyDraft from '../../cent-precision-money/cent-precision-money-draft';
import { TPriceTierDraft } from '../types';

// https://docs.commercetools.com/api/types#pricetierdraft

const generator = Generator<TPriceTierDraft>({
  fields: {
    // min and max values our API can handle
    minimumQuantity: fake((f) => f.number.int({ min: 2, max: 2147483647 })),
    value: fake(() => CentPrecisionMoneyDraft.random()),
  },
});

export default generator;
