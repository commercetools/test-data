import { MoneyDraft } from '../../../../../commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usd50000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('USD').centAmount(50000))
    .freeAbove(
      MoneyDraft.presets.withCent().currencyCode('USD').centAmount(1000000)
    );

export default usd50000;
