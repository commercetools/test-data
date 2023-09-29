import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const smallWoodenBowl01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SWB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(399))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_37284922-oEA19cBG.jpeg'
        )
        .dimensions({ w: 3241, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_169211146-2dp5nmXG.jpeg'
        )
        .dimensions({ w: 5184, h: 3456 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_178553758-I0ZPe9BG.jpeg'
        )
        .dimensions({ w: 6144, h: 4096 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_128176135-DWYrV7te.jpeg'
        )
        .dimensions({ w: 7696, h: 5133 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes 1 bowl',
          'en-US': '- Includes 1 bowl',
          'de-DE': '- Enthält 1 Schüssel',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.',
          'en-US':
            'This wooden bowl is designed to hold small servings of food or other small items. It is ideal for serving small portions of food, such as nuts, candies, dips, or sauces.  It can also be used as a decorative item, as its natural material and unique texture add warmth and character to any setting. It can be used as a standalone piece or as part of a larger set, and can be styled with other wooden pieces to create a cohesive look.  The bowl is easy to clean and maintain, and can be washed with soap and water or wiped clean with a damp cloth. It should be allowed to dry thoroughly before use to prevent warping or cracking.  Overall, a small round wooden bowl is a versatile and functional dish that adds a touch of natural warmth and character to any setting. Its simplicity and durability make it a staple in many kitchens and dining rooms.',
          'de-DE':
            'Diese Holzschale ist so konzipiert, dass sie kleinere Snacks oder andere Gegenstände fassen kann. Sie eignet sich ideal zum Servieren kleiner Portionen wie Nüsse, Bonbons, Dips oder Saucen.  Sie kann aber auch als Dekorationsartikel verwendet werden, da ihr natürliches Material und die einzigartige Textur jeder Umgebung Wärme und Charakter verleihen. Die Schale kann eigenständig oder als Teil eines größeren Sets ihre Wirkung entfalten. Sie kann zudem mit anderen Holz-Accessoires gestylt werden, um einen zusammenhängenden Look zu schaffen.  Die Schale ist leicht zu reinigen und zu pflegen und kann mit Wasser und Seife gewaschen oder mit einem feuchten Tuch abgewischt werden. Sie sollte vor Gebrauch gründlich trocknen, um ein Verziehen oder Reißen zu vermeiden.  Eine kleine runde Holzschale ist ein vielseitiges und funktionales Geschirr- oder Dekorations-Element, das jeder Umgebung einen Hauch von natürlicher Wärme und Charakter verleiht. Die Schlichtheit und Haltbarkeit machen sie zur perfekten Ergänzung in vielen Küchen und Esszimmern.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
    ]);

export default smallWoodenBowl01;
