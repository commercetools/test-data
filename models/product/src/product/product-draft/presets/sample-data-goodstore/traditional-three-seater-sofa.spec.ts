import type { TProductDraft } from '../../../types';
import traditionalThreeSeaterSofa from './traditional-three-seater-sofa';
describe(`with traditionalThreeSeaterSofa preset`, () => {
  it('should return a sample traditionalThreeSeaterSofa product preset', () => {
    const traditionalThreeSeaterSofaPreset =
      traditionalThreeSeaterSofa().build<TProductDraft>();
    expect(traditionalThreeSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          }
        ],
      "categoryOrderHints": {},
      "key": "traditional-three-seater-sofa",
      "name": {
            "en-US": "Traditional Three Seater Sofa",
            "en-GB": "Traditional Three Seater Sofa",
            "de-DE": "Traditionelles Dreisitzer-Sofa"
          },
      "metaTitle": {
            "en-US": "",
            "de-DE": ""
          },
      "searchKeywords": {},
      "slug": {
            "en-US": "traditional-three-seater-sofa",
            "de-DE": "traditionelles-dreisitzer-sofa",
            "en-GB": "traditional-three-seater-sofa"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"productspec","value":{"en-US":"- Three seater sofa\n- Velvet upholstery\n- Assembly on site","en-GB":"- Three seater sofa\n- Velvet upholstery\n- Assembly on site","de-DE":"- Dreisitzer\n- Samtbezug\n- Selbstmontage"}},{"name":"color","value":{"en-US":"#09331c","en-GB":"#09331c","de-DE":"#09331c"}},{"name":"colorlabel","value":{"en-US":"Emerald","en-GB":"Emerald","de-DE":"Emerald"}},{"name":"finish","value":{"en-US":"#202120","en-GB":"#202120","de-DE":"#202120"}},{"name":"finishlabel","value":{"en-US":"Espresso","en-GB":"Espresso","de-DE":"Espresso"}},{"name":"product-description","value":{"en-GB":"A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.","en-US":"A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.","de-DE":"Ein traditionelles Dreisitzer-Sofa ist ein klassisches und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich einen Hauch von Raffinesse verleihen kann. Das Sofa verfügt über einen robusten Holzrahmen, der auf Langlebigkeit und Stabilität ausgelegt ist und sicherstellt, dass das Sofa einer regelmäßigen Nutzung im Laufe der Zeit standhält.  Das Sofa ist mit einem smaragdfarbenen Stoff bezogen - ein wahrer Blickfang in jedem Raum. Der Stoff fühlt sich weich und angenehm an, sodass Sie sich stilvoll entspannen können. Das Sofa ist mit zwei großen Kissen ausgestattet, die mit einem hochwertigen Schaumstoffmaterial gefüllt sind und bei längerem Sitzen hervorragenden Halt und Komfort bieten. Die Rückenlehne und die Armlehnen des Sofas sind mit einem weichen und plüschigen Material gefüllt, sodass Sie nach einem langen Tag in das Sofa sinken und sich entspannen können.  Das traditionelle Dreisitzer-Sofa ist ein vielseitiges Möbelstück, das eine Reihe von Einrichtungsstilen ergänzen kann, von klassisch und traditionell bis hin zu modern. Es kann mit einer Vielzahl von dekorativen Akzenten wie Kissen, Überwürfen und Teppichen kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen.  Insgesamt ist ein traditionelles Dreisitzer-Sofa aus smaragdgrünem Stoff ein zeitloses und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich sowohl Komfort als auch Stil verleihen kann. Sein klassisches Design, hochwertige Materialien und praktische Funktionen machen es zu einer funktionalen und stilvollen Wahl für jedes Zuhause."}},{"name":"color-filter","value":{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}}],
        },
        "variants": [

       ]
      }
    `);
  });
});
