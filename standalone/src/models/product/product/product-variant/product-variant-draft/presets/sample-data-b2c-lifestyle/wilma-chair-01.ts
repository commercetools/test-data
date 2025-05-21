import { TBuilder } from '../../../../../../core';
import { MoneyDraft, PriceDraft } from '../../../../../commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const wilmaChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('wilmaChair01')
    .sku('NJOP-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('29900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('29900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('29900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(29900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.1.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.2.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Cushion covers are removable and machine washable',
        'en-US': '- Cushion covers are removable and machine washable',
        'de-DE': '- Kissenbezüge sind abnehmbar und maschinenwaschbar',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Black:#000000',
        'en-US': 'Black:#000000',
        'de-DE': 'Schwarz:#000000',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Floral White:#FFFAF0',
        'de-DE': 'Blumen weiß:#FFFAF0',
        'en-US': 'Floral White:#FFFAF0',
      }),
    ]);

export default wilmaChair01;
