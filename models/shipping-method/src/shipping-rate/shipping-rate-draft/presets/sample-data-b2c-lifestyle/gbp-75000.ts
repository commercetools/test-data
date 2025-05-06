import { MoneyDraft } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const gbp75000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('GBP').centAmount(75000))
    .tiers([]);

export default gbp75000;
