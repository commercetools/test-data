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

const comfortCoffeeMug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CCM-089')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(199))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(199))
        .country('GB'),
      PriceDraft.presets
        .empty()
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
      AttributeDraft.random().name('color').value({
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
        'en-US': 'White:#FFFFFF',
      }),
    ]);

export default comfortCoffeeMug01;
