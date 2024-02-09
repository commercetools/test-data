import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sallyArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SARMO-034')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(19900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(19900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(19900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sally_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Comes with matching throw pillow',
        'en-US': '- Comes with matching throw pillow',
        'de-DE': '- Wird mit passendem Dekokissen geliefert',
      }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Baby Pink',
        'de-DE': 'Baby Pink',
        'en-US': 'Baby Pink',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFE0E0', 'de-DE': '#FFE0E0', 'en-US': '#FFE0E0' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Cedar', 'de-DE': 'Zeder', 'en-US': 'Cedar' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#FAE7C6', 'en-US': '#FAE7C6', 'de-DE': '#FAE7C6' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFC0CB',
          label: { 'de-DE': 'Rosa', 'en-GB': 'Pink', 'en-US': 'Pink' },
        }),
    ]);

export default sallyArmchair01;
