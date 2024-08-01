import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonSilkBedsheet09 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CSKG-2345')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cotton_Silk_Bedsheet-9.1.jpeg'
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
      AttributeDraft.random().name('size').value({ 'en-GB': 'King' }),
    ]);

export default cottonSilkBedsheet09;
