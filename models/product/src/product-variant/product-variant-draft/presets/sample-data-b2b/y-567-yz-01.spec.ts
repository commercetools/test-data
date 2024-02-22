import type { TProductVariantDraft } from '../../../types';
import y567Yz01 from './y-567-yz-01';

describe(`with y567Yz01 preset`, () => {
  it(`should return a y567Yz01 preset`, () => {
    const y567Yz01Preset = y567Yz01().build<TProductVariantDraft>();
    expect(y567Yz01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 450,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "y567-yz-2015",
      }
    `);
  });

  it(`should return a y567Yz01 preset when built for graphql`, () => {
    const y567Yz01PresetGraphql =
      y567Yz01().buildGraphql<TProductVariantDraft>();
    expect(y567Yz01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "450",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "y567-yz-2015",
      }
    `);
  });
});
