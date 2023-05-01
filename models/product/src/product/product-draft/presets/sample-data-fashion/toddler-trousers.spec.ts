import { TProductDraft } from '../../../types';
import toddlerTrousers from './toddler-trousers';

describe(`with toddlerTrousers preset`, () => {
  it('should return a sample toddlerTrousers product preset', () => {
    const toddlerTrousersPreset = toddlerTrousers().build<TProductDraft>();
    expect(toddlerTrousersPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "toddler_trousers",
        "masterVariant": {
          "assets": [],
          "attributes": [
            {
              "name": "size",
              "value": {
                "key": "Small",
                "label": "Small",
              },
            },
            {
              "name": "fit",
              "value": {
                "key": "Straight",
                "label": "Straight",
              },
            },
            {
              "name": "color",
              "value": {
                "key": "White",
                "label": "White",
              },
            },
            {
              "name": "length",
              "value": {
                "key": "Ankle",
                "label": "Ankle",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 792,
                "w": 612,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-Z7CSIEMu.gif",
            },
          ],
          "key": "855484",
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
                "centAmount": 2599,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          ],
          "sku": "855484",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Toddler Trousers",
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
          "en-US": "sample-toddler-trousers",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": [],
            "attributes": [
              {
                "name": "size",
                "value": {
                  "key": "Medium",
                  "label": "Medium",
                },
              },
              {
                "name": "fit",
                "value": {
                  "key": "Straight",
                  "label": "Straight",
                },
              },
              {
                "name": "color",
                "value": {
                  "key": "White",
                  "label": "White",
                },
              },
              {
                "name": "length",
                "value": {
                  "key": "Ankle",
                  "label": "Ankle",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 792,
                  "w": 612,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-SbjnediW.gif",
              },
            ],
            "key": "855485",
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
                  "centAmount": 2599,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "855485",
          },
          {
            "assets": [],
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
                  "key": "Straight",
                  "label": "Straight",
                },
              },
              {
                "name": "color",
                "value": {
                  "key": "White",
                  "label": "White",
                },
              },
              {
                "name": "length",
                "value": {
                  "key": "Ankle",
                  "label": "Ankle",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 792,
                  "w": 612,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif",
              },
            ],
            "key": "855486",
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
                  "centAmount": 2599,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "855486",
          },
        ],
      }
    `);
  });

  it('should return a sample toddlerTrousers product preset when built for graphql', () => {
    const toddlerTrousersPresetGraphql =
      toddlerTrousers().buildGraphql<TProductDraft>();
    expect(toddlerTrousersPresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductDraft",
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "toddler_trousers",
        "masterVariant": {
          "__typename": "ProductVariantInput",
          "assets": [],
          "attributes": [
            {
              "__typename": "ProductAttributeInput",
              "name": "size",
              "value": {
                "key": "Small",
                "label": "Small",
              },
            },
            {
              "__typename": "ProductAttributeInput",
              "name": "fit",
              "value": {
                "key": "Straight",
                "label": "Straight",
              },
            },
            {
              "__typename": "ProductAttributeInput",
              "name": "color",
              "value": {
                "key": "White",
                "label": "White",
              },
            },
            {
              "__typename": "ProductAttributeInput",
              "name": "length",
              "value": {
                "key": "Ankle",
                "label": "Ankle",
              },
            },
          ],
          "images": [
            {
              "__typename": "Image",
              "dimensions": {
                "h": 792,
                "w": 612,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-Z7CSIEMu.gif",
            },
          ],
          "key": "855484",
          "prices": [
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
                "centAmount": 2599,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          ],
          "sku": "855484",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Toddler Trousers",
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
            "value": "sample-toddler-trousers",
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
            "assets": [],
            "attributes": [
              {
                "__typename": "ProductAttributeInput",
                "name": "size",
                "value": {
                  "key": "Medium",
                  "label": "Medium",
                },
              },
              {
                "__typename": "ProductAttributeInput",
                "name": "fit",
                "value": {
                  "key": "Straight",
                  "label": "Straight",
                },
              },
              {
                "__typename": "ProductAttributeInput",
                "name": "color",
                "value": {
                  "key": "White",
                  "label": "White",
                },
              },
              {
                "__typename": "ProductAttributeInput",
                "name": "length",
                "value": {
                  "key": "Ankle",
                  "label": "Ankle",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
                "dimensions": {
                  "h": 792,
                  "w": 612,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-SbjnediW.gif",
              },
            ],
            "key": "855485",
            "prices": [
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
                  "centAmount": 2599,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "855485",
          },
          {
            "__typename": "ProductVariantInput",
            "assets": [],
            "attributes": [
              {
                "__typename": "ProductAttributeInput",
                "name": "size",
                "value": {
                  "key": "Large",
                  "label": "Large",
                },
              },
              {
                "__typename": "ProductAttributeInput",
                "name": "fit",
                "value": {
                  "key": "Straight",
                  "label": "Straight",
                },
              },
              {
                "__typename": "ProductAttributeInput",
                "name": "color",
                "value": {
                  "key": "White",
                  "label": "White",
                },
              },
              {
                "__typename": "ProductAttributeInput",
                "name": "length",
                "value": {
                  "key": "Ankle",
                  "label": "Ankle",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
                "dimensions": {
                  "h": 792,
                  "w": 612,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif",
              },
            ],
            "key": "855486",
            "prices": [
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
                  "centAmount": 2599,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "855486",
          },
        ],
      }
    `);
  });
});
