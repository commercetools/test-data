import type { TProductVariantDraft } from '../../../types';
import f890Op02 from './f-890-op-02';

describe(`with f890Op02 preset`, () => {
  it(`should return a f890Op02 preset`, () => {
    const f890Op02Preset = f890Op02().build<TProductVariantDraft>();
    expect(f890Op02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "f890-op-2019",
      }
    `);
  });

  it(`should return a f890Op02 preset when built for graphql`, () => {
    const f890Op02PresetGraphql =
      f890Op02().buildGraphql<TProductVariantDraft>();
    expect(f890Op02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "f890-op-2019",
      }
    `);
  });
});
