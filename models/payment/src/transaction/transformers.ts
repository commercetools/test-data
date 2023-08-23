import { Transformer } from '@commercetools-test-data/core';
import type { TTransaction, TTransactionGraphql } from './types';

const transformers = {
  default: Transformer<TTransaction, TTransaction>('default', {
    buildFields: ['amount'],
  }),
  rest: Transformer<TTransaction, TTransaction>('rest', {
    buildFields: ['amount'],
  }),
  graphql: Transformer<TTransaction, TTransactionGraphql>('graphql', {
    buildFields: ['amount'],
    addFields: () => ({
      __typename: 'Transaction',
    }),
  }),
};

export default transformers;
