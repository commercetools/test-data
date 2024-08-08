import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sunnaiGlassBowl02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SGB-02')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(899))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(899))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-2.1.jpeg'
        )
        .dimensions({ w: 4944, h: 3288 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('type')
        .value([{ 'en-GB': 'Deep' }]),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Transparent:transparent',
        'de-DE': 'Transparent:transparent',
        'en-US': 'Transparent:transparent',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Glass:transparent',
        'de-DE': 'Glas:transparent',
        'en-US': 'Glass:transparent',
      }),
    ]);

export default sunnaiGlassBowl02;
