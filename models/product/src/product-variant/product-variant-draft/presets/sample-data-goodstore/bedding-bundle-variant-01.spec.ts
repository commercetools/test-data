import type { TProductVariantDraft } from '../../../types';
import beddingBundleVariant01 from './bedding-bundle-variant-01';
describe(`with beddingBundleVariant01 preset`, () => {
  it('should return a sample beddingBundleVariant01 product preset', () => {
    const beddingBundleVariant01Preset =
      beddingBundleVariant01().build<TProductVariantDraft>();
    expect(beddingBundleVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-ref",
            "value": undefined,
          },
        ],
        "images": [],
        "key": "bed-bundle-1",
        "prices": [],
        "sku": "DCC-03",
      }
    `);
  });
});
