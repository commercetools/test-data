import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernUpholsteredTwinBed04 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MUTB-04')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(45000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(45000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(45000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-4.2.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-4.1.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Twin_Bed-4.3.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'en-GB':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'de-DE':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'lightslategrey',
        'en-GB': 'lightslategrey',
        'de-DE': 'lightslategrey',
      }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Oak', 'en-GB': 'Oak', 'de-DE': 'Oak' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Tan', 'en-GB': 'Tan', 'de-DE': 'Tan' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'tan', 'en-GB': 'tan', 'de-DE': 'tan' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
    ]);

export default modernUpholsteredTwinBed04;
