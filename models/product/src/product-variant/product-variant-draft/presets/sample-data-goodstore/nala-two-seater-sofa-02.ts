import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const nalaTwoSeaterSofa02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('NTSS-02')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(129900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-2.1.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Nala_Two_Seater_Sofa-2.2.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#335EB7', 'de-DE': '#335EB7', 'en-US': '#335EB7' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Royal Blue',
        'de-DE': 'Königsblau',
        'en-US': 'Royal Blue',
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
          key: '#0000FF',
          label: { 'de-DE': 'Blau', 'en-GB': 'Blue', 'en-US': 'Blue' },
        }),
    ]);

export default nalaTwoSeaterSofa02;
