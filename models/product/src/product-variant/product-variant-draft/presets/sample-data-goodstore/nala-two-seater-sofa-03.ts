import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const nalaTwoSeaterSofa03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('NTSS-03')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(129900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-3.1.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-3.2.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#B13704', 'de-DE': '#B13704', 'en-US': '#B13704' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Terracotta',
        'de-DE': 'Terrakotta',
        'en-US': 'Terracotta',
      }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Ebony', 'de-DE': 'Ebenholz', 'en-US': 'Ebony' }),
      AttributeDraft.random().name('new-arrival').value(true),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#090909', 'de-DE': '#090909', 'en-US': '#090909' }),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Two-seater sofa\n- Cotton linen upholstery',
        'de-DE': '- Zweisitzer-Sofa\n- Polsterung aus Baumwollleinen',
        'en-US': '- Two-seater sofa\n- Cotton linen upholstery',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFA500',
          label: { 'de-DE': 'Orange', 'en-GB': 'Orange', 'en-US': 'Orange' },
        }),
    ]);

export default nalaTwoSeaterSofa03;
