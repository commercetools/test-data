import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const doubleSidedShotGlass01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SHOT-095')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_95721248-5HSKgKgr.jpeg'
        )
        .dimensions({ w: 3648, h: 5472 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({ 'en-GB': '- Stainless steel\n- Dishwasher safe' }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'This steel shot glass is made of steel and has two ends, one for measuring a standard shot, and the other for measuring a larger double shot. The ends are shaped like small cups with rounded edges for easy pouring. The steel construction makes it durable and resistant to wear and tear, while also providing a sleek and modern appearance.',
        'en-US':
          'This steel shot glass is made of steel and has two ends, one for measuring a standard shot, and the other for measuring a larger double shot. The ends are shaped like small cups with rounded edges for easy pouring. The steel construction makes it durable and resistant to wear and tear, while also providing a sleek and modern appearance.',
        'de-DE':
          'Dieses Stahlschnapsglas besteht aus Stahl und hat zwei Enden, eines zum Messen eines Standardschnapses und das andere zum Messen eines größeren Doppelschnapses. Die Enden sind wie kleine Tassen mit abgerundeten Kanten zum einfachen Ausgießen geformt. Die Stahlkonstruktion macht es langlebig und verschleißfest und bietet gleichzeitig ein elegantes und modernes Erscheinungsbild.',
      }),
    ]);

export default doubleSidedShotGlass01;
