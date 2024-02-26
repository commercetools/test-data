import type { TProductVariantDraft } from '../../../types';
import x234Wx03 from './x-234-wx-03';

describe(`with x234Wx03 preset`, () => {
  it(`should return a x234Wx03 preset`, () => {
    const x234Wx03Preset = x234Wx03().build<TProductVariantDraft>();
    expect(x234Wx03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 400,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x234-wx-2023",
      }
    `);
  });

  it(`should return a x234Wx03 preset when built for graphql`, () => {
    const x234Wx03PresetGraphql =
      x234Wx03().buildGraphql<TProductVariantDraft>();
    expect(x234Wx03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "400",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x234-wx-2023",
      }
    `);
  });
});
