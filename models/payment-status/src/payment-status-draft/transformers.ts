import { Transformer } from '@commercetools-test-data/core';
import type { TPaymentStatusDraft, TPaymentStatusDraftGraphql } from './types';

const transformers = {
  default: Transformer<TPaymentStatusDraft, TPaymentStatusDraft>('default', {
    buildFields: [],
  }),
  rest: Transformer<TPaymentStatusDraft, TPaymentStatusDraft>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TPaymentStatusDraft, TPaymentStatusDraftGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({ __typename: 'PaymentStatusDraft' }),
    }
  ),
};

export default transformers;
