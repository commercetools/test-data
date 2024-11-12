import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rattanLoungeChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RLC-08')
    .prices([
      PriceDraft.presets
        .empty()
        .key('19900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(19900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('19900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(19900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('19900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(19900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.2.jpeg'
        )
        .dimensions({ w: 3375, h: 4500 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 2 cushions for seat and backrest',
        'en-US': '- Includes 2 cushions for seat and backrest',
        'de-DE': '- Inklusive 2 Kissen für Sitz und Rückenlehne',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Antique White:#faebd7',
        'de-DE': 'Antik-weiß:#faebd7',
        'en-US': 'Antique White:#faebd7',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Beige:#F5F5DC',
        'en-US': 'Beige:#F5F5DC',
        'de-DE': 'Beige:#F5F5DC',
      }),
    ]);

export default rattanLoungeChair01;
