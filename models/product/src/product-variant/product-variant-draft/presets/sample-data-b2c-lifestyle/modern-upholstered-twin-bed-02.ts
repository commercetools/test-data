import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernUpholsteredTwinBed02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MUTB-02')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(45000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(45000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(45000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.2.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.3.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-2.1.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
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
      AttributeDraft.random().name('finish').value({
        'en-US': 'Lightslate Gray:#778899',
        'en-GB': 'Lightslate Grey:#778899',
        'de-DE': 'Helles Schiefer grau:#778899',
      }),
      AttributeDraft.random().name('color').value({
        'en-US': 'Sea Green:#2E8B57',
        'en-GB': 'Sea Green:#2E8B57',
        'de-DE': 'See grün:#2E8B57',
      }),
    ]);

export default modernUpholsteredTwinBed02;
