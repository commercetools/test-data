import { Transformer } from '@commercetools-test-data/core';
import type { TPaymentStatus, TPaymentStatusGraphql } from './types';

const transformers = {
  default: Transformer<TPaymentStatus, TPaymentStatus>('default', {
    buildFields: [],
  }),
  rest: Transformer<TPaymentStatus, TPaymentStatus>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TPaymentStatus, TPaymentStatusGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'PaymentStatus',
    }),
  }),
};

export default transformers;
