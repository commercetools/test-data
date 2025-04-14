import type { TProductVariantDraft } from '../../../types';
import fuelFilter01 from './fuel-filter-01';

describe(`with fuelFilter01 preset`, () => {
  it(`should return a fuelFilter01 preset`, () => {
    const fuelFilter01Preset = fuelFilter01().build<TProductVariantDraft>();
    expect(fuelFilter01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fuel-filter.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "fuel-filter",
      }
    `);
  });

  it(`should return a fuelFilter01 preset when built for graphql`, () => {
    const fuelFilter01PresetGraphql =
      fuelFilter01().buildGraphql<TProductVariantDraft>();
    expect(fuelFilter01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fuel-filter.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "fuel-filter",
      }
    `);
  });
});
