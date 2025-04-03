import type { TProductVariantDraft } from '../../../types';
import ll890Op02 from './ll-890-op-02';

describe(`with ll890Op02 preset`, () => {
  it(`should return a ll890Op02 preset`, () => {
    const ll890Op02Preset = ll890Op02().build<TProductVariantDraft>();
    expect(ll890Op02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 1000,
          },
          {
            "name": "model",
            "value": 2019,
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
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ll890-op-2019",
      }
    `);
  });

  it(`should return a ll890Op02 preset when built for graphql`, () => {
    const ll890Op02PresetGraphql =
      ll890Op02().buildGraphql<TProductVariantDraft>();
    expect(ll890Op02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1000",
          },
          {
            "name": "model",
            "value": "2019",
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
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ll890-op-2019",
        "staged": true,
      }
    `);
  });
});
