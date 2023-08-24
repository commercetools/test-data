import {
  TReference,
  Reference,
  TMoney,
  Money,
} from '@commercetools-test-data/commons';
import { Transformer } from '@commercetools-test-data/core';
import { Customer, TCustomer } from '@commercetools-test-data/customer';
import type { TPayment, TPaymentGraphql } from './types';

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
  rest: Transformer<TPayment, TPayment>('rest', {
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
      // customer is a Reference in REST but changes to Customer in GraphQL
      // customerRef is added
      const customer: TCustomer = Customer.random().buildGraphql();
      const customerRef: TReference = Reference.random()
        .typeId('customer')
        .buildGraphql();
      // amountPlanned converts centPrecisionMoney to Money
      const amountPlanned: TMoney = Money.random().buildGraphql();
      // TODO: interfaceInteractionsRaw should be added, interfaceInteractions should be removed
      return {
        ...fields,
        customerRef,
        customer,
        amountPlanned,
        // interfaceInteractionsRaw: {}
        __typename: 'Payment',
      };
    },
  }),
};

export default transformers;
