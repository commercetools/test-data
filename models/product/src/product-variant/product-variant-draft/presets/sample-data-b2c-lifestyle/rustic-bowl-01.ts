import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rusticBowl01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('199EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(199))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('199GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(199))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('199USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(199))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Bowl-1.1.jpeg'
        )
        .dimensions({ w: 5105, h: 3280 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 bowl',
        'en-US': '- Includes 1 bowl',
        'de-DE': '- Enthält 1 Schüssel',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Brown:#a52a2a',
        'de-DE': 'Braun:#a52a2a',
        'en-US': 'Brown:#a52a2a',
      }),
    ]);

export default rusticBowl01;
