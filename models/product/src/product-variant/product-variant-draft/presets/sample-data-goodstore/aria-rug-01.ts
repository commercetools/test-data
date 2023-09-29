import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ariaRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('AAR-34')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(12499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(12499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(12499))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419866-oorvaUqv.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419522-HuyvQGhQ.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419242-noY5_ut3.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419416-9KGitTwO.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
    ])
    .attributes([
      AttributeDraft.random().name('product-description').value({
        'de-DE':
          'Der Aria-Teppich ist ein Flächenteppich mit einem geometrischen Muster, das ein sich wiederholendes Design aus Formen und Linien aufweist, das sowohl modern als auch vielseitig ist. Es kann einem Raum visuelles Interesse und Textur verleihen und dabei helfen, einen Raum zu definieren und zu verankern.  Insgesamt ist ein Teppich mit geometrischem Muster eine vielseitige und stilvolle Wahl für jeden Raum. Sein mutiges und markantes Design kann einem Raum Charakter und Interesse verleihen, während seine weiche und komfortable Textur eine gemütliche und einladende Atmosphäre schaffen kann.',
        'en-GB':
          'The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.',
        'en-US':
          'The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFFFF0',
          label: { 'de-DE': 'Elfenbein', 'en-GB': 'Ivory', 'en-US': 'Ivory' },
        }),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- 5ft x 7ft',
        'en-US': '- Dry clean only\n- 5ft x 7ft',
        'de-DE': '- Nur chemische Reinigung\n- 5 Fuß x 7 Fuß',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#DED6D1', 'de-DE': '#DED6D1', 'en-US': '#DED6D1' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Ivory', 'de-DE': 'Elfenbein', 'en-US': 'Ivory' }),
    ]);

export default ariaRug01;
