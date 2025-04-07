import type { TProductVariantDraft } from '../../../types';
import u123Qr03 from './u-123-qr-03';

describe(`with u123Qr03 preset`, () => {
  it(`should return a u123Qr03 preset`, () => {
    const u123Qr03Preset = u123Qr03().build<TProductVariantDraft>();
    expect(u123Qr03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 200,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "u123-qr-2023",
      }
    `);
  });

  it(`should return a u123Qr03 preset when built for graphql`, () => {
    const u123Qr03PresetGraphql =
      u123Qr03().buildGraphql<TProductVariantDraft>();
    expect(u123Qr03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "200",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/u123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "u123-qr-2023",
        "staged": true,
      }
    `);
  });
});
