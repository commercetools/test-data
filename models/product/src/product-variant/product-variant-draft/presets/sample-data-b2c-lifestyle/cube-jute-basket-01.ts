import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
import {
  MoneyDraft,
  PriceDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const distributionChannel = ChannelDraft.presets.sampleDataB2CLifestyle
  .distributionChannel()
  .build<TChannelDraft>();

const cubeJuteBasket01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cubeJuteBasket01')
    .sku('CJB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1299))
        .country('US'),
      PriceDraft.presets
        .empty()
        .key('1199USD_dist')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1199))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cube_Jute_Basket-1.1.jpeg'
        )
        .dimensions({ w: 4684, h: 3564 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Jute\n- Preassembled\n- 1ft x 1ft x 1ft',
        'de-DE': '- Jute\n- Vormontiert\n- 1 Fuß x 1 Fuß x 1 Fuß',
        'en-US': '- Jute\n- Preassembled\n- 1ft x 1ft x 1ft',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Tan:#D2B48C',
        'de-DE': 'Bräunen:#D2B48C',
        'en-US': 'Tan:#D2B48C',
      }),
    ]);

export default cubeJuteBasket01;
