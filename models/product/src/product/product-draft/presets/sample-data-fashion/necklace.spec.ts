import { TProductDraft } from '../../../types';
import necklace from './necklace';

describe(`with necklace preset`, () => {
  it('should return a sample necklace product preset', () => {
    const necklacePreset = necklace().build<TProductDraft>();
    expect(necklacePreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
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
                "fractionDigits": 2,
                "type": "centPrecision",
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
                "centAmount": 5000,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
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
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
        "__typename": "ProductDraft",
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "necklace",
        "masterVariant": {
          "__typename": "ProductVariantInput",
          "assets": undefined,
          "attributes": [
            {
              "__typename": "ProductAttributeInput",
              "name": "type",
              "value": {
                "key": "Jewelry",
                "label": "Jewelry",
              },
            },
            {
              "__typename": "ProductAttributeInput",
              "name": "engraving",
              "value": "Happy Anniversary",
            },
          ],
          "images": [
            {
              "__typename": "Image",
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
              "__typename": "ProductPriceDataInput",
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
                "__typename": "MoneyInput",
                "centAmount": 5000,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
            {
              "__typename": "ProductPriceDataInput",
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
                "__typename": "MoneyInput",
                "centAmount": 5000,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
            {
              "__typename": "ProductPriceDataInput",
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
                "__typename": "MoneyInput",
                "centAmount": 5000,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Necklace",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "accessories",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sample-necklace",
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
            "__typename": "ProductVariantInput",
            "assets": undefined,
            "attributes": [
              {
                "__typename": "ProductAttributeInput",
                "name": "type",
                "value": {
                  "key": "Jewelry",
                  "label": "Jewelry",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
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
                "__typename": "ProductPriceDataInput",
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
                  "__typename": "MoneyInput",
                  "centAmount": 1575,
                  "currencyCode": "AUD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
