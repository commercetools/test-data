import { fake, TModelFieldsConfig } from '@commercetools-test-data/core';
import * as Money from '../../money';
import * as Reference from '../../reference';
import type {
  TDiscountedPriceDraftRest,
  TDiscountedPriceDraftGraphql,
} from '../types';

// https://docs.commercetools.com/api/types#discountedpricedraft
/**
 * value - Reference to Money
 * discount - Reference to a ProductDiscount Reference Object {typeId, id}
 */
const commonFieldsConfig = {
  value: fake(() => Money.random()),
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
      __typename: 'DiscountedProductPriceValue',
    },
  };
