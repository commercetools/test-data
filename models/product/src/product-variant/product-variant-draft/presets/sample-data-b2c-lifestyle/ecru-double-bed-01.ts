import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ecruDoubleBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SQB-034')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(89900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(89900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(89900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ecru_Double_Bed-1.1.jpeg'
        )
        .dimensions({ w: 2000, h: 2000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Comes with pillow-top headboard\n- Assembly included',
        'de-DE': '- Mit gepolstertem Kopfteil\n- Montage inklusive',
        'en-US': '- Comes with pillow-top headboard\n- Assembly included',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Gainsboro:#dcdcdc',
        'de-DE': 'Gainsboro:#dcdcdc',
        'en-US': 'Gainsboro:#dcdcdc',
      }),
    ]);

export default ecruDoubleBed01;
