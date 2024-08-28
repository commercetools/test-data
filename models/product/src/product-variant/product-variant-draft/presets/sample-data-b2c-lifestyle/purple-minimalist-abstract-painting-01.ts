import type { TChannelDraft } from '@commercetools-test-data/channel';
import { ChannelDraft } from '@commercetools-test-data/channel';
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

const purpleMinimalistAbstractPainting01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('PMAP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(2999))
        .channel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(2999))
        .country('GB'),
      PriceDraft.presets
        .empty()
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
      AttributeDraft.random().name('color').value({
        'en-GB': 'Purple:#800080',
        'de-DE': 'Violett:#800080',
        'en-US': 'Purple:#800080',
      }),
    ]);

export default purpleMinimalistAbstractPainting01;
