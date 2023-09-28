import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const patternedPillowCover02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ADPC-7')
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
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Patterned%20Pillow%20Cov-8qpixl4F.jpeg'
        )
        .dimensions({ w: 6047, h: 4031 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Pillow not included',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Pillow not included',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#0f0f0f', 'de-DE': '#0f0f0f', 'en-US': '#0f0f0f' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Black', 'de-DE': 'Schwarz', 'en-US': 'Black' }),
      AttributeDraft.random().name('new-arrival').value(false),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.',
        'en-US':
          'An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.',
        'de-DE':
          'Ein Art-Deco-Kissenbezug aus Samt mit geometrischem Design ist ein luxuriöses und stilvolles Accessoire für jeden Raum im Haus. Es besteht aus weichem, plüschigem Samtstoff, der sich weich und glatt anfühlt. Der Samt hat einen satten, glänzenden Glanz, der dem Kissenbezug eine elegante und anspruchsvolle Note verleiht.  Der Kissenbezug verfügt über ein geometrisches Design, das vom Art-Deco-Stil des frühen 20. Jahrhunderts inspiriert ist. Das Design umfasst kühne und eckige Formen.  Der Kissenbezug wird oft als dekorativer Akzent für ein Bett, ein Sofa oder einen Akzentstuhl verwendet und kann jedem Raum im Haus einen Hauch von Glamour und Raffinesse verleihen. Es kann mit anderen Art-déco-inspirierten Accessoires wie Lampen, Vasen und Wandkunst kombiniert werden, um einen zusammenhängenden und stilvollen Look zu schaffen.  Der Samtstoff ist strapazierfähig und leicht zu reinigen und kann punktuell mit einem feuchten Tuch oder Schwamm gereinigt werden. Es sollte regelmäßig an der Luft getrocknet und aufgelockert werden, um seine Form und Textur zu erhalten.  Insgesamt ist ein Art-Deco-Kissenbezug aus Samt mit geometrischem Design ein luxuriöses und stilvolles Accessoire, das die Schönheit und den Komfort jedes Raums im Haus verbessern kann.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#000',
          label: { 'de-DE': 'Schwarz', 'en-GB': 'Black', 'en-US': 'Black' },
        }),
    ]);

export default patternedPillowCover02;
