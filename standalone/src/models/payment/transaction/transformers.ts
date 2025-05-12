import { Transformer } from '../../../core';
import type { TTransaction, TTransactionGraphql } from './types';

const transformers = {
  default: Transformer<TTransaction, TTransaction>('default', {
    buildFields: ['amount', 'custom'],
  }),
  rest: Transformer<TTransaction, TTransaction>('rest', {
    buildFields: ['amount', 'custom'],
  }),
  graphql: Transformer<TTransaction, TTransactionGraphql>('graphql', {
    buildFields: ['amount', 'custom'],
    addFields: () => ({
      __typename: 'Transaction',
    }),
  }),
};

export default transformers;
