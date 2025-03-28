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
import * as ProductVariantDraft from '../../index';

const distributionChannel = ChannelDraft.presets.sampleDataB2CLifestyle
  .distributionChannel()
  .build<TChannelDraft>();

const idunPillowCover01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('idunPillowCover01')
    .sku('IPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1399EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1399GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1299GBP_dist')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1299))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1399USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1399))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Idun_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 5994, h: 3996 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Pillow not included',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Pillow not included',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Siena:#A0522D',
        'de-DE': 'Siena:#A0522D',
        'en-US': 'Siena:#A0522D',
      }),
    ]);

export default idunPillowCover01;
