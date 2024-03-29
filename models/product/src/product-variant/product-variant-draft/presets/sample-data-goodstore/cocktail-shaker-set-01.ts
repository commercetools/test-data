import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cocktailShakerSet01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('COC-0843')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cocktail_Shaker_Set-1.1.jpeg'
        )
        .dimensions({ w: 4929, h: 5334 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel\n- Hand wash only',
        'de-DE': '- Edelstahl\n- Handwäsche nur',
        'en-US': '- Stainless steel\n- Hand wash only',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Gold', 'de-DE': 'Gold', 'en-US': 'Gold' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFD700',
          label: { 'de-DE': 'Gold', 'en-GB': 'Gold', 'en-US': 'Gold' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#EED149', 'de-DE': '#EED149', 'en-US': '#EED149' }),
    ]);

export default cocktailShakerSet01;
