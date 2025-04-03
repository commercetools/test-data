import type { TProductVariantDraft } from '../../../types';
import airFilter01 from './air-filter-01';

describe(`with airFilter01 preset`, () => {
  it(`should return a airFilter01 preset`, () => {
    const airFilter01Preset = airFilter01().build<TProductVariantDraft>();
    expect(airFilter01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/air-filter.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "air-filter",
      }
    `);
  });

  it(`should return a airFilter01 preset when built for graphql`, () => {
    const airFilter01PresetGraphql =
      airFilter01().buildGraphql<TProductVariantDraft>();
    expect(airFilter01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/air-filter.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "air-filter",
        "staged": true,
      }
    `);
  });
});
