import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const canelaThreeSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CTSS-098')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(259900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Canela_Three_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 5029, h: 3353 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Canela_Three_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 1170, h: 780 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Leather upholstery \n- 3 seater',
        'de-DE': '- Lederpolsterung\n- 3-Sitzer',
        'en-US': '- Leather upholstery \n- 3 seater',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Tan', 'de-DE': 'Bräunen', 'en-US': 'Tan' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#CE9A17', 'de-DE': '#CE9A17', 'en-US': '#CE9A17' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Pine', 'de-DE': 'Kiefer', 'en-US': 'Pine' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#E4B849', 'de-DE': '#E4B849', 'en-US': '#E4B849' }),
    ]);

export default canelaThreeSeaterSofa01;
