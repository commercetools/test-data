import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const ryeWhiskeyGlass01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('ryeWhiskeyGlass01')
    .sku('RWG-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('3499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(3499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('3499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(3499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('3499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(3499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rye_Whiskey_Glass-1.1.jpeg'
        )
        .dimensions({ w: 2848, h: 2990 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rye_Whiskey_Glass-1.2.jpeg'
        )
        .dimensions({ w: 2632, h: 2268 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Set includes 6 glasses',
        'en-US': '- Set includes 6 glasses',
        'de-DE': '- Das Set enthält 6 Gläser',
      }),
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

export default ryeWhiskeyGlass01;
