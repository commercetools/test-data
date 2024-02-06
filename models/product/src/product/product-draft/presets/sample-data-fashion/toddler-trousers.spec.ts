import type { TProductDraft } from '../../../types';
import toddlerTrousers from './toddler-trousers';

describe(`with toddlerTrousers preset`, () => {
  it('should return a sample toddlerTrousers product preset', () => {
    const toddlerTrousersPreset = toddlerTrousers().build<TProductDraft>();
    expect(toddlerTrousersPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bottoms_kids",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "toddler_trousers",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "size",
              "value": {
                "key": "Small",
                "label": "Small",
              },
            },
            {
              "name": "fit",
              "value": {
                "key": "Straight",
                "label": "Straight",
              },
            },
            {
              "name": "color",
              "value": {
                "key": "White",
                "label": "White",
              },
            },
            {
              "name": "length",
              "value": {
                "key": "Ankle",
                "label": "Ankle",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 792,
                "w": 612,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-Z7CSIEMu.gif",
            },
          ],
          "key": "855484",
          "prices": [
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
                "centAmount": 2599,
                "currencyCode": "USD",
              },
            },
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
                "centAmount": 2299,
                "currencyCode": "EUR",
              },
            },
          ],
          "sku": "855484",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Toddler Trousers",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "pants",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "sample-toddler-trousers",
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
                "name": "size",
                "value": {
                  "key": "Medium",
                  "label": "Medium",
                },
              },
              {
                "name": "fit",
                "value": {
                  "key": "Straight",
                  "label": "Straight",
                },
              },
              {
                "name": "color",
                "value": {
                  "key": "White",
                  "label": "White",
                },
              },
              {
                "name": "length",
                "value": {
                  "key": "Ankle",
                  "label": "Ankle",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 792,
                  "w": 612,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-SbjnediW.gif",
              },
            ],
            "key": "855485",
            "prices": [
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
                  "centAmount": 2599,
                  "currencyCode": "USD",
                },
              },
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
                  "centAmount": 2299,
                  "currencyCode": "EUR",
                },
              },
            ],
            "sku": "855485",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": {
                  "key": "Large",
                  "label": "Large",
                },
              },
              {
                "name": "fit",
                "value": {
                  "key": "Straight",
                  "label": "Straight",
                },
              },
              {
                "name": "color",
                "value": {
                  "key": "White",
                  "label": "White",
                },
              },
              {
                "name": "length",
                "value": {
                  "key": "Ankle",
                  "label": "Ankle",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 792,
                  "w": 612,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif",
              },
            ],
            "key": "855486",
            "prices": [
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
                  "centAmount": 2599,
                  "currencyCode": "USD",
                },
              },
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
                  "centAmount": 2299,
                  "currencyCode": "EUR",
                },
              },
            ],
            "sku": "855486",
          },
        ],
      }
    `);
  });

  it('should return a sample toddlerTrousers product preset when built for graphql', () => {
    const toddlerTrousersPresetGraphql =
      toddlerTrousers().buildGraphql<TProductDraft>();
    expect(toddlerTrousersPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bottoms_kids",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "toddler_trousers",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "size",
              "value": "{"key":"Small","label":"Small"}",
            },
            {
              "name": "fit",
              "value": "{"key":"Straight","label":"Straight"}",
            },
            {
              "name": "color",
              "value": "{"key":"White","label":"White"}",
            },
            {
              "name": "length",
              "value": "{"key":"Ankle","label":"Ankle"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 792,
                "width": 612,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-Z7CSIEMu.gif",
            },
          ],
          "key": "855484",
          "prices": [
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
                  "centAmount": 2599,
                  "currencyCode": "USD",
                },
              },
            },
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
                  "centAmount": 2299,
                  "currencyCode": "EUR",
                },
              },
            },
          ],
          "sku": "855484",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Toddler Trousers",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "pants",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sample-toddler-trousers",
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
                "name": "size",
                "value": "{"key":"Medium","label":"Medium"}",
              },
              {
                "name": "fit",
                "value": "{"key":"Straight","label":"Straight"}",
              },
              {
                "name": "color",
                "value": "{"key":"White","label":"White"}",
              },
              {
                "name": "length",
                "value": "{"key":"Ankle","label":"Ankle"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 792,
                  "width": 612,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-SbjnediW.gif",
              },
            ],
            "key": "855485",
            "prices": [
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
                    "centAmount": 2599,
                    "currencyCode": "USD",
                  },
                },
              },
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
                    "centAmount": 2299,
                    "currencyCode": "EUR",
                  },
                },
              },
            ],
            "sku": "855485",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": "{"key":"Large","label":"Large"}",
              },
              {
                "name": "fit",
                "value": "{"key":"Straight","label":"Straight"}",
              },
              {
                "name": "color",
                "value": "{"key":"White","label":"White"}",
              },
              {
                "name": "length",
                "value": "{"key":"Ankle","label":"Ankle"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 792,
                  "width": 612,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif",
              },
            ],
            "key": "855486",
            "prices": [
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
                    "centAmount": 2599,
                    "currencyCode": "USD",
                  },
                },
              },
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
                    "centAmount": 2299,
                    "currencyCode": "EUR",
                  },
                },
              },
            ],
            "sku": "855486",
          },
        ],
      }
    `);
  });
});
