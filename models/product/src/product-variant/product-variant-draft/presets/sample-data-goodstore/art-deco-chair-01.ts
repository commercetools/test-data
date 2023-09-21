import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const artDecoChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ADARM-04')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_423223088-xpBtdxux.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly on delivery',
        'de-DE': '- Montage bei Lieferung',
        'en-US': '- Assembly on delivery',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
        'en-US':
          "An art deco chair with metal legs has a sleek, streamlined design that exudes sophistication and elegance. The chair has a comfortable padded seat and backrest, with durable cotton upholstery providing a soft and luxurious feel. The metal legs have a smooth finish that accentuates the chair's modern style. The chair features distinctive art deco elements such as angular shapes, bold lines, and geometric patterns. Overall, this chair is a striking piece of furniture that adds both style and comfort to any room.",
        'de-DE':
          'n Art-Deco-Stuhl mit Metallbeinen hat ein schlankes, stromlinienförmiges Design, das Raffinesse und Eleganz ausstrahlt. Der Stuhl hat einen bequem gepolsterten Sitz und eine Rückenlehne mit strapazierfähiger Baumwollpolsterung, die ein weiches und luxuriöses Gefühl vermittelt. Die Metallbeine haben eine glatte Oberfläche, die den modernen Stil des Stuhls betont. Der Stuhl weist markante Art-Deco-Elemente wie eckige Formen, kräftige Linien und geometrische Muster auf. Insgesamt ist dieser Stuhl ein markantes Möbelstück, das jedem Raum Stil und Komfort verleiht.',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Gray', 'de-DE': 'Grau', 'en-US': 'Gray' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#DAD7D0', 'de-DE': '#DAD7D0', 'en-US': '#DAD7D0' }),
    ]);

export default artDecoChair01;
