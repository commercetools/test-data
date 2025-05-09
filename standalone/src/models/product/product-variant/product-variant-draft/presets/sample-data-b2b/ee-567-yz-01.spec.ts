import type { TProductVariantDraft } from '../../../types';
import ee567Yz01 from './ee-567-yz-01';

describe(`with ee567Yz01 preset`, () => {
  it(`should return a ee567Yz01 preset`, () => {
    const ee567Yz01Preset = ee567Yz01().build<TProductVariantDraft>();
    expect(ee567Yz01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
          },
          {
            "name": "model",
            "value": 2015,
          },
          {
            "name": "iso45001",
            "value": false,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ee567-yz-2015",
      }
    `);
  });

  it(`should return a ee567Yz01 preset when built for graphql`, () => {
    const ee567Yz01PresetGraphql =
      ee567Yz01().buildGraphql<TProductVariantDraft>();
    expect(ee567Yz01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
          },
          {
            "name": "model",
            "value": "2015",
          },
          {
            "name": "iso45001",
            "value": "false",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ee567-yz-2015",
      }
    `);
  });
});
