import { Transformer } from '@/core';
import type {
  TPaymentMethodInfoDraft,
  TPaymentMethodInfoDraftGraphQL,
} from '../types';

const transformers = {
  default: Transformer<TPaymentMethodInfoDraft, TPaymentMethodInfoDraft>(
    'default',
    {
      buildFields: ['name'],
    }
  ),
  rest: Transformer<TPaymentMethodInfoDraft, TPaymentMethodInfoDraft>(
    'default',
    {
      buildFields: ['name'],
    }
  ),
  graphql: Transformer<TPaymentMethodInfoDraft, TPaymentMethodInfoDraftGraphQL>(
    'graphql',
    {
      buildFields: ['name'],
    }
  ),
};

export default transformers;
