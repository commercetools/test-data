import type { TProductVariantDraft } from '../../../types';
import kk567Yz02 from './kk-567-yz-02';

describe(`with kk567Yz02 preset`, () => {
  it(`should return a kk567Yz02 preset`, () => {
    const kk567Yz02Preset = kk567Yz02().build<TProductVariantDraft>();
    expect(kk567Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 900,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "kk567-yz-2019",
      }
    `);
  });

  it(`should return a kk567Yz02 preset when built for graphql`, () => {
    const kk567Yz02PresetGraphql =
      kk567Yz02().buildGraphql<TProductVariantDraft>();
    expect(kk567Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "900",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "kk567-yz-2019",
      }
    `);
  });
});
