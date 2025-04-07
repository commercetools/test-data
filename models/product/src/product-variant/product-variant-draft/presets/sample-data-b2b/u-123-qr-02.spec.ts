import type { TProductVariantDraft } from '../../../types';
import u123Qr02 from './u-123-qr-02';

describe(`with u123Qr02 preset`, () => {
  it(`should return a u123Qr02 preset`, () => {
    const u123Qr02Preset = u123Qr02().build<TProductVariantDraft>();
    expect(u123Qr02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 200,
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
              "w": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "u123-qr-2019",
      }
    `);
  });

  it(`should return a u123Qr02 preset when built for graphql`, () => {
    const u123Qr02PresetGraphql =
      u123Qr02().buildGraphql<TProductVariantDraft>();
    expect(u123Qr02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "200",
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
              "width": 1792,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "u123-qr-2019",
        "staged": true,
      }
    `);
  });
});
