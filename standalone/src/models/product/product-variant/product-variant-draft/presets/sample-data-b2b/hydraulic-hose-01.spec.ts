import type { TProductVariantDraft } from '../../../types';
import hydraulicHose01 from './hydraulic-hose-01';

describe(`with hydraulicHose01 preset`, () => {
  it(`should return a hydraulicHose01 preset`, () => {
    const hydraulicHose01Preset =
      hydraulicHose01().build<TProductVariantDraft>();
    expect(hydraulicHose01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hydraulic-hose.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "hydraulic-hose",
      }
    `);
  });

  it(`should return a hydraulicHose01 preset when built for graphql`, () => {
    const hydraulicHose01PresetGraphql =
      hydraulicHose01().buildGraphql<TProductVariantDraft>();
    expect(hydraulicHose01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hydraulic-hose.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "hydraulic-hose",
      }
    `);
  });
});
