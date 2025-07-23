import { fake, type TModelFieldsConfig } from '@/core';
import { ReferenceGraphql, ReferenceRest } from '@/models/commons';
import { Payment } from '@/models/payment';
import type { TPaymentInfoGraphql, TPaymentInfoRest } from './types';

const commonFieldsConfig = {
  payments: [fake(() => Payment.random())],
};

export const restFieldsConfig: TModelFieldsConfig<TPaymentInfoRest> = {
  fields: {
    ...commonFieldsConfig,
    payments: fake(() => {
      return [ReferenceRest.presets.paymentReference().obj(Payment.random())];
    }),
  },
  postBuild: (model) => {
    // Make sure the built payments IDs are set in the references objects
    const payments = model.payments.map((payment) => ({
      ...payment,
      id: payment.obj?.id,
    }));
    return {
      ...model,
      payments: payments as TPaymentInfoRest['payments'],
    };
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPaymentInfoGraphql> = {
  fields: {
    ...commonFieldsConfig,
    payments: fake(() => [Payment.random()]),
    paymentRefs: null,
    __typename: 'PaymentInfo',
  },
  postBuild: (model) => {
    const paymentRefs = model.payments.map((payment) =>
      ReferenceGraphql.presets.paymentReference().id(payment.id).build()
    );
    return {
      ...model,
      paymentRefs,
    };
  },
};
