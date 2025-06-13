import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const redModernPainting01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('redModernPainting01')
    .sku('RMP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('3299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(3299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('3299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(3299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('3299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(3299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Red_Modern_Painting-1.1.jpeg'
        )
        .dimensions({ w: 3893, h: 3894 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Acrylic on canvas\n- 2ft by 2ft',
        'en-US': '- Acrylic on canvas\n- 2ft by 2ft',
        'de-DE': '- Acryl auf Leinwand\n- 2 Fuß mal 2 Fuß',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Red',
            'en-GB': 'Red',
            'de-DE': 'Rot',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Red',
        'de-DE': 'Rot',
        'en-US': 'Red',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#ff0000',
        'en-GB': '#ff0000',
        'de-DE': '#ff0000',
      }),
    ]);

export default redModernPainting01;
