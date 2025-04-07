import type { TProductVariantDraft } from '../../../types';
import gg123Qr03 from './gg-123-qr-03';

describe(`with gg123Qr03 preset`, () => {
  it(`should return a gg123Qr03 preset`, () => {
    const gg123Qr03Preset = gg123Qr03().build<TProductVariantDraft>();
    expect(gg123Qr03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
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
              "w": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "gg123-qr-2023",
      }
    `);
  });

  it(`should return a gg123Qr03 preset when built for graphql`, () => {
    const gg123Qr03PresetGraphql =
      gg123Qr03().buildGraphql<TProductVariantDraft>();
    expect(gg123Qr03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
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
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "gg123-qr-2023",
        "staged": true,
      }
    `);
  });
});
