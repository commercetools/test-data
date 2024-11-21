import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonSilkBedsheet06 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CSKP-083')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-6.1.jpeg'
        )
        .dimensions({ w: 5589, h: 3627 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Silk_Bedsheet-6.2.jpeg'
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
      AttributeDraft.random().name('size').value({ 'en-GB': 'King' }),
    ]);

export default cottonSilkBedsheet06;
