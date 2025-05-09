import { ShippingRateDraft } from '../../..';
import { MoneyDraft } from '../../../../../commons';

const gbp75000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('GBP').centAmount(75000))
    .tiers([]);

export default gbp75000;
