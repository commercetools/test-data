import type { TProductVariantDraft } from '../../../types';
import yy123Qr02 from './yy-123-qr-02';

describe(`with yy123Qr02 preset`, () => {
  it(`should return a yy123Qr02 preset`, () => {
    const yy123Qr02Preset = yy123Qr02().build<TProductVariantDraft>();
    expect(yy123Qr02Preset).toMatchInlineSnapshot(`
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
              "key": "BLUE",
              "label": {
                "de-DE": "Blau",
                "en-AU": "Blue",
                "en-GB": "Blue",
                "en-NZ": "Blue",
                "en-US": "Blue",
                "es-ES": "Azul",
                "fr-FR": "Bleu",
                "it-IT": "Blu",
                "nl-NL": "Blauw",
                "pt-PT": "Azul",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "yy123-qr-blue",
      }
    `);
  });

  it(`should return a yy123Qr02 preset when built for graphql`, () => {
    const yy123Qr02PresetGraphql =
      yy123Qr02().buildGraphql<TProductVariantDraft>();
    expect(yy123Qr02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "12000",
          },
          {
            "name": "color",
            "value": "{"key":"BLUE","label":{"de-DE":"Blau","it-IT":"Blu","nl-NL":"Blauw","fr-FR":"Bleu","en-AU":"Blue","es-ES":"Azul","en-GB":"Blue","en-NZ":"Blue","pt-PT":"Azul","en-US":"Blue"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "yy123-qr-blue",
        "staged": true,
      }
    `);
  });
});
