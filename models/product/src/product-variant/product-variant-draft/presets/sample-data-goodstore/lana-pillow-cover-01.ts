import { Money, PriceDraft } from '@commercetools-test-data/commons';
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
        .value(Money.random().currencyCode('EUR').centAmount(1099))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1099))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1099))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Lana_Pillow_Cover-1.1.jpeg'
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
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#ABA9A7', 'de-DE': '#ABA9A7', 'en-US': '#ABA9A7' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Feather Gray',
        'de-DE': 'Federgrau',
        'en-US': 'Feather Gray',
      }),
    ]);

export default lanaPillowCover01;
