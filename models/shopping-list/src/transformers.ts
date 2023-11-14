import { Transformer } from '@commercetools-test-data/core';
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
