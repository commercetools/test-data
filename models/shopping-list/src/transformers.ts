import { Transformer } from '@commercetools-test-data/core';
import type { TShoppingList, TShoppingListGraphql } from './types';

const transformers = {
  default: Transformer<TShoppingList, TShoppingList>('default', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  rest: Transformer<TShoppingList, TShoppingList>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy'],
  }),
  graphql: Transformer<TShoppingList, TShoppingListGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy'],
    addFields: () => ({
      __typename: 'ShoppingList',
    }),
  }),
};

export default transformers;
