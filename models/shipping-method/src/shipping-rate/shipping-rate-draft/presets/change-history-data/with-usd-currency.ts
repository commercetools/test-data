import { Money } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usdCurrency = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.random()
    .price(Money.presets.changeHistoryData.withUsdCurrencyCode())
    .freeAbove(Money.presets.changeHistoryData.withUsdCurrencyCode());

export default usdCurrency;
