import { Money } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usd = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.random()
    .price(Money.presets.withCent().currencyCode('USD'))
    .freeAbove(Money.presets.withCent().currencyCode('USD'));

export default usd;
