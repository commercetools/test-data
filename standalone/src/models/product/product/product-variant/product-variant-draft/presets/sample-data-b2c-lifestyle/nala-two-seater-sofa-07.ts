import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const nalaTwoSeaterSofa07 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('nalaTwoSeaterSofa07')
    .sku('NTSS-07')
    .prices([
      PriceDraft.presets
        .empty()
        .key('129900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('129900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('129900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(129900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-7.1.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
    ])
    .attributes([
      AttributeDraft.random().name('new-arrival').value(true),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Two-seater sofa\n- Cotton linen upholstery',
        'de-DE': '- Zweisitzer-Sofa\n- Polsterung aus Baumwollleinen',
        'en-US': '- Two-seater sofa\n- Cotton linen upholstery',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Gray',
            'en-GB': 'Grey',
            'de-DE': 'Grau',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Black',
            'en-GB': 'Black',
            'de-DE': 'Schwarz',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Dark Slate Grey',
        'de-DE': 'Dunkles Schiefer grau',
        'en-US': 'Dark Slate Gray',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Black',
        'de-DE': 'Schwarz',
        'en-US': 'Black',
      }),
      AttributeDraft.random().name('color-code').value('#2F4F4F'),
      AttributeDraft.random().name('finish-code').value('#000000'),
    ]);

export default nalaTwoSeaterSofa07;
