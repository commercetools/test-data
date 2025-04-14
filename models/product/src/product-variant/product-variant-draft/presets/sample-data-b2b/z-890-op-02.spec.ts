import type { TProductVariantDraft } from '../../../types';
import z890Op02 from './z-890-op-02';

describe(`with z890Op02 preset`, () => {
  it(`should return a z890Op02 preset`, () => {
    const z890Op02Preset = z890Op02().build<TProductVariantDraft>();
    expect(z890Op02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
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
              "key": "wheeled",
              "label": "Wheeled",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "z890-op-2019",
      }
    `);
  });

  it(`should return a z890Op02 preset when built for graphql`, () => {
    const z890Op02PresetGraphql =
      z890Op02().buildGraphql<TProductVariantDraft>();
    expect(z890Op02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
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
            "value": "{"key":"wheeled","label":"Wheeled"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "z890-op-2019",
      }
    `);
  });
});
