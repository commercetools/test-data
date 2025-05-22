import type { TProductVariantDraft } from '../../../types';
import c789Uv02 from './c-789-uv-02';

describe(`with c789Uv02 preset`, () => {
  it(`should return a c789Uv02 preset`, () => {
    const c789Uv02Preset = c789Uv02().build<TProductVariantDraft>();
    expect(c789Uv02Preset).toMatchInlineSnapshot(`
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
            "value": false,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "c789-uv-2019",
      }
    `);
  });

  it(`should return a c789Uv02 preset when built for graphql`, () => {
    const c789Uv02PresetGraphql =
      c789Uv02().buildGraphql<TProductVariantDraft>();
    expect(c789Uv02PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "false",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "c789-uv-2019",
      }
    `);
  });
});
