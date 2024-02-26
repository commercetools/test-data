import type { TProductVariantDraft } from '../../../types';
import ee567Yz02 from './ee-567-yz-02';

describe(`with ee567Yz02 preset`, () => {
  it(`should return a ee567Yz02 preset`, () => {
    const ee567Yz02Preset = ee567Yz02().build<TProductVariantDraft>();
    expect(ee567Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
          },
          {
            "name": "model",
            "value": 2019,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ee567-yz-2019",
      }
    `);
  });

  it(`should return a ee567Yz02 preset when built for graphql`, () => {
    const ee567Yz02PresetGraphql =
      ee567Yz02().buildGraphql<TProductVariantDraft>();
    expect(ee567Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
          },
          {
            "name": "model",
            "value": "2019",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ee567-yz-2019",
      }
    `);
  });
});
