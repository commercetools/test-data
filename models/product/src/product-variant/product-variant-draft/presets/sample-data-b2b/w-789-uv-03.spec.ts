import type { TProductVariantDraft } from '../../../types';
import w789Uv03 from './w-789-uv-03';

describe(`with w789Uv03 preset`, () => {
  it(`should return a w789Uv03 preset`, () => {
    const w789Uv03Preset = w789Uv03().build<TProductVariantDraft>();
    expect(w789Uv03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 350,
          },
          {
            "name": "model",
            "value": 2023,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "w789-uv-2023",
      }
    `);
  });

  it(`should return a w789Uv03 preset when built for graphql`, () => {
    const w789Uv03PresetGraphql =
      w789Uv03().buildGraphql<TProductVariantDraft>();
    expect(w789Uv03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "350",
          },
          {
            "name": "model",
            "value": "2023",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "w789-uv-2023",
        "staged": true,
      }
    `);
  });
});
