import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const mayaPillowCover02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MPC-07')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(899))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(899))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sanna%20Pillow%20Cover-SSjlYrzF.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Does not include pillow',
        'en-US': '- Machine washable\n- Does not include pillow',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#c2b78c', 'de-DE': '#c2b78c', 'en-US': '#c2b78c' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Beige', 'de-DE': 'Beige', 'en-US': 'Beige' }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          "A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.",
        'en-US':
          "A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.",
        'de-DE':
          'Ein brauner Mikrofaser-Kissenbezug ist ein weicher und bequemer Kissenbezug aus synthetischen Fasern. Das Mikrofasermaterial ist so konzipiert, dass es sich weich und seidig anfühlt und ein komfortables und gemütliches Schlaferlebnis bietet. Die braune Farbe des Kissenbezugs ist typischerweise warm und einladend und schafft eine gemütliche und entspannende Atmosphäre in einem Schlafzimmer. Außerdem ist sie eine vielseitige Farbe, die sich gut mit einer Vielzahl anderer Farben und Einrichtungsstilen kombinieren lässt. Mikrofaser-Kissenbezüge sind für ihre Langlebigkeit und Pflegeleichtigkeit bekannt. Sie sind in der Regel resistent gegen Falten und Schrumpfung, was sie ideal für vielbeschäftigte Haushalte macht. Sie sind außerdem hypoallergen, was sie zu einer guten Wahl für Menschen mit Allergien oder Empfindlichkeiten macht.  Insgesamt ist ein brauner Mikrofaser-Kissenbezug eine praktische und bequeme Wahl für jedes Schlafzimmer. Er ist weich, strapazierfähig und pflegeleicht und bietet eine gemütliche und einladende Schlafumgebung für eine erholsame Nachtruhe.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default mayaPillowCover02;
