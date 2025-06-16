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

const naturaRug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('naturaRug01')
    .sku('NR-09')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Natura_Rug-1.1.jpeg'
        )
        .dimensions({ w: 8000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 6ft x 6ft',
        'de-DE': '- 6 Fuß x 6 Fuß',
        'en-US': '- 6ft x 6ft',
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
        'en-GB': 'Beige',
        'de-DE': 'Beige',
        'en-US': 'Beige',
      }),
      AttributeDraft.random().name('color-code').value('#F5F5DC'),
    ]);

export default naturaRug01;
