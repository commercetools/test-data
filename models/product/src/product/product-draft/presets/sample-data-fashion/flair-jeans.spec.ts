import type { TProductDraft } from '../../../types';
import flairJeans from './flair-jeans';

describe(`with flairJeans preset`, () => {
  it('should return a sample flairJeans product preset', () => {
    const flairJeansPreset = flairJeans().build<TProductDraft>();
    expect(flairJeansPreset).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "flair_jeans",
        "masterVariant": {
          "assets": undefined,
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
                "key": "Flair",
                "label": "Flair",
              },
            },
            {
              "name": "color",
              "value": {
                "key": "Blue",
                "label": "Blue",
              },
            },
            {
              "name": "length",
              "value": {
                "key": "Crop",
                "label": "Crop",
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
          "en-US": "Sample Flair Jeans",
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
          "en-US": "sample-flair-jeans",
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
              {
                "name": "fit",
                "value": {
                  "key": "Flair",
                  "label": "Flair",
                },
              },
              {
                "name": "color",
                "value": {
                  "key": "Black",
                  "label": "Black",
                },
              },
              {
                "name": "length",
                "value": {
                  "key": "Extra Long",
                  "label": "Extra Long",
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

  it('should return a sample flairJeans product preset when built for graphql', () => {
    const flairJeansPresetGraphql = flairJeans().buildGraphql<TProductDraft>();
    expect(flairJeansPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": undefined,
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "flair_jeans",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "size",
              "value": "{\\"key\\":\\"Large\\",\\"label\\":\\"Large\\"}",
            },
            {
              "name": "fit",
              "value": "{\\"key\\":\\"Flair\\",\\"label\\":\\"Flair\\"}",
            },
            {
              "name": "color",
              "value": "{\\"key\\":\\"Blue\\",\\"label\\":\\"Blue\\"}",
            },
            {
              "name": "length",
              "value": "{\\"key\\":\\"Crop\\",\\"label\\":\\"Crop\\"}",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Sample Flair Jeans",
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
            "value": "sample-flair-jeans",
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
                "name": "size",
                "value": "{\\"key\\":\\"Medium\\",\\"label\\":\\"Medium\\"}",
              },
              {
                "name": "fit",
                "value": "{\\"key\\":\\"Flair\\",\\"label\\":\\"Flair\\"}",
              },
              {
                "name": "color",
                "value": "{\\"key\\":\\"Black\\",\\"label\\":\\"Black\\"}",
              },
              {
                "name": "length",
                "value": "{\\"key\\":\\"Extra Long\\",\\"label\\":\\"Extra Long\\"}",
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
