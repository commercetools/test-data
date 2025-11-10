// import { MoneyDraft } from '@/models/commons';
// import { PaymentStatusDraft } from '../../../../payment-status/payment-status-draft';
// import { TransactionDraft } from '../../../../transaction/transaction-draft';
// import * as PaymentDraft from '../../index';

// const withUsdCurrencyCode = () =>
//   PaymentDraft.random()
//     .anonymousId(undefined)
//     .amountPlanned(MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode())
//     .paymentStatus(PaymentStatusDraft.random().state(undefined))
//     .transactions([
//       TransactionDraft.presets.changeHistoryData.withUsdCurrencyCode(),
//     ]);

// export default withUsdCurrencyCode;

import { TBuilder } from '@/core';
import {
  MoneyDraft,
  MoneyDraftGraphql,
  MoneyDraftRest,
} from '@/models/commons';
import {
  PaymentStatusDraft,
  PaymentStatusDraftGraphql,
  PaymentStatusDraftRest,
  TransactionDraft,
  TransactionDraftGraphql,
  TransactionDraftRest,
} from '@/models/payment';
import { TPaymentDraftGraphql, TPaymentDraftRest } from '../../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../../builders';

const populatePreset = <
  TModel extends TPaymentDraftGraphql | TPaymentDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder.anonymousId(undefined);
};

export const restPreset = (): TBuilder<TPaymentDraftRest> =>
  populatePreset(RestModelBuilder())
    .amountPlanned(
      MoneyDraftRest.presets.changeHistoryData.withUsdCurrencyCode()
    )
    .paymentStatus(PaymentStatusDraftRest.random().state(undefined))
    .transactions([
      TransactionDraftRest.presets.changeHistoryData.withUsdCurrencyCode(),
    ]);

export const graphqlPreset = (): TBuilder<TPaymentDraftGraphql> =>
  populatePreset(GraphqlModelBuilder())
    .amountPlanned(
      MoneyDraftGraphql.presets.changeHistoryData.withUsdCurrencyCode()
    )
    .paymentStatus(PaymentStatusDraftGraphql.random().state(undefined))
    .transactions([
      TransactionDraftGraphql.presets.changeHistoryData.withUsdCurrencyCode(),
    ]);

export const compatPreset = (): TBuilder<
  TPaymentDraftRest | TPaymentDraftGraphql
> =>
  populatePreset(CompatModelBuilder())
    .amountPlanned(MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode())
    .paymentStatus(PaymentStatusDraft.random().state(undefined))
    .transactions([
      TransactionDraft.presets.changeHistoryData.withUsdCurrencyCode(),
    ]);
