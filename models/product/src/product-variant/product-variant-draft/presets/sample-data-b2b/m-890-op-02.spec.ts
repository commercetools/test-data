import type { TProductVariantDraft } from '../../../types';
import m890Op02 from './m-890-op-02';

describe(`with m890Op02 preset`, () => {
  it(`should return a m890Op02 preset`, () => {
    const m890Op02Preset = m890Op02().build<TProductVariantDraft>();
    expect(m890Op02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 650,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "m890-op-2019",
      }
    `);
  });

  it(`should return a m890Op02 preset when built for graphql`, () => {
    const m890Op02PresetGraphql =
      m890Op02().buildGraphql<TProductVariantDraft>();
    expect(m890Op02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "650",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "m890-op-2019",
      }
    `);
  });
});
