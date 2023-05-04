import {
  CentPrecisionMoney,
  PriceDraft,
} from '@commercetools-test-data/commons';

import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const toteBagVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('718289')
    .key('718289')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('USD')
            .centAmount(13999)
        )
        .country('US'),
    ])
    .images([
      Image.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/tote-V4lrDZ9Q.png'
        )
        .dimensions({ w: 766, h: 800 }),
    ])
    .attributes([
      AttributeDraft.random().name('type').value({
        key: 'Bag',
        label: 'Bag',
      }),
    ]);

export default toteBagVariant01;
