import type { TProductDraft } from '../../../types';
import sportCoat from './sport-coat';

describe(`with sportCoat preset`, () => {
  it('should return a sample sportCoat product preset', () => {
    const sportCoatPreset = sportCoat().build<TProductDraft>();
    expect(sportCoatPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "sport_coat",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "sleeve_length",
              "value": {
                "key": "Crop",
                "label": "Crop",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 225,
                "w": 225,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-VmXqw3Xo.jpeg",
            },
          ],
          "key": "692457",
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
                "centAmount": 20000,
                "currencyCode": "AUD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          ],
          "sku": "692457",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Sport Coat",
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
          "en-US": "sample-sport-coat",
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
                  "key": "Normal",
                  "label": "Normal",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 150,
                  "w": 150,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-Keqv_ZSU.jpeg",
              },
            ],
            "key": "692458",
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
                  "centAmount": 20000,
                  "currencyCode": "AUD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "692458",
          },
        ],
      }
    `);
  });

  it('should return a sample sportCoat product preset when built for graphql', () => {
    const sportCoatPresetGraphql = sportCoat().buildGraphql<TProductDraft>();
    expect(sportCoatPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "sport_coat",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "sleeve_length",
              "value": {
                "key": "Crop",
                "label": "Crop",
              },
            },
          ],
          "images": [
            {
              "__typename": "Image",
              "dimensions": {
                "h": 225,
                "w": 225,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-VmXqw3Xo.jpeg",
            },
          ],
          "key": "692457",
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
                "centAmount": 20000,
                "currencyCode": "AUD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          ],
          "sku": "692457",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Sport Coat",
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
            "value": "sample-sport-coat",
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
                "value": {
                  "key": "Normal",
                  "label": "Normal",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
                "dimensions": {
                  "h": 150,
                  "w": 150,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-Keqv_ZSU.jpeg",
              },
            ],
            "key": "692458",
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
                  "centAmount": 20000,
                  "currencyCode": "AUD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "692458",
          },
        ],
      }
    `);
  });
});
