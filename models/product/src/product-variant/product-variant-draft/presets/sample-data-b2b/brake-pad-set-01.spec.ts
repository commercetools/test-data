import type { TProductVariantDraft } from '../../../types';
import brakePadSet01 from './brake-pad-set-01';

describe(`with brakePadSet01 preset`, () => {
  it(`should return a brakePadSet01 preset`, () => {
    const brakePadSet01Preset = brakePadSet01().build<TProductVariantDraft>();
    expect(brakePadSet01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/brake-pad-set.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "brake-pad-set",
      }
    `);
  });

  it(`should return a brakePadSet01 preset when built for graphql`, () => {
    const brakePadSet01PresetGraphql =
      brakePadSet01().buildGraphql<TProductVariantDraft>();
    expect(brakePadSet01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/brake-pad-set.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "brake-pad-set",
        "staged": true,
      }
    `);
  });
});
