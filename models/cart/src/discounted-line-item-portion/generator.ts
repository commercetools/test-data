import {
  CentPrecisionMoney,
  Reference,
} from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TDiscountedLineItemPortion } from './types';

// https://docs.commercetools.com/api/projects/carts#discountedlineitemportion

const generator = Generator<TDiscountedLineItemPortion>({
  fields: {
    discount: fake(() => Reference.presets.cartDiscountReference()),
    discountedAmount: fake(() => CentPrecisionMoney.random()),
  },
});

export default generator;
