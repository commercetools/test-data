import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const lanaPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1099))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1099))
        .country('GB'),
      PriceDraft.presets
        .empty()
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
      AttributeDraft.random().name('color').value({
        'en-GB': 'Light Grey:#D3D3D3',
        'de-DE': 'Hell grau:#D3D3D3',
        'en-US': 'Light Gray:#D3D3D3',
      }),
    ]);

export default lanaPillowCover01;
