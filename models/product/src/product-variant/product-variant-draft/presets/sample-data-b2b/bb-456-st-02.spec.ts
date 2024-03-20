import type { TProductVariantDraft } from '../../../types';
import bb456St02 from './bb-456-st-02';

describe(`with bb456St02 preset`, () => {
  it(`should return a bb456St02 preset`, () => {
    const bb456St02Preset = bb456St02().build<TProductVariantDraft>();
    expect(bb456St02Preset).toMatchInlineSnapshot(`
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bb456-st-2019",
      }
    `);
  });

  it(`should return a bb456St02 preset when built for graphql`, () => {
    const bb456St02PresetGraphql =
      bb456St02().buildGraphql<TProductVariantDraft>();
    expect(bb456St02PresetGraphql).toMatchInlineSnapshot(`
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bb456-st-2019",
      }
    `);
  });
});
