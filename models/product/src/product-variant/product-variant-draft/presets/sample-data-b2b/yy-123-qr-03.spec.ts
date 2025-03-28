import type { TProductVariantDraft } from '../../../types';
import yy123Qr03 from './yy-123-qr-03';

describe(`with yy123Qr03 preset`, () => {
  it(`should return a yy123Qr03 preset`, () => {
    const yy123Qr03Preset = yy123Qr03().build<TProductVariantDraft>();
    expect(yy123Qr03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 12000,
          },
          {
            "name": "color",
            "value": {
              "key": "GREEN",
              "label": {
                "de-DE": "Grün",
                "en-AU": "Green",
                "en-GB": "Green",
                "en-NZ": "Green",
                "en-US": "Green",
                "es-ES": "Verde",
                "fr-FR": "Vert",
                "it-IT": "Verde",
                "nl-NL": "Groen",
                "pt-PT": "Verde",
              },
            },
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "yy123-qr-green",
      }
    `);
  });

  it(`should return a yy123Qr03 preset when built for graphql`, () => {
    const yy123Qr03PresetGraphql =
      yy123Qr03().buildGraphql<TProductVariantDraft>();
    expect(yy123Qr03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "12000",
          },
          {
            "name": "color",
            "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "yy123-qr-green",
        "staged": true,
      }
    `);
  });
});
