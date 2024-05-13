import { Transformer } from '@commercetools-test-data/core';
import type { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCartDiscountDraft, TCartDiscountDraft>('default', {
    buildFields: ['value', 'name', 'description', 'target', 'stores'],
  }),
  rest: Transformer<TCartDiscountDraft, TCartDiscountDraft>('rest', {
    buildFields: ['value', 'name', 'description', 'target', 'stores'],
  }),
  graphql: Transformer<TCartDiscountDraft, TCartDiscountDraftGraphql>(
    'graphql',
    {
      buildFields: ['value', 'name', 'description', 'target', 'stores'],
    }
  ),
};

export default transformers;
