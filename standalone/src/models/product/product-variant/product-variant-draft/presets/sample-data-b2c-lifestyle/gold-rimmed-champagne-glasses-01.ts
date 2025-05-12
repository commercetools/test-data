import { TBuilder } from '../../../../../../core';
import { MoneyDraft, PriceDraft } from '../../../../../commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const goldRimmedChampagneGlasses01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('goldRimmedChampagneGlasses01')
    .sku('GRCG-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('3000EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(3000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('3000GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(3000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('3000USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(3000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.1.jpeg'
        )
        .dimensions({ w: 2192, h: 3288 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.2.jpeg'
        )
        .dimensions({ w: 5143, h: 4113 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.4.jpeg'
        )
        .dimensions({ w: 6869, h: 3435 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Gold_Rimmed_Champagne_Glasses-1.3.jpeg'
        )
        .dimensions({ w: 8080, h: 5077 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
        'de-DE':
          '- Set mit 5 Gläsern\n- Importierter Kristall\n- Goldpolitur an den Felgen',
        'en-US':
          '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Transparent:transparent',
        'de-DE': 'Transparent:transparent',
        'en-US': 'Transparent:transparent',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Gold:#FFD700',
        'de-DE': 'Gold:#FFD700',
        'en-US': 'Gold:#FFD700',
      }),
    ]);

export default goldRimmedChampagneGlasses01;
