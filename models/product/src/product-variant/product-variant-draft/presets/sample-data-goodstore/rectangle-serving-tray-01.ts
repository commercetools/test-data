import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rectangleServingTray01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RST-02')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rectangle_Serving_Tray-1.1.jpeg'
        )
        .dimensions({ w: 6048, h: 4024 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Hand wash only\n- Natural wood',
        'en-US': '- Hand wash only\n- Natural wood',
        'de-DE': '- Handwäsche nur\n- Naturholz',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Brown:#a52a2a',
        'de-DE': 'Braun:#a52a2a',
        'en-US': 'Brown:#a52a2a',
      }),
    ]);

export default rectangleServingTray01;
