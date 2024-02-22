import type { TProductVariantDraft } from '../../../types';
import x234Wx02 from './x-234-wx-02';

describe(`with x234Wx02 preset`, () => {
  it(`should return a x234Wx02 preset`, () => {
    const x234Wx02Preset = x234Wx02().build<TProductVariantDraft>();
    expect(x234Wx02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 400,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x234-wx-2019",
      }
    `);
  });

  it(`should return a x234Wx02 preset when built for graphql`, () => {
    const x234Wx02PresetGraphql =
      x234Wx02().buildGraphql<TProductVariantDraft>();
    expect(x234Wx02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "400",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x234-wx-2019",
      }
    `);
  });
});
