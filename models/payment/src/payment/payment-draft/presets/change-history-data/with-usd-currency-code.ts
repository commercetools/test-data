import { MoneyDraft } from '@commercetools-test-data/commons';
import * as PaymentDraft from '../..';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft } from '../../../../transaction';
import type { TPaymentDraftBuilder } from '../../../types';

const withUsdCurrencyCode = (): TPaymentDraftBuilder =>
  PaymentDraft.random()
    .anonymousId(undefined)
    .amountPlanned(MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode())
    .paymentStatus(PaymentStatusDraft.random().state(undefined))
    .transactions([
      TransactionDraft.presets.changeHistoryData.withUsdCurrencyCode(),
    ]);

export default withUsdCurrencyCode;
