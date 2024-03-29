import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const geometricPillowCase01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GPC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-1.2.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'silver', 'en-GB': 'silver', 'de-DE': 'silver' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Silver', 'en-GB': 'Silver', 'de-DE': 'Silver' }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable\n',
        'en-GB':
          '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable',
        'de-DE':
          '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#C0C0C0',
          label: { 'de-DE': 'Silber', 'en-GB': 'Silver', 'en-US': 'Silver' },
        }),
    ]);

export default geometricPillowCase01;
