import type { TProductVariantDraft } from '../../../types';
import g123Qr02 from './g-123-qr-02';

describe(`with g123Qr02 preset`, () => {
  it(`should return a g123Qr02 preset`, () => {
    const g123Qr02Preset = g123Qr02().build<TProductVariantDraft>();
    expect(g123Qr02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "g123-qr-2019",
      }
    `);
  });

  it(`should return a g123Qr02 preset when built for graphql`, () => {
    const g123Qr02PresetGraphql =
      g123Qr02().buildGraphql<TProductVariantDraft>();
    expect(g123Qr02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "g123-qr-2019",
      }
    `);
  });
});
