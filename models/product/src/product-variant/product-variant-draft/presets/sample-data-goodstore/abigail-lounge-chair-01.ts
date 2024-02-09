import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const abigailLoungeChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ALC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(75000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(75000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(75000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Abigail_Lounge_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-US': 'lightpink',
        'en-GB': 'lightpink',
        'de-DE': 'lightpink',
      }),
      AttributeDraft.random().name('colorlabel').value({
        'en-US': 'Soft Pink',
        'en-GB': 'Soft Pink',
        'de-DE': 'Soft Pink',
      }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Brass', 'en-GB': 'Brass', 'de-DE': 'Brass' }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'goldenrod',
        'en-GB': 'goldenrod',
        'de-DE': 'goldenrod',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled',
        'en-GB':
          '- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled',
        'de-DE':
          '- Wird mit passendem Kissen geliefert\n- Samtpolsterung\n- Wird zusammengebaut geliefert',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFC0CB',
          label: { 'de-DE': 'Rosa', 'en-GB': 'Pink', 'en-US': 'Pink' },
        }),
    ]);

export default abigailLoungeChair01;
