import { fake, type TModelFieldsConfig } from '@/core';
import { SortOrder } from './constants';
import type { TMyViewSortGraphql } from './types';

export const graphqlFieldsConfig: TModelFieldsConfig<TMyViewSortGraphql> = {
  fields: {
    key: fake((f) => f.lorem.slug()),
    order: fake(() => SortOrder.ASCENDING),
    __typename: 'Sort',
  },
};
