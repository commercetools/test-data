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

const steelHipFlask01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('steelHipFlask01')
    .sku('FLAS-094')
    .prices([
      PriceDraft.presets
        .empty()
        .key('599EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('499EUR_dist')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(499))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('599GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('599USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Steel_Hip_Flask-1.1.jpeg'
        )
        .dimensions({ w: 5006, h: 6580 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel',
        'en-US': '- Stainless steel',
        'de-DE': '- Edelstahl',
      }),
      AttributeDraft.random().name('search-finish').value('silver'),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Silver',
        'de-DE': 'Silber',
        'en-US': 'Silver',
      }),
      AttributeDraft.random().name('finish-code').value('#C0C0C0'),
    ]);

export default steelHipFlask01;
