import { TBuilder } from '@/core';
import { ChannelDraft, TChannelDraft } from '@/models/channel';
import { MoneyDraft, PriceDraft, KeyReferenceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const distributionChannel = ChannelDraft.presets.sampleDataB2CLifestyle
  .distributionChannel()
  .build<TChannelDraft>();

const walnutCabinet01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('walnutCabinet01')
    .sku('WCS-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('159900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(159900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('159900EUR_dist')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(159900))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('159900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(159900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('159900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(159900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.1.jpeg'
        )
        .dimensions({ w: 4400, h: 2935 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.2.jpeg'
        )
        .dimensions({ w: 4400, h: 2935 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included in delivery',
        'en-US': '- Assembly included in delivery',
        'de-DE': '- Montage im Lieferumfang enthalten',
      }),
      AttributeDraft.random().name('search-finish').value('brown'),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Brown',
        'de-DE': 'Braun',
        'en-US': 'Brown',
      }),
      AttributeDraft.random().name('finish-code').value('#a52a2a'),
    ]);

export default walnutCabinet01;
