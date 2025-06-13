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
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Brown',
            'en-GB': 'Brown',
            'de-DE': 'Braun',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Siena',
        'de-DE': 'Siena',
        'en-US': 'Siena',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#A0522D',
        'en-GB': '#A0522D',
        'de-DE': '#A0522D',
      }),
    ]);

export default idunPillowCover01;
