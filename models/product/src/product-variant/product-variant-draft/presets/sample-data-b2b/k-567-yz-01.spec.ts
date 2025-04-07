import type { TProductVariantDraft } from '../../../types';
import k567Yz01 from './k-567-yz-01';

describe(`with k567Yz01 preset`, () => {
  it(`should return a k567Yz01 preset`, () => {
    const k567Yz01Preset = k567Yz01().build<TProductVariantDraft>();
    expect(k567Yz01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "k567-yz-2015",
      }
    `);
  });

  it(`should return a k567Yz01 preset when built for graphql`, () => {
    const k567Yz01PresetGraphql =
      k567Yz01().buildGraphql<TProductVariantDraft>();
    expect(k567Yz01PresetGraphql).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "k567-yz-2015",
        "staged": true,
      }
    `);
  });
});
