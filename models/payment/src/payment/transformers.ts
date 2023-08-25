import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
import {
  Transformer,
  toGraphqlPaginatedQueryResult,
} from '@commercetools-test-data/core';
import { Customer, TCustomer } from '@commercetools-test-data/customer';
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
      const customer: TCustomer = Customer.random().buildGraphql();
      const customerRef: TReferenceGraphql = Reference.random()
        .typeId('customer')
        .buildGraphql();
      // TODO: This exists in the Graphql API, but not in the REST API
      // We're stubbing it out for now because it's non-nullable
      const interfaceInteractionsRaw = toGraphqlPaginatedQueryResult([], {
        __typename: 'InterfaceInteractionsRawResult',
      });
      return {
        ...fields,
        customerRef,
        customer,
        interfaceInteractionsRaw,
        __typename: 'Payment',
      };
    },
  }),
};

export default transformers;
