import type { TProductDraft } from '../../../types';
import meadowRug from './meadow-rug';

describe(`with meadowRug preset`, () => {
  it(`should return a meadowRug preset`, () => {
    const meadowRugPreset = meadowRug().build<TProductDraft>();
    expect(meadowRugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "rugs",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Plüschteppich ist eine Art von Teppich, der weich und bequem unter den Füßen liegt. Plüschteppiche zeichnen sich durch ihren dichten Flor aus. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Aufgrund ihrer Weichheit und ihres Komforts werden Plüschteppiche häufig in Schlafzimmern, Wohnzimmern und anderen Bereichen verwendet, in denen die Menschen viel Zeit sitzend oder faulenzend auf dem Boden verbringen. Sie sind auch eine beliebte Wahl für Kindergärten und Kinderzimmer, da sie einen sicheren und bequemen Spielbereich für Kinder bieten. Insgesamt ist ein Plüschteppich eine gemütliche und einladende Ergänzung für jedes Zuhause. Seine weiche Textur und sein luxuriöses Gefühl machen ihn zu einer beliebten Wahl für alle, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen wollen.",
          "en": undefined,
          "en-GB": "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          "en-US": "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          "fr": undefined,
        },
        "key": "meadow-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- 3 Fuß x 5 Fuß",
                "en-GB": "- 3ft x 5ft",
                "en-US": "- 3ft x 5ft",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#b3b1ab",
                "en-GB": "#b3b1ab",
                "en-US": "#b3b1ab",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#808080",
                "label": {
                  "de-DE": "Grau",
                  "en-GB": "Gray",
                  "en-US": "Gray",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3000,
                "w": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-1.1.jpeg",
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
                "centAmount": 29900,
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
                "centAmount": 29900,
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
                "centAmount": 29900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MR-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Wiesenteppich",
          "en": undefined,
          "en-GB": "Meadow Rug",
          "en-US": "Meadow Rug",
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
          "de-DE": "meadow-teppich",
          "en": undefined,
          "en-GB": "meadow-rug",
          "en-US": "meadow-rug",
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
                "name": "productspec",
                "value": {
                  "de-DE": "- 3 Fuß x 5 Fuß",
                  "en-GB": "- 3ft x 5ft",
                  "en-US": "- 3ft x 5ft",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#050505",
                  "en-GB": "#050505",
                  "en-US": "#050505",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Schwarz",
                  "en-GB": "Black",
                  "en-US": "Black",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#000",
                  "label": {
                    "de-DE": "Schwarz",
                    "en-GB": "Black",
                    "en-US": "Black",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3000,
                  "w": 4500,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-2.1.jpeg",
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
                  "centAmount": 29900,
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
                  "centAmount": 29900,
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
                  "centAmount": 29900,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "MR-08",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- 3 Fuß x 5 Fuß",
                  "en-GB": "- 3ft x 5ft",
                  "en-US": "- 3ft x 5ft",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#bed1e8",
                  "en-GB": "#bed1e8",
                  "en-US": "#bed1e8",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Robbin Blue",
                  "en-GB": "Robbin Blue",
                  "en-US": "Robbin Blue",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#0000FF",
                  "label": {
                    "de-DE": "Blau",
                    "en-GB": "Blue",
                    "en-US": "Blue",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3000,
                  "w": 4500,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-3.1.jpeg",
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
                  "centAmount": 29900,
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
                  "centAmount": 29900,
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
                  "centAmount": 29900,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "MR-05",
          },
        ],
      }
    `);
  });

  it(`should return a meadowRug preset when built for graphql`, () => {
    const meadowRugPresetGraphql = meadowRug().buildGraphql<TProductDraft>();
    expect(meadowRugPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "rugs",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein Plüschteppich ist eine Art von Teppich, der weich und bequem unter den Füßen liegt. Plüschteppiche zeichnen sich durch ihren dichten Flor aus. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Aufgrund ihrer Weichheit und ihres Komforts werden Plüschteppiche häufig in Schlafzimmern, Wohnzimmern und anderen Bereichen verwendet, in denen die Menschen viel Zeit sitzend oder faulenzend auf dem Boden verbringen. Sie sind auch eine beliebte Wahl für Kindergärten und Kinderzimmer, da sie einen sicheren und bequemen Spielbereich für Kinder bieten. Insgesamt ist ein Plüschteppich eine gemütliche und einladende Ergänzung für jedes Zuhause. Seine weiche Textur und sein luxuriöses Gefühl machen ihn zu einer beliebten Wahl für alle, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen wollen.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          },
        ],
        "key": "meadow-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- 3ft x 5ft","de-DE":"- 3 Fuß x 5 Fuß","en-US":"- 3ft x 5ft"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#b3b1ab","de-DE":"#b3b1ab","en-US":"#b3b1ab"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Gray","de-DE":"Grau","en-US":"Gray"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3000,
                "width": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-1.1.jpeg",
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
                  "centAmount": 29900,
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
                  "centAmount": 29900,
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
                  "centAmount": 29900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MR-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Meadow Rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Wiesenteppich",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Meadow Rug",
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
            "value": "meadow-rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "meadow-teppich",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "meadow-rug",
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
                "name": "productspec",
                "value": "{"en-GB":"- 3ft x 5ft","de-DE":"- 3 Fuß x 5 Fuß","en-US":"- 3ft x 5ft"}",
              },
              {
                "name": "color",
                "value": "{"en-GB":"#050505","de-DE":"#050505","en-US":"#050505"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3000,
                  "width": 4500,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-2.1.jpeg",
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
                    "centAmount": 29900,
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
                    "centAmount": 29900,
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
                    "centAmount": 29900,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "MR-08",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": "{"en-GB":"- 3ft x 5ft","de-DE":"- 3 Fuß x 5 Fuß","en-US":"- 3ft x 5ft"}",
              },
              {
                "name": "color",
                "value": "{"en-GB":"#bed1e8","de-DE":"#bed1e8","en-US":"#bed1e8"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-GB":"Robbin Blue","de-DE":"Robbin Blue","en-US":"Robbin Blue"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3000,
                  "width": 4500,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-3.1.jpeg",
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
                    "centAmount": 29900,
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
                    "centAmount": 29900,
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
                    "centAmount": 29900,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "MR-05",
          },
        ],
      }
    `);
  });
});
