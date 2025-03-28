import type { TProductVariantDraft } from '../../../types';
import ii789Uv03 from './ii-789-uv-03';

describe(`with ii789Uv03 preset`, () => {
  it(`should return a ii789Uv03 preset`, () => {
    const ii789Uv03Preset = ii789Uv03().build<TProductVariantDraft>();
    expect(ii789Uv03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ii789-uv-2023",
      }
    `);
  });

  it(`should return a ii789Uv03 preset when built for graphql`, () => {
    const ii789Uv03PresetGraphql =
      ii789Uv03().buildGraphql<TProductVariantDraft>();
    expect(ii789Uv03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ii789-uv-2023",
        "staged": true,
      }
    `);
  });
});
