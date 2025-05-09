import { type TModelFieldsConfig } from '../../../../core';

import type {
  TCartDiscountTotalPriceTargetDraftGraphql,
  TCartDiscountTotalPriceTargetDraftRest,
} from '../types';

export const restFieldsConfig: TModelFieldsConfig<TCartDiscountTotalPriceTargetDraftRest> =
  {
    fields: {
      type: 'totalPrice',
    },
  };
export const graphqlFieldsConfig: TModelFieldsConfig<TCartDiscountTotalPriceTargetDraftGraphql> =
  {
    fields: {
      totalPrice: {},
    },
  };
