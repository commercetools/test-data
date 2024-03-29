import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const eur500 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('EUR').centAmount(500))
    .freeAbove(MoneyDraft.random().currencyCode('EUR').centAmount(5000))
    .tiers([]);

export default eur500;
