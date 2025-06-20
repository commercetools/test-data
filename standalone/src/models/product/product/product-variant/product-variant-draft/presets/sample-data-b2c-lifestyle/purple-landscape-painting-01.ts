import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const purpleLandscapePainting01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('purpleLandscapePainting01')
    .sku('BLP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('8999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(8999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('8999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(8999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('8999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(8999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Purple_Landscape_Painting-1.1.jpeg'
        )
        .dimensions({ w: 3755, h: 3902 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Oil painting on canvas\n- Frame not included\n- Size: 4ft by 3ft',
        'de-DE':
          '- Ölgemälde auf Leinwand\n- Rahmen nicht im Lieferumfang enthalten\n- Größe: 4 Fuß x 3 Fuß',
        'en-US':
          '- Oil painting on canvas\n- Frame not included\n- Size: 4ft by 3ft',
      }),
      AttributeDraft.random().name('search-color').value('purple'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Purple',
        'de-DE': 'Violett',
        'en-US': 'Purple',
      }),
      AttributeDraft.random().name('color-code').value('#800080'),
    ]);

export default purpleLandscapePainting01;
