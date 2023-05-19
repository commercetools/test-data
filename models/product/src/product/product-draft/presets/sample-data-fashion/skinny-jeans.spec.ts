import type { TProductDraft } from '../../../types';
import skinnyJeans from './skinny-jeans';

describe(`with skinnyJeans preset`, () => {
  it('should return a sample skinnyJeans product preset', () => {
    const skinnyJeansPreset = skinnyJeans().build<TProductDraft>();
    expect(skinnyJeansPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "skinny_jeans",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "fit",
              "value": {
                "key": "Slim",
                "label": "Slim",
              },
            },
            {
              "name": "size",
              "value": {
                "key": "Medium",
                "label": "Medium",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 275,
                "w": 183,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/skinny-QJz4Jcme.jpeg",
            },
          ],
          "key": "396594",
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
                "centAmount": 4999,
                "currencyCode": "EUR",
              },
            },
          ],
          "sku": "396594",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Skinny Jeans",
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
          "en-US": "sample-skinny-jeans",
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
                  "key": "Large",
                  "label": "Large",
                },
              },
              {
                "name": "fit",
                "value": {
                  "key": "Slim",
                  "label": "Slim",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 150,
                  "w": 100,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pants-qbuZJH9h.jpeg",
              },
            ],
            "key": "349700",
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
                  "centAmount": 4999,
                  "currencyCode": "EUR",
                },
              },
            ],
            "sku": "349700",
          },
        ],
      }
    `);
  });

  it('should return a sample skinnyJeans product preset when built for graphql', () => {
    const skinnyJeansPresetGraphql =
      skinnyJeans().buildGraphql<TProductDraft>();
    expect(skinnyJeansPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "skinny_jeans",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "fit",
              "value": "{"key":"Slim","label":"Slim"}",
            },
            {
              "name": "size",
              "value": "{"key":"Medium","label":"Medium"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 275,
                "width": 183,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/skinny-QJz4Jcme.jpeg",
            },
          ],
          "key": "396594",
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
                  "centAmount": 4999,
                  "currencyCode": "EUR",
                },
              },
            },
          ],
          "sku": "396594",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Skinny Jeans",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "pants",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sample-skinny-jeans",
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
                "name": "size",
                "value": "{"key":"Large","label":"Large"}",
              },
              {
                "name": "fit",
                "value": "{"key":"Slim","label":"Slim"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 150,
                  "width": 100,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pants-qbuZJH9h.jpeg",
              },
            ],
            "key": "349700",
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
                    "centAmount": 4999,
                    "currencyCode": "EUR",
                  },
                },
              },
            ],
            "sku": "349700",
          },
        ],
      }
    `);
  });
});
