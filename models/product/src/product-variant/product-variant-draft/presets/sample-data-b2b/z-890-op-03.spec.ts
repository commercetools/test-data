import type { TProductVariantDraft } from '../../../types';
import z890Op03 from './z-890-op-03';

describe(`with z890Op03 preset`, () => {
  it(`should return a z890Op03 preset`, () => {
    const z890Op03Preset = z890Op03().build<TProductVariantDraft>();
    expect(z890Op03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
          },
          {
            "name": "model",
            "value": 2023,
          },
          {
            "name": "iso45001",
            "value": true,
          },
          {
            "name": "mobility",
            "value": {
              "key": "wheeled",
              "label": "Wheeled",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "z890-op-2023",
      }
    `);
  });

  it(`should return a z890Op03 preset when built for graphql`, () => {
    const z890Op03PresetGraphql =
      z890Op03().buildGraphql<TProductVariantDraft>();
    expect(z890Op03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
          },
          {
            "name": "model",
            "value": "2023",
          },
          {
            "name": "iso45001",
            "value": "true",
          },
          {
            "name": "mobility",
            "value": "{"key":"wheeled","label":"Wheeled"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "z890-op-2023",
        "staged": true,
      }
    `);
  });
});
