import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const minimalistCedarNightstand01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CNS-0434')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(7900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(7900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(7900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428984-nJKPXWcM.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428985-2CMGhCT8.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532429244-e0M2rOCa.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Cedar', 'de-DE': 'Zeder', 'en-US': 'Cedar' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#8C9585', 'de-DE': '#8C9585', 'en-US': '#8C9585' }),
    ]);

export default minimalistCedarNightstand01;
