import type { TProductVariantDraft } from '../../../types';
import ff890Op02 from './ff-890-op-02';

describe(`with ff890Op02 preset`, () => {
  it(`should return a ff890Op02 preset`, () => {
    const ff890Op02Preset = ff890Op02().build<TProductVariantDraft>();
    expect(ff890Op02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 550,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ff890-op-2019",
      }
    `);
  });

  it(`should return a ff890Op02 preset when built for graphql`, () => {
    const ff890Op02PresetGraphql =
      ff890Op02().buildGraphql<TProductVariantDraft>();
    expect(ff890Op02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "550",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ff890-op-2019",
      }
    `);
  });
});
