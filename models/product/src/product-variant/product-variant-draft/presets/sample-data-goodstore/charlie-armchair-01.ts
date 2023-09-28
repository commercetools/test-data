import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const charlieArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CARM-023')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(49900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(49900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(49900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_303920112-eT2e5OWo.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
        'en-US': '- Dry clean only',
      }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Terracotta',
        'de-DE': 'Terrakotta',
        'en-US': 'Terracotta',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#D57912', 'de-DE': '#D57912', 'en-US': '#D57912' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Cedar', 'de-DE': 'Zeder', 'en-US': 'Cedar' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#ECD0B2', 'de-DE': '#ECD0B2', 'en-US': '#ECD0B2' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFA500',
          label: { 'de-DE': 'Orange', 'en-GB': 'Orange', 'en-US': 'Orange' },
        }),
    ]);

export default charlieArmchair01;
