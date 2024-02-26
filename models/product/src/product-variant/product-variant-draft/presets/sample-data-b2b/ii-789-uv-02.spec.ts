import type { TProductVariantDraft } from '../../../types';
import ii789Uv02 from './ii-789-uv-02';

describe(`with ii789Uv02 preset`, () => {
  it(`should return a ii789Uv02 preset`, () => {
    const ii789Uv02Preset = ii789Uv02().build<TProductVariantDraft>();
    expect(ii789Uv02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ii789-uv-2019",
      }
    `);
  });

  it(`should return a ii789Uv02 preset when built for graphql`, () => {
    const ii789Uv02PresetGraphql =
      ii789Uv02().buildGraphql<TProductVariantDraft>();
    expect(ii789Uv02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ii789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ii789-uv-2019",
      }
    `);
  });
});
