import {
  CentPrecisionMoney,
  PriceDraft,
} from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sandalsVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('148097')
    .key('148097')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('AUD')
            .centAmount(1199)
        )
        .country('AU'),
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('USD')
            .centAmount(1000)
        )
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-nDN7Ajoe.jpeg'
        )
        .dimensions({ w: 219, h: 230 }),
    ])
    .attributes([
      AttributeDraft.random().name('type').value({
        key: 'Shoes',
        label: 'Shoes',
      }),
    ]);

export default sandalsVariant02;
