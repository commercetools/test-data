import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const gbp500 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('GBP').centAmount(500))
    .freeAbove(MoneyDraft.random().currencyCode('GBP').centAmount(5000))
    .tiers([]);

export default gbp500;
