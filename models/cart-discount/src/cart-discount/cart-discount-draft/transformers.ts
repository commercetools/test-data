import { Transformer } from '@commercetools-test-data/core';
import type { TCartDiscountDraft, TCartDiscountDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TCartDiscountDraft, TCartDiscountDraft>('default', {
    buildFields: ['value', 'name', 'description', 'target'],
  }),
  rest: Transformer<TCartDiscountDraft, TCartDiscountDraft>('rest', {
    buildFields: ['value', 'name', 'description', 'target'],
  }),
  graphql: Transformer<TCartDiscountDraft, TCartDiscountDraftGraphql>(
    'graphql',
    {
      buildFields: ['value', 'name', 'description', 'target'],
    }
  ),
};

export default transformers;
