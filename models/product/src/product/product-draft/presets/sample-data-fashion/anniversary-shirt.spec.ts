import { TProductDraft } from '../../../types';
import anniversaryShirt from './anniversary-shirt';

describe(`with anniversaryShirt preset`, () => {
  it('should return a sample anniversaryShirt product preset', () => {
    const anniversaryShirtPreset = anniversaryShirt().build<TProductDraft>();
    expect(anniversaryShirtPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "anniversary_shirt",
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
          ],
          "images": [],
          "key": undefined,
          "prices": [],
          "sku": undefined,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-us": "Sample Anniversary Shirt",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": false,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "en": undefined,
          "en-us": "sample-anniversary-shirt",
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
            ],
            "images": [],
            "key": undefined,
            "prices": [],
            "sku": undefined,
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
            ],
            "images": [],
            "key": undefined,
            "prices": [],
            "sku": undefined,
          },
        ],
      }
    `);
  });

  it('should return a sample anniversaryShirt product preset when built for graphql', () => {
    const anniversaryShirtPresetGrahql =
      anniversaryShirt().buildGraphql<TProductDraft>();
    expect(anniversaryShirtPresetGrahql).toMatchInlineSnapshot(`
      {
        "__typename": "ProductDraft",
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "anniversary_shirt",
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
          ],
          "images": [],
          "key": undefined,
          "prices": [],
          "sku": undefined,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-us",
            "value": "Sample Anniversary Shirt",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": false,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-us",
            "value": "sample-anniversary-shirt",
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
            ],
            "images": [],
            "key": undefined,
            "prices": [],
            "sku": undefined,
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
            ],
            "images": [],
            "key": undefined,
            "prices": [],
            "sku": undefined,
          },
        ],
      }
    `);
  });
});