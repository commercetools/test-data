import type { TProductVariantDraft } from '../../../types';
import d234Wx02 from './d-234-wx-02';

describe(`with d234Wx02 preset`, () => {
  it(`should return a d234Wx02 preset`, () => {
    const d234Wx02Preset = d234Wx02().build<TProductVariantDraft>();
    expect(d234Wx02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
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
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "d234-wx-2019",
      }
    `);
  });

  it(`should return a d234Wx02 preset when built for graphql`, () => {
    const d234Wx02PresetGraphql =
      d234Wx02().buildGraphql<TProductVariantDraft>();
    expect(d234Wx02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
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
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "d234-wx-2019",
        "staged": true,
      }
    `);
  });
});
