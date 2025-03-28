import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const walnutCounterStool01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('walnutCounterStool01')
    .sku('WCSI-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('8999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(8999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('8999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(8999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('8999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(8999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Counter_Stool-1.1.jpeg'
        )
        .dimensions({ w: 5906, h: 5906 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 stool',
        'en-US': '- Includes 1 stool',
        'de-DE': '- Beinhaltet 1 Hocker',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Saddle Brown:#8b4513',
        'en-US': 'Saddle Brown:#8b4513',
        'de-DE': 'Sattel braun:#8b4513',
      }),
    ]);

export default walnutCounterStool01;
