import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usd500 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('USD').centAmount(500))
    .freeAbove(MoneyDraft.random().currencyCode('USD').centAmount(5000))
    .tiers([]);

export default usd500;
