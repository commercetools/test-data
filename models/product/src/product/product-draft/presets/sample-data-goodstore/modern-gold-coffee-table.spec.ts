import type { TProductDraft } from '../../../types';
import modernGoldCoffeeTable from './modern-gold-coffee-table';

describe(`with modernGoldCoffeeTable preset`, () => {
  it(`should return a modernGoldCoffeeTable preset`, () => {
    const modernGoldCoffeeTablePreset =
      modernGoldCoffeeTable().build<TProductDraft>();
    expect(modernGoldCoffeeTablePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tables",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Der moderne goldene Couchtisch mit 2 Ebenen aus Quarzplatten ist ein atemberaubendes und stilvolles Möbelstück, das jedes Wohnzimmer oder jeden Sitzbereich aufwerten kann. Der Tisch zeichnet sich durch ein schlankes und stromlinienförmiges Design aus, mit klaren Linien und minimalistischen Details.  Der Couchtisch verfügt über ein robustes Metallgestell, das in einer luxuriösen Goldfarbe ausgeführt ist und einen Hauch von Raffinesse und Glamour vermittelt. Das Gestell ist so konzipiert, dass es zwei Ebenen von Tischplatten trägt, die beide aus hochwertigem Quarzmaterial bestehen. Die Quarz-Tischplatten sind rechteckig geschnitten und haben eine glatte und glänzende Oberfläche, die dem Tisch einen Hauch von Eleganz verleiht. Die zwei Ebenen der Tischplatten bieten reichlich Ablage- und Ausstellungsfläche, so dass Sie dekorative Gegenstände wie Bücher, Kerzen oder Vasen präsentieren können, während Sie gleichzeitig genügend Platz für Getränke und Snacks haben. Das zweistufige Design verleiht dem Tisch auch visuelles Interesse und Dimensionen und schafft einen einzigartigen und auffälligen Look. Der moderne Couchtisch in Gold ist ein vielseitiges Möbelstück, das zu einer Reihe von Einrichtungsstilen passt, von modern und minimalistisch bis hin zu traditionell und eklektisch. Er kann mit einer Vielzahl von Sitzgelegenheiten kombiniert werden, von Sofas und Stühlen bis hin zu Bänken und Hockern, um einen zusammenhängenden und stilvollen Wohnbereich zu schaffen. Insgesamt ist ein moderner goldener Couchtisch ein schickes und elegantes Möbelstück, das jedem Wohnzimmer oder jeder Sitzecke einen Hauch von Luxus und Raffinesse verleihen kann. Sein schlankes Design, die hochwertigen Materialien und die praktischen Funktionen machen ihn zu einer funktionalen und stilvollen Wahl für jedes Zuhause.",
          "en": undefined,
          "en-GB": "A modern gold coffee table with 2 tiers of quartz table tops is a stunning and stylish piece of furniture that can elevate the look of any living room or sitting area. The table is characterized by a sleek and streamlined design, with clean lines and minimalistic details.  The coffee table features a sturdy metal frame that is finished in a luxurious gold color, providing a touch of sophistication and glamour. The frame is designed to support two tiers of table tops, both made of high-quality quartz material. The quartz table tops are cut in a rectangular shape, with a smooth and glossy surface that adds a touch of elegance to the table.  The two tiers of table tops provide ample storage and display space, allowing you to showcase decorative items such as books, candles, or vases, while still providing plenty of room for drinks and snacks. The two-tier design also adds visual interest and dimension to the table, creating a unique and eye-catching look.  The modern gold coffee table is a versatile piece of furniture that can complement a range of interior design styles, from contemporary and minimalist to more traditional and eclectic. It can be paired with a variety of seating options, from sofas and chairs to benches and stools, to create a cohesive and stylish living space.  Overall, a modern gold coffee table is a chic and elegant piece of furniture that can add a touch of luxury and sophistication to any living room or sitting area. Its sleek design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          "en-US": "A modern gold coffee table with 2 tiers of quartz table tops is a stunning and stylish piece of furniture that can elevate the look of any living room or sitting area. The table is characterized by a sleek and streamlined design, with clean lines and minimalistic details.  The coffee table features a sturdy metal frame that is finished in a luxurious gold color, providing a touch of sophistication and glamour. The frame is designed to support two tiers of table tops, both made of high-quality quartz material. The quartz table tops are cut in a rectangular shape, with a smooth and glossy surface that adds a touch of elegance to the table.  The two tiers of table tops provide ample storage and display space, allowing you to showcase decorative items such as books, candles, or vases, while still providing plenty of room for drinks and snacks. The two-tier design also adds visual interest and dimension to the table, creating a unique and eye-catching look.  The modern gold coffee table is a versatile piece of furniture that can complement a range of interior design styles, from contemporary and minimalist to more traditional and eclectic. It can be paired with a variety of seating options, from sofas and chairs to benches and stools, to create a cohesive and stylish living space.  Overall, a modern gold coffee table is a chic and elegant piece of furniture that can add a touch of luxury and sophistication to any living room or sitting area. Its sleek design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          "fr": undefined,
        },
        "key": "modern-gold-coffee-table",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "de-DE": "white",
                "en-GB": "white",
                "en-US": "white",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "White",
                "en-GB": "White",
                "en-US": "White",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "gold",
                "en-GB": "gold",
                "en-US": "gold",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            },
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Length: 5 feet
      - Width: 3 feet
      - Height: 2 feet
      - Tables made of plastic laminate on manufactured wood
      - Gold finish on legs
      - Preassembled",
                "en-GB": "- Length: 5 feet
      - Width: 3 feet
      - Height: 2 feet
      - Tables made of plastic laminate on manufactured wood
      - Gold finish on legs
      - Preassembled",
                "en-US": "- Length: 5 feet
      - Width: 3 feet
      - Height: 2 feet
      - Tables made of plastic laminate on manufactured wood
      - Gold finish on legs
      - Preassembled",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFF",
                "label": {
                  "de-DE": "Weiss",
                  "en-GB": "White",
                  "en-US": "White",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.4.jpeg",
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
                "centAmount": 25999,
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
                "centAmount": 25999,
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
                "centAmount": 25999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "GMCT-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Moderner Gold Couchtisch",
          "en": undefined,
          "en-GB": "Modern Gold Coffee Table",
          "en-US": "Modern Gold Coffee Table",
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
          "de-DE": "moderner-couchtisch-in-gold",
          "en": undefined,
          "en-GB": "modern-gold-coffee-table",
          "en-US": "modern-gold-coffee-table",
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

  it(`should return a modernGoldCoffeeTable preset when built for graphql`, () => {
    const modernGoldCoffeeTablePresetGraphql =
      modernGoldCoffeeTable().buildGraphql<TProductDraft>();
    expect(modernGoldCoffeeTablePresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "tables",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "collections",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "the-modernist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A modern gold coffee table with 2 tiers of quartz table tops is a stunning and stylish piece of furniture that can elevate the look of any living room or sitting area. The table is characterized by a sleek and streamlined design, with clean lines and minimalistic details.  The coffee table features a sturdy metal frame that is finished in a luxurious gold color, providing a touch of sophistication and glamour. The frame is designed to support two tiers of table tops, both made of high-quality quartz material. The quartz table tops are cut in a rectangular shape, with a smooth and glossy surface that adds a touch of elegance to the table.  The two tiers of table tops provide ample storage and display space, allowing you to showcase decorative items such as books, candles, or vases, while still providing plenty of room for drinks and snacks. The two-tier design also adds visual interest and dimension to the table, creating a unique and eye-catching look.  The modern gold coffee table is a versatile piece of furniture that can complement a range of interior design styles, from contemporary and minimalist to more traditional and eclectic. It can be paired with a variety of seating options, from sofas and chairs to benches and stools, to create a cohesive and stylish living space.  Overall, a modern gold coffee table is a chic and elegant piece of furniture that can add a touch of luxury and sophistication to any living room or sitting area. Its sleek design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Der moderne goldene Couchtisch mit 2 Ebenen aus Quarzplatten ist ein atemberaubendes und stilvolles Möbelstück, das jedes Wohnzimmer oder jeden Sitzbereich aufwerten kann. Der Tisch zeichnet sich durch ein schlankes und stromlinienförmiges Design aus, mit klaren Linien und minimalistischen Details.  Der Couchtisch verfügt über ein robustes Metallgestell, das in einer luxuriösen Goldfarbe ausgeführt ist und einen Hauch von Raffinesse und Glamour vermittelt. Das Gestell ist so konzipiert, dass es zwei Ebenen von Tischplatten trägt, die beide aus hochwertigem Quarzmaterial bestehen. Die Quarz-Tischplatten sind rechteckig geschnitten und haben eine glatte und glänzende Oberfläche, die dem Tisch einen Hauch von Eleganz verleiht. Die zwei Ebenen der Tischplatten bieten reichlich Ablage- und Ausstellungsfläche, so dass Sie dekorative Gegenstände wie Bücher, Kerzen oder Vasen präsentieren können, während Sie gleichzeitig genügend Platz für Getränke und Snacks haben. Das zweistufige Design verleiht dem Tisch auch visuelles Interesse und Dimensionen und schafft einen einzigartigen und auffälligen Look. Der moderne Couchtisch in Gold ist ein vielseitiges Möbelstück, das zu einer Reihe von Einrichtungsstilen passt, von modern und minimalistisch bis hin zu traditionell und eklektisch. Er kann mit einer Vielzahl von Sitzgelegenheiten kombiniert werden, von Sofas und Stühlen bis hin zu Bänken und Hockern, um einen zusammenhängenden und stilvollen Wohnbereich zu schaffen. Insgesamt ist ein moderner goldener Couchtisch ein schickes und elegantes Möbelstück, das jedem Wohnzimmer oder jeder Sitzecke einen Hauch von Luxus und Raffinesse verleihen kann. Sein schlankes Design, die hochwertigen Materialien und die praktischen Funktionen machen ihn zu einer funktionalen und stilvollen Wahl für jedes Zuhause.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A modern gold coffee table with 2 tiers of quartz table tops is a stunning and stylish piece of furniture that can elevate the look of any living room or sitting area. The table is characterized by a sleek and streamlined design, with clean lines and minimalistic details.  The coffee table features a sturdy metal frame that is finished in a luxurious gold color, providing a touch of sophistication and glamour. The frame is designed to support two tiers of table tops, both made of high-quality quartz material. The quartz table tops are cut in a rectangular shape, with a smooth and glossy surface that adds a touch of elegance to the table.  The two tiers of table tops provide ample storage and display space, allowing you to showcase decorative items such as books, candles, or vases, while still providing plenty of room for drinks and snacks. The two-tier design also adds visual interest and dimension to the table, creating a unique and eye-catching look.  The modern gold coffee table is a versatile piece of furniture that can complement a range of interior design styles, from contemporary and minimalist to more traditional and eclectic. It can be paired with a variety of seating options, from sofas and chairs to benches and stools, to create a cohesive and stylish living space.  Overall, a modern gold coffee table is a chic and elegant piece of furniture that can add a touch of luxury and sophistication to any living room or sitting area. Its sleek design, high-quality materials, and practical features make it a functional and stylish choice for any home.",
          },
        ],
        "key": "modern-gold-coffee-table",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"en-US":"white","en-GB":"white","de-DE":"white"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-US":"White","en-GB":"White","de-DE":"White"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"gold","en-GB":"gold","de-DE":"gold"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-US":"Gold","en-GB":"Gold","de-DE":"Gold"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- Length: 5 feet\\n- Width: 3 feet\\n- Height: 2 feet\\n- Tables made of plastic laminate on manufactured wood\\n- Gold finish on legs\\n- Preassembled","en-GB":"- Length: 5 feet\\n- Width: 3 feet\\n- Height: 2 feet\\n- Tables made of plastic laminate on manufactured wood\\n- Gold finish on legs\\n- Preassembled","de-DE":"- Length: 5 feet\\n- Width: 3 feet\\n- Height: 2 feet\\n- Tables made of plastic laminate on manufactured wood\\n- Gold finish on legs\\n- Preassembled"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#FFF","label":{"de-DE":"Weiss","en-GB":"White","en-US":"White"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.3.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Gold_Coffee_Table-1.4.jpeg",
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
                  "centAmount": 25999,
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
                  "centAmount": 25999,
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
                  "centAmount": 25999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "GMCT-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Modern Gold Coffee Table",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Moderner Gold Couchtisch",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Modern Gold Coffee Table",
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
            "locale": "en-GB",
            "value": "modern-gold-coffee-table",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "moderner-couchtisch-in-gold",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "modern-gold-coffee-table",
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
