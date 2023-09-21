import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const fawnArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('FARM-05')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Fawn%20Armchair-aPr3Rbhn.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Leather requires special care',
          'de-DE': '- Leder erfordert besondere Pflege',
          'en-US': '- Leather requires special care',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            "An art deco leather chair with ebony legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with the leather upholstery providing a soft and luxurious feel. The ebony legs are long and tapered, with a smooth finish that accentuates the chair's modern style. The chair also features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair would be a striking piece of furniture that adds both style and comfort to any room.",
          'en-US':
            "An art deco leather chair with ebony legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with the leather upholstery providing a soft and luxurious feel. The ebony legs are long and tapered, with a smooth finish that accentuates the chair's modern style. The chair also features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair would be a striking piece of furniture that adds both style and comfort to any room.",
          'de-DE':
            'Ein Art-Deco-Lederstuhl mit Ebenholzbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne, wobei die Lederpolsterung ein weiches und luxuriöses Gefühl vermittelt. Die Beine aus Ebenholz sind lang und konisch zulaufend, mit einer glatten Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl weist auch markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster auf. Insgesamt wäre dieser Stuhl ein markantes Möbelstück, das jedem Raum sowohl Stil als auch Komfort verleiht.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF8ED', 'de-DE': '#FFF8ED', 'en-US': '#FFF8ED' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({
          'en-GB': 'White Leather',
          'de-DE': 'Weißes Leder',
          'en-US': 'White Leather',
        }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({
          'en-GB': 'Chestnut',
          'de-DE': 'Kastanie',
          'en-US': 'Chestnut',
        }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#1B1101', 'de-DE': '#1B1101', 'en-US': '#1B1101' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default fawnArmchair01;
