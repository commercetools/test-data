import type { TProductVariantDraft } from '../../../types';
import oo789Uv01 from './oo-789-uv-01';

describe(`with oo789Uv01 preset`, () => {
  it(`should return a oo789Uv01 preset`, () => {
    const oo789Uv01Preset = oo789Uv01().build<TProductVariantDraft>();
    expect(oo789Uv01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "oo789-uv-2015",
      }
    `);
  });

  it(`should return a oo789Uv01 preset when built for graphql`, () => {
    const oo789Uv01PresetGraphql =
      oo789Uv01().buildGraphql<TProductVariantDraft>();
    expect(oo789Uv01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "oo789-uv-2015",
        "staged": true,
      }
    `);
  });
});
