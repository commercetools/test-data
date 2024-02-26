import type { TProductVariantDraft } from '../../../types';
import dd234Wx03 from './dd-234-wx-03';

describe(`with dd234Wx03 preset`, () => {
  it(`should return a dd234Wx03 preset`, () => {
    const dd234Wx03Preset = dd234Wx03().build<TProductVariantDraft>();
    expect(dd234Wx03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 450,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "dd234-wx-2023",
      }
    `);
  });

  it(`should return a dd234Wx03 preset when built for graphql`, () => {
    const dd234Wx03PresetGraphql =
      dd234Wx03().buildGraphql<TProductVariantDraft>();
    expect(dd234Wx03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "450",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "dd234-wx-2023",
      }
    `);
  });
});
