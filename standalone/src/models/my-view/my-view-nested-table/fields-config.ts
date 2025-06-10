import { fake, type TModelFieldsConfig } from '@/core';
import type { TMyViewNestedTableGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TMyViewNestedTableGraphql> =
  {
    fields: {
      visibleColumns: fake(() => []),
      __typename: 'NestedTable',
    },
  };
