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
      // convert centPrecisionMoney to Money
      const customerRef: TReference = Reference.random()
        .typeId('customer')
        .buildGraphql();
      const customer: TCustomer = Customer.random().buildGraphql();
      const amountPlanned: TMoney = Money.random().buildGraphql();

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
