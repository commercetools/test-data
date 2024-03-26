import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const eur1000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('EUR').centAmount(1000))
    .freeAbove(MoneyDraft.random().currencyCode('EUR').centAmount(10000))
    .tiers([]);

export default eur1000;
