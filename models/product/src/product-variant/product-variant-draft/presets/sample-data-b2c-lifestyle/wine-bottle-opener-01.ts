import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const wineBottleOpener01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('WOP-09')
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
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wine_Bottle_Opener-1.1.jpeg'
        )
        .dimensions({ w: 5184, h: 3456 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel',
        'en-US': '- Stainless steel',
        'de-DE': '- Edelstahl',
      }),
      AttributeDraft.random().name('color').value({
        'en-US': 'White:#FFFFFF',
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Silver:#C0C0C0',
        'en-GB': 'Silver:#C0C0C0',
        'de-DE': 'Silber:#C0C0C0',
      }),
    ]);

export default wineBottleOpener01;
