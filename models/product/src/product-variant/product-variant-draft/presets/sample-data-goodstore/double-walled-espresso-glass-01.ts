import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const doubleWalledEspressoGlass01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('DWEG-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(4299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(4299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(4299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Double_Walled_Espresso_Glass-1.1.jpeg'
        )
        .dimensions({ w: 3371, h: 3098 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Double_Walled_Espresso_Glass-1.2.jpeg'
        )
        .dimensions({ w: 987, h: 1481 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Set includes 4 glasses',
        'de-DE': '- Das Set enthält 4 Gläser',
        'en-US': '- Set includes 4 glasses',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Transparent:transparent',
        'de-DE': 'Transparent:transparent',
        'en-US': 'Transparent:transparent',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Glass:transparent',
        'de-DE': 'Glas:transparent',
        'en-US': 'Glass:transparent',
      }),
    ]);

export default doubleWalledEspressoGlass01;
