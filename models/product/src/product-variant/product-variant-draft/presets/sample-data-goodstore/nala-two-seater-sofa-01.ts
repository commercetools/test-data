import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const nalaTwoSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('NTSS-01')
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
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969001-vPDGxuEM.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286520-Il0fLxCr.jpeg'
        )
        .dimensions({ w: 6000, h: 3376 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#5B5858', 'de-DE': '#5B5858', 'en-US': '#5B5858' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#090909', 'de-DE': '#090909', 'en-US': '#090909' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Steel Gray',
        'de-DE': 'Stahlgrau',
        'en-US': 'Steel Gray',
      }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Ebony', 'de-DE': 'Ebenholz', 'en-US': 'Ebony' }),
      AttributeDraft.random().name('new-arrival').value(true),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Two-seater sofa\n- Cotton linen upholstery',
        'de-DE': '- Zweisitzer-Sofa\n- Polsterung aus Baumwollleinen',
        'en-US': '- Two-seater sofa\n- Cotton linen upholstery',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
    ]);

export default nalaTwoSeaterSofa01;
