import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const glamArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GARM-093')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(59900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Glam_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- Pillow included',
        'de-DE': '- Nur chemische Reinigung\n- Kissen inklusive',
        'en-US': '- Dry clean only\n- Pillow included',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Golden Rod:#DAA520',
        'de-DE': 'Goldene Rute:#DAA520',
        'en-US': 'Golden Rod:#DAA520',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Gold:#FFD700',
        'de-DE': 'Gold:#FFD700',
        'en-US': 'Gold:#FFD700',
      }),
    ]);

export default glamArmchair01;
