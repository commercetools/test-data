import { Transformer } from '@/core';
import type { TShoppingList, TShoppingListGraphql } from './types';

const transformers = {
  default: Transformer<TShoppingList, TShoppingList>('default', {
    buildFields: [
      'name',
      'slug',
      'description',
      'customer',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  rest: Transformer<TShoppingList, TShoppingList>('rest', {
    buildFields: [
      'name',
      'slug',
      'description',
      'customer',
      'createdBy',
      'lastModifiedBy',
    ],
  }),
  // Note that the ShoppingList graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TShoppingList, TShoppingListGraphql>('graphql', {
    buildFields: [
      'name',
      'slug',
      'description',
      'customer',
      'createdBy',
      'lastModifiedBy',
    ],
    addFields: () => ({
      __typename: 'ShoppingList',
    }),
  }),
};

export default transformers;
