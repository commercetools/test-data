import type { TProductVariantDraft } from '../../../types';
import ll890Op03 from './ll-890-op-03';

describe(`with ll890Op03 preset`, () => {
  it(`should return a ll890Op03 preset`, () => {
    const ll890Op03Preset = ll890Op03().build<TProductVariantDraft>();
    expect(ll890Op03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 1000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ll890-op-2023",
      }
    `);
  });

  it(`should return a ll890Op03 preset when built for graphql`, () => {
    const ll890Op03PresetGraphql =
      ll890Op03().buildGraphql<TProductVariantDraft>();
    expect(ll890Op03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ll890-op-2023",
      }
    `);
  });
});
