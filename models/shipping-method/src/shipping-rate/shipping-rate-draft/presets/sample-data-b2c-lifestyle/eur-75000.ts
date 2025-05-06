import { MoneyDraft } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const eur75000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('EUR').centAmount(75000))
    .tiers([]);

export default eur75000;
