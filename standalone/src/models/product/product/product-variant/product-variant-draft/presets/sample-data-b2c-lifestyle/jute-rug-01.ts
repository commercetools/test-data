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

const juteRug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('juteRug01')
    .sku('JAR-08')
    .prices([
      PriceDraft.presets
        .empty()
        .key('39900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('39900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('39950GBP_dist')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(39950))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('39900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Jute_Rug-1.1.jpeg'
        )
        .dimensions({ w: 7600, h: 5223 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Jute_Rug-1.2.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Jute_Rug-1.3.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 10ft x 12ft',
        'de-DE': '- 10 Fuß x 12 Fuß',
        'en-US': '- 10ft x 12ft',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Yellow',
            'en-GB': 'Yellow',
            'de-DE': 'Gelb',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Tan',
        'de-DE': 'Bräunen',
        'en-US': 'Tan',
      }),
      AttributeDraft.random().name('color-code').value('#D2B48C'),
    ]);

export default juteRug01;
