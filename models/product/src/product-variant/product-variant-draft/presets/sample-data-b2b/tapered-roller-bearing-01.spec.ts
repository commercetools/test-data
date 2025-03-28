import type { TProductVariantDraft } from '../../../types';
import taperedRollerBearing01 from './tapered-roller-bearing-01';

describe(`with taperedRollerBearing01 preset`, () => {
  it(`should return a taperedRollerBearing01 preset`, () => {
    const taperedRollerBearing01Preset =
      taperedRollerBearing01().build<TProductVariantDraft>();
    expect(taperedRollerBearing01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tapered-roller-bearing.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "tapered-roller-bearing",
      }
    `);
  });

  it(`should return a taperedRollerBearing01 preset when built for graphql`, () => {
    const taperedRollerBearing01PresetGraphql =
      taperedRollerBearing01().buildGraphql<TProductVariantDraft>();
    expect(taperedRollerBearing01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tapered-roller-bearing.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "tapered-roller-bearing",
        "staged": true,
      }
    `);
  });
});
