import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const modernUpholsteredTwinBed03 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('modernUpholsteredTwinBed03')
    .sku('MUTB-03')
    .prices([
      PriceDraft.presets
        .empty()
        .key('45000EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(45000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('45000GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(45000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('45000USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(45000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.2.jpeg'
        )
        .dimensions({ w: 4000, h: 4000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.3.jpeg'
        )
        .dimensions({ w: 4000, h: 4000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-3.1.jpeg'
        )
        .dimensions({ w: 4000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'en-GB':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'de-DE':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
      }),
      AttributeDraft.random().name('search-color').value('gray'),
      AttributeDraft.random().name('search-finish').value('gray'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Grey',
        'de-DE': 'Grau',
        'en-US': 'Gray',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Lightslate Grey',
        'de-DE': 'Helles Schiefer grau',
        'en-US': 'Lightslate Gray',
      }),
      AttributeDraft.random().name('color-code').value('#808080'),
      AttributeDraft.random().name('finish-code').value('#778899'),
    ]);

export default modernUpholsteredTwinBed03;
