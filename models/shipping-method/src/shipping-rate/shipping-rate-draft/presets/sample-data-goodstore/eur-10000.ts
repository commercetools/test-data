import { MoneyDraft } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const eur10000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('EUR').centAmount(10000))
    .tiers([]);

export default eur10000;
