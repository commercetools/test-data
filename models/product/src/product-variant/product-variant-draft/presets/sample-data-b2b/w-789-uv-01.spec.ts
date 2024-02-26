import type { TProductVariantDraft } from '../../../types';
import w789Uv01 from './w-789-uv-01';

describe(`with w789Uv01 preset`, () => {
  it(`should return a w789Uv01 preset`, () => {
    const w789Uv01Preset = w789Uv01().build<TProductVariantDraft>();
    expect(w789Uv01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 350,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "w789-uv-2015",
      }
    `);
  });

  it(`should return a w789Uv01 preset when built for graphql`, () => {
    const w789Uv01PresetGraphql =
      w789Uv01().buildGraphql<TProductVariantDraft>();
    expect(w789Uv01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "350",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "w789-uv-2015",
      }
    `);
  });
});
