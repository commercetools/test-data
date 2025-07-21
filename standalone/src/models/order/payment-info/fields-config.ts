import { fake, type TModelFieldsConfig } from '@/core';
import { Payment } from '@/models/payment';
import type { TPaymentInfoGraphql, TPaymentInfoRest } from './types';

const commonFieldsConfig = {
  payments: [fake(() => Payment.random())],
};

export const restFieldsConfig: TModelFieldsConfig<TPaymentInfoRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPaymentInfoGraphql> = {
  fields: {
    __typename: 'PaymentInfo',
    ...commonFieldsConfig,
    paymentRefs: null,
  },
};
