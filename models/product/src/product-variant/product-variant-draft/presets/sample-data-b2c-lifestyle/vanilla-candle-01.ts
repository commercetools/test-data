import type { TChannelDraft } from '@commercetools-test-data/channel';
import { ChannelDraft } from '@commercetools-test-data/channel';
import {
  MoneyDraft,
  PriceDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const distributionChannel = ChannelDraft.presets.sampleDataB2CLifestyle
  .distributionChannel()
  .build<TChannelDraft>();

const vanillaCandle01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('VC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(999))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(999))
        .country('GB'),
      PriceDraft.presets
        .empty()
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
