import {
  CentPrecisionMoney,
  PriceDraft,
} from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const halloweenTopVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('828329')
    .key('828329')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('EUR')
            .centAmount(3000)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('USD')
            .centAmount(3000)
        )
        .country('US'),
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('EUR')
            .centAmount(3300)
        )
        .country('ES'),
    ])
    .images([
      Image.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/multi-TjZTRFuz.jpeg'
        )
        .dimensions({ w: 900, h: 700 }),
    ])
    .attributes([
      AttributeDraft.random().name('size').value({
        key: 'Large',
        label: 'Large',
      }),
      AttributeDraft.random().name('color').value({
        key: 'Multi-Color',
        label: 'Multi-Color',
      }),
    ]);

export default halloweenTopVariant02;
