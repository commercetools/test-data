import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const patternedPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ADPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1499))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Mahogany%20Pillow%20Cove-Jn9Kw_NO.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Machine washable\n- Pillow not included',
          'en-US': '- Machine washable\n- Pillow not included',
          'de-DE':
            '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#9c9087', 'de-DE': '#9c9087', 'en-US': '#9c9087' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Mauve', 'de-DE': 'Mauve', 'en-US': 'Mauve' }),
      AttributeDraft.random().name('new-arrival').value(false),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.',
          'en-US':
            'An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.',
          'de-DE':
            'Ein Art-Deco-Samtkissenbezug mit geometrischem Muster ist ein luxuriöses und stilvolles Accessoire für jeden Raum in Ihrem Zuhause. Er ist aus weichem, plüschigem Samtstoff gefertigt, der sich weich und glatt anfühlt. Der Samt hat einen reichen, schimmernden Glanz, der dem Kissenbezug eine elegante und anspruchsvolle Note verleiht. Der Kissenbezug weist ein geometrisches Design auf, das vom Art-déco-Stil des frühen 20. Jahrhunderts inspiriert ist. Jahrhunderts inspiriert ist. Das Design umfasst kühne und eckige Formen. Der Kissenbezug wird oft als dekorativer Akzent für ein Bett, ein Sofa oder einen Sessel verwendet und kann jedem Raum im Haus einen Hauch von Glamour und Raffinesse verleihen. Er lässt sich mit anderen vom Art déco inspirierten Accessoires wie Lampen, Vasen und Wandbildern kombinieren, um ein stimmiges und stilvolles Gesamtbild zu schaffen. Der Samtstoff ist strapazierfähig und pflegeleicht und kann mit einem feuchten Tuch oder Schwamm abgewischt werden. Er sollte regelmäßig an der Luft getrocknet und aufgefächert werden, damit er seine Form und Struktur behält.  Insgesamt ist ein Art-Déco-Samtkissenbezug mit geometrischem Muster ein luxuriöses und stilvolles Accessoire, das die Schönheit und den Komfort eines jeden Raums im Haus verbessern kann.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#A020F0',
          label: { 'de-DE': 'Lila', 'en-GB': 'Purple', 'en-US': 'Purple' },
        }),
    ]);

export default patternedPillowCover01;
