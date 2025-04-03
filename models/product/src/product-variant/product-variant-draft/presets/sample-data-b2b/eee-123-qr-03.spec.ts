import type { TProductVariantDraft } from '../../../types';
import eee123Qr03 from './eee-123-qr-03';

describe(`with eee123Qr03 preset`, () => {
  it(`should return a eee123Qr03 preset`, () => {
    const eee123Qr03Preset = eee123Qr03().build<TProductVariantDraft>();
    expect(eee123Qr03Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 10000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "eee123-qr-green",
      }
    `);
  });

  it(`should return a eee123Qr03 preset when built for graphql`, () => {
    const eee123Qr03PresetGraphql =
      eee123Qr03().buildGraphql<TProductVariantDraft>();
    expect(eee123Qr03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "10000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "eee123-qr-green",
        "staged": true,
      }
    `);
  });
});
