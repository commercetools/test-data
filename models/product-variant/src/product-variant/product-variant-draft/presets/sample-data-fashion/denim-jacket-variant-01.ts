import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const denimJacketVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('996024')
    .key('996024')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(10000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(10000))
        .country('ES'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(9000))
        .country('US'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('AUD').centAmount(9500))
        .country('AU'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-_KAoINSX.jpeg'
        )
        .dimensions({ w: 225, h: 225 }),
    ])
    .attributes([
      AttributeDraft.random().name('sleeve_length').value({
        key: 'Normal',
        label: 'Normal',
      }),
      AttributeDraft.random().name('cotton').value(false),
    ]);

export default denimJacketVariant01;
