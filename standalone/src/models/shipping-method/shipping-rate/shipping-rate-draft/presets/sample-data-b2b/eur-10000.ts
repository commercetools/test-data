import { MoneyDraft } from '../../../../../commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const eur10000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('EUR').centAmount(10000))
    .freeAbove(MoneyDraft.random().currencyCode('EUR').centAmount(1000000))
    .tiers([]);

export default eur10000;
