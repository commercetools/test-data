import type { TProductVariantDraft } from '../../../types';
import k567Yz02 from './k-567-yz-02';

describe(`with k567Yz02 preset`, () => {
  it(`should return a k567Yz02 preset`, () => {
    const k567Yz02Preset = k567Yz02().build<TProductVariantDraft>();
    expect(k567Yz02Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "k567-yz-2019",
      }
    `);
  });

  it(`should return a k567Yz02 preset when built for graphql`, () => {
    const k567Yz02PresetGraphql =
      k567Yz02().buildGraphql<TProductVariantDraft>();
    expect(k567Yz02PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "k567-yz-2019",
      }
    `);
  });
});
