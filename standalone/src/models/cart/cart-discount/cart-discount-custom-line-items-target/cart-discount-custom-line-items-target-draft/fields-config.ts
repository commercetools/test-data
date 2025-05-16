import { type TModelFieldsConfig } from '@/core';

import type {
  TCartDiscountCustomLineItemsTargetDraftGraphql,
  TCartDiscountCustomLineItemsTargetDraftRest,
} from '../types';

const commonFieldsConfig = {
  predicate: '1=1',
};
export const restFieldsConfig: TModelFieldsConfig<TCartDiscountCustomLineItemsTargetDraftRest> =
  {
    fields: {
      ...commonFieldsConfig,
      type: 'customLineItems' as const,
    },
  };
export const graphqlFieldsConfig: TModelFieldsConfig<TCartDiscountCustomLineItemsTargetDraftGraphql> =
  {
    fields: {
      customLineItems: { ...commonFieldsConfig },
    },
  };
