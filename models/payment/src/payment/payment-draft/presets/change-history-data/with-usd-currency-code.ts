import { MoneyDraft } from '@commercetools-test-data/commons';
import * as PaymentDraft from '../..';
import { TransactionDraft } from '../../../../transaction';
import type { TPaymentDraftBuilder } from '../../../types';

const withUsdCurrencyCode = (): TPaymentDraftBuilder =>
  PaymentDraft.random()
    .anonymousId(undefined)
    .amountPlanned(MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode())
    .transactions([
      TransactionDraft.presets.changeHistoryData.withTransactionUsdCurrencyCodeMaxCent(),
    ]);

export default withUsdCurrencyCode;
