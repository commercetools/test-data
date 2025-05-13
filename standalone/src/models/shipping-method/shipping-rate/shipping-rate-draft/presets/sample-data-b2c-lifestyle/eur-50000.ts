import { ShippingRateDraft } from '../../..';
import { MoneyDraft } from '@/models/commons';

const eur50000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('EUR').centAmount(50000))
    .freeAbove(
      MoneyDraft.presets.withCent().currencyCode('EUR').centAmount(1000000)
    );

export default eur50000;
