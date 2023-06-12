import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const maternityTopVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('118716')
    .key('118716')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(2695))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('AUD').centAmount(2500))
        .country('AU'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png'
        )
        .dimensions({ w: 262, h: 300 }),
    ])
    .attributes([
      AttributeDraft.random().name('size').value({
        key: 'Small',
        label: 'Small',
      }),
      AttributeDraft.random().name('color').value({
        key: 'Green',
        label: 'Green',
      }),
    ]);

export default maternityTopVariant01;
