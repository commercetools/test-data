import { Money } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const gbp10000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(Money.presets.withCent().currencyCode('GBP').centAmount(10000))
    .tiers([]);

export default gbp10000;
