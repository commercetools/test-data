import { Transformer } from '@commercetools-test-data/core';
import type { TShoppingListDraft, TShoppingListDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TShoppingListDraft, TShoppingListDraft>('default', {
    buildFields: ['name', 'slug', 'description', 'customer'],
  }),
  rest: Transformer<TShoppingListDraft, TShoppingListDraft>('rest', {
    buildFields: ['name', 'slug', 'description', 'customer'],
  }),
  graphql: Transformer<TShoppingListDraft, TShoppingListDraftGraphql>(
    'graphql',
    {
      buildFields: ['name', 'slug', 'description', 'customer'],
    }
  ),
};

export default transformers;
