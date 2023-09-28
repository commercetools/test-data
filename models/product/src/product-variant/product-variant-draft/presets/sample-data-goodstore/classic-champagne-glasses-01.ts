import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const classicChampagneGlasses01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ccg-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(3299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(3299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(3299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_342788836-I5IBdTcG.jpeg'
        )
        .dimensions({ w: 5468, h: 4101 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_322879771-EwOoSpMl.jpeg'
        )
        .dimensions({ w: 2571, h: 4149 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_343603921-pub5DItO.jpeg'
        )
        .dimensions({ w: 3643, h: 5464 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Set of 5 glasses\n- Premium glass\n- Fragile',
        'en-GB': '- Set of 5 glasses\n- Premium glass\n- Fragile',
        'de-DE': '- Set aus 5 Gläsern\n- Hochwertiges Glas\n- Zerbrechlich',
      }),
      AttributeDraft.random().name('new-arrival').value('true'),
    ]);

export default classicChampagneGlasses01;
