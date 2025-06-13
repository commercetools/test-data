import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const lanaPillowCover01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('lanaPillowCover01')
    .sku('LPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1099EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1099))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1099GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1099))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1099USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1099))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Lana_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 4350, h: 3143 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Machine washable\n- Pillow not included\n- Has a zip enclosure',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten\n- Verfügt über ein Reißverschlussgehäuse',
        'en-US':
          '- Machine washable\n- Pillow not included\n- Has a zip enclosure',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Gray',
            'en-GB': 'Grey',
            'de-DE': 'Grau',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Light Grey',
        'de-DE': 'Hell grau',
        'en-US': 'Light Gray',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#D3D3D3',
        'en-GB': '#D3D3D3',
        'de-DE': '#D3D3D3',
      }),
    ]);

export default lanaPillowCover01;
