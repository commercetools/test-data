import type { TProductVariantDraft } from '../../../types';
import oo789Uv02 from './oo-789-uv-02';

describe(`with oo789Uv02 preset`, () => {
  it(`should return a oo789Uv02 preset`, () => {
    const oo789Uv02Preset = oo789Uv02().build<TProductVariantDraft>();
    expect(oo789Uv02Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "oo789-uv-2019",
      }
    `);
  });

  it(`should return a oo789Uv02 preset when built for graphql`, () => {
    const oo789Uv02PresetGraphql =
      oo789Uv02().buildGraphql<TProductVariantDraft>();
    expect(oo789Uv02PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "oo789-uv-2019",
      }
    `);
  });
});
