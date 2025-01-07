import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const mayaPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .key('mayaPillowCover01')
    .sku('MPC-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('899EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('899GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(899))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('899USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(899))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Maya_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Does not include pillow',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Does not include pillow',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Plum:#DDA0DD',
        'de-DE': 'Pflaume:#DDA0DD',
        'en-US': 'Plum:#DDA0DD',
      }),
    ]);

export default mayaPillowCover01;
