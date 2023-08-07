import { Transformer } from '@commercetools-test-data/core';
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
  graphql: Transformer<TPaymentMethodInfoDraft, TPaymentMethodInfoDraftGraphQL>(
    'graphql',
    {
      buildFields: ['name'],
      addFields: () => ({
          __typename: 'PaymentMethodInfoInput',
        })
      },
  ),
};

export default transformers;
