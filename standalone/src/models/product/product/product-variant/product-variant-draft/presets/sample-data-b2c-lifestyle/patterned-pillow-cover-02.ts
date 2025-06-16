import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

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
      AttributeDraft.random().name('new-arrival').value(false),
      AttributeDraft.random().name('search-color').value('black'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Black',
        'de-DE': 'Schwarz',
        'en-US': 'Black',
      }),
      AttributeDraft.random().name('color-code').value('#000000'),
    ]);

export default patternedPillowCover02;
