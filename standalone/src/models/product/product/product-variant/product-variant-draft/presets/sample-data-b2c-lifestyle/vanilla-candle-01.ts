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

const vanillaCandle01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('vanillaCandle01')
    .sku('VC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1099EUR_dist')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1099))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.1.jpeg'
        )
        .dimensions({ w: 5819, h: 3879 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.2.jpeg'
        )
        .dimensions({ w: 6214, h: 4143 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Comes in glass jar\n- 300 grams',
        'en-US': '- Comes in glass jar\n- 300 grams',
        'de-DE': '- Wird im Glas geliefert\n- 300 Gramm',
      }),
      AttributeDraft.random().name('color').value({
        'en-US': 'Beige:#F5F5DC',
        'en-GB': 'Beige:#F5F5DC',
        'de-DE': 'Beige:#F5F5DC',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Glass:transparent',
        'en-GB': 'Glass:transparent',
        'de-DE': 'Glas:transparent',
      }),
    ]);

export default vanillaCandle01;
