import type { TProductDraft } from '../../../types';
import sallyArmchair from './sally-armchair';

describe(`with sallyArmchair preset`, () => {
  it(`should return a sallyArmchair preset`, () => {
    const sallyArmchairPreset = sallyArmchair().build<TProductDraft>();
    expect(sallyArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieser getuftete Sessel mit Holzbeinen ist ein elegantes und bequemes Sitzmöbel. Der Lounge-Sessel verfügt über eine tiefe gepolsterte Sitzfläche mit hoher Rückenlehne, die beide mit weichem Plüschmaterial bezogen sind. Das getuftete Design sorgt für einen raffinierten und dennoch zeitlosen Look, der von der Wärme der abgerundet wird. Die Beine des Lounge-Möbels sind schmal und verjüngt, was dem Stuhl ein leichtes und modernes Aussehen verleiht. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Halt für die Arme. Ein getufteter Sessel mit Holzbeinen ist eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Lounge-Bereich.",
          "en": undefined,
          "en-GB": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          "en-US": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          "fr": undefined,
        },
        "key": "sally-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Wird mit passendem Dekokissen geliefert",
                "en-GB": "- Comes with matching throw pillow",
                "en-US": "- Comes with matching throw pillow",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Baby Pink",
                "en-GB": "Baby Pink",
                "en-US": "Baby Pink",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#FFE0E0",
                "en-GB": "#FFE0E0",
                "en-US": "#FFE0E0",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Zeder",
                "en-GB": "Cedar",
                "en-US": "Cedar",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#FAE7C6",
                "en-GB": "#FAE7C6",
                "en-US": "#FAE7C6",
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
                "h": 4000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sally_Armchair-1.1.jpeg",
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
                "centAmount": 19900,
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
                "centAmount": 19900,
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
                "centAmount": 19900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SARMO-034",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sessel >Sally<",
          "en": undefined,
          "en-GB": "Sally Armchair",
          "en-US": "Sally Armchair",
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
          "de-DE": "sally-sessel",
          "en": undefined,
          "en-GB": "sally-armchair",
          "en-US": "sally-armchair",
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

  it(`should return a sallyArmchair preset when built for graphql`, () => {
    const sallyArmchairPresetGraphql =
      sallyArmchair().buildGraphql<TProductDraft>();
    expect(sallyArmchairPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Dieser getuftete Sessel mit Holzbeinen ist ein elegantes und bequemes Sitzmöbel. Der Lounge-Sessel verfügt über eine tiefe gepolsterte Sitzfläche mit hoher Rückenlehne, die beide mit weichem Plüschmaterial bezogen sind. Das getuftete Design sorgt für einen raffinierten und dennoch zeitlosen Look, der von der Wärme der abgerundet wird. Die Beine des Lounge-Möbels sind schmal und verjüngt, was dem Stuhl ein leichtes und modernes Aussehen verleiht. Die Armlehnen sind gebogen und weich und bieten sowohl Komfort als auch Halt für die Arme. Ein getufteter Sessel mit Holzbeinen ist eine stilvolle und bequeme Ergänzung für jeden Wohn- oder Lounge-Bereich.",
          },
        ],
        "key": "sally-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Comes with matching throw pillow","en-US":"- Comes with matching throw pillow","de-DE":"- Wird mit passendem Dekokissen geliefert"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Baby Pink","de-DE":"Baby Pink","en-US":"Baby Pink"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#FFE0E0","de-DE":"#FFE0E0","en-US":"#FFE0E0"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Cedar","de-DE":"Zeder","en-US":"Cedar"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#FAE7C6","en-US":"#FAE7C6","de-DE":"#FAE7C6"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#FFC0CB","label":{"de-DE":"Rosa","en-GB":"Pink","en-US":"Pink"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sally_Armchair-1.1.jpeg",
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
                  "centAmount": 19900,
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
                  "centAmount": 19900,
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
                  "centAmount": 19900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "SARMO-034",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sally Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Sally Armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Sessel >Sally<",
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
            "value": "sally-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "sally-armchair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "sally-sessel",
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
