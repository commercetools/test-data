import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const chiantiWineGlass01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('chiantiWineGlass01')
    .sku('CWG-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('2599EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(2599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('2599GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(2599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('2599USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(2599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Chianti_Wine_Glass-1.1.jpeg'
        )
        .dimensions({ w: 2457, h: 3138 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Set includes 6 glasses',
        'de-DE': '- Das Set enthält 6 Gläser',
        'en-US': '- Set includes 6 glasses',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Transparent',
            'en-GB': 'Transparent',
            'de-DE': 'Transparent',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Glass',
            'en-GB': 'Glass',
            'de-DE': 'Glas',
          },
        ]),
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

export default chiantiWineGlass01;
