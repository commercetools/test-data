import type { TProductVariantDraft } from '../../../types';
import g123Qr01 from './g-123-qr-01';

describe(`with g123Qr01 preset`, () => {
  it(`should return a g123Qr01 preset`, () => {
    const g123Qr01Preset = g123Qr01().build<TProductVariantDraft>();
    expect(g123Qr01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "g123-qr-2015",
      }
    `);
  });

  it(`should return a g123Qr01 preset when built for graphql`, () => {
    const g123Qr01PresetGraphql =
      g123Qr01().buildGraphql<TProductVariantDraft>();
    expect(g123Qr01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "g123-qr-2015",
      }
    `);
  });
});
