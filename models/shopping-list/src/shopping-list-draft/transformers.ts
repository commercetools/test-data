import { Transformer } from '@commercetools-test-data/core';
import type { TShoppingListDraft, TShoppingListDraftGraphql } from '../types';
const transformers = {
  default: Transformer<TShoppingListDraft, TShoppingListDraft>('default', {
    buildFields: ['name', 'slug', 'description', 'customer'],
  }),
  rest: Transformer<TShoppingListDraft, TShoppingListDraft>('rest', {
    buildFields: ['name', 'slug', 'description', 'customer'],
  }),
  // Note that the ShoppingListDraft graphql is provided as scaffolding only and may not be complete at this time.
  graphql: Transformer<TShoppingListDraft, TShoppingListDraftGraphql>(
    'graphql',
    {
      buildFields: ['name', 'slug', 'description', 'customer'],
    }
  ),
};

export default transformers;
