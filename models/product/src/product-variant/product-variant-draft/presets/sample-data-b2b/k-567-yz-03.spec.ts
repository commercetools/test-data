import type { TProductVariantDraft } from '../../../types';
import k567Yz03 from './k-567-yz-03';

describe(`with k567Yz03 preset`, () => {
  it(`should return a k567Yz03 preset`, () => {
    const k567Yz03Preset = k567Yz03().build<TProductVariantDraft>();
    expect(k567Yz03Preset).toMatchInlineSnapshot(`
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
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "k567-yz-2023",
      }
    `);
  });

  it(`should return a k567Yz03 preset when built for graphql`, () => {
    const k567Yz03PresetGraphql =
      k567Yz03().buildGraphql<TProductVariantDraft>();
    expect(k567Yz03PresetGraphql).toMatchInlineSnapshot(`
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
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "k567-yz-2023",
        "staged": true,
      }
    `);
  });
});
