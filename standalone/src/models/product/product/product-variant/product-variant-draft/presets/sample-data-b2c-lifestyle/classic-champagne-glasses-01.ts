import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const classicChampagneGlasses01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('classicChampagneGlasses01')
    .sku('CCG-01')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.4.jpeg'
        )
        .dimensions({ w: 5468, h: 4101 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.1.jpeg'
        )
        .dimensions({ w: 2571, h: 4149 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.2.jpeg'
        )
        .dimensions({ w: 3643, h: 5464 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Champagne_Glasses-1.3.jpeg'
        )
        .dimensions({ w: 1659, h: 2733 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Set of 5 glasses\n- Premium glass\n- Fragile',
        'en-GB': '- Set of 5 glasses\n- Premium glass\n- Fragile',
        'de-DE': '- Set aus 5 Gläsern\n- Hochwertiges Glas\n- Zerbrechlich',
      }),
      AttributeDraft.random().name('new-arrival').value(true),
      AttributeDraft.random().name('search-color').value('transparent'),
      AttributeDraft.random().name('search-finish').value('glass'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Transparent',
        'de-DE': 'Transparent',
        'en-US': 'Transparent',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Glass',
        'de-DE': 'Glas',
        'en-US': 'Glass',
      }),
      AttributeDraft.random().name('color-code').value('transparent'),
      AttributeDraft.random().name('finish-code').value('transparent'),
    ]);

export default classicChampagneGlasses01;
