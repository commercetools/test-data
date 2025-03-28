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
                "de-DE": "Silber:#C0C0C0",
                "en-GB": "Silver:#C0C0C0",
                "en-US": "Silver:#C0C0C0",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 5000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 5000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-1.2.jpeg",
            },
          ],
          "key": "geometricPillowCase01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1999EUR",
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
              "key": "1999GBP",
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
              "key": "1999USD",
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
                  "de-DE": "Hell rosa:#FFB6C1",
                  "en-GB": "Light Pink:#FFB6C1",
                  "en-US": "Light Pink:#FFB6C1",
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
            ],
            "images": [
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.2.jpeg",
              },
            ],
            "key": "geometricPillowCase02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1999EUR",
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
                "key": "1999GBP",
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
                "key": "1999USD",
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
                  "de-DE": "Bräunen:#D2B48C",
                  "en-GB": "Tan:#D2B48C",
                  "en-US": "Tan:#D2B48C",
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
            ],
            "images": [
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-3.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 5000,
                  "w": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-3.2.jpeg",
              },
            ],
            "key": "geometricPillowCase03",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1999EUR",
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
                "key": "1999GBP",
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
                "key": "1999USD",
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
        "description": [
          {
            "locale": "en-GB",
            "value": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
          },
          {
            "locale": "en-US",
            "value": "A geometric pillowcase for throw pillows is a stylish and modern home decor accessory that can add a pop of visual interest to any room. The pillowcase is typically made from a soft and durable material, such as cotton, linen, or polyester, and features a bold geometric pattern that creates a sense of depth and dimension.  The geometric pattern on the pillowcase is typically created using a variety of shapes, such as triangles, squares, or hexagons, arranged in a repeating pattern. The pillowcase features a zipper closure, making it easy to remove and wash as needed.  The geometric pillowcase is a versatile and stylish accessory that can be used to accent a variety of decor styles, from modern and minimalist to bohemian and eclectic. It is perfect for complementing other patterned decor elements in a more eclectic space.  Overall, a geometric pillowcase for throw pillows is a stylish and versatile accessory that can help to create a cohesive and visually interesting decor scheme in any room. Its bold and modern design, combined with its soft and durable materials, make it a must-have accessory for any home.",
          },
          {
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
              "value": "{"en-US":"Silver:#C0C0C0","en-GB":"Silver:#C0C0C0","de-DE":"Silber:#C0C0C0"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 5000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-1.2.jpeg",
            },
          ],
          "key": "geometricPillowCase01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1999EUR",
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
              "key": "1999GBP",
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
              "key": "1999USD",
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
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Geometric Pillow Case",
          },
          {
            "locale": "en-GB",
            "value": "Geometric Pillow Case",
          },
          {
            "locale": "de-DE",
            "value": "Geometrischer Kissenbezug",
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
            "value": "geometric-pillow-case",
          },
          {
            "locale": "en-GB",
            "value": "geometric-pillow-case",
          },
          {
            "locale": "de-DE",
            "value": "geometrischer-kissenbezug",
          },
        ],
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
                "value": "{"en-US":"Light Pink:#FFB6C1","en-GB":"Light Pink:#FFB6C1","de-DE":"Hell rosa:#FFB6C1"}",
              },
              {
                "name": "productspec",
                "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-2.2.jpeg",
              },
            ],
            "key": "geometricPillowCase02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1999EUR",
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
                "key": "1999GBP",
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
                "key": "1999USD",
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
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": "{"en-US":"Tan:#D2B48C","en-GB":"Tan:#D2B48C","de-DE":"Bräunen:#D2B48C"}",
              },
              {
                "name": "productspec",
                "value": "{"en-US":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable\\n","en-GB":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable","de-DE":"- Velvet fabric\\n- Cotton lining\\n- Pillow case comes with zip for easy removal\\n- Pillow not included\\n- Washable"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-3.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 5000,
                  "width": 5000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-3.2.jpeg",
              },
            ],
            "key": "geometricPillowCase03",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1999EUR",
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
                "key": "1999GBP",
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
                "key": "1999USD",
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
            "staged": true,
          },
        ],
      }
    `);
  });
});
