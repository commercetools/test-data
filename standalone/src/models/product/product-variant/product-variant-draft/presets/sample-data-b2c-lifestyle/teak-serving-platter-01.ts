import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const teakServingPlatter01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('teakServingPlatter01')
    .sku('TST-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Teak_Serving_Platter-1.1.jpeg'
        )
        .dimensions({ w: 4331, h: 2389 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Made of natural teak\n- Hand wash only',
        'en-US': '- Made of natural teak\n- Hand wash only',
        'de-DE': '- Hergestellt aus natürlichem Teakholz\n- Handwäsche nur',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Brown:#a52a2a',
        'de-DE': 'Braun:#a52a2a',
        'en-US': 'Brown:#a52a2a',
      }),
    ]);

export default teakServingPlatter01;
