import type { TProductVariantDraft } from '../../../types';
import n123Qr01 from './n-123-qr-01';

describe(`with n123Qr01 preset`, () => {
  it(`should return a n123Qr01 preset`, () => {
    const n123Qr01Preset = n123Qr01().build<TProductVariantDraft>();
    expect(n123Qr01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 550,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "n123-qr-2015",
      }
    `);
  });

  it(`should return a n123Qr01 preset when built for graphql`, () => {
    const n123Qr01PresetGraphql =
      n123Qr01().buildGraphql<TProductVariantDraft>();
    expect(n123Qr01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "550",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2015.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "n123-qr-2015",
      }
    `);
  });
});
