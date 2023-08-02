import { LocalizedString } from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import type { TPaymentMethodInfo, TPaymentMethodInfoGraphql } from './types';

const transformers = {
  default: Transformer<TPaymentMethodInfo, TPaymentMethodInfo>('default', {
    buildFields: ['name'],
  }),
  rest: Transformer<TPaymentMethodInfo, TPaymentMethodInfo>('rest', {
    buildFields: ['name'],
  }),
  graphql: Transformer<TPaymentMethodInfo, TPaymentMethodInfoGraphql>(
    'graphql',
    {
      replaceFields: ({ fields }) => ({
        ...fields,
        nameAllLocales: LocalizedString.toLocalizedField(fields.name),
        name: JSON.stringify(fields.name),
        __typename: 'PaymentMethodInfo',
      }),
    }
  ),
};

export default transformers;
