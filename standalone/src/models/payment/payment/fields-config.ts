import {
  fake,
  sequence,
  toGraphqlPaginatedQueryResult,
  type TModelFieldsConfig,
} from '@/core';
import {
  CentPrecisionMoney,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import { Customer } from '@/models/customer/customer';
import { createRelatedDates } from '@/utils';
import {
  PaymentMethodInfoGraphql,
  PaymentMethodInfoRest,
} from '../payment-method-info';
import { PaymentStatusGraphql, PaymentStatusRest } from '../payment-status';
import { TransactionGraphql, TransactionRest } from '../transaction';
import type { TPaymentRest, TPaymentGraphql } from './types';

// Reference: https://docs.commercetools.com/api/projects/payments#payment

const [getOlderDate, getNewerDate] = createRelatedDates();

const commonFieldsConfig = {
  amountPlanned: fake((f) => CentPrecisionMoney.random()),
  anonymousId: fake((f) => f.string.uuid()),
  createdAt: fake(getOlderDate),
  createdBy: null,
  custom: null,
  id: fake((f) => f.string.uuid()),
  interfaceInteractions: [],
  interfaceId: fake((f) => f.string.uuid()),
  key: fake((f) => f.string.uuid()),
  lastModifiedAt: fake(getNewerDate),
  lastModifiedBy: null,
  version: sequence(),
};

export const restFieldsConfig: TModelFieldsConfig<TPaymentRest> = {
  fields: {
    ...commonFieldsConfig,
    customer: fake(() => ReferenceRest.presets.customerReference()),
    paymentMethodInfo: fake((f) => PaymentMethodInfoRest.random()),
    paymentStatus: fake((f) => PaymentStatusRest.random()),
    transactions: [fake((f) => TransactionRest.random())],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPaymentGraphql> = {
  fields: {
    ...commonFieldsConfig,
    customer: fake(() => Customer.random()),
    customerRef: null,
    interfaceInteractionsRaw: fake(() =>
      toGraphqlPaginatedQueryResult([], {
        __typename: 'InterfaceInteractionsRawResult',
      })
    ),
    paymentMethodInfo: fake((f) => PaymentMethodInfoGraphql.random()),
    paymentStatus: fake((f) => PaymentStatusGraphql.random()),
    transactions: [fake((f) => TransactionGraphql.random())],
    __typename: 'Payment',
  },
  postBuild: (model) => {
    const customerRef = model.customer
      ? ReferenceGraphql.presets
          .customerReference()
          .id(model.customer.id)
          .buildGraphql()
      : null;

    return {
      ...model,
      customerRef,
    };
  },
};
