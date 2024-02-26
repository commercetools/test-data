import type { TProductVariantDraft } from '../../../types';
import z890Op01 from './z-890-op-01';

describe(`with z890Op01 preset`, () => {
  it(`should return a z890Op01 preset`, () => {
    const z890Op01Preset = z890Op01().build<TProductVariantDraft>();
    expect(z890Op01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "z890-op-2015",
      }
    `);
  });

  it(`should return a z890Op01 preset when built for graphql`, () => {
    const z890Op01PresetGraphql =
      z890Op01().buildGraphql<TProductVariantDraft>();
    expect(z890Op01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "z890-op-2015",
      }
    `);
  });
});
