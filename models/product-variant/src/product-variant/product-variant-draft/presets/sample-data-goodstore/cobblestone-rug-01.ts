import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cobblestoneRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CR-098')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(12999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(12999))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cobblestone%20Rug-n-Cz7uBo.jpeg'
        )
        .dimensions({ w: 7006, h: 2820 }),
    ])
    .attributes([
      AttributeDraft.random().name('product-description').value({
        'de-DE':
          'Der Cobblestone-Teppich kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Heimbüros. Es ist besonders beliebt in modernen und zeitgenössischen Einrichtungsstilen, wo sie dem Raum ein mutiges und grafisches Element hinzufügen können.  Insgesamt ist ein Teppich mit geometrischen Akzenten eine stilvolle und vielseitige Designwahl, die jedem Raum im Haus visuelles Interesse und Textur verleihen kann.',
        'en-GB':
          'The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.',
        'en-US':
          'The Cobblestone Rug can be used in a variety of spaces, from living rooms to bedrooms to home offices. It is especially popular in modern and contemporary decor styles, where they can add a bold and graphic element to the space.  Overall, a geometric accent rug is a stylish and versatile design choice that can add visual interest and texture to any room in the home.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('productspec')
        .value({ 'en-GB': '- 5ft x 3ft' }),
    ]);

export default cobblestoneRug01;
