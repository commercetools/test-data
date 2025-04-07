import type { TProductVariantDraft } from '../../../types';
import x456Yz02 from './x-456-yz-02';

describe(`with x456Yz02 preset`, () => {
  it(`should return a x456Yz02 preset`, () => {
    const x456Yz02Preset = x456Yz02().build<TProductVariantDraft>();
    expect(x456Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
          },
          {
            "name": "model",
            "value": 2019,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x456-yz-2019",
      }
    `);
  });

  it(`should return a x456Yz02 preset when built for graphql`, () => {
    const x456Yz02PresetGraphql =
      x456Yz02().buildGraphql<TProductVariantDraft>();
    expect(x456Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
          },
          {
            "name": "model",
            "value": "2019",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x456-yz-2019",
        "staged": true,
      }
    `);
  });
});
