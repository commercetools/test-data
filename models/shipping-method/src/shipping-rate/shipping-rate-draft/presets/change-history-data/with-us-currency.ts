import { Money } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usCurrency = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.random()
    .price(Money.presets.changeHistoryData.withUsCurrencyCode())
    .freeAbove(Money.presets.changeHistoryData.withUsCurrencyCode());

export default usCurrency;
