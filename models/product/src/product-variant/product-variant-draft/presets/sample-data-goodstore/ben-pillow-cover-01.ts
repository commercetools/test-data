import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const benPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LBPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ben_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Machine-washable\n- Cover is removable\n- Does not include pillow',
        'de-DE':
          '- Waschmaschinenfest\n- Bezug ist abnehmbar\n- Kissen nicht im Lieferumfang enthalten',
        'en-US':
          '- Machine-washable\n- Cover is removable\n- Does not include pillow',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Tan:#D2B48C',
        'de-DE': 'Bräunen:#D2B48C',
        'en-US': 'Tan:#D2B48C',
      }),
    ]);

export default benPillowCover01;
