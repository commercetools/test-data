import { TBuilder } from '../../../../../../core';
import { MoneyDraft, PriceDraft } from '../../../../../commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const cobblestoneRug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cobblestoneRug01')
    .sku('CR-098')
    .prices([
      PriceDraft.presets
        .empty()
        .key('12999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(12999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('12999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(12999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('12999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(12999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cobblestone_Rug-1.1.jpeg'
        )
        .dimensions({ w: 7006, h: 2820 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 5ft x 3ft',
        'de-DE': '- 5 Fuß x 3 Fuß',
        'en-US': '- 5ft x 3ft',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Light Grey:#D3D3D3',
        'de-DE': 'Hell grau:#D3D3D3',
        'en-US': 'Light Gray:#D3D3D3',
      }),
    ]);

export default cobblestoneRug01;
