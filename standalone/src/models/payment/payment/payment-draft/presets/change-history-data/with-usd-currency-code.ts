import { MoneyDraft } from '@/models/commons';
import { PaymentStatusDraft } from '../../../../payment-status/payment-status-draft';
import { TransactionDraft } from '../../../../transaction/transaction-draft';
import * as PaymentDraft from '../../index';

const withUsdCurrencyCode = () =>
  PaymentDraft.random()
    .anonymousId(undefined)
    .amountPlanned(MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode())
    .paymentStatus(PaymentStatusDraft.random().state(undefined))
    .transactions([
      TransactionDraft.presets.changeHistoryData.withUsdCurrencyCode(),
    ]);

export default withUsdCurrencyCode;
