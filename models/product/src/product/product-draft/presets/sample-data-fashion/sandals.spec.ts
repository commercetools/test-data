import type { TProductDraft } from '../../../types';
import sampleSandals from './sandals';

describe(`with sampleSandals preset`, () => {
  it('should return a sample sandals product preset', () => {
    const sampleSandalsPreset = sampleSandals().build<TProductDraft>();
    expect(sampleSandalsPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "other-kids",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "sandals",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "type",
              "value": {
                "key": "Shoes",
                "label": "Shoes",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 222,
                "w": 227,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-hd5LHY6T.png",
            },
          ],
          "key": "148096",
          "prices": [
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
                "centAmount": 2500,
                "currencyCode": "AUD",
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
                "centAmount": 3000,
                "currencyCode": "EUR",
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
                "centAmount": 2799,
                "currencyCode": "USD",
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
                "centAmount": 3000,
                "currencyCode": "EUR",
              },
            },
          ],
          "sku": "148096",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Sandals",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "accessories",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "sample-sandals",
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
                "name": "type",
                "value": {
                  "key": "Shoes",
                  "label": "Shoes",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 230,
                  "w": 219,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-nDN7Ajoe.jpeg",
              },
            ],
            "key": "148097",
            "prices": [
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
                  "centAmount": 1199,
                  "currencyCode": "AUD",
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
                  "centAmount": 1000,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "148097",
          },
        ],
      }
    `);
  });

  it('should return a sample sandals product preset when built for graphql', () => {
    const sampleSandalsPresetGraphql =
      sampleSandals().buildGraphql<TProductDraft>();
    expect(sampleSandalsPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "other-kids",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "sandals",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "type",
              "value": "{"key":"Shoes","label":"Shoes"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 222,
                "width": 227,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-hd5LHY6T.png",
            },
          ],
          "key": "148096",
          "prices": [
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
                  "centAmount": 2500,
                  "currencyCode": "AUD",
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
                  "centAmount": 3000,
                  "currencyCode": "EUR",
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
                  "centAmount": 2799,
                  "currencyCode": "USD",
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
                  "centAmount": 3000,
                  "currencyCode": "EUR",
                },
              },
            },
          ],
          "sku": "148096",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Sandals",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "accessories",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sample-sandals",
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
                "name": "type",
                "value": "{"key":"Shoes","label":"Shoes"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 230,
                  "width": 219,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-nDN7Ajoe.jpeg",
              },
            ],
            "key": "148097",
            "prices": [
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
                    "centAmount": 1199,
                    "currencyCode": "AUD",
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
                    "centAmount": 1000,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "148097",
          },
        ],
      }
    `);
  });
});
