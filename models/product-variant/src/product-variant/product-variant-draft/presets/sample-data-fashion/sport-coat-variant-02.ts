import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { PriceDraft } from '@commercetools-test-data/price';
import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import * as Image from '../../../../image';
import { TProductVariantDraftBuilder } from '../../../types';

const sportCoatVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('692458')
    .key('692458')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('AUD')
            .centAmount(20000)
        )
        .country('AU'),
    ])
    .images([
      Image.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-Keqv_ZSU.jpeg'
        )
        .dimensions({ w: 150, h: 150 }),
    ])
    .attributes([
      AttributeDraft.random().name('sleeve_length').value({
        key: 'Normal',
        label: 'Normal',
      }),
    ])
    .assets([]);

export default sportCoatVariant02;