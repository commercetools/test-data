import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const iceBucket01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('BUCK-023')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(499))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_429585249-GI0q3D7S.jpeg'
        )
        .dimensions({ w: 5072, h: 4992 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel\n- Dishwasher safe',
        'de-DE': '- Edelstahl\n- Spülmaschinenfest',
        'en-US': '- Stainless steel\n- Dishwasher safe',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.',
        'en-US':
          'A metal ice bucket is a container used for holding and serving ice. It is made of stainless steel and designed to keep the ice cold for an extended period of time.   The exterior of the ice bucket is polished and has an extended lip for easy carrying. The interior is smooth and polished to prevent the ice from sticking to the walls of the bucket.',
        'de-DE':
          'Ein Eiskübel aus Metall ist ein Behälter zum Aufbewahren und Servieren von Eis. Es besteht aus Edelstahl und ist so konzipiert, dass es das Eis über einen längeren Zeitraum kalt hält.  Das Äußere des Eiskübels ist poliert und hat eine verlängerte Lippe zum einfachen Tragen. Die Innenseite ist glatt und poliert, um zu verhindern, dass das Eis an den Wänden des Eimers haftet.',
      }),
    ]);

export default iceBucket01;
