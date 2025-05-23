import { fake, TModelFieldsConfig } from '@/core';
import { Money, ReferenceGraphql, ReferenceRest } from '@/models/commons';
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
};

export const restFieldsConfig: TModelFieldsConfig<TDiscountedPriceDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    discount: fake(() => ReferenceRest.presets.productDiscountReference()),
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDiscountedPriceDraftGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      discount: fake(() => ReferenceGraphql.presets.productDiscountReference()),
    },
  };
