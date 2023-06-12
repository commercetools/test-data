import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const summerDressVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('791840')
    .key('791840')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(7500))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(8000))
        .country('ES'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('AUD').centAmount(7000))
        .country('AU'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress-nsVCck7f.jpeg'
        )
        .dimensions({ w: 276, h: 298 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        key: 'White',
        label: 'White',
      }),
    ]);

export default summerDressVariant01;
