import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rusticOvenCasserole01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RCC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(2599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(2599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(2599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rustic_Oven_Casserole-1.1.jpeg'
        )
        .dimensions({ w: 4746, h: 3710 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Does not include lid',
        'en-US': '- Does not include lid',
        'de-DE': '- Ohne Deckel',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Peru:#CD853F',
        'de-DE': 'Peru:#CD853F',
        'en-US': 'Peru:#CD853F',
      }),
    ]);

export default rusticOvenCasserole01;
