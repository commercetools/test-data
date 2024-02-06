import { Transformer } from '@commercetools-test-data/core';
import type { TTransactionDraft, TTransactionDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TTransactionDraft, TTransactionDraft>('default', {
    buildFields: ['amount', 'custom'],
  }),
  rest: Transformer<TTransactionDraft, TTransactionDraft>('rest', {
    buildFields: ['amount', 'custom'],
  }),
  graphql: Transformer<TTransactionDraft, TTransactionDraftGraphql>('graphql', {
    buildFields: ['amount', 'custom'],
  }),
};

export default transformers;
