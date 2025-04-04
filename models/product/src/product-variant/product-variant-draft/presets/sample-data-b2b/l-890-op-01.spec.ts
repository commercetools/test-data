import type { TProductVariantDraft } from '../../../types';
import l890Op01 from './l-890-op-01';

describe(`with l890Op01 preset`, () => {
  it(`should return a l890Op01 preset`, () => {
    const l890Op01Preset = l890Op01().build<TProductVariantDraft>();
    expect(l890Op01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 850,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "l890-op-2015",
      }
    `);
  });

  it(`should return a l890Op01 preset when built for graphql`, () => {
    const l890Op01PresetGraphql =
      l890Op01().buildGraphql<TProductVariantDraft>();
    expect(l890Op01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "850",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "l890-op-2015",
        "staged": true,
      }
    `);
  });
});
