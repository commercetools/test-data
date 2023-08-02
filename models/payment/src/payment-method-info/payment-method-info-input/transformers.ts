import { Transformer } from '@commercetools-test-data/core';
import type {
  TPaymentMethodInfoInput,
  TPaymentMethodInfoInputGraphQL,
} from './types';

const transformers = {
  // The PaymentMethodInfoInput only exists in the GraphQL API, so we don't need the default and rest transformers.
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
