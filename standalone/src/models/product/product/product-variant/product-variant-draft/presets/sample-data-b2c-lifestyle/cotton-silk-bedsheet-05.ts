import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const cottonSilkBedsheet05 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cottonSilkBedsheet05')
    .sku('CSKP-0932')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1599EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1599GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1599USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-5.1.jpeg'
        )
        .dimensions({ w: 5589, h: 3627 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-5.2.jpeg'
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
      AttributeDraft.random().name('color').value({
        'en-GB': 'Light Pink:#FFB6C1',
        'de-DE': 'Hell rosa:#FFB6C1',
        'en-US': 'Light Pink:#FFB6C1',
      }),
      AttributeDraft.random().name('size').value({ 'en-GB': 'Queen' }),
    ]);

export default cottonSilkBedsheet05;
