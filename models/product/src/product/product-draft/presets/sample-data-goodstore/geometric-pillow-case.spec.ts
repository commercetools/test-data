import type { TProductDraft } from '../../../types';
import geometricPillowCase from './geometric-pillow-case';

describe(`with geometricPillowCase preset`, () => {
  it(`should return a geometricPillowCase preset`, () => {
    const geometricPillowCasePreset =
      geometricPillowCase().build<TProductDraft>();
    expect(geometricPillowCasePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-decor",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "bedding",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein geometrischer Kissenbezug für Zierkissen ist ein stilvolles und modernes Wohnaccessoire, das jedem Raum einen Hauch von visuellem Interesse verleihen kann. Der Kissenbezug besteht normalerweise aus einem weichen und strapazierfähigen Material wie Baumwolle, Leinen oder Polyester und weist ein kräftiges geometrisches Muster auf, das ein Gefühl von Tiefe und Dimension erzeugt.  Das geometrische Muster auf dem Kissenbezug wird normalerweise mit einer Vielzahl von Formen wie Dreiecken, Quadraten oder Sechsecken erstellt, die in einem sich wiederholenden Muster angeordnet sind. Der Kissenbezug verfügt über einen Reißverschluss, so dass er bei Bedarf einfach abgenommen und gewaschen werden kann.  Der geometrische Kissenbezug ist ein vielseitiges und stilvolles Accessoire, das verwendet werden kann, um eine Vielzahl von Einrichtungsstilen zu betonen, von modern und minimalistisch bis hin zu unkonventionell und vielseitig. Er ist perfekt, um andere gemusterte Dekorelemente in einem vielseitigen Raum zu ergänzen.  Insgesamt ist ein geometrischer Kissenbezug für Zierkissen ein stilvolles und vielseitiges Accessoire, das dazu beitragen kann, in jedem Raum ein zusammenhängendes und optisch interessantes Dekor zu schaffen. Das mutige und moderne Design, kombiniert mit weichen und langlebigen Materialien, machen ihn zu einem unverzichtbaren Accessoire für jedes Zuhause.",
          "en": undefined,
          "en-GB": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
          "en-US": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
          "fr": undefined,
        },
        "key": "geometric-pillow-case",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "de-DE": "silver",
                "en-GB": "silver",
                "en-US": "silver",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Silver",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            },
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
                "en-GB": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
                "en-US": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable
      ",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#C0C0C0",
                "label": {
                  "de-DE": "Silber",
                  "en-GB": "Silver",
                  "en-US": "Silver",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 5000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-1.2.jpeg",
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
                "centAmount": 1999,
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
                "centAmount": 1999,
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
                "centAmount": 1999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "GPC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Geometrischer Kissenbezug",
          "en": undefined,
          "en-GB": "Geometric Pillow Case",
          "en-US": "Geometric Pillow Case",
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
          "de-DE": "geometrischer-kissenbezug",
          "en": undefined,
          "en-GB": "geometric-pillow-case",
          "en-US": "geometric-pillow-case",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": {
                  "de-DE": "lightpink",
                  "en-GB": "lightpink",
                  "en-US": "lightpink",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Salmon Gold",
                  "en-GB": "Salmon Gold",
                  "en-US": "Salmon Gold",
                },
              },
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
                  "en-GB": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
                  "en-US": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable
      ",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#FFC0CB",
                  "label": {
                    "de-DE": "Rosa",
                    "en-GB": "Pink",
                    "en-US": "Pink",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-2.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-2.2.jpeg",
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
                  "centAmount": 1999,
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
                  "centAmount": 1999,
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
                  "centAmount": 1999,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "GPC-02",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": {
                  "de-DE": "tan",
                  "en-GB": "tan",
                  "en-US": "tan",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Ivory Tan",
                  "en-GB": "Ivory Tan",
                  "en-US": "Ivory Tan",
                },
              },
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
                  "en-GB": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable",
                  "en-US": "- Velvet fabric
      - Cotton lining
      - Pillow case comes with zip for easy removal
      - Pillow not included
      - Washable
      ",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#F5F5DC",
                  "label": {
                    "de-DE": "Beige",
                    "en-GB": "Beige",
                    "en-US": "Beige",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-3.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-3.2.jpeg",
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
                  "centAmount": 1999,
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
                  "centAmount": 1999,
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
                  "centAmount": 1999,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "GPC-03",
          },
        ],
      }
    `);
  });

  it(`should return a geometricPillowCase preset when built for graphql`, () => {
    const geometricPillowCasePresetGraphql =
      geometricPillowCase().buildGraphql<TProductDraft>();
    expect(geometricPillowCasePresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "home-decor",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "bedding",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein geometrischer Kissenbezug für Zierkissen ist ein stilvolles und modernes Wohnaccessoire, das jedem Raum einen Hauch von visuellem Interesse verleihen kann. Der Kissenbezug besteht normalerweise aus einem weichen und strapazierfähigen Material wie Baumwolle, Leinen oder Polyester und weist ein kräftiges geometrisches Muster auf, das ein Gefühl von Tiefe und Dimension erzeugt.  Das geometrische Muster auf dem Kissenbezug wird normalerweise mit einer Vielzahl von Formen wie Dreiecken, Quadraten oder Sechsecken erstellt, die in einem sich wiederholenden Muster angeordnet sind. Der Kissenbezug verfügt über einen Reißverschluss, so dass er bei Bedarf einfach abgenommen und gewaschen werden kann.  Der geometrische Kissenbezug ist ein vielseitiges und stilvolles Accessoire, das verwendet werden kann, um eine Vielzahl von Einrichtungsstilen zu betonen, von modern und minimalistisch bis hin zu unkonventionell und vielseitig. Er ist perfekt, um andere gemusterte Dekorelemente in einem vielseitigen Raum zu ergänzen.  Insgesamt ist ein geometrischer Kissenbezug für Zierkissen ein stilvolles und vielseitiges Accessoire, das dazu beitragen kann, in jedem Raum ein zusammenhängendes und optisch interessantes Dekor zu schaffen. Das mutige und moderne Design, kombiniert mit weichen und langlebigen Materialien, machen ihn zu einem unverzichtbaren Accessoire für jedes Zuhause.",
          },
        ],
        "key": "geometric-pillow-case",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"en-US":"silver","en-GB":"silver","de-DE":"silver"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-US":"Silver","en-GB":"Silver","de-DE":"Silver"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#C0C0C0","label":{"de-DE":"Silber","en-GB":"Silver","en-US":"Silver"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 5000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-1.2.jpeg",
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
                  "centAmount": 1999,
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
                  "centAmount": 1999,
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
                  "centAmount": 1999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "GPC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Geometric Pillow Case",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Geometric Pillow Case",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Geometrischer Kissenbezug",
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
            "value": "geometric-pillow-case",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "geometric-pillow-case",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "geometrischer-kissenbezug",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": "{"en-US":"lightpink","en-GB":"lightpink","de-DE":"lightpink"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-US":"Salmon Gold","en-GB":"Salmon Gold","de-DE":"Salmon Gold"}",
              },
              {
                "name": "productspec",
                "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#FFC0CB","label":{"de-DE":"Rosa","en-GB":"Pink","en-US":"Pink"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-2.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-2.2.jpeg",
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
                    "centAmount": 1999,
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
                    "centAmount": 1999,
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
                    "centAmount": 1999,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "GPC-02",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": "{"en-US":"tan","en-GB":"tan","de-DE":"tan"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-US":"Ivory Tan","en-GB":"Ivory Tan","de-DE":"Ivory Tan"}",
              },
              {
                "name": "productspec",
                "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-3.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Geometric_Pillow_Case-3.2.jpeg",
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
                    "centAmount": 1999,
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
                    "centAmount": 1999,
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
                    "centAmount": 1999,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "GPC-03",
          },
        ],
      }
    `);
  });
});
