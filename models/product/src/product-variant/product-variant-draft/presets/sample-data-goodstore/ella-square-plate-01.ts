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

const ellaSquarePlate01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ESP-1')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1599))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ella_Square_Plate-1.1.jpeg'
        )
        .dimensions({ w: 5692, h: 3412 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ella_Square_Plate-1.2.jpeg'
        )
        .dimensions({ w: 7360, h: 4912 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 plate',
        'de-DE': '- Enthält 1 Teller',
        'en-US': '- Includes 1 plate',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'White', 'de-DE': 'Weiß', 'en-US': 'White' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default ellaSquarePlate01;
