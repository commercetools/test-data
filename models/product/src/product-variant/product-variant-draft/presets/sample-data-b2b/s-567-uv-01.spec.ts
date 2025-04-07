import type { TProductVariantDraft } from '../../../types';
import s567Uv01 from './s-567-uv-01';

describe(`with s567Uv01 preset`, () => {
  it(`should return a s567Uv01 preset`, () => {
    const s567Uv01Preset = s567Uv01().build<TProductVariantDraft>();
    expect(s567Uv01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "s567-uv-2015",
      }
    `);
  });

  it(`should return a s567Uv01 preset when built for graphql`, () => {
    const s567Uv01PresetGraphql =
      s567Uv01().buildGraphql<TProductVariantDraft>();
    expect(s567Uv01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "s567-uv-2015",
        "staged": true,
      }
    `);
  });
});
