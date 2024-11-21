import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const geometricPillowCase02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GPC-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.1.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.2.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-US': 'Light Pink:#FFB6C1',
        'en-GB': 'Light Pink:#FFB6C1',
        'de-DE': 'Hell rosa:#FFB6C1',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable\n',
        'en-GB':
          '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable',
        'de-DE':
          '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable',
      }),
    ]);

export default geometricPillowCase02;
