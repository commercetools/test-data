import { type TModelFieldsConfig } from '../../../core';
import type {
  TCartDiscountTotalPriceTargetGraphql,
  TCartDiscountTotalPriceTargetRest,
} from './types';

const commonFieldsConfig = {
  type: 'totalPrice' as const,
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
