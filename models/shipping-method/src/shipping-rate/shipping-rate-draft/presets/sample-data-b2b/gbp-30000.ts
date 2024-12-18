import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const gbp30000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('GBP').centAmount(30000))
    .freeAbove(MoneyDraft.random().currencyCode('GBP').centAmount(1500000))
    .tiers([]);

export default gbp30000;
