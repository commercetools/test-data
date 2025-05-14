import { MoneyDraft } from '../../../../../commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const eur30000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.random().currencyCode('EUR').centAmount(30000))
    .freeAbove(MoneyDraft.random().currencyCode('EUR').centAmount(1500000))
    .tiers([]);

export default eur30000;
