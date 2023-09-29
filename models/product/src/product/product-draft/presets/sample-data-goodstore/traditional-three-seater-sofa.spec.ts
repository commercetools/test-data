import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import traditionalThreeSeaterSofa from './traditional-three-seater-sofa';

describe(`with traditionalThreeSeaterSofa preset`, () => {
  it(`should return a traditionalThreeSeaterSofa preset`, () => {
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
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Das traditionelle Dreisitzer-Sofa ist ein klassisches und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich einen Hauch von Raffinesse verleiht. Das Sofa ist mit einem robusten Holzrahmen konzipiert, der auf Langlebigkeit und Stabilität ausgelegt ist und sicherstellt, dass das Sofa einer regelmäßigen Nutzung im Laufe der Zeit standhält.  Das Sofa ist mit einem smaragdfarbenem Stoff bezogen - ein wahrer Hingucker in jedem Raum. Der Stoff fühlt sich weich und angenehm an, sodass dem stilvollen Entspannen nichts mehr im Wege steht. Das Sofa ist mit zwei großen Kissen ausgestattet, die mit hochwertigem Schaumstoffmaterial gefüllt sind und bei längerem Sitzen hervorragenden Halt und Komfort bieten. Die Rückenlehne und die Armlehnen des Sofas sind mit einem weichen und plüschigen Material gefüllt, sodass Sie nach einem langen Tag in das Sofa sinken und sich entspannen können.  Das traditionelle Dreisitzer-Sofa ist ein vielseitiges Möbelstück, das eine Reihe von Einrichtungsstilen ergänzen kann, von klassisch und traditionell bis hin zu modern. Es kann mit einer Vielzahl von dekorativen Akzenten wie Kissen, Überwürfen und Teppichen kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen.  Das traditionelle Dreisitzer-Sofa aus smaragdgrünem Stoff ist ein zeitloses und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich sowohl Komfort als auch Stil verleiht. Sein klassisches Design, die hochwertigen Materialien und seine Funktionalität machen es zu einer funktionalen und stilvollen Wahl für jedes Zuhause.",
          "en": undefined,
          "en-GB": "A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          "en-US": "A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          "fr": undefined,
        },
        "key": "traditional-three-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Dreisitzer
      - Samtbezug
      - Selbstmontage",
                "en-GB": "- Three seater sofa
      - Velvet upholstery
      - Assembly on site",
                "en-US": "- Three seater sofa
      - Velvet upholstery
      - Assembly on site",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#09331c",
                "en-GB": "#09331c",
                "en-US": "#09331c",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Emerald",
                "en-GB": "Emerald",
                "en-US": "Emerald",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#202120",
                "en-GB": "#202120",
                "en-US": "#202120",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Espresso",
                "en-GB": "Espresso",
                "en-US": "Espresso",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#00FF00",
                "label": {
                  "de-DE": "Grün",
                  "en-GB": "Green",
                  "en-US": "Green",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670594-0wqoZ-dr.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670456-WsI7wbFD.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305671593-4T4P-rfg.jpeg",
            },
          ],
          "key": undefined,
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 239900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 239900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 239900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "TTSS-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Traditionelles Dreisitzer-Sofa",
          "en": undefined,
          "en-GB": "Traditional Three Seater Sofa",
          "en-US": "Traditional Three Seater Sofa",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "traditionelles-dreisitzer-sofa",
          "en": undefined,
          "en-GB": "traditional-three-seater-sofa",
          "en-US": "traditional-three-seater-sofa",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a traditionalThreeSeaterSofa preset when built for graphql`, () => {
    const traditionalThreeSeaterSofaPresetGraphql =
      traditionalThreeSeaterSofa().buildGraphql<TProductDraftGraphql>();
    expect(traditionalThreeSeaterSofaPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "sofas",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Das traditionelle Dreisitzer-Sofa ist ein klassisches und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich einen Hauch von Raffinesse verleiht. Das Sofa ist mit einem robusten Holzrahmen konzipiert, der auf Langlebigkeit und Stabilität ausgelegt ist und sicherstellt, dass das Sofa einer regelmäßigen Nutzung im Laufe der Zeit standhält.  Das Sofa ist mit einem smaragdfarbenem Stoff bezogen - ein wahrer Hingucker in jedem Raum. Der Stoff fühlt sich weich und angenehm an, sodass dem stilvollen Entspannen nichts mehr im Wege steht. Das Sofa ist mit zwei großen Kissen ausgestattet, die mit hochwertigem Schaumstoffmaterial gefüllt sind und bei längerem Sitzen hervorragenden Halt und Komfort bieten. Die Rückenlehne und die Armlehnen des Sofas sind mit einem weichen und plüschigen Material gefüllt, sodass Sie nach einem langen Tag in das Sofa sinken und sich entspannen können.  Das traditionelle Dreisitzer-Sofa ist ein vielseitiges Möbelstück, das eine Reihe von Einrichtungsstilen ergänzen kann, von klassisch und traditionell bis hin zu modern. Es kann mit einer Vielzahl von dekorativen Akzenten wie Kissen, Überwürfen und Teppichen kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen.  Das traditionelle Dreisitzer-Sofa aus smaragdgrünem Stoff ist ein zeitloses und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich sowohl Komfort als auch Stil verleiht. Sein klassisches Design, die hochwertigen Materialien und seine Funktionalität machen es zu einer funktionalen und stilvollen Wahl für jedes Zuhause.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          },
        ],
        "key": "traditional-three-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-US":"- Three seater sofa\\n- Velvet upholstery\\n- Assembly on site","en-GB":"- Three seater sofa\\n- Velvet upholstery\\n- Assembly on site","de-DE":"- Dreisitzer\\n- Samtbezug\\n- Selbstmontage"}",
            },
            {
              "name": "color",
              "value": "{"en-US":"#09331c","en-GB":"#09331c","de-DE":"#09331c"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-US":"Emerald","en-GB":"Emerald","de-DE":"Emerald"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"#202120","en-GB":"#202120","de-DE":"#202120"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-US":"Espresso","en-GB":"Espresso","de-DE":"Espresso"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670594-0wqoZ-dr.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305670456-WsI7wbFD.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305671593-4T4P-rfg.jpeg",
            },
          ],
          "key": undefined,
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 239900,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 239900,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 239900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "TTSS-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Traditional Three Seater Sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Traditional Three Seater Sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Traditionelles Dreisitzer-Sofa",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "traditional-three-seater-sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "traditional-three-seater-sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "traditionelles-dreisitzer-sofa",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
