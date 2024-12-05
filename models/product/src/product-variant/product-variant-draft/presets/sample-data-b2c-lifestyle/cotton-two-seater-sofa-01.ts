import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonTwoSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .key('cottonTwoSeaterSofa01')
    .sku('CTSS-0983')
    .prices([
      PriceDraft.presets
        .empty()
        .key('54900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(54900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('54900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(54900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('54900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(54900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 5035, h: 2969 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.3.jpeg'
        )
        .dimensions({ w: 1000, h: 637 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cotton_Two_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
        'en-US': 'White:#FFFFFF',
      }),
    ]);

export default cottonTwoSeaterSofa01;
