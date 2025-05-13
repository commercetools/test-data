import { ShippingRateDraft } from '../../..';
import { MoneyDraft } from '@/models/commons';

const usd75000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('USD').centAmount(75000))
    .tiers([]);

export default usd75000;
