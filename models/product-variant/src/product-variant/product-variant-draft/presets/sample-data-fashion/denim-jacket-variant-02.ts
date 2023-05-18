import {
  CentPrecisionMoney,
  PriceDraft,
} from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const denimJacketVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('996025')
    .key('996025')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('EUR')
            .centAmount(10000)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('EUR')
            .centAmount(10000)
        )
        .country('ES'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-pmNAetyM.jpeg'
        )
        .dimensions({ w: 225, h: 225 }),
    ])
    .attributes([
      AttributeDraft.random().name('sleeve_length').value({
        key: 'Extra Long',
        label: 'Extra Long',
      }),
      AttributeDraft.random().name('cotton').value(false),
    ]);

export default denimJacketVariant02;
