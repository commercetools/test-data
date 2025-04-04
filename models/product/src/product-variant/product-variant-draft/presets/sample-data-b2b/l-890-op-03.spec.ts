import type { TProductVariantDraft } from '../../../types';
import l890Op03 from './l-890-op-03';

describe(`with l890Op03 preset`, () => {
  it(`should return a l890Op03 preset`, () => {
    const l890Op03Preset = l890Op03().build<TProductVariantDraft>();
    expect(l890Op03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 850,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "l890-op-2023",
      }
    `);
  });

  it(`should return a l890Op03 preset when built for graphql`, () => {
    const l890Op03PresetGraphql =
      l890Op03().buildGraphql<TProductVariantDraft>();
    expect(l890Op03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "850",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/l890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "l890-op-2023",
        "staged": true,
      }
    `);
  });
});
