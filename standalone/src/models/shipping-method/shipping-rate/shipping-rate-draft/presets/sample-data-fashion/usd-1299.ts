import { MoneyDraft } from '@/models/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usd1299 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('USD').centAmount(1299))
    .freeAbove(
      MoneyDraft.presets.withCent().currencyCode('USD').centAmount(10000)
    );

export default usd1299;
