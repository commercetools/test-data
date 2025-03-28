import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const doubleWalledEspressoGlass01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('doubleWalledEspressoGlass01')
    .sku('DWEG-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('4299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(4299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('4299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(4299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('4299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(4299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Double_Walled_Espresso_Glass-1.1.jpeg'
        )
        .dimensions({ w: 3371, h: 3098 }),
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
