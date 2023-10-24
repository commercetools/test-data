import { Money, PriceDraft } from '@commercetools-test-data/commons';
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
        .value(Money.random().currencyCode('EUR').centAmount(1999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-2.1.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-2.2.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-US': 'lightpink',
        'en-GB': 'lightpink',
        'de-DE': 'lightpink',
      }),
      AttributeDraft.random().name('colorlabel').value({
        'en-US': 'Salmon Gold',
        'en-GB': 'Salmon Gold',
        'de-DE': 'Salmon Gold',
      }),
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
          key: '#FFC0CB',
          label: { 'de-DE': 'Rosa', 'en-GB': 'Pink', 'en-US': 'Pink' },
        }),
    ]);

export default geometricPillowCase02;
