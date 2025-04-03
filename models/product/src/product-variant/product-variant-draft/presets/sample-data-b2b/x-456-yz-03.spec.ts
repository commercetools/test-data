import type { TProductVariantDraft } from '../../../types';
import x456Yz03 from './x-456-yz-03';

describe(`with x456Yz03 preset`, () => {
  it(`should return a x456Yz03 preset`, () => {
    const x456Yz03Preset = x456Yz03().build<TProductVariantDraft>();
    expect(x456Yz03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x456-yz-2023",
      }
    `);
  });

  it(`should return a x456Yz03 preset when built for graphql`, () => {
    const x456Yz03PresetGraphql =
      x456Yz03().buildGraphql<TProductVariantDraft>();
    expect(x456Yz03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "x456-yz-2023",
        "staged": true,
      }
    `);
  });
});
