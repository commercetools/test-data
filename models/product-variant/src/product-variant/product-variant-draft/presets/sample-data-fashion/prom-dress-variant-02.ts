import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { PriceDraft } from '@commercetools-test-data/price';
import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import * as Image from '../../../../image';
import { TProductVariantDraftBuilder } from '../../../types';

const promDressVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('214452')
    .key('214452')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('EUR')
            .centAmount(12500)
        )
        .country('ES'),
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('AUD')
            .centAmount(15000)
        )
        .country('AU'),
    ])
    .images([
      Image.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress2-_nh_EhPL.png'
        )
        .dimensions({ w: 1779, h: 1920 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        key: 'Pink',
        label: 'Pink',
      }),
    ]);

export default promDressVariant02;
