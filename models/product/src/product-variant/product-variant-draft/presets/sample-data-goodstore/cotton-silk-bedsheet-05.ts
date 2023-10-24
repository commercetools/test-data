import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonSilkBedsheet05 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CSKP-0932')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cotton_Silk_Bedsheet-5.1.jpeg'
        )
        .dimensions({ w: 5589, h: 3627 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cotton_Silk_Bedsheet-5.2.jpeg'
        )
        .dimensions({ w: 5216, h: 3228 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Machine washable\n- 600 thread count\n- Includes 1 fitted sheet',
        'en-US':
          '- Machine washable\n- 600 thread count\n- Includes 1 fitted sheet',
        'de-DE':
          '- Machine washable\n- 600 thread count\n- Includes 1 fitted sheet',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#ffc0cb', 'de-DE': '#ffc0cb', 'en-US': '#ffc0cb' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Salmon', 'de-DE': 'Lachs', 'en-US': 'Salmon' }),
      AttributeDraft.random().name('size').value({ 'en-GB': 'Queen' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFC0CB',
          label: { 'de-DE': 'Rosa', 'en-GB': 'Pink', 'en-US': 'Pink' },
        }),
    ]);

export default cottonSilkBedsheet05;
