import { Reference, Price } from '@commercetools-test-data/commons';
import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import type {
  TDiscountedPriceDraftRest,
  TDiscountedPriceDraftGraphql,
} from '../types';

/**
 * value - Reference to Money
 * discount - Reference to a ProductDiscount Reference Object {typeId, id}
 */
const commonFieldsConfig = {
  value: fake(() => Price.random()),
  discount: fake(() => Reference.presets.productDiscountReference()),
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedPriceDraftRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedPriceDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
