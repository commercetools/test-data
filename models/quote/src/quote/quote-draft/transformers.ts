import { Transformer } from '@commercetools-test-data/core';
import type { TQuoteDraft, TQuoteDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TQuoteDraft, TQuoteDraft>('default', {
    buildFields: ['stagedQuote', 'state', 'custom'],
  }),
  rest: Transformer<TQuoteDraft, TQuoteDraft>('rest', {
    buildFields: ['stagedQuote', 'state', 'custom'],
  }),
  graphql: Transformer<TQuoteDraft, TQuoteDraftGraphql>('graphql', {
    buildFields: ['stagedQuote', 'state', 'custom'],
  }),
};

export default transformers;
