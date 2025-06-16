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

const abigailLoungeChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('abigailLoungeChair01')
    .sku('ALC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('75000EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(75000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('75000GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(75000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('70000USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(70000))
        .country('US'),
      PriceDraft.presets
        .empty()
        .key('75000USD_dist')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(75000))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Abigail_Lounge_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled',
        'en-GB':
          '- Comes with matching throw pillow\n- Velvet upholstery\n- Pre-assembled',
        'de-DE':
          '- Wird mit passendem Kissen geliefert\n- Samtpolsterung\n- Wird zusammengebaut geliefert',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Pink',
            'en-GB': 'Pink',
            'de-DE': 'Rosa',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Gold',
            'en-GB': 'Gold',
            'de-DE': 'Gold',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Light Pink',
        'de-DE': 'Hell rosa',
        'en-US': 'Light Pink',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Gold',
        'de-DE': 'Gold',
        'en-US': 'Gold',
      }),
      AttributeDraft.random().name('color-code').value('#FFB6C1'),
      AttributeDraft.random().name('finish-code').value('#FFD700'),
    ]);

export default abigailLoungeChair01;
