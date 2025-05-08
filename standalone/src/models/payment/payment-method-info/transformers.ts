import { Transformer } from '../../../core';
import { LocalizedString } from '../../commons';
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
      buildFields: ['name'],
      addFields: ({ fields }) => ({
        nameAllLocales: LocalizedString.toLocalizedField(fields.name),
        __typename: 'PaymentMethodInfo',
      }),
    }
  ),
};

export default transformers;
