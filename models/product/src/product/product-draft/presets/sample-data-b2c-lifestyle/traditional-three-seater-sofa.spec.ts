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
                "de-DE": "Mittel meer grün:#3CB371",
                "en-GB": "Medium Sea Green:#3CB371",
                "en-US": "Medium Sea Green:#3CB371",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Sattel braun:#8b4513",
                "en-GB": "Saddle Brown:#8b4513",
                "en-US": "Saddle Brown:#8b4513",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.2.jpeg",
            },
          ],
          "key": "traditionalThreeSeaterSofa01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "239900EUR",
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
              "key": "239900GBP",
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
              "key": "239900USD",
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
        "description": [
          {
            "locale": "en-US",
            "value": "A traditional three-seater sofa is a classic and elegant piece of furniture that can add a touch of sophistication to any living room or sitting area. The sofa features a sturdy wooden frame that is designed to provide durability and stability, ensuring that the sofa can withstand regular use over time.  The sofa is upholstered in a rich emerald-colored fabric, providing a vibrant and eye-catching focal point in the room. The fabric is soft and comfortable to the touch, allowing you to relax and unwind in style.  The sofa is equipped with two large cushions, which are filled with a high-quality foam material, providing excellent support and comfort for extended periods of sitting. The backrest and armrests of the sofa are filled with a soft and plush material, allowing you to sink into the sofa and relax after a long day.  The traditional three-seater sofa is a versatile piece of furniture that can complement a range of interior design styles, from classic and traditional to more modern and eclectic. It can be paired with a variety of decorative accents, such as pillows, throws, and rugs, to create a cohesive and stylish living space.  Overall, a traditional three-seater sofa in emerald fabric is a timeless and elegant piece of furniture that can provide both comfort and style to any living room or sitting area. Its classic design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          },
          {
            "locale": "de-DE",
            "value": "Das traditionelle Dreisitzer-Sofa ist ein klassisches und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich einen Hauch von Raffinesse verleiht. Das Sofa ist mit einem robusten Holzrahmen konzipiert, der auf Langlebigkeit und Stabilität ausgelegt ist und sicherstellt, dass das Sofa einer regelmäßigen Nutzung im Laufe der Zeit standhält.  Das Sofa ist mit einem smaragdfarbenem Stoff bezogen - ein wahrer Hingucker in jedem Raum. Der Stoff fühlt sich weich und angenehm an, sodass dem stilvollen Entspannen nichts mehr im Wege steht. Das Sofa ist mit zwei großen Kissen ausgestattet, die mit hochwertigem Schaumstoffmaterial gefüllt sind und bei längerem Sitzen hervorragenden Halt und Komfort bieten. Die Rückenlehne und die Armlehnen des Sofas sind mit einem weichen und plüschigen Material gefüllt, sodass Sie nach einem langen Tag in das Sofa sinken und sich entspannen können.  Das traditionelle Dreisitzer-Sofa ist ein vielseitiges Möbelstück, das eine Reihe von Einrichtungsstilen ergänzen kann, von klassisch und traditionell bis hin zu modern. Es kann mit einer Vielzahl von dekorativen Akzenten wie Kissen, Überwürfen und Teppichen kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen.  Das traditionelle Dreisitzer-Sofa aus smaragdgrünem Stoff ist ein zeitloses und elegantes Möbelstück, das jedem Wohnzimmer oder Sitzbereich sowohl Komfort als auch Stil verleiht. Sein klassisches Design, die hochwertigen Materialien und seine Funktionalität machen es zu einer funktionalen und stilvollen Wahl für jedes Zuhause.",
          },
          {
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
              "value": "{"en-US":"Medium Sea Green:#3CB371","en-GB":"Medium Sea Green:#3CB371","de-DE":"Mittel meer grün:#3CB371"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.3.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.2.jpeg",
            },
          ],
          "key": "traditionalThreeSeaterSofa01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "239900EUR",
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
              "key": "239900GBP",
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
              "key": "239900USD",
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
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Traditional Three Seater Sofa",
          },
          {
            "locale": "en-GB",
            "value": "Traditional Three Seater Sofa",
          },
          {
            "locale": "de-DE",
            "value": "Traditionelles Dreisitzer-Sofa",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "traditional-three-seater-sofa",
          },
          {
            "locale": "en-GB",
            "value": "traditional-three-seater-sofa",
          },
          {
            "locale": "de-DE",
            "value": "traditionelles-dreisitzer-sofa",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
