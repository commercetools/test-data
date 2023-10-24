import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const naturaRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('NR-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Natura_Rug-1.1.jpeg'
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
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
      AttributeDraft.random().name('color').value({
        'en-GB': '#F7ECD9 ',
        'de-DE': '#F7ECD9 ',
        'en-US': '#F7ECD9 ',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Beige', 'de-DE': 'Beige', 'en-US': 'Beige' }),
    ]);

export default naturaRug01;
