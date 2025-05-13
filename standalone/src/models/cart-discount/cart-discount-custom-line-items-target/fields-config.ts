import { type TModelFieldsConfig } from '@/core';
import type {
  TCartDiscountCustomLineItemsTargetGraphql,
  TCartDiscountCustomLineItemsTargetRest,
} from './types';

const commonFieldsConfig = {
  type: 'customLineItems' as const,
  predicate: '1=1',
};
export const restFieldsConfig: TModelFieldsConfig<TCartDiscountCustomLineItemsTargetRest> =
  {
    fields: {
      ...commonFieldsConfig,
    },
  };
export const graphqlFieldsConfig: TModelFieldsConfig<TCartDiscountCustomLineItemsTargetGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'CustomLineItemsTarget',
    },
  };
