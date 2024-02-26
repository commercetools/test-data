import type { TProductVariantDraft } from '../../../types';
import n123Qr03 from './n-123-qr-03';

describe(`with n123Qr03 preset`, () => {
  it(`should return a n123Qr03 preset`, () => {
    const n123Qr03Preset = n123Qr03().build<TProductVariantDraft>();
    expect(n123Qr03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 550,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "n123-qr-2023",
      }
    `);
  });

  it(`should return a n123Qr03 preset when built for graphql`, () => {
    const n123Qr03PresetGraphql =
      n123Qr03().buildGraphql<TProductVariantDraft>();
    expect(n123Qr03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "550",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "n123-qr-2023",
      }
    `);
  });
});
