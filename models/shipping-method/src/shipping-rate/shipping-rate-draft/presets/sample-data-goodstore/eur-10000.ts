import { Money } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const eur10000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(Money.presets.withCent().currencyCode('EUR').centAmount(10000))
    .tiers([]);

export default eur10000;
