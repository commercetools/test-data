import { MoneyDraft } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const gbp50000 = () =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('GBP').centAmount(50000))
    .freeAbove(
      MoneyDraft.presets.withCent().currencyCode('GBP').centAmount(1000000)
    );

export default gbp50000;
