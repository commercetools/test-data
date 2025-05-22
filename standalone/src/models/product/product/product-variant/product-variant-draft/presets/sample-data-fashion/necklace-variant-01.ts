import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const necklaceVariant01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('752502')
    .key('752502')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(5000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(5000))
        .country('US'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(5000))
        .country('ES'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-TRlWhVSq.png'
        )
        .dimensions({ w: 103, h: 122 }),
    ])
    .attributes([
      AttributeDraft.random().name('type').value({
        key: 'Jewelry',
        label: 'Jewelry',
      }),
      AttributeDraft.random().name('engraving').value('Happy Anniversary'),
    ]);

export default necklaceVariant01;
