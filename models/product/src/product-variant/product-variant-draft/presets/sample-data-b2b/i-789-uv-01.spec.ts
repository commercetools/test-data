import type { TProductVariantDraft } from '../../../types';
import i789Uv01 from './i-789-uv-01';

describe(`with i789Uv01 preset`, () => {
  it(`should return a i789Uv01 preset`, () => {
    const i789Uv01Preset = i789Uv01().build<TProductVariantDraft>();
    expect(i789Uv01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 900,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "i789-uv-2015",
      }
    `);
  });

  it(`should return a i789Uv01 preset when built for graphql`, () => {
    const i789Uv01PresetGraphql =
      i789Uv01().buildGraphql<TProductVariantDraft>();
    expect(i789Uv01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "900",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "i789-uv-2015",
        "staged": true,
      }
    `);
  });
});
