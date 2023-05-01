import { TProductDraft } from '../../../types';
import toteBag from './tote-bag';

describe(`with toteBag preset`, () => {
  it('should return a sample toteBag product preset', () => {
    const toteBagPreset = toteBag().build<TProductDraft>();
    expect(toteBagPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
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
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 13999,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
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
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 17500,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
        "__typename": "ProductDraft",
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "tote_bag",
        "masterVariant": {
          "__typename": "ProductVariantInput",
          "assets": undefined,
          "attributes": [
            {
              "__typename": "ProductAttributeInput",
              "name": "type",
              "value": {
                "key": "Bag",
                "label": "Bag",
              },
            },
          ],
          "images": [
            {
              "__typename": "Image",
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
                "centAmount": 13999,
                "currencyCode": "USD",
                "fractionDigits": 2,
                "type": "centPrecision",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Tote Bag",
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
            "value": "sample-tote-bag",
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
                  "key": "Bag",
                  "label": "Bag",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
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
                  "centAmount": 17500,
                  "currencyCode": "USD",
                  "fractionDigits": 2,
                  "type": "centPrecision",
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
