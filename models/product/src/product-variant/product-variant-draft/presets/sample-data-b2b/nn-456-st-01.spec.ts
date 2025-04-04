import type { TProductVariantDraft } from '../../../types';
import nn456St01 from './nn-456-st-01';

describe(`with nn456St01 preset`, () => {
  it(`should return a nn456St01 preset`, () => {
    const nn456St01Preset = nn456St01().build<TProductVariantDraft>();
    expect(nn456St01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "nn456-st-2015",
      }
    `);
  });

  it(`should return a nn456St01 preset when built for graphql`, () => {
    const nn456St01PresetGraphql =
      nn456St01().buildGraphql<TProductVariantDraft>();
    expect(nn456St01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "nn456-st-2015",
        "staged": true,
      }
    `);
  });
});
