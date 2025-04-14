import type { TProductVariantDraft } from '../../../types';
import aa123Qr02 from './aa-123-qr-02';

describe(`with aa123Qr02 preset`, () => {
  it(`should return a aa123Qr02 preset`, () => {
    const aa123Qr02Preset = aa123Qr02().build<TProductVariantDraft>();
    expect(aa123Qr02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 500,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aa123-qr-2019",
      }
    `);
  });

  it(`should return a aa123Qr02 preset when built for graphql`, () => {
    const aa123Qr02PresetGraphql =
      aa123Qr02().buildGraphql<TProductVariantDraft>();
    expect(aa123Qr02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "500",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2019.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aa123-qr-2019",
      }
    `);
  });
});
