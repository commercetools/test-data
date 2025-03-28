import type { TProductVariantDraft } from '../../../types';
import h456St02 from './h-456-st-02';

describe(`with h456St02 preset`, () => {
  it(`should return a h456St02 preset`, () => {
    const h456St02Preset = h456St02().build<TProductVariantDraft>();
    expect(h456St02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
          },
          {
            "name": "model",
            "value": 2019,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "h456-st-2019",
      }
    `);
  });

  it(`should return a h456St02 preset when built for graphql`, () => {
    const h456St02PresetGraphql =
      h456St02().buildGraphql<TProductVariantDraft>();
    expect(h456St02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
          },
          {
            "name": "model",
            "value": "2019",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "h456-st-2019",
        "staged": true,
      }
    `);
  });
});
