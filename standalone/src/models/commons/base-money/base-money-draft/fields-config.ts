import { type TModelFieldsConfig } from '@/core';
import type { TBaseMoneyDraftGraphql } from '../types';

// This model only exists in the GraphQL API

export const graphqlFieldsConfig: TModelFieldsConfig<TBaseMoneyDraftGraphql> = {
  fields: {
    centPrecision: null,
    highPrecision: null,
  },
};
