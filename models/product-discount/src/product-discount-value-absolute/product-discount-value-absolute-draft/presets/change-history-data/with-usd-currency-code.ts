import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TProductDiscountValueAbsoluteDraftBuilder } from '../../../types';
import * as ProductDiscountValueAbsoluteDraft from '../../index';

const withUsdCurrencyCode = (): TProductDiscountValueAbsoluteDraftBuilder =>
  ProductDiscountValueAbsoluteDraft.random().money([
    MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode(),
  ]);

export default withUsdCurrencyCode;
