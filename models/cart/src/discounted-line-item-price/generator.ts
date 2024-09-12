import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { DiscountedLineItemPortion } from '../discounted-line-item-portion';
import { TDiscountedLineItemPrice } from './types';

// https://docs.commercetools.com/api/projects/carts#discountedlineitemprice

const generator = Generator<TDiscountedLineItemPrice>({
  fields: {
    value: fake(() => CentPrecisionMoney.random()),
    includedDiscounts: fake(() => [DiscountedLineItemPortion.random()]),
  },
});

export default generator;
