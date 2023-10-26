import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const fawnArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('FARM-05')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(59900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Fawn_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Leather requires special care',
        'de-DE': '- Leder erfordert besondere Pflege',
        'en-US': '- Leather requires special care',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF8ED', 'de-DE': '#FFF8ED', 'en-US': '#FFF8ED' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'White Leather',
        'de-DE': 'Weißes Leder',
        'en-US': 'White Leather',
      }),
      AttributeDraft.random().name('finishlabel').value({
        'en-GB': 'Chestnut',
        'de-DE': 'Kastanie',
        'en-US': 'Chestnut',
      }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#1B1101', 'de-DE': '#1B1101', 'en-US': '#1B1101' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default fawnArmchair01;
