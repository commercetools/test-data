import { Transformer } from '@/core';
import type { TPaymentStatusDraft, TPaymentStatusDraftGraphql } from '../types';

const transformers = {
  default: Transformer<TPaymentStatusDraft, TPaymentStatusDraft>('default', {
    buildFields: ['state'],
  }),
  rest: Transformer<TPaymentStatusDraft, TPaymentStatusDraft>('rest', {
    buildFields: ['state'],
  }),
  graphql: Transformer<TPaymentStatusDraft, TPaymentStatusDraftGraphql>(
    'graphql',
    {
      buildFields: ['state'],
    }
  ),
};

export default transformers;
