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
        "key": "bedding-bundle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "product-ref",
    "value": [
      {
        "typeId": "product",
        "id": "98654f5c-de8e-463c-903d-3c2f0c8176bc"
      },
      {
        "typeId": "product",
        "id": "0e56cf64-fa51-44e2-969a-3b3d6cd5bab3"
      }
    ]
  }
]
,
          "images": []
,
.key('bed-bundle-1')
          "sku": undefined,
          "prices": []
,
        },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "en-US": "Dreamscape Comfort Collection",
            "en-GB": "Dreamscape Comfort Collection",
            "de-DE": "Dreamscape Comfort-Kollektion"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "bedding-bundle",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "en-US": "test-bundle",
            "de-DE": "dreamscape-comfort-kollektion",
            "en-GB": "test-bundle"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
