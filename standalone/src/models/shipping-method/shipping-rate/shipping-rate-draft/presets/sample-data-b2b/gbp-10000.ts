import { MoneyDraft } from '@/models/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const gbp10000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('GBP').centAmount(10000))
    .freeAbove(MoneyDraft.random().currencyCode('GBP').centAmount(1000000))
    .tiers([]);

export default gbp10000;
