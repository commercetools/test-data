import { Transformer } from '@commercetools-test-data/core';
import type { TTransactionDraft, TTransactionDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TTransactionDraft, TTransactionDraft>('default', {
    buildFields: ['amount'],
  }),
  rest: Transformer<TTransactionDraft, TTransactionDraft>('rest', {
    buildFields: ['amount'],
  }),
  graphql: Transformer<TTransactionDraft, TTransactionDraftGraphql>('graphql', {
    buildFields: ['amount'],
    addFields: () => ({ __typename: 'TransactionDraft' }),
  }),
};

export default transformers;
