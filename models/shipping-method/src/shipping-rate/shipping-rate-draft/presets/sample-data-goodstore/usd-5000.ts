import { MoneyDraft } from '@commercetools-test-data/commons';
import type { TShippingRateDraftBuilder } from '../../../types';
import * as ShippingRateDraft from '../../index';

const usd5000 = (): TShippingRateDraftBuilder =>
  ShippingRateDraft.presets
    .empty()
    .price(MoneyDraft.presets.withCent().currencyCode('USD').centAmount(5000))
    .freeAbove(
      MoneyDraft.presets.withCent().currencyCode('USD').centAmount(100000)
    );

export default usd5000;
