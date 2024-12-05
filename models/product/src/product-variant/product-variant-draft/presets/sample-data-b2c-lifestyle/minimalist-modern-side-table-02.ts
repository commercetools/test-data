import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const minimalistModernSideTable02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .key('minimalistModernSideTable02')
    .sku('MMST-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('4999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(4999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('4999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(4999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('4999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(4999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-2.1.jpeg'
        )
        .dimensions({ w: 5883, h: 6026 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-US': 'Golden Rod:#DAA520',
        'en-GB': 'Goldene Rute:#DAA520',
        'de-DE': 'Golden Rod:#DAA520',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Saddle Brown:#8b4513',
        'en-GB': 'Sattel braun:#8b4513',
        'de-DE': 'Saddle Brown:#8b4513',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'en-GB': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'de-DE': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
      }),
    ]);

export default minimalistModernSideTable02;
