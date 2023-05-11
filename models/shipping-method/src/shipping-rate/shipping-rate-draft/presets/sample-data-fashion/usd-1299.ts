import { Money } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usd1299 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(Money.presets.withCent().currencyCode('USD').centAmount(1299))
    .freeAbove(Money.presets.withCent().currencyCode('USD').centAmount(10000));

export default usd1299;
