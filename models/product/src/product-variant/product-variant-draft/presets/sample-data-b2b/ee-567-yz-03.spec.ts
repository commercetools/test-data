import type { TProductVariantDraft } from '../../../types';
import ee567Yz03 from './ee-567-yz-03';

describe(`with ee567Yz03 preset`, () => {
  it(`should return a ee567Yz03 preset`, () => {
    const ee567Yz03Preset = ee567Yz03().build<TProductVariantDraft>();
    expect(ee567Yz03Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ee567-yz-2023",
      }
    `);
  });

  it(`should return a ee567Yz03 preset when built for graphql`, () => {
    const ee567Yz03PresetGraphql =
      ee567Yz03().buildGraphql<TProductVariantDraft>();
    expect(ee567Yz03PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ee567-yz-2023",
      }
    `);
  });
});
