import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const gbp1000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('GBP').centAmount(1000))
    .freeAbove(MoneyDraft.random().currencyCode('GBP').centAmount(10000))
    .tiers([]);

export default gbp1000;
