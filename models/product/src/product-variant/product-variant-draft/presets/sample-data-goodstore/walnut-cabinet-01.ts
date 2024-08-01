import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import {
  MoneyDraft,
  PriceDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const distributionChannel = ChannelDraft.presets.sampleDataGoodStore
  .distributionChannel()
  .build<TChannelDraft>();

const walnutCabinet01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('WCS-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(159900))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(159900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(159900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Walnut_Cabinet-1.1.jpeg'
        )
        .dimensions({ w: 4400, h: 2935 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Walnut_Cabinet-1.2.jpeg'
        )
        .dimensions({ w: 4400, h: 2935 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included in delivery',
        'en-US': '- Assembly included in delivery',
        'de-DE': '- Montage im Lieferumfang enthalten',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Brown:#a52a2a',
        'en-US': 'Brown:#a52a2a',
        'de-DE': 'Braun:#a52a2a',
      }),
    ]);

export default walnutCabinet01;
