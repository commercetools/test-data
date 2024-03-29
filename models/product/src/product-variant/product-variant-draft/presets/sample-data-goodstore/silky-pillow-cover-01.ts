import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const silkyPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SPC-06')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Silky_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 6016, h: 4011 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Pillow not included',
        'en-US': '- Pillow not included',
        'de-DE': '- Kissen nicht im Lieferumfang enthalten',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#C0C0C0',
          label: { 'de-DE': 'Silber', 'en-GB': 'Silver', 'en-US': 'Silver' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#8B9299', 'de-DE': '#8B9299', 'en-US': '#8B9299' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Steel', 'de-DE': 'Stahl', 'en-US': 'Steel' }),
    ]);

export default silkyPillowCover01;
