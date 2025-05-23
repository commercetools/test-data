import type { TProductDraft } from '../../../types';
import anniversaryShirt from './anniversary-shirt';

describe(`with anniversaryShirt preset`, () => {
  it('should return a sample anniversaryShirt product preset', () => {
    const anniversaryShirtPreset = anniversaryShirt().build<TProductDraft>();
    expect(anniversaryShirtPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tops-kids",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "anniversary_shirt",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "size",
              "value": {
                "key": "Small",
                "label": "Small",
              },
            },
          ],
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "sku": undefined,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "en": undefined,
          "en-US": "Sample Anniversary Shirt",
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
          "en-US": "sample-anniversary-shirt",
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
                "name": "size",
                "value": {
                  "key": "Medium",
                  "label": "Medium",
                },
              },
            ],
            "images": undefined,
            "key": undefined,
            "prices": undefined,
            "sku": undefined,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": {
                  "key": "Large",
                  "label": "Large",
                },
              },
            ],
            "images": undefined,
            "key": undefined,
            "prices": undefined,
            "sku": undefined,
          },
        ],
      }
    `);
  });

  it('should return a sample anniversaryShirt product preset when built for graphql', () => {
    const anniversaryShirtPresetGraphql =
      anniversaryShirt().buildGraphql<TProductDraft>();
    expect(anniversaryShirtPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "tops-kids",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "anniversary_shirt",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "size",
              "value": "{"key":"Small","label":"Small"}",
            },
          ],
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "sku": undefined,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sample Anniversary Shirt",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "shirts",
          "typeId": "product-type",
        },
        "publish": false,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "sample-anniversary-shirt",
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
                "name": "size",
                "value": "{"key":"Medium","label":"Medium"}",
              },
            ],
            "images": undefined,
            "key": undefined,
            "prices": undefined,
            "sku": undefined,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "size",
                "value": "{"key":"Large","label":"Large"}",
              },
            ],
            "images": undefined,
            "key": undefined,
            "prices": undefined,
            "sku": undefined,
          },
        ],
      }
    `);
  });
});
