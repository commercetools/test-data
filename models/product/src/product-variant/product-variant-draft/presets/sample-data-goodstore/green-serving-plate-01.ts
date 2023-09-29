import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const greenServingPlate01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_448085484-pW171SGO.jpeg'
        )
        .dimensions({ w: 4631, h: 4426 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_487645978-EEFXxufp.jpeg'
        )
        .dimensions({ w: 5705, h: 3653 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 plate',
        'de-DE': '- Enthält 1 Teller',
        'en-US': '- Includes 1 plate',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#00FF00',
          label: { 'de-DE': 'Grün', 'en-GB': 'Green', 'en-US': 'Green' },
        }),
    ]);

export default greenServingPlate01;
