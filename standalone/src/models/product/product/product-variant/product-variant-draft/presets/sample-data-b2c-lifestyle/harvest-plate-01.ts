import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const harvestPlate01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('harvestPlate01')
    .sku('HP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1399EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1399GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1399USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1399))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Harvest_Plate-1.1.jpeg'
        )
        .dimensions({ w: 4421, h: 3812 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 plate',
        'de-DE': '- Enthält 1 Teller',
        'en-US': '- Includes 1 plate',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
        'en-US': 'White:#FFFFFF',
      }),
    ]);

export default harvestPlate01;
