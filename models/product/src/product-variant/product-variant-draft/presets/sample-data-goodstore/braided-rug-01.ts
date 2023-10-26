import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const braidedRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('BR-0983')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(9999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(9999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(9999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Braided_Rug-1.1.jpeg'
        )
        .dimensions({ w: 4924, h: 4720 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Braided_Rug-1.3.jpeg'
        )
        .dimensions({ w: 5060, h: 3373 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Braided_Rug-1.2.jpeg'
        )
        .dimensions({ w: 5527, h: 3685 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFEEB2', 'de-DE': '#FFEEB2', 'en-US': '#FFEEB2' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Jute', 'de-DE': 'Jute', 'en-US': 'Jute' }),
    ]);

export default braidedRug01;
