import type { TProductVariantDraft } from '../../../types';
import pp234Wx02 from './pp-234-wx-02';

describe(`with pp234Wx02 preset`, () => {
  it(`should return a pp234Wx02 preset`, () => {
    const pp234Wx02Preset = pp234Wx02().build<TProductVariantDraft>();
    expect(pp234Wx02Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pp234-wx-2019",
      }
    `);
  });

  it(`should return a pp234Wx02 preset when built for graphql`, () => {
    const pp234Wx02PresetGraphql =
      pp234Wx02().buildGraphql<TProductVariantDraft>();
    expect(pp234Wx02PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "pp234-wx-2019",
        "staged": true,
      }
    `);
  });
});
