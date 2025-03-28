import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const patternedPillowCover02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('patternedPillowCover02')
    .sku('ADPC-7')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Patterned_Pillow_Cover-2.1.jpeg'
        )
        .dimensions({ w: 6047, h: 4031 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Pillow not included',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Pillow not included',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Black:#000000',
        'de-DE': 'Schwarz:#000000',
        'en-US': 'Black:#000000',
      }),

      AttributeDraft.random().name('new-arrival').value(false),
    ]);

export default patternedPillowCover02;
