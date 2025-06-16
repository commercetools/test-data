import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const marquisTray01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('marquisTray01')
    .sku('MWT-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('399EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('399GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('399USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(399))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Marquis_Tray-1.1.jpeg'
        )
        .dimensions({ w: 5056, h: 4784 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 tray',
        'de-DE': '- Enthält 1 Tablett',
        'en-US': '- Includes 1 tray',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Yellow',
            'en-GB': 'Yellow',
            'de-DE': 'Gelb',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Golden Rod',
        'de-DE': 'Goldene Rute',
        'en-US': 'Golden Rod',
      }),
      AttributeDraft.random().name('color-code').value('#DAA520'),
    ]);

export default marquisTray01;
