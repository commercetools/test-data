import type { TModelFieldsConfig } from '@/core';
import type { TMyViewTableGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TMyViewTableGraphql> = {
  fields: {
    nestedTable: null,
    visibleColumns: [],
    __typename: 'Table',
  },
};
