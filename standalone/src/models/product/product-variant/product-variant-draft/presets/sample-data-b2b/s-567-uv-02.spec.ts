import type { TProductVariantDraft } from '../../../types';
import s567Uv02 from './s-567-uv-02';

describe(`with s567Uv02 preset`, () => {
  it(`should return a s567Uv02 preset`, () => {
    const s567Uv02Preset = s567Uv02().build<TProductVariantDraft>();
    expect(s567Uv02Preset).toMatchInlineSnapshot(`
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
              "key": "marine",
              "label": "Marine",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "s567-uv-2019",
      }
    `);
  });

  it(`should return a s567Uv02 preset when built for graphql`, () => {
    const s567Uv02PresetGraphql =
      s567Uv02().buildGraphql<TProductVariantDraft>();
    expect(s567Uv02PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "{"key":"marine","label":"Marine"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "s567-uv-2019",
      }
    `);
  });
});
