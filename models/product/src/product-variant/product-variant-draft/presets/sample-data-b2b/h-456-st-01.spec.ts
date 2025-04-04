import type { TProductVariantDraft } from '../../../types';
import h456St01 from './h-456-st-01';

describe(`with h456St01 preset`, () => {
  it(`should return a h456St01 preset`, () => {
    const h456St01Preset = h456St01().build<TProductVariantDraft>();
    expect(h456St01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
          },
          {
            "name": "model",
            "value": 2015,
          },
          {
            "name": "iso45001",
            "value": true,
          },
          {
            "name": "mobility",
            "value": {
              "key": "tracked",
              "label": "Tracked",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 1024,
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "h456-st-2015",
      }
    `);
  });

  it(`should return a h456St01 preset when built for graphql`, () => {
    const h456St01PresetGraphql =
      h456St01().buildGraphql<TProductVariantDraft>();
    expect(h456St01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
          },
          {
            "name": "model",
            "value": "2015",
          },
          {
            "name": "iso45001",
            "value": "true",
          },
          {
            "name": "mobility",
            "value": "{"key":"tracked","label":"Tracked"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "h456-st-2015",
        "staged": true,
      }
    `);
  });
});
