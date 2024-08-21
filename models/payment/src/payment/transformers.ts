import { Reference, TReferenceGraphql } from '@commercetools-test-data/commons';
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
      let customer: TCustomerGraphql | undefined = undefined;
      let customerRef: TReferenceGraphql | undefined = undefined;

      if (fields.customer) {
        const restCustomerRef = buildField(fields.customer, 'rest');

        customerRef = Reference.presets
          .customerReference()
          .id(restCustomerRef.id)
          .buildGraphql<TReferenceGraphql>();

        customer = Customer.random()
          .id(restCustomerRef.id)
          .firstName(restCustomerRef.obj?.firstName)
          .lastName(restCustomerRef.obj?.lastName)
          .key(restCustomerRef.obj?.key)
          .customerNumber(restCustomerRef.obj?.customerNumber)
          .externalId(restCustomerRef.obj?.externalId)
          .email(restCustomerRef.obj?.email || '')
          .title(restCustomerRef.obj?.title)
          .buildGraphql<TCustomerGraphql>();
      }

      // TODO: This exists in the Graphql API, but not in the REST API
      // We're stubbing it out for now because it's non-nullable
      const interfaceInteractionsRaw = toGraphqlPaginatedQueryResult([], {
        __typename: 'InterfaceInteractionsRawResult',
      });
      return {
        ...fields,
        customer,
        customerRef,
        interfaceInteractionsRaw,
        __typename: 'Payment',
      };
    },
  }),
};

export default transformers;
