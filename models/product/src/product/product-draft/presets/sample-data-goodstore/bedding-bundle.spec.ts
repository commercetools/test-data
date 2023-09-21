import type { TProductDraft } from '../../../types';
import beddingBundle from './bedding-bundle';
describe(`with beddingBundle preset`, () => {
  it('should return a sample beddingBundle product preset', () => {
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
          }
        ],
      "categoryOrderHints": {},
      "key": "bedding-bundle",
      "name": {
            "en-US": "Dreamscape Comfort Collection",
            "en-GB": "Dreamscape Comfort Collection",
            "de-DE": "Dreamscape Comfort-Kollektion"
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "searchKeywords": {},
      "slug": {
            "en-US": "test-bundle",
            "de-DE": "dreamscape-comfort-kollektion",
            "en-GB": "test-bundle"
          },
      "publish": true,
      "priceMode": undefined,
        {
          "key": "vat-standard-eu",
          "typeId": "tax-category",
        },
        {
          "key": "bedding-bundle",
          "typeId": "product-type",
        },
        "masterVariant": {
          "assets": undefined,
          "sku": undefined,
          "images": undefined,
          "key": undefined,
          "prices": undefined,
          "attributes": [{"name":"product-ref","value":[{"typeId":"product","id":"98654f5c-de8e-463c-903d-3c2f0c8176bc"},{"typeId":"product","id":"0e56cf64-fa51-44e2-969a-3b3d6cd5bab3"}]}],
        },
        "variants": [

       ]
      }
    `);
  });
});
