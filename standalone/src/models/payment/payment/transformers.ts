import {
  Transformer,
  toGraphqlPaginatedQueryResult,
} from '../../../core';
import {
  Reference,
  TReference,
  TReferenceGraphql,
} from '../../commons';
import type { TPayment, TPaymentGraphql, TPaymentRest } from './types';

const transformers = {
  default: Transformer<TPayment, TPayment>('default', {
    buildFields: [
      'customer',
      'amountPlanned',
      'paymentMethodInfo',
      'paymentStatus',
      'transactions',
      'interfaceInteractions',
      'custom',
    ],
  }),
  rest: Transformer<TPayment, TPaymentRest>('rest', {
    buildFields: [
      'customer',
      'amountPlanned',
      'paymentMethodInfo',
      'paymentStatus',
      'transactions',
      'interfaceInteractions',
      'custom',
    ],
    replaceFields: ({ fields }) => {
      const customer = Reference.presets
        .customerReference()
        .id(fields.customer.id)
        .build<TReference<'customer'>>();
      return {
        ...fields,
        customer,
      };
    },
  }),
  graphql: Transformer<TPayment, TPaymentGraphql>('graphql', {
    buildFields: [
      'customer',
      'amountPlanned',
      'paymentMethodInfo',
      'paymentStatus',
      'transactions',
      'custom',
    ],
    replaceFields: ({ fields }) => {
      const customerRef: TReferenceGraphql = Reference.presets
        .customerReference()
        .id(fields.customer.id)
        .buildGraphql();
      // TODO: This exists in the Graphql API, but not in the REST API
      // We're stubbing it out for now because it's non-nullable
      const interfaceInteractionsRaw = toGraphqlPaginatedQueryResult([], {
        __typename: 'InterfaceInteractionsRawResult',
      });
      return {
        ...fields,
        customerRef,
        interfaceInteractionsRaw,
        __typename: 'Payment',
      };
    },
  }),
};

export default transformers;
