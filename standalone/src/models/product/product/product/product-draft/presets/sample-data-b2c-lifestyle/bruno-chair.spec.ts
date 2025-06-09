import type { TProductDraft } from '../../../types';
import brunoChair from './bruno-chair';

describe(`with brunoChair preset`, () => {
  it(`should return a brunoChair preset`, () => {
    const brunoChairPreset = brunoChair().build<TProductDraft>();
    expect(brunoChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
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
          "de-DE": "Ein moderner Stuhl aus Leinen und Holz zeichnet sich durch ein einfaches, aber stilvolles Design aus. Der Stuhl hat einen schlanken Holzrahmen, der in einem natürlichen Holzfinish gebeizt ist. Der Sitz und die Rückenlehne bestehen aus einem weichen Leinenstoff, der für Komfort gepolstert ist. Der Leinenstoff ist ein neutrales Beige.  Die Rückenlehne des Stuhls ist leicht angewinkelt, was dem Benutzer zusätzlichen Komfort und Unterstützung bietet. Die Beine des Stuhls sind leicht konisch und haben schützende Fußpolster, um Schäden am Bodenbelag zu vermeiden.  Insgesamt ist dieser moderne Leinen- und Holzstuhl eine vielseitige und elegante Ergänzung für jedes Wohnzimmer, Esszimmer oder Büro.",
          "en": undefined,
          "en-GB": "A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.",
          "en-US": "A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.",
          "fr": undefined,
        },
        "key": "bruno-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Beinhaltet 1 Stuhl",
                "en-GB": "- Includes 1 chair",
                "en-US": "- Includes 1 chair",
              },
            },
            {
              "name": "search-color",
              "value": [
                "blue",
              ],
            },
            {
              "name": "search-finish",
              "value": [
                "brown",
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Königs blau",
                "en-GB": "Royal Blue",
                "en-US": "Royal Blue",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Sattel braun",
                "en-GB": "Saddle Brown",
                "en-US": "Saddle Brown",
              },
            },
            {
              "name": "color-code",
              "value": "#4169E1",
            },
            {
              "name": "finish-code",
              "value": "#8b4513",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4315,
                "w": 6473,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Bruno_Chair-1.1.jpeg",
            },
          ],
          "key": "brunoChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "7999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 7999,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "7999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 7999,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "7999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 7999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "BARM-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sessel "Bruno"",
          "en": undefined,
          "en-GB": "Bruno Chair",
          "en-US": "Bruno Chair",
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
          "de-DE": "bruno-stuhl",
          "en": undefined,
          "en-GB": "bruno-chair",
          "en-US": "bruno-chair",
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

  it(`should return a brunoChair preset when built for graphql`, () => {
    const brunoChairPresetGraphql = brunoChair().buildGraphql<TProductDraft>();
    expect(brunoChairPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
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
            "value": "A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.",
          },
          {
            "locale": "en-US",
            "value": "A modern linen and wood chair features a simple yet stylish design. The chair has a sleek wooden frame, which is stained in a natural wood finish. The seat and backrest are made of a soft linen fabric that is padded for comfort. The linen fabric is a neutral beige.  The backrest of the chair is slightly angled, providing additional comfort and support for the user. The legs of the chair are slightly tapered and have protective foot pads to prevent damage to flooring.  Overall, this modern linen and wood chair is a versatile and elegant addition to any living room, dining room, or office space.",
          },
          {
            "locale": "de-DE",
            "value": "Ein moderner Stuhl aus Leinen und Holz zeichnet sich durch ein einfaches, aber stilvolles Design aus. Der Stuhl hat einen schlanken Holzrahmen, der in einem natürlichen Holzfinish gebeizt ist. Der Sitz und die Rückenlehne bestehen aus einem weichen Leinenstoff, der für Komfort gepolstert ist. Der Leinenstoff ist ein neutrales Beige.  Die Rückenlehne des Stuhls ist leicht angewinkelt, was dem Benutzer zusätzlichen Komfort und Unterstützung bietet. Die Beine des Stuhls sind leicht konisch und haben schützende Fußpolster, um Schäden am Bodenbelag zu vermeiden.  Insgesamt ist dieser moderne Leinen- und Holzstuhl eine vielseitige und elegante Ergänzung für jedes Wohnzimmer, Esszimmer oder Büro.",
          },
        ],
        "key": "bruno-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 chair","de-DE":"- Beinhaltet 1 Stuhl","en-US":"- Includes 1 chair"}",
            },
            {
              "name": "search-color",
              "value": "["blue"]",
            },
            {
              "name": "search-finish",
              "value": "["brown"]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Royal Blue","de-DE":"Königs blau","en-US":"Royal Blue"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
            },
            {
              "name": "color-code",
              "value": ""#4169E1"",
            },
            {
              "name": "finish-code",
              "value": ""#8b4513"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4315,
                "width": 6473,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Bruno_Chair-1.1.jpeg",
            },
          ],
          "key": "brunoChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "7999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 7999,
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
              "key": "7999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 7999,
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
              "key": "7999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 7999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "BARM-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Bruno Chair",
          },
          {
            "locale": "en-GB",
            "value": "Bruno Chair",
          },
          {
            "locale": "de-DE",
            "value": "Sessel "Bruno"",
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
            "value": "bruno-chair",
          },
          {
            "locale": "en-GB",
            "value": "bruno-chair",
          },
          {
            "locale": "de-DE",
            "value": "bruno-stuhl",
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
