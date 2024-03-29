import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernGlamDresser01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MGD-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(179900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(179900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(179900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.3.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': 'silver', 'en-GB': '#8A8071', 'de-DE': 'silver' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Suede', 'en-GB': 'Suede', 'de-DE': 'Suede' }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
        'en-GB':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
        'de-DE':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#C0C0C0',
          label: { 'de-DE': 'Silber', 'en-GB': 'Silver', 'en-US': 'Silver' },
        }),
    ]);

export default modernGlamDresser01;
