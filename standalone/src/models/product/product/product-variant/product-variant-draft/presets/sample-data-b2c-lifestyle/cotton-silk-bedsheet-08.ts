import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const cottonSilkBedsheet08 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cottonSilkBedsheet08')
    .sku('CSKG-023')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-8.1.jpeg'
        )
        .dimensions({ w: 6016, h: 3848 }),
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
        'en-GB': 'Light Grey:#D3D3D3',
        'de-DE': 'Hell grau:#D3D3D3',
        'en-US': 'Light Gray:#D3D3D3',
      }),
      AttributeDraft.random().name('size').value({ 'en-GB': 'Queen' }),
    ]);

export default cottonSilkBedsheet08;
