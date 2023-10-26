import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const marquisTray01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MWT-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(399))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Marquis_Tray-1.1.jpeg'
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
        .name('color-filter')
        .value({
          key: '#FFA500',
          label: { 'de-DE': 'Orange', 'en-GB': 'Orange', 'en-US': 'Orange' },
        }),
    ]);

export default marquisTray01;
