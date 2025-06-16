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
              "name": "search-color",
              "value": "pink",
            },
            {
              "name": "search-finish",
              "value": "yellow",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Rosa",
                "en-GB": "Pink",
                "en-US": "Pink",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
            {
              "name": "color-code",
              "value": "#FFC0CB",
            },
            {
              "name": "finish-code",
              "value": "#F5F5DC",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sally_Armchair-1.1.jpeg",
            },
          ],
          "key": "sallyArmchair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "19900EUR",
              "recurrencePolicy": undefined,
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
              "key": "19900GBP",
              "recurrencePolicy": undefined,
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
              "key": "19900USD",
              "recurrencePolicy": undefined,
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
        "attributes": null,
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
        "description": [
          {
            "locale": "en-GB",
            "value": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          },
          {
            "locale": "en-US",
            "value": "A tufted armchair with wooden legs is an elegant and comfortable piece of furniture. The chair features a deep seat and a high backrest, which are both padded and upholstered with soft and plush material. The tufted design creates a sophisticated and timeless look, while the wooden legs adding a touch of softness and warmth. The legs are thin and tapered, giving the chair a sleek and modern appearance. The armrests are curved and plush, providing both comfort and support for the arms. Overall, a tufted armchair with brass legs is a stylish and comfortable addition to any living space or lounge area.",
          },
          {
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
              "name": "search-color",
              "value": ""pink"",
            },
            {
              "name": "search-finish",
              "value": ""yellow"",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Pink","de-DE":"Rosa","en-US":"Pink"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
            },
            {
              "name": "color-code",
              "value": ""#FFC0CB"",
            },
            {
              "name": "finish-code",
              "value": ""#F5F5DC"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sally_Armchair-1.1.jpeg",
            },
          ],
          "key": "sallyArmchair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "19900EUR",
              "recurrencePolicy": undefined,
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
              "key": "19900GBP",
              "recurrencePolicy": undefined,
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
              "key": "19900USD",
              "recurrencePolicy": undefined,
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
            "locale": "en-US",
            "value": "Sally Armchair",
          },
          {
            "locale": "en-GB",
            "value": "Sally Armchair",
          },
          {
            "locale": "de-DE",
            "value": "Sessel >Sally<",
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
            "value": "sally-armchair",
          },
          {
            "locale": "en-GB",
            "value": "sally-armchair",
          },
          {
            "locale": "de-DE",
            "value": "sally-sessel",
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
