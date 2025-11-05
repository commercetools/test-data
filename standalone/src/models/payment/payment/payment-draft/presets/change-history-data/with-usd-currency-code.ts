import { MoneyDraft } from '@/models/commons';
import { PaymentStatusDraft } from '../../../../payment-status';
import { TransactionDraft } from '../../../../transaction/transaction-draft';
import type { TPaymentDraftBuilder } from '../../../types';
import * as PaymentDraft from '../../index';

const withUsdCurrencyCode = (): TPaymentDraftBuilder =>
  PaymentDraft.random()
    .anonymousId(undefined)
    .amountPlanned(MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode())
    .paymentStatus(PaymentStatusDraft.random().state(undefined))
    .transactions([
      TransactionDraft.presets.changeHistoryData.withUsdCurrencyCode(),
    ]);

export default withUsdCurrencyCode;
