import { Money } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const eur1299 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(Money.presets.withCent().currencyCode('EUR').centAmount(1299))
    .freeAbove(Money.presets.withCent().currencyCode('EUR').centAmount(15000))
    .tiers([]);

export default eur1299;
