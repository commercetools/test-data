import type { TProductVariantDraft } from '../../../types';
import x456Yz01 from './x-456-yz-01';

describe(`with x456Yz01 preset`, () => {
  it(`should return a x456Yz01 preset`, () => {
    const x456Yz01Preset = x456Yz01().build<TProductVariantDraft>();
    expect(x456Yz01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x456-yz-2015",
      }
    `);
  });

  it(`should return a x456Yz01 preset when built for graphql`, () => {
    const x456Yz01PresetGraphql =
      x456Yz01().buildGraphql<TProductVariantDraft>();
    expect(x456Yz01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x456-yz-2015",
        "staged": true,
      }
    `);
  });
});
