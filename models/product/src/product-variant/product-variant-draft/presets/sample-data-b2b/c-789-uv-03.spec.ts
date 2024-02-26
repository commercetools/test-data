import type { TProductVariantDraft } from '../../../types';
import c789Uv03 from './c-789-uv-03';

describe(`with c789Uv03 preset`, () => {
  it(`should return a c789Uv03 preset`, () => {
    const c789Uv03Preset = c789Uv03().build<TProductVariantDraft>();
    expect(c789Uv03Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "c789-uv-2023",
      }
    `);
  });

  it(`should return a c789Uv03 preset when built for graphql`, () => {
    const c789Uv03PresetGraphql =
      c789Uv03().buildGraphql<TProductVariantDraft>();
    expect(c789Uv03PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "c789-uv-2023",
      }
    `);
  });
});
