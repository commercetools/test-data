import type { TProductVariantDraft } from '../../../types';
import rr890Op01 from './rr-890-op-01';

describe(`with rr890Op01 preset`, () => {
  it(`should return a rr890Op01 preset`, () => {
    const rr890Op01Preset = rr890Op01().build<TProductVariantDraft>();
    expect(rr890Op01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "rr890-op-2015",
      }
    `);
  });

  it(`should return a rr890Op01 preset when built for graphql`, () => {
    const rr890Op01PresetGraphql =
      rr890Op01().buildGraphql<TProductVariantDraft>();
    expect(rr890Op01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "rr890-op-2015",
      }
    `);
  });
});
