import { type TModelFieldsConfig } from '@commercetools-test-data/core';
import type {
  TCartDiscountTotalPriceTargetGraphql,
  TCartDiscountTotalPriceTargetRest,
} from './types';

const commonFieldsConfig = {
  type: 'totalPrice',
};
export const restFieldsConfig: TModelFieldsConfig<TCartDiscountTotalPriceTargetRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
export const graphqlFieldsConfig: TModelFieldsConfig<TCartDiscountTotalPriceTargetGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CartDiscountTotalPriceTarget',
    },
  };
