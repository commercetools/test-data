import type { TProductDraft } from '../../../types';
import summerDress from './summer-dress';

describe(`with summerDress preset`, () => {
  it('should return a sample summerDress product preset', () => {
    const summerDressPreset = summerDress().build<TProductDraft>();
    expect(summerDressPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
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
                "fractionDigits": 2,
                "type": "centPrecision",
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
                "fractionDigits": 2,
                "type": "centPrecision",
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
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
        "categories": undefined,
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
              "__typename": "Image",
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
                "centPrecision": {
                  "centAmount": 7500,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Summer Dress",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "dresses",
          "typeId": "product-type",
        },
        "publish": false,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sample-summer-dress",
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
                "name": "color",
                "value": {
                  "key": "Pink",
                  "label": "Pink",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
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
                  "centPrecision": {
                    "centAmount": 7500,
                    "currencyCode": "USD",
                    "fractionDigits": 2,
                    "type": "centPrecision",
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
