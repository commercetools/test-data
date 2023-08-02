import { Transformer } from '@commercetools-test-data/core';
import type {
  TPaymentMethodInfoInput,
  TPaymentMethodInfoInputGraphQL,
} from '../types';

const transformers = {
  default: Transformer<TPaymentMethodInfoInput, TPaymentMethodInfoInput>(
    'default',
    {
      buildFields: ['name'],
    }
  ),
  rest: Transformer<TPaymentMethodInfoInput, TPaymentMethodInfoInput>('rest', {
    buildFields: ['name'],
  }),
  graphql: Transformer<TPaymentMethodInfoInput, TPaymentMethodInfoInputGraphQL>(
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
