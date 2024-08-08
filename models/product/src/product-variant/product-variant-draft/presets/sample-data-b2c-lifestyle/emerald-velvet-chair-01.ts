import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const emeraldVelvetChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('VARM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Emerald_Velvet_Chair-1.1.jpeg'
        )
        .dimensions({ w: 6000, h: 4800 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
        'en-US': '- Dry clean only',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Green:#008000',
        'de-DE': 'Grün:#008000',
        'en-US': 'Green:#008000',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Burlywood:#deb887',
        'de-DE': 'Burlywood:#deb887',
        'en-US': 'Burlywood:#deb887',
      }),
    ]);

export default emeraldVelvetChair01;
