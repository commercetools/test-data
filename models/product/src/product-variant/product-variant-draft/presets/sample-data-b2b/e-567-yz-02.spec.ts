import type { TProductVariantDraft } from '../../../types';
import e567Yz02 from './e-567-yz-02';

describe(`with e567Yz02 preset`, () => {
  it(`should return a e567Yz02 preset`, () => {
    const e567Yz02Preset = e567Yz02().build<TProductVariantDraft>();
    expect(e567Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 550,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "e567-yz-2019",
      }
    `);
  });

  it(`should return a e567Yz02 preset when built for graphql`, () => {
    const e567Yz02PresetGraphql =
      e567Yz02().buildGraphql<TProductVariantDraft>();
    expect(e567Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "550",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "e567-yz-2019",
      }
    `);
  });
});
