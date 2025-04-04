import type { TProductVariantDraft } from '../../../types';
import w789Uv02 from './w-789-uv-02';

describe(`with w789Uv02 preset`, () => {
  it(`should return a w789Uv02 preset`, () => {
    const w789Uv02Preset = w789Uv02().build<TProductVariantDraft>();
    expect(w789Uv02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 350,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "w789-uv-2019",
      }
    `);
  });

  it(`should return a w789Uv02 preset when built for graphql`, () => {
    const w789Uv02PresetGraphql =
      w789Uv02().buildGraphql<TProductVariantDraft>();
    expect(w789Uv02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "350",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "w789-uv-2019",
        "staged": true,
      }
    `);
  });
});
