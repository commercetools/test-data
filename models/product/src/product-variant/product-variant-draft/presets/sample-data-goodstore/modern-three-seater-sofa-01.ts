import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernThreeSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MTSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(249900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(249900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(249900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Three_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Three_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Three_Seater_Sofa-1.3.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Three_Seater_Sofa-1.4.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': '#292828', 'en-GB': '#292828', 'de-DE': '#292828' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-US': 'Charcoal',
        'en-GB': 'Charcoal',
        'de-DE': 'Charcoal',
      }),
      AttributeDraft.random().name('finishlabel').value({
        'en-US': 'Briarsmoke',
        'en-GB': 'Briarsmoke',
        'de-DE': 'Briarsmoke',
      }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': '#5c513d', 'en-GB': '#5c513d', 'de-DE': '#5c513d' }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
        'en-GB': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
        'de-DE': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
    ]);

export default modernThreeSeaterSofa01;
