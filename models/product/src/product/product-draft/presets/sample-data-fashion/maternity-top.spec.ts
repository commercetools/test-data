import { TProductDraft } from '../../../types';
import maternityTop from './maternity-top';

describe(`with maternityTop preset`, () => {
  it('should return a sample maternityTop product preset', () => {
    const maternityTopPreset = maternityTop().build<TProductDraft>();
    expect(maternityTopPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "maternity_top",
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
              "name": "color",
              "value": {
                "key": "Green",
                "label": "Green",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 300,
                "w": 262,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png",
            },
          ],
          "key": "118716",
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
                "centAmount": 2695,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          ],
          "sku": "118716",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Maternity Top",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-US": "sample-maternity-top",
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
                "name": "color",
                "value": {
                  "key": "Green",
                  "label": "Green",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 300,
                  "w": 262,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png",
              },
            ],
            "key": "118717",
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
                  "centAmount": 2695,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "118717",
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
                "name": "color",
                "value": {
                  "key": "Green",
                  "label": "Green",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 300,
                  "w": 262,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png",
              },
            ],
            "key": "118717",
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
                  "centAmount": 2695,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "118717",
          },
        ],
      }
    `);
  });

  it('should return a sample prom dress product preset when built for graphql', () => {
    const maternityTopPresetGraphql =
      maternityTop().buildGraphql<TProductDraft>();
    expect(maternityTopPresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductDraft",
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "maternity_top",
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
              "name": "color",
              "value": {
                "key": "Green",
                "label": "Green",
              },
            },
          ],
          "images": [
            {
              "__typename": "Image",
              "dimensions": {
                "h": 300,
                "w": 262,
              },
              "label": undefined,
              "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png",
            },
          ],
          "key": "118716",
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
                "centAmount": 2695,
                "currencyCode": "EUR",
                "fractionDigits": 2,
                "type": "centPrecision",
              },
            },
          ],
          "sku": "118716",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Maternity Top",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "sample-maternity-top",
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
                "name": "color",
                "value": {
                  "key": "Green",
                  "label": "Green",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
                "dimensions": {
                  "h": 300,
                  "w": 262,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png",
              },
            ],
            "key": "118717",
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
                  "centAmount": 2695,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "118717",
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
                "name": "color",
                "value": {
                  "key": "Green",
                  "label": "Green",
                },
              },
            ],
            "images": [
              {
                "__typename": "Image",
                "dimensions": {
                  "h": 300,
                  "w": 262,
                },
                "label": undefined,
                "url": "https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png",
              },
            ],
            "key": "118717",
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
                  "centAmount": 2695,
                  "currencyCode": "EUR",
                  "fractionDigits": 2,
                  "type": "centPrecision",
                },
              },
            ],
            "sku": "118717",
          },
        ],
      }
    `);
  });
});
