import type { TProductDraft } from '../../../types';
import beddingBundle from './bedding-bundle';

describe(`with beddingBundle preset`, () => {
  it(`should return a beddingBundle preset`, () => {
    const beddingBundlePreset = beddingBundle().build<TProductDraft>();
    expect(beddingBundlePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "bedding-bundle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "product-ref",
              "value": "",
            },
          ],
          "images": [],
          "key": "bed-bundle-1",
          "prices": [],
          "sku": "DCC-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Dreamscape Comfort-Kollektion",
          "en": undefined,
          "en-GB": "Dreamscape Comfort Collection",
          "en-US": "Dreamscape Comfort Collection",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "bedding-bundle",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "dreamscape-comfort-kollektion",
          "en": undefined,
          "en-GB": "test-bundle",
          "en-US": "test-bundle",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a beddingBundle preset when built for graphql`, () => {
    const beddingBundlePresetGraphql =
      beddingBundle().buildGraphql<TProductDraft>();
    expect(beddingBundlePresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "bedding",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "bedding-bundle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "product-ref",
              "value": """",
            },
          ],
          "images": [],
          "key": "bed-bundle-1",
          "prices": [],
          "sku": "DCC-03",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Dreamscape Comfort Collection",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Dreamscape Comfort-Kollektion",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Dreamscape Comfort Collection",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "bedding-bundle",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "test-bundle",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "dreamscape-comfort-kollektion",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "test-bundle",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
