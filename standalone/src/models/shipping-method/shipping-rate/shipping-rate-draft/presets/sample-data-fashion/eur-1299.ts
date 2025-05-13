import { MoneyDraft } from '@/models/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const eur1299 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('EUR').centAmount(1299))
    .freeAbove(
      MoneyDraft.presets.withCent().currencyCode('EUR').centAmount(15000)
    );

export default eur1299;
