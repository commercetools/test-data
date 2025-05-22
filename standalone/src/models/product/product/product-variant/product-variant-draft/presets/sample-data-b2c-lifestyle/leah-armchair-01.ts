import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const leahArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('leahArmchair01')
    .sku('LAMR-03')
    .prices([
      PriceDraft.presets
        .empty()
        .key('39900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('39900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('39900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leah_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
        'en-US': '- Dry clean only',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Grey:#808080',
        'de-DE': 'Grau:#808080',
        'en-US': 'Gray:#808080',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Tan:#D2B48C',
        'de-DE': 'Bräunen:#D2B48C',
        'en-US': 'Tan:#D2B48C',
      }),
    ]);

export default leahArmchair01;
