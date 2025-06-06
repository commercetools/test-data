import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const nalaTwoSeaterSofa01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('nalaTwoSeaterSofa01')
    .sku('NTSS-01')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-GB': 'Lightslate Gray:#778899',
        'de-DE': 'Helles Schiefer grau:#778899',
        'en-US': 'Lightslate Gray:#778899',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Black:#000000',
        'de-DE': 'Schwarz:#000000',
        'en-US': 'Black:#000000',
      }),
      AttributeDraft.random().name('new-arrival').value(true),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Two-seater sofa\n- Cotton linen upholstery',
        'de-DE': '- Zweisitzer-Sofa\n- Polsterung aus Baumwollleinen',
        'en-US': '- Two-seater sofa\n- Cotton linen upholstery',
      }),
    ]);

export default nalaTwoSeaterSofa01;
