import type { TProductVariantDraft } from '../../../types';
import c789Uv01 from './c-789-uv-01';

describe(`with c789Uv01 preset`, () => {
  it(`should return a c789Uv01 preset`, () => {
    const c789Uv01Preset = c789Uv01().build<TProductVariantDraft>();
    expect(c789Uv01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
          },
          {
            "name": "model",
            "value": 2015,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "c789-uv-2015",
      }
    `);
  });

  it(`should return a c789Uv01 preset when built for graphql`, () => {
    const c789Uv01PresetGraphql =
      c789Uv01().buildGraphql<TProductVariantDraft>();
    expect(c789Uv01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
          },
          {
            "name": "model",
            "value": "2015",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "c789-uv-2015",
        "staged": true,
      }
    `);
  });
});
