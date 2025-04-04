import type { TProductVariantDraft } from '../../../types';
import rr890Op02 from './rr-890-op-02';

describe(`with rr890Op02 preset`, () => {
  it(`should return a rr890Op02 preset`, () => {
    const rr890Op02Preset = rr890Op02().build<TProductVariantDraft>();
    expect(rr890Op02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 900,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "rr890-op-2019",
      }
    `);
  });

  it(`should return a rr890Op02 preset when built for graphql`, () => {
    const rr890Op02PresetGraphql =
      rr890Op02().buildGraphql<TProductVariantDraft>();
    expect(rr890Op02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "900",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "rr890-op-2019",
        "staged": true,
      }
    `);
  });
});
