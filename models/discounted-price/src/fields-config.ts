import { Reference } from '@commercetools-test-data/commons';
import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import type { TDiscountedPriceGraphql, TDiscountedPriceRest } from './types';

/**
 * value - Reference to Money
 * discount - Reference to a ProductDiscount Reference Object {typeId, id}
 */
const commonFieldsConfig = {
  value: undefined,
  discount: fake(() => Reference.presets.productDiscountReference()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedPriceRest> = {
  fields: {
    ...commonFieldsConfig,
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
      discountRef: fake(() => Reference.presets.productDiscountReference()),
    },
  };
