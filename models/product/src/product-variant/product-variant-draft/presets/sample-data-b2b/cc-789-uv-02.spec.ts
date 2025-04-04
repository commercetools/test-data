import type { TProductVariantDraft } from '../../../types';
import cc789Uv02 from './cc-789-uv-02';

describe(`with cc789Uv02 preset`, () => {
  it(`should return a cc789Uv02 preset`, () => {
    const cc789Uv02Preset = cc789Uv02().build<TProductVariantDraft>();
    expect(cc789Uv02Preset).toMatchInlineSnapshot(`
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "cc789-uv-2019",
      }
    `);
  });

  it(`should return a cc789Uv02 preset when built for graphql`, () => {
    const cc789Uv02PresetGraphql =
      cc789Uv02().buildGraphql<TProductVariantDraft>();
    expect(cc789Uv02PresetGraphql).toMatchInlineSnapshot(`
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "cc789-uv-2019",
        "staged": true,
      }
    `);
  });
});
