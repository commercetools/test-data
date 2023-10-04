import type { TProductVariantDraft } from '../../../types';
import beddingBundle01 from './bedding-bundle-01';

describe(`with beddingBundle01 preset`, () => {
  it(`should return a beddingBundle01 preset`, () => {
    const beddingBundle01Preset =
      beddingBundle01().build<TProductVariantDraft>();
    expect(beddingBundle01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-ref",
            "value": [
              {
                "key": "ben-pillow-cover",
                "typeId": "product",
              },
              {
                "key": "modern-three-seater-sofa",
                "typeId": "product",
              },
            ],
          },
        ],
        "images": [],
        "key": "bed-bundle-1",
        "prices": [],
        "sku": "DCC-03",
      }
    `);
  });

  it(`should return a beddingBundle01 preset when built for graphql`, () => {
    const beddingBundle01PresetGraphql =
      beddingBundle01().buildGraphql<TProductVariantDraft>();
    expect(beddingBundle01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-ref",
            "value": "[{"typeId":"product","key":"ben-pillow-cover"},{"typeId":"product","key":"modern-three-seater-sofa"}]",
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
