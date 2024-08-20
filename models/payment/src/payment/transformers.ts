import { TReferenceGraphql } from '@commercetools-test-data/commons';
import {
  Transformer,
  buildField,
  toGraphqlPaginatedQueryResult,
} from '@commercetools-test-data/core';
import { Customer, TCustomerGraphql } from '@commercetools-test-data/customer';
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
      'amountPlanned',
      'paymentMethodInfo',
      'paymentStatus',
      'transactions',
      'custom',
    ],
    replaceFields: ({ fields }) => {
      const restCustomer = buildField(fields.customer, 'rest');
      const customerBuilder = restCustomer.email
        ? Customer.random()
            .id(restCustomer.id)
            .firstName(restCustomer.firstName)
            .lastName(restCustomer.lastName)
            .key(restCustomer.key)
            .customerNumber(restCustomer.customerNumber)
            .externalId(restCustomer.externalId)
            .email(restCustomer.email)
            .title(restCustomer.title)
        : Customer.random().id(restCustomer.id);
      const customerRef: TReferenceGraphql = {
        id: restCustomer.id,
        typeId: 'customer',
        __typename: 'Reference',
      };
      // TODO: This exists in the Graphql API, but not in the REST API
      // We're stubbing it out for now because it's non-nullable
      const interfaceInteractionsRaw = toGraphqlPaginatedQueryResult([], {
        __typename: 'InterfaceInteractionsRawResult',
      });
      return {
        ...fields,
        customer: customerBuilder.buildGraphql<TCustomerGraphql>(),
        customerRef,
        interfaceInteractionsRaw,
        __typename: 'Payment',
      };
    },
  }),
};

export default transformers;
