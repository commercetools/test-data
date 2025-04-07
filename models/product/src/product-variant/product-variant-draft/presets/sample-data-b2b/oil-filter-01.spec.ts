import type { TProductVariantDraft } from '../../../types';
import oilFilter01 from './oil-filter-01';

describe(`with oilFilter01 preset`, () => {
  it(`should return a oilFilter01 preset`, () => {
    const oilFilter01Preset = oilFilter01().build<TProductVariantDraft>();
    expect(oilFilter01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oil-filter.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "oil-filter",
      }
    `);
  });

  it(`should return a oilFilter01 preset when built for graphql`, () => {
    const oilFilter01PresetGraphql =
      oilFilter01().buildGraphql<TProductVariantDraft>();
    expect(oilFilter01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oil-filter.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "oil-filter",
        "staged": true,
      }
    `);
  });
});
