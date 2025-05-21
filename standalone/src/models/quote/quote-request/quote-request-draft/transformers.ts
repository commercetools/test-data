import { Transformer } from '@/core';
import type { TQuoteRequestDraft, TQuoteRequestDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TQuoteRequestDraft, TQuoteRequestDraft>('default', {
    buildFields: ['cart', 'state', 'custom'],
  }),
  rest: Transformer<TQuoteRequestDraft, TQuoteRequestDraft>('rest', {
    buildFields: ['cart', 'state', 'custom'],
  }),
  graphql: Transformer<TQuoteRequestDraft, TQuoteRequestDraftGraphql>(
    'graphql',
    {
      buildFields: ['cart', 'state', 'custom'],
    }
  ),
};

export default transformers;
