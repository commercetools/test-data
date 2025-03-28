import type { TProductVariantDraft } from '../../../types';
import alternator01 from './alternator-01';

describe(`with alternator01 preset`, () => {
  it(`should return a alternator01 preset`, () => {
    const alternator01Preset = alternator01().build<TProductVariantDraft>();
    expect(alternator01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/alternator.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "alternator",
      }
    `);
  });

  it(`should return a alternator01 preset when built for graphql`, () => {
    const alternator01PresetGraphql =
      alternator01().buildGraphql<TProductVariantDraft>();
    expect(alternator01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/alternator.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "alternator",
        "staged": true,
      }
    `);
  });
});
