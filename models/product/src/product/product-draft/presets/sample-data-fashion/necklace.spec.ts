import type { TProductDraft } from '../../../types';
import necklace from './necklace';

describe(`with necklace preset`, () => {
  it('should return a sample necklace product preset', () => {
    const necklacePreset = necklace().build<TProductDraft>();
    expect(necklacePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "other-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "necklace",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "type",
              "value": {
                "key": "Jewelry",
                "label": "Jewelry",
              },
            },
            {
              "name": "engraving",
              "value": "Happy Anniversary",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 122,
                "w": 103,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-TRlWhVSq.png",
            },
          ],
          "key": "752502",
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
                "centAmount": 5000,
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
                "centAmount": 5000,
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
                "centAmount": 5000,
                "currencyCode": "EUR",
              },
            },
          ],
          "sku": "752502",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Necklace",
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
          "en-US": "sample-necklace",
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
                  "key": "Jewelry",
                  "label": "Jewelry",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 241,
                  "w": 209,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png",
              },
            ],
            "key": "42610",
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
                  "centAmount": 1575,
                  "currencyCode": "AUD",
                },
              },
            ],
            "sku": "42610",
          },
        ],
      }
    `);
  });

  it('should return a sample necklace product preset when built for graphql', () => {
    const necklacePresetGraphql = necklace().buildGraphql<TProductDraft>();
    expect(necklacePresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "other-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "necklace",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "type",
              "value": "{"key":"Jewelry","label":"Jewelry"}",
            },
            {
              "name": "engraving",
              "value": ""Happy Anniversary"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 122,
                "width": 103,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-TRlWhVSq.png",
            },
          ],
          "key": "752502",
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
                  "centAmount": 5000,
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
                  "centAmount": 5000,
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
                  "centAmount": 5000,
                  "currencyCode": "EUR",
                },
              },
            },
          ],
          "sku": "752502",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Necklace",
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
            "locale": "en-US",
            "value": "sample-necklace",
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
                "value": "{"key":"Jewelry","label":"Jewelry"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 241,
                  "width": 209,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png",
              },
            ],
            "key": "42610",
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
                    "centAmount": 1575,
                    "currencyCode": "AUD",
                  },
                },
              },
            ],
            "sku": "42610",
          },
        ],
      }
    `);
  });
});
