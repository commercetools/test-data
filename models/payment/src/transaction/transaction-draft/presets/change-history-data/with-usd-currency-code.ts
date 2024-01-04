import { Money } from '@commercetools-test-data/commons';
import type { TTransactionDraftBuilder } from '../../../types';
import * as TransactionDraft from '../../index';

const withUsdCurrencyCode = (): TTransactionDraftBuilder =>
  TransactionDraft.random().amount(
    Money.presets.changeHistoryData.withUsdCurrencyCode()
  );

export default withUsdCurrencyCode;
