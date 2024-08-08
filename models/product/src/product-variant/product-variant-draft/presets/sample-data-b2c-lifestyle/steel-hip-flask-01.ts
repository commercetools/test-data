import { ChannelDraft, TChannelDraft } from '@commercetools-test-data/channel';
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

const steelHipFlask01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('FLAS-094')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(599))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(599))
        .country('GB'),
      PriceDraft.presets
        .empty()
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
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Silver:#C0C0C0',
        'de-DE': 'Silber:#C0C0C0',
        'en-US': 'Silver:#C0C0C0',
      }),
    ]);

export default steelHipFlask01;
