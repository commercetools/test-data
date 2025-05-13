import { MoneyDraft } from '@/models/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usd10000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('USD').centAmount(10000))
    .freeAbove(MoneyDraft.random().currencyCode('USD').centAmount(1000000))
    .tiers([]);

export default usd10000;
