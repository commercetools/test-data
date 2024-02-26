import type { TProductVariantDraft } from '../../../types';
import bb456St03 from './bb-456-st-03';

describe(`with bb456St03 preset`, () => {
  it(`should return a bb456St03 preset`, () => {
    const bb456St03Preset = bb456St03().build<TProductVariantDraft>();
    expect(bb456St03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bb456-st-2023",
      }
    `);
  });

  it(`should return a bb456St03 preset when built for graphql`, () => {
    const bb456St03PresetGraphql =
      bb456St03().buildGraphql<TProductVariantDraft>();
    expect(bb456St03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "bb456-st-2023",
      }
    `);
  });
});
