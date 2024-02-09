import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usdCurrency = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.random()
    .price(MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode())
    .freeAbove(MoneyDraft.presets.changeHistoryData.withUsdCurrencyCode());

export default usdCurrency;
