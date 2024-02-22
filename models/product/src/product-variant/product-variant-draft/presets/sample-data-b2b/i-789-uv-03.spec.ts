import type { TProductVariantDraft } from '../../../types';
import i789Uv03 from './i-789-uv-03';

describe(`with i789Uv03 preset`, () => {
  it(`should return a i789Uv03 preset`, () => {
    const i789Uv03Preset = i789Uv03().build<TProductVariantDraft>();
    expect(i789Uv03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 900,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "i789-uv-2023",
      }
    `);
  });

  it(`should return a i789Uv03 preset when built for graphql`, () => {
    const i789Uv03PresetGraphql =
      i789Uv03().buildGraphql<TProductVariantDraft>();
    expect(i789Uv03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "900",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "i789-uv-2023",
      }
    `);
  });
});
