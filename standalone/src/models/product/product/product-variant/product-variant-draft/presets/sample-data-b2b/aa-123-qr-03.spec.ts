import type { TProductVariantDraft } from '../../../types';
import aa123Qr03 from './aa-123-qr-03';

describe(`with aa123Qr03 preset`, () => {
  it(`should return a aa123Qr03 preset`, () => {
    const aa123Qr03Preset = aa123Qr03().build<TProductVariantDraft>();
    expect(aa123Qr03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aa123-qr-2023",
      }
    `);
  });

  it(`should return a aa123Qr03 preset when built for graphql`, () => {
    const aa123Qr03PresetGraphql =
      aa123Qr03().buildGraphql<TProductVariantDraft>();
    expect(aa123Qr03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2023.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aa123-qr-2023",
      }
    `);
  });
});
