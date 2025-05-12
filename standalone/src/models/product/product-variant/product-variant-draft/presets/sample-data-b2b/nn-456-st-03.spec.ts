import type { TProductVariantDraft } from '../../../types';
import nn456St03 from './nn-456-st-03';

describe(`with nn456St03 preset`, () => {
  it(`should return a nn456St03 preset`, () => {
    const nn456St03Preset = nn456St03().build<TProductVariantDraft>();
    expect(nn456St03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
          },
          {
            "name": "model",
            "value": 2023,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "nn456-st-2023",
      }
    `);
  });

  it(`should return a nn456St03 preset when built for graphql`, () => {
    const nn456St03PresetGraphql =
      nn456St03().buildGraphql<TProductVariantDraft>();
    expect(nn456St03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
          },
          {
            "name": "model",
            "value": "2023",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "nn456-st-2023",
      }
    `);
  });
});
