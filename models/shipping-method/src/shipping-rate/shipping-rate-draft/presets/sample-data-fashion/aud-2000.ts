import { Money } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const aud2000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(Money.presets.withCent().currencyCode('AUD').centAmount(2000))
    .freeAbove(Money.presets.withCent().currencyCode('AUD').centAmount(20000))
    .tiers([]);

export default aud2000;
