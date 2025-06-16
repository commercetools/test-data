import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const pinkAbstractPainting01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('pinkAbstractPainting01')
    .sku('PAP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('5999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(5999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('5999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(5999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('5999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(5999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Pink_Abstract_Painting-1.1.jpeg'
        )
        .dimensions({ w: 3873, h: 3873 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Acrylic on canvas\n- 2ft by 2ft',
        'de-DE': '- Acryl auf Leinwand\n- 2 Fuß mal 2 Fuß',
        'en-US': '- Acrylic on canvas\n- 2ft by 2ft',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Pink',
            'en-GB': 'Pink',
            'de-DE': 'Rosa',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Pink',
        'de-DE': 'Rosa',
        'en-US': 'Pink',
      }),
      AttributeDraft.random().name('color-code').value('#FFC0CB'),
    ]);

export default pinkAbstractPainting01;
