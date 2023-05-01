import * as CentPrecisionMoney from '@commercetools-test-data/cent-precision-money';
import { PriceDraft } from '@commercetools-test-data/price';
import * as ProductVariantDraft from '../..';
import { AttributeDraft } from '../../../../attribute/';
import * as Image from '../../../../image';
import { TProductVariantDraftBuilder } from '../../../types';

const necklaceVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('42610')
    .key('42610')
    .prices([
      PriceDraft.presets
        .empty()
        .value(
          CentPrecisionMoney.CentPrecisionMoneyDraft.random()
            .currencyCode('AUD')
            .centAmount(1575)
        )
        .country('AU'),
    ])
    .images([
      Image.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png'
        )
        .dimensions({ w: 209, h: 241 }),
    ])
    .attributes([
      AttributeDraft.random().name('type').value({
        key: 'Jewelry',
        label: 'Jewelry',
      }),
    ])
    .assets([]);

export default necklaceVariant02;
