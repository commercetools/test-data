import { fake, type TModelFieldsConfig } from '@/core';
import {
  CentPrecisionMoney,
  ReferenceDraftGraphql,
  ReferenceDraftRest,
} from '@/models/commons';
import {
  PaymentMethodInfoDraftGraphql,
  PaymentMethodInfoDraftRest,
} from '../../payment-method-info/payment-method-info-draft';
import {
  PaymentStatusDraftGraphql,
  PaymentStatusDraftRest,
} from '../../payment-status/payment-status-draft';
import {
  TransactionDraftGraphql,
  TransactionDraftRest,
} from '../../transaction/transaction-draft';
import type { TPaymentDraftRest, TPaymentDraftGraphql } from '../types';

// Reference: https://docs.commercetools.com/api/projects/payments#paymentdraft

const commonFieldsConfig = {
  amountPlanned: fake((f) => CentPrecisionMoney.random()),
  anonymousId: fake((f) => f.string.uuid()),
  custom: null,
  interfaceInteractions: [],
  interfaceId: fake((f) => f.string.uuid()),
  key: fake((f) => f.string.uuid()),
};

export const restFieldsConfig: TModelFieldsConfig<TPaymentDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    customer: fake(() => ReferenceDraftRest.presets.customerReference()),
    paymentMethodInfo: fake((f) => PaymentMethodInfoDraftRest.random()),
    paymentStatus: fake((f) => PaymentStatusDraftRest.random()),
    transactions: [fake((f) => TransactionDraftRest.random())],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TPaymentDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
    customer: fake(() => ReferenceDraftGraphql.presets.customerReference()),
    paymentMethodInfo: fake(() => PaymentMethodInfoDraftGraphql.random()),
    paymentStatus: fake(() => PaymentStatusDraftGraphql.random()),
    transactions: [fake(() => TransactionDraftGraphql.random())],
  },
};
