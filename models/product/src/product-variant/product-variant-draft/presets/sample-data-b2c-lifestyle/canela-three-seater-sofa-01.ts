import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const canelaThreeSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CTSS-098')
    .prices([
      PriceDraft.presets
        .empty()
        .key('259900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('259900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('259900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(259900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 5029, h: 3353 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 1170, h: 780 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Leather upholstery \n- 3 seater',
        'de-DE': '- Lederpolsterung\n- 3-Sitzer',
        'en-US': '- Leather upholstery \n- 3 seater',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Peru:#CD853F',
        'de-DE': 'Peru:#CD853F',
        'en-US': 'Peru:#CD853F',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Tan:#D2B48C',
        'de-DE': 'Bräunen:#D2B48C',
        'en-US': 'Tan:#D2B48C',
      }),
    ]);

export default canelaThreeSeaterSofa01;
