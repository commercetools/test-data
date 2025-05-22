import type { TProductDraft } from '../../../types';
import toteBag from './tote-bag';

describe(`with toteBag preset`, () => {
  it('should return a sample toteBag product preset', () => {
    const toteBagPreset = toteBag().build<TProductDraft>();
    expect(toteBagPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "other-women",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "tote_bag",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "type",
              "value": {
                "key": "Bag",
                "label": "Bag",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 800,
                "w": 766,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/tote-V4lrDZ9Q.png",
            },
          ],
          "key": "718289",
          "prices": [
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 13999,
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
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 12099,
                "currencyCode": "EUR",
              },
            },
          ],
          "sku": "718289",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Tote Bag",
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
          "en-US": "sample-tote-bag",
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
                  "key": "Bag",
                  "label": "Bag",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 800,
                  "w": 675,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/bag-371ygCjz.png",
              },
            ],
            "key": "124965",
            "prices": [
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "recurrencePolicyRef": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 17500,
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
                "recurrencePolicyRef": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 15000,
                  "currencyCode": "EUR",
                },
              },
            ],
            "sku": "124965",
          },
        ],
      }
    `);
  });

  it('should return a sample toteBag product preset when built for graphql', () => {
    const toteBagPresetGraphql = toteBag().buildGraphql<TProductDraft>();
    expect(toteBagPresetGraphql).toMatchInlineSnapshot(`
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
        "key": "tote_bag",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "type",
              "value": "{"key":"Bag","label":"Bag"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 800,
                "width": 766,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/tote-V4lrDZ9Q.png",
            },
          ],
          "key": "718289",
          "prices": [
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": undefined,
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 13999,
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
              "recurrencePolicyRef": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 12099,
                  "currencyCode": "EUR",
                },
              },
            },
          ],
          "sku": "718289",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Tote Bag",
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
            "value": "sample-tote-bag",
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
                "value": "{"key":"Bag","label":"Bag"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 800,
                  "width": 675,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/bag-371ygCjz.png",
              },
            ],
            "key": "124965",
            "prices": [
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "recurrencePolicyRef": undefined,
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
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": undefined,
                "recurrencePolicyRef": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 15000,
                    "currencyCode": "EUR",
                  },
                },
              },
            ],
            "sku": "124965",
          },
        ],
      }
    `);
  });
});
