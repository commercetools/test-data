import type { TProductVariantDraft } from '../../../types';
import h456St03 from './h-456-st-03';

describe(`with h456St03 preset`, () => {
  it(`should return a h456St03 preset`, () => {
    const h456St03Preset = h456St03().build<TProductVariantDraft>();
    expect(h456St03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "h456-st-2023",
      }
    `);
  });

  it(`should return a h456St03 preset when built for graphql`, () => {
    const h456St03PresetGraphql =
      h456St03().buildGraphql<TProductVariantDraft>();
    expect(h456St03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "h456-st-2023",
      }
    `);
  });
});
