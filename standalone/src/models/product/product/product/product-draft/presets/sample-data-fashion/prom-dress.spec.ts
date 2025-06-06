import type { TProductDraft } from '../../../types';
import promDress from './prom-dress';

describe(`with promDress preset`, () => {
  it('should return a sample prom dress product preset', () => {
    const promDressPreset = promDress().build<TProductDraft>();
    expect(promDressPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "other-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "prom_dress",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "key": "Floral",
                "label": "Floral",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 420,
                "w": 411,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/floral-_WoTefrz.jpeg",
            },
          ],
          "key": "711595",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 24795,
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
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 17500,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "711595",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Prom Dress",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "dresses",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "sample-prom-dress",
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
                  "h": 1920,
                  "w": 1779,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress2-_nh_EhPL.png",
              },
            ],
            "key": "214452",
            "prices": [
              {
                "channel": undefined,
                "country": "ES",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 12500,
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
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 15000,
                  "currencyCode": "AUD",
                },
              },
            ],
            "sku": "214452",
          },
        ],
      }
    `);
  });

  it('should return a sample prom dress product preset when built for graphql', () => {
    const promDressPresetGraphql = promDress().buildGraphql<TProductDraft>();
    expect(promDressPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "other-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "prom_dress",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"key":"Floral","label":"Floral"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 420,
                "width": 411,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/floral-_WoTefrz.jpeg",
            },
          ],
          "key": "711595",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 24795,
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
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 17500,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "711595",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Prom Dress",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "dresses",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "sample-prom-dress",
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
                  "height": 1920,
                  "width": 1779,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress2-_nh_EhPL.png",
              },
            ],
            "key": "214452",
            "prices": [
              {
                "channel": undefined,
                "country": "ES",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 12500,
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
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 15000,
                    "currencyCode": "AUD",
                  },
                },
              },
            ],
            "sku": "214452",
          },
        ],
      }
    `);
  });
});
