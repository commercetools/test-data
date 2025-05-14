import { MoneyDraft } from '../../../../../commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const aud2000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('AUD').centAmount(2000))
    .freeAbove(
      MoneyDraft.presets.withCent().currencyCode('AUD').centAmount(20000)
    )
    .tiers([]);

export default aud2000;
