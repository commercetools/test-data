import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const wineBottleOpener01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('wineBottleOpener01')
    .sku('WOP-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('199EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(199))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('199GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(199))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('199USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(199))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wine_Bottle_Opener-1.1.jpeg'
        )
        .dimensions({ w: 5184, h: 3456 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel',
        'en-US': '- Stainless steel',
        'de-DE': '- Edelstahl',
      }),
      AttributeDraft.random().name('search-color').value('white'),
      AttributeDraft.random().name('search-finish').value('silver'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'White',
        'de-DE': 'Weiß',
        'en-US': 'White',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Silver',
        'de-DE': 'Silber',
        'en-US': 'Silver',
      }),
      AttributeDraft.random().name('color-code').value('#FFFFFF'),
      AttributeDraft.random().name('finish-code').value('#C0C0C0'),
    ]);

export default wineBottleOpener01;
