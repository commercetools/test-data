import type { TProductVariantDraft } from '../../../types';
import ff890Op03 from './ff-890-op-03';

describe(`with ff890Op03 preset`, () => {
  it(`should return a ff890Op03 preset`, () => {
    const ff890Op03Preset = ff890Op03().build<TProductVariantDraft>();
    expect(ff890Op03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 550,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ff890-op-2023",
      }
    `);
  });

  it(`should return a ff890Op03 preset when built for graphql`, () => {
    const ff890Op03PresetGraphql =
      ff890Op03().buildGraphql<TProductVariantDraft>();
    expect(ff890Op03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "550",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ff890-op-2023",
      }
    `);
  });
});
