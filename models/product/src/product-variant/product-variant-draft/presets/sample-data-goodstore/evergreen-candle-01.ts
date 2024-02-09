import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const evergreenCandle01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('EC-0993')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.1.jpeg'
        )
        .dimensions({ w: 3840, h: 2160 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.3.jpeg'
        )
        .dimensions({ w: 3840, h: 2160 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.2.jpeg'
        )
        .dimensions({ w: 4480, h: 6720 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#00FF00',
          label: { 'de-DE': 'Grün', 'en-GB': 'Green', 'en-US': 'Green' },
        }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Evergreen',
        'de-DE': 'Immergrün',
        'en-US': 'Evergreen',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#156F29', 'de-DE': '#156F29', 'en-US': '#156F29' }),
    ]);

export default evergreenCandle01;
