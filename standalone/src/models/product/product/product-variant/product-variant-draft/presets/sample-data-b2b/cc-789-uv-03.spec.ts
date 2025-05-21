import type { TProductVariantDraft } from '../../../types';
import cc789Uv03 from './cc-789-uv-03';

describe(`with cc789Uv03 preset`, () => {
  it(`should return a cc789Uv03 preset`, () => {
    const cc789Uv03Preset = cc789Uv03().build<TProductVariantDraft>();
    expect(cc789Uv03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "cc789-uv-2023",
      }
    `);
  });

  it(`should return a cc789Uv03 preset when built for graphql`, () => {
    const cc789Uv03PresetGraphql =
      cc789Uv03().buildGraphql<TProductVariantDraft>();
    expect(cc789Uv03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "cc789-uv-2023",
      }
    `);
  });
});
