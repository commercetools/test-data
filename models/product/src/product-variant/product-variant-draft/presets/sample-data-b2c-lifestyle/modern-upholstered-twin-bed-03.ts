import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

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
      AttributeDraft.random().name('color').value({
        'en-US': 'Gray:#808080',
        'en-GB': 'Grey:#808080',
        'de-DE': 'Grau:#808080',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Lightslate Gray:#778899',
        'en-GB': 'Lightslate Grey:#778899',
        'de-DE': 'Helles Schiefer grau:#778899',
      }),
    ]);

export default modernUpholsteredTwinBed03;
