import { ShippingRateDraft } from '../../..';
import { MoneyDraft } from '../../../../../commons';

const eur75000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('EUR').centAmount(75000))
    .tiers([]);

export default eur75000;
