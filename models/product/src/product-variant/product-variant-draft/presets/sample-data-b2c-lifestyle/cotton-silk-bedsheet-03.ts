import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonSilkBedsheet03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CSKW-9822')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1899))
        .country('GB'),
      PriceDraft.presets
        .empty()
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
