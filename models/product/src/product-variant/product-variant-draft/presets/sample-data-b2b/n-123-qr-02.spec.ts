import type { TProductVariantDraft } from '../../../types';
import n123Qr02 from './n-123-qr-02';

describe(`with n123Qr02 preset`, () => {
  it(`should return a n123Qr02 preset`, () => {
    const n123Qr02Preset = n123Qr02().build<TProductVariantDraft>();
    expect(n123Qr02Preset).toMatchInlineSnapshot(`
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
              "key": "wheeled",
              "label": "Wheeled",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "n123-qr-2019",
      }
    `);
  });

  it(`should return a n123Qr02 preset when built for graphql`, () => {
    const n123Qr02PresetGraphql =
      n123Qr02().buildGraphql<TProductVariantDraft>();
    expect(n123Qr02PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "{"key":"wheeled","label":"Wheeled"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "n123-qr-2019",
        "staged": true,
      }
    `);
  });
});
