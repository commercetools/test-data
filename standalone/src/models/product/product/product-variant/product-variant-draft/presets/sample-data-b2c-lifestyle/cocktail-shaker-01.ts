import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const cocktailShaker01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cocktailShaker01')
    .sku('COCT-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('699EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(699))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('699GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(699))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('699USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(699))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker-1.1.jpeg'
        )
        .dimensions({ w: 3850, h: 5500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker-1.2.jpeg'
        )
        .dimensions({ w: 5000, h: 3750 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Includes built in strainer\n- Stainless steel\n- Dishwasher safe',
        'de-DE':
          '- Inklusive eingebautem Sieb\n- Edelstahl\n- Spülmaschinenfest',
        'en-US':
          '- Includes built in strainer\n- Stainless steel\n- Dishwasher safe',
      }),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Silver',
            'en-GB': 'Silver',
            'de-DE': 'Silber',
          },
        ]),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Silver',
        'de-DE': 'Silber',
        'en-US': 'Silver',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#C0C0C0',
        'en-GB': '#C0C0C0',
        'de-DE': '#C0C0C0',
      }),
    ]);

export default cocktailShaker01;
