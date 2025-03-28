import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonSilkBedsheet03 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cottonSilkBedsheet03')
    .sku('CSKW-9822')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1899EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1899GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1899))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1899USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1899))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-3.1.jpeg'
        )
        .dimensions({ w: 7500, h: 4500 }),
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
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
        'en-US': 'White:#FFFFFF',
      }),
      AttributeDraft.random().name('size').value({ 'en-GB': 'King' }),
    ]);

export default cottonSilkBedsheet03;
