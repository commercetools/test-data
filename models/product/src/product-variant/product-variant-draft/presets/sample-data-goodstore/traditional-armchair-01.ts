import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const traditionalArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('TARM-034')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(29900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688619-r47M4s9Q.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305687866-ED2hLSUD.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688508-6hRWGih2.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Cotton upholstery',
        'en-US': '- Cotton upholstery',
        'de-DE': '- Baumwollpolsterung',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#D0C1B0', 'de-DE': '#D0C1B0', 'en-US': '#D0C1B0' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Eggshell',
        'de-DE': 'Eierschale',
        'en-US': 'Eggshell',
      }),
    ]);

export default traditionalArmchair01;
