import type { TProductVariantDraft } from '../../../types';
import rr890Op03 from './rr-890-op-03';

describe(`with rr890Op03 preset`, () => {
  it(`should return a rr890Op03 preset`, () => {
    const rr890Op03Preset = rr890Op03().build<TProductVariantDraft>();
    expect(rr890Op03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 900,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "rr890-op-2023",
      }
    `);
  });

  it(`should return a rr890Op03 preset when built for graphql`, () => {
    const rr890Op03PresetGraphql =
      rr890Op03().buildGraphql<TProductVariantDraft>();
    expect(rr890Op03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "900",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "rr890-op-2023",
        "staged": true,
      }
    `);
  });
});
