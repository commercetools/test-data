import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { PriceDraft } from '@commercetools-test-data/price';
import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import * as Image from '../../../../image';
import { TProductVariantDraftBuilder } from '../../../types';

const maternityTopVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('118717')
    .key('118717')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('EUR')
            .centAmount(2695)
        )
        .country('DE'),
    ])
    .images([
      Image.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png'
        )
        .dimensions({ w: 262, h: 300 }),
    ])
    .attributes([
      AttributeDraft.random().name('size').value({
        key: 'Medium',
        label: 'Medium',
      }),
      AttributeDraft.random().name('color').value({
        key: 'Green',
        label: 'Green',
      }),
    ])
    .assets([]);

export default maternityTopVariant02;
