import type { TProductVariantDraft } from '../../../types';
import pistonRingSet01 from './piston-ring-set-01';

describe(`with pistonRingSet01 preset`, () => {
  it(`should return a pistonRingSet01 preset`, () => {
    const pistonRingSet01Preset =
      pistonRingSet01().build<TProductVariantDraft>();
    expect(pistonRingSet01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [],
        "images": [
          {
            "dimensions": {
              "h": 1024,
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/piston-ring-set.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "piston-ring-set",
      }
    `);
  });

  it(`should return a pistonRingSet01 preset when built for graphql`, () => {
    const pistonRingSet01PresetGraphql =
      pistonRingSet01().buildGraphql<TProductVariantDraft>();
    expect(pistonRingSet01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/piston-ring-set.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "piston-ring-set",
      }
    `);
  });
});
