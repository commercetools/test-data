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

const purpleMinimalistAbstractPainting01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('purpleMinimalistAbstractPainting01')
    .sku('PMAP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('2999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(2999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('3999EUR_dist')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(3999))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('2999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(2999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('2999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(2999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Purple_Minimalist_Abstract_Painting-1.1.jpeg'
        )
        .dimensions({ w: 3148, h: 2903 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Acrylic on canvas\n- 2ft by 2ft',
        'de-DE': '- Acryl auf Leinwand\n- 2 Fuß mal 2 Fuß',
        'en-US': '- Acrylic on canvas\n- 2ft by 2ft',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Purple',
            'en-GB': 'Purple',
            'de-DE': 'Violett',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Purple',
        'de-DE': 'Violett',
        'en-US': 'Purple',
      }),
      AttributeDraft.random().name('color-code').value('#800080'),
    ]);

export default purpleMinimalistAbstractPainting01;
