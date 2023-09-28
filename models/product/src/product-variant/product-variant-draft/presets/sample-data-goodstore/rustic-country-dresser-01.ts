import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rusticCountryDresser01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RCD-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(159900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(159900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(159900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305725113--ZsI7lcq.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305725519-jQaojt01.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305724833-zQxn71Iv.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305726730-LruJzato.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-US':
            '- 3 small drawers and 4 large drawers\n- Nickel drawer handles\n- Assembled on site',
          'en-GB':
            '- 3 small drawers and 4 large drawers\n- Nickel drawer handles\n- Assembled on site',
          'de-DE':
            '- 3 small drawers and 4 large drawers\n- Nickel drawer handles\n- Assembled on site',
        }),
      AttributeDraft.random()
        .name('finish')
        .value({
          'en-US': 'lightgrey',
          'en-GB': '#C1B7A9',
          'de-DE': 'lightgrey',
        }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({
          'en-US': 'Limed Oak',
          'en-GB': 'Limed Oak',
          'de-DE': 'Limed Oak',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.',
          'en-US':
            'A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.',
          'de-DE':
            'Die rustikale Landhauskommode mit viel Stauraum ist ein charmantes und praktisches Möbelstück, das jedem Schlafzimmer oder Wohnzimmer Wärme und Charakter verleiht. Die stabile Kommode mit Holzrahmen ist im Vintage-Look gehalten und wirkt sowohl rustikal als auch einladend.  Die Kommode ist mit einer Reihe von Schubladen in verschiedenen Größen ausgestattet, die ausreichend Stauraum für Kleidung, Bettwäsche und andere Gegenstände bieten. Die Schubladen sind mit Schwalbenschwanzverbindungen und Gleitbeschlägen konstruiert, um sicherzustellen, dass sie langlebig und einfach zu bedienen sind. Die Schubladenfronten sind mit rustikalen Metallgriffen geschmückt, die den Charme und Charakter des Möbelstücks noch verstärken. Die Platte der Kommode bietet zusätzlichen Stauraum für dekorative Gegenstände wie Vasen, Kerzen oder Bilderrahmen.  Eine rustikale Landhauskommode schafft auf praktische und stilvolle Weise Stauraum für und verleiht jedem Schlaf- oder Wohnraum gleichzeitig Wärme und Charme. Die robuste Konstruktion und das schlichte Design machen sie zu einer funktionalen und schönen Ergänzung für jedes Zuhause mit rustikalem oder ländlichem Einrichtungsstil.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default rusticCountryDresser01;
