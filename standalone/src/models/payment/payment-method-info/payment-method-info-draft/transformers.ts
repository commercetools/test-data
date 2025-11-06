import { Transformer } from '@/core';
import type {
  TPaymentMethodInfoDraft,
  TPaymentMethodInfoDraftGraphql,
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
  graphql: Transformer<TPaymentMethodInfoDraft, TPaymentMethodInfoDraftGraphql>(
    'graphql',
    {
      buildFields: ['name'],
    }
  ),
};

export default transformers;
