import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const traditionalThreeSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('TTSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(239900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(239900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(239900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670594-0wqoZ-dr.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670456-WsI7wbFD.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305671593-4T4P-rfg.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Three seater sofa\n- Velvet upholstery\n- Assembly on site',
        'en-GB': '- Three seater sofa\n- Velvet upholstery\n- Assembly on site',
        'de-DE': '- Dreisitzer\n- Samtbezug\n- Selbstmontage',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': '#09331c', 'en-GB': '#09331c', 'de-DE': '#09331c' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Emerald', 'en-GB': 'Emerald', 'de-DE': 'Emerald' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': '#202120', 'en-GB': '#202120', 'de-DE': '#202120' }),
      AttributeDraft.random().name('finishlabel').value({
        'en-US': 'Espresso',
        'en-GB': 'Espresso',
        'de-DE': 'Espresso',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.',
        'en-US':
          'A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.',
        'de-DE':
          'Das traditionelle Dreisitzer-Sofa ist ein klassisches und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich einen Hauch von Raffinesse verleiht. Das Sofa ist mit einem robusten Holzrahmen konzipiert, der auf Langlebigkeit und Stabilität ausgelegt ist und sicherstellt, dass das Sofa einer regelmäßigen Nutzung im Laufe der Zeit standhält.  Das Sofa ist mit einem smaragdfarbenem Stoff bezogen - ein wahrer Hingucker in jedem Raum. Der Stoff fühlt sich weich und angenehm an, sodass dem stilvollen Entspannen nichts mehr im Wege steht. Das Sofa ist mit zwei großen Kissen ausgestattet, die mit hochwertigem Schaumstoffmaterial gefüllt sind und bei längerem Sitzen hervorragenden Halt und Komfort bieten. Die Rückenlehne und die Armlehnen des Sofas sind mit einem weichen und plüschigen Material gefüllt, sodass Sie nach einem langen Tag in das Sofa sinken und sich entspannen können.  Das traditionelle Dreisitzer-Sofa ist ein vielseitiges Möbelstück, das eine Reihe von Einrichtungsstilen ergänzen kann, von klassisch und traditionell bis hin zu modern. Es kann mit einer Vielzahl von dekorativen Akzenten wie Kissen, Überwürfen und Teppichen kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen.  Das traditionelle Dreisitzer-Sofa aus smaragdgrünem Stoff ist ein zeitloses und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich sowohl Komfort als auch Stil verleiht. Sein klassisches Design, die hochwertigen Materialien und seine Funktionalität machen es zu einer funktionalen und stilvollen Wahl für jedes Zuhause.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#00FF00',
          label: { 'de-DE': 'Grün', 'en-GB': 'Green', 'en-US': 'Green' },
        }),
    ]);

export default traditionalThreeSeaterSofa01;
