import type { TProductVariantDraft } from '../../../types';
import nn456St02 from './nn-456-st-02';

describe(`with nn456St02 preset`, () => {
  it(`should return a nn456St02 preset`, () => {
    const nn456St02Preset = nn456St02().build<TProductVariantDraft>();
    expect(nn456St02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "nn456-st-2019",
      }
    `);
  });

  it(`should return a nn456St02 preset when built for graphql`, () => {
    const nn456St02PresetGraphql =
      nn456St02().buildGraphql<TProductVariantDraft>();
    expect(nn456St02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "nn456-st-2019",
      }
    `);
  });
});
