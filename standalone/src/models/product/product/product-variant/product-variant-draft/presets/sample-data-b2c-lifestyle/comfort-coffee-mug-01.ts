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

const comfortCoffeeMug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('comfortCoffeeMug01')
    .sku('CCM-089')
    .prices([
      PriceDraft.presets
        .empty()
        .key('199EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(199))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('199GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(199))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('149USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(149))
        .country('US'),
      PriceDraft.presets
        .empty()
        .key('199USD_dist')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(199))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Comfort_Coffee_Mug-1.1.jpeg'
        )
        .dimensions({ w: 2340, h: 2256 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 mug\n- Dishwasher and microwave safe',
        'de-DE': '- Enthält 1 Tasse\n- Spülmaschinen- und mikrowellengeeignet',
        'en-US': '- Includes 1 mug\n- Dishwasher and microwave safe',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'White',
            'en-GB': 'White',
            'de-DE': 'Weiß',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'White',
        'de-DE': 'Weiß',
        'en-US': 'White',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#FFFFFF',
        'en-GB': '#FFFFFF',
        'de-DE': '#FFFFFF',
      }),
    ]);

export default comfortCoffeeMug01;
