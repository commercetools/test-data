import type { TProductVariantDraft } from '../../../types';
import g123Qr03 from './g-123-qr-03';

describe(`with g123Qr03 preset`, () => {
  it(`should return a g123Qr03 preset`, () => {
    const g123Qr03Preset = g123Qr03().build<TProductVariantDraft>();
    expect(g123Qr03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 700,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "g123-qr-2023",
      }
    `);
  });

  it(`should return a g123Qr03 preset when built for graphql`, () => {
    const g123Qr03PresetGraphql =
      g123Qr03().buildGraphql<TProductVariantDraft>();
    expect(g123Qr03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "700",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "g123-qr-2023",
      }
    `);
  });
});
