import type { TProductDraft } from '../../../types';
import denimJacket from './denim-jacket';

describe(`with denimJacket preset`, () => {
  it('should return a sample denimJacket product preset', () => {
    const denimJacketPreset = denimJacket().build<TProductDraft>();
    expect(denimJacketPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "denim_jacket",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "sleeve_length",
              "value": {
                "key": "Normal",
                "label": "Normal",
              },
            },
            {
              "name": "cotton",
              "value": false,
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 225,
                "w": 225,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-_KAoINSX.jpeg",
            },
          ],
          "key": "996024",
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
                "centAmount": 10000,
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
                "centAmount": 10000,
                "currencyCode": "EUR",
              },
            },
          ],
          "sku": "996024",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Denim Jacket",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "jackets",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "sample-denim-jacket",
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
                "name": "sleeve_length",
                "value": {
                  "key": "Extra Long",
                  "label": "Extra Long",
                },
              },
              {
                "name": "cotton",
                "value": false,
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 225,
                  "w": 225,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-pmNAetyM.jpeg",
              },
            ],
            "key": "996025",
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
                  "centAmount": 10000,
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
                  "centAmount": 10000,
                  "currencyCode": "EUR",
                },
              },
            ],
            "sku": "996025",
          },
        ],
      }
    `);
  });

  it('should return a sample denimJacket product preset when built for graphql', () => {
    const denimJacketPresetGraphql =
      denimJacket().buildGraphql<TProductDraft>();
    expect(denimJacketPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "denim_jacket",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "sleeve_length",
              "value": "{\\"key\\":\\"Normal\\",\\"label\\":\\"Normal\\"}",
            },
            {
              "name": "cotton",
              "value": "false",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 225,
                "width": 225,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-_KAoINSX.jpeg",
            },
          ],
          "key": "996024",
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
                  "centAmount": 10000,
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
                  "centAmount": 10000,
                  "currencyCode": "EUR",
                },
              },
            },
          ],
          "sku": "996024",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Denim Jacket",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "jackets",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sample-denim-jacket",
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
                "name": "sleeve_length",
                "value": "{\\"key\\":\\"Extra Long\\",\\"label\\":\\"Extra Long\\"}",
              },
              {
                "name": "cotton",
                "value": "false",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 225,
                  "width": 225,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-pmNAetyM.jpeg",
              },
            ],
            "key": "996025",
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
                    "centAmount": 10000,
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
                    "centAmount": 10000,
                    "currencyCode": "EUR",
                  },
                },
              },
            ],
            "sku": "996025",
          },
        ],
      }
    `);
  });
});
