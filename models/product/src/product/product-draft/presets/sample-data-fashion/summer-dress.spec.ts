import type { TProductDraft } from '../../../types';
import summerDress from './summer-dress';

describe(`with summerDress preset`, () => {
  it('should return a sample summerDress product preset', () => {
    const summerDressPreset = summerDress().build<TProductDraft>();
    expect(summerDressPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "other-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "summer_dress",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "key": "White",
                "label": "White",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 298,
                "w": 276,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress-nsVCck7f.jpeg",
            },
          ],
          "key": "791840",
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
                "centAmount": 7500,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "ES",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 8000,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "AU",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 7000,
                "currencyCode": "AUD",
              },
            },
          ],
          "sku": "791840",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Summer Dress",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "dresses",
          "typeId": "product-type",
        },
        "publish": false,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "sample-summer-dress",
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
                  "key": "Pink",
                  "label": "Pink",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 254,
                  "w": 199,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pinkdress-kKvWVHgG.png",
              },
            ],
            "key": "439502",
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
                  "centAmount": 7500,
                  "currencyCode": "USD",
                },
              },
              {
                "channel": undefined,
                "country": "AU",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 7500,
                  "currencyCode": "AUD",
                },
              },
            ],
            "sku": "439502",
          },
        ],
      }
    `);
  });

  it('should return a sample summerDress product preset when built for graphql', () => {
    const summerDressPresetGraphql =
      summerDress().buildGraphql<TProductDraft>();
    expect(summerDressPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "other-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "summer_dress",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"key":"White","label":"White"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 298,
                "width": 276,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress-nsVCck7f.jpeg",
            },
          ],
          "key": "791840",
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
                  "centAmount": 7500,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "ES",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 8000,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "AU",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 7000,
                  "currencyCode": "AUD",
                },
              },
            },
          ],
          "sku": "791840",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Summer Dress",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "dresses",
          "typeId": "product-type",
        },
        "publish": false,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "sample-summer-dress",
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
                "value": "{"key":"Pink","label":"Pink"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 254,
                  "width": 199,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pinkdress-kKvWVHgG.png",
              },
            ],
            "key": "439502",
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
                    "centAmount": 7500,
                    "currencyCode": "USD",
                  },
                },
              },
              {
                "channel": undefined,
                "country": "AU",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 7500,
                    "currencyCode": "AUD",
                  },
                },
              },
            ],
            "sku": "439502",
          },
        ],
      }
    `);
  });
});
