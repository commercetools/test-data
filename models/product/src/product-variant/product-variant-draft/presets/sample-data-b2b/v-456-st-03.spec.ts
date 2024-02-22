import type { TProductVariantDraft } from '../../../types';
import v456St03 from './v-456-st-03';

describe(`with v456St03 preset`, () => {
  it(`should return a v456St03 preset`, () => {
    const v456St03Preset = v456St03().build<TProductVariantDraft>();
    expect(v456St03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 300,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "v456-st-2023",
      }
    `);
  });

  it(`should return a v456St03 preset when built for graphql`, () => {
    const v456St03PresetGraphql =
      v456St03().buildGraphql<TProductVariantDraft>();
    expect(v456St03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "300",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "v456-st-2023",
      }
    `);
  });
});
