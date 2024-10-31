import { type TModelFieldsConfig } from '@commercetools-test-data/core';

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
