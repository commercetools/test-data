import { Money } from '@commercetools-test-data/commons';
import * as PaymentDraft from '../..';
import { TransactionDraft } from '../../../../transaction';
import type { TPaymentDraftBuilder } from '../../../types';

const withUsdCurrencyCode = (): TPaymentDraftBuilder =>
  PaymentDraft.random()
    .anonymousId(undefined)
    .amountPlanned(Money.presets.changeHistoryData.withUsdCurrencyCode())
    .transactions([
      TransactionDraft.presets.changeHistoryData.withUsdCurrencyCode(),
    ]);

export default withUsdCurrencyCode;
