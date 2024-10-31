import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import { ProductDiscount } from '@commercetools-test-data/product-discount';
import * as Money from '../money';
import * as Reference from '../reference';
import type { TDiscountedPriceGraphql, TDiscountedPriceRest } from './types';

// https://docs.commercetools.com/api/types#discountedprice
/**
 * value - Reference to Money
 * discount - Reference to a ProductDiscount Reference Object {typeId, id}
 */
const commonFieldsConfig = {
  value: fake(() => Money.random()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedPriceRest> = {
  fields: {
    ...commonFieldsConfig,
    discount: fake(() => Reference.presets.productDiscountReference()),
  },
};

/**
 * discountRef - Reference to a ProductDiscount Reference Object {typeId, id}
 */
export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedPriceGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'DiscountedProductPriceValue',
      discount: fake(() => ProductDiscount.random()),
      discountRef: fake(() => Reference.presets.productDiscountReference()),
    },
  };
