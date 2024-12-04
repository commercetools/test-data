import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sunnaiGlassBowl01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .key('sunnaiGlassBowl01')
    .sku('SGB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('799EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(799))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('799GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(799))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('799USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(799))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-1.1.jpeg'
        )
        .dimensions({ w: 5381, h: 3739 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('type')
        .value([{ 'en-GB': 'Round' }]),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Transparent:transparent',
        'de-DE': 'Transparent:transparent',
        'en-US': 'Transparent:transparent',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Glass:transparent',
        'de-DE': 'Glas:transparent',
        'en-US': 'Glass:transparent',
      }),
    ]);

export default sunnaiGlassBowl01;
