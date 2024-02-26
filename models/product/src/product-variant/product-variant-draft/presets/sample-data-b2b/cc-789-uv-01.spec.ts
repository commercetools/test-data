import type { TProductVariantDraft } from '../../../types';
import cc789Uv01 from './cc-789-uv-01';

describe(`with cc789Uv01 preset`, () => {
  it(`should return a cc789Uv01 preset`, () => {
    const cc789Uv01Preset = cc789Uv01().build<TProductVariantDraft>();
    expect(cc789Uv01Preset).toMatchInlineSnapshot(`
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
              "key": "tracked",
              "label": "Tracked",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "cc789-uv-2015",
      }
    `);
  });

  it(`should return a cc789Uv01 preset when built for graphql`, () => {
    const cc789Uv01PresetGraphql =
      cc789Uv01().buildGraphql<TProductVariantDraft>();
    expect(cc789Uv01PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "{"key":"tracked","label":"Tracked"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "cc789-uv-2015",
      }
    `);
  });
});
