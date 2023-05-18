import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const toteBagVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('124965')
    .key('124965')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(17500))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/bag-371ygCjz.png'
        )
        .dimensions({ w: 675, h: 800 }),
    ])
    .attributes([
      AttributeDraft.random().name('type').value({
        key: 'Bag',
        label: 'Bag',
      }),
    ]);

export default toteBagVariant02;
