import { Transformer } from '@commercetools-test-data/core';
import type {
  TPaymentMethodInfoDraft,
  TPaymentMethodInfoInputGraphQL,
} from '../types';

const transformers = {
  default: Transformer<TPaymentMethodInfoDraft, TPaymentMethodInfoDraft>(
    'default',
    {
      buildFields: ['name'],
    }
  ),
  rest: Transformer<TPaymentMethodInfoDraft, TPaymentMethodInfoDraft>('rest', {
    buildFields: ['name'],
  }),
  graphql: Transformer<TPaymentMethodInfoDraft, TPaymentMethodInfoInputGraphQL>(
    'graphql',
    {
      buildFields: ['name'],
      addFields: () => ({
        __typename: 'PaymentMethodInfoInput',
      }),
    }
  ),
};

export default transformers;
