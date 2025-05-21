import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const modernLandscapePainting01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('modernLandscapePainting01')
    .sku('MLP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('5299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(5299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('5299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(5299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('5299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(5299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Landscape_Painting-1.1.jpeg'
        )
        .dimensions({ w: 5313, h: 5355 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Oil on canvas\n- Frame not included\n- 3ft by 4ft',
        'de-DE':
          '- Öl auf Leinwand\n- Rahmen nicht im Lieferumfang enthalten\n- 3 Fuß mal 4 Fuß',
        'en-US': '- Oil on canvas\n- Frame not included\n- 3ft by 4ft',
      }),
      AttributeDraft.random().name('color').value({
        'en-US': 'Sky Blue:#87CEEB',
        'en-GB': 'Sky Blue:#87CEEB',
        'de-DE': 'Himmel blau:#87CEEB',
      }),
    ]);

export default modernLandscapePainting01;
