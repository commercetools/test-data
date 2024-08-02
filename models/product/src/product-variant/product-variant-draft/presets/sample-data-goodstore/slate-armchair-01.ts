import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const slateArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SARM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(59900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Slate_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5009, h: 4004 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Slate_Armchair-1.2.jpeg'
        )
        .dimensions({ w: 5544, h: 3498 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes ottoman',
        'en-US': '- Includes ottoman',
        'de-DE': '- Inklusive Ottomane',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Dark Slate Grey:#2F4F4F',
        'de-DE': 'Schiefer grau:#708090',
        'en-US': 'Slate Gray:#708090',
      }),
    ]);

export default slateArmchair01;
