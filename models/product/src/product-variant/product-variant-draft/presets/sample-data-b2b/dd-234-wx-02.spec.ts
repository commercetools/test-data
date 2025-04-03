import type { TProductVariantDraft } from '../../../types';
import dd234Wx02 from './dd-234-wx-02';

describe(`with dd234Wx02 preset`, () => {
  it(`should return a dd234Wx02 preset`, () => {
    const dd234Wx02Preset = dd234Wx02().build<TProductVariantDraft>();
    expect(dd234Wx02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 450,
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
              "key": "wheeled",
              "label": "Wheeled",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "dd234-wx-2019",
      }
    `);
  });

  it(`should return a dd234Wx02 preset when built for graphql`, () => {
    const dd234Wx02PresetGraphql =
      dd234Wx02().buildGraphql<TProductVariantDraft>();
    expect(dd234Wx02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "450",
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
            "value": "{"key":"wheeled","label":"Wheeled"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "dd234-wx-2019",
        "staged": true,
      }
    `);
  });
});
