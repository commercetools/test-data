import { Money } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const eur50000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(Money.presets.withCent().currencyCode('EUR').centAmount(50000))
    .tiers([]);

export default eur50000;
