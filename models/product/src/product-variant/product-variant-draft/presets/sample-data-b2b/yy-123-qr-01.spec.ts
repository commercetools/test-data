import type { TProductVariantDraft } from '../../../types';
import yy123Qr01 from './yy-123-qr-01';

describe(`with yy123Qr01 preset`, () => {
  it(`should return a yy123Qr01 preset`, () => {
    const yy123Qr01Preset = yy123Qr01().build<TProductVariantDraft>();
    expect(yy123Qr01Preset).toMatchInlineSnapshot(`
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
              "key": "RED",
              "label": {
                "de-DE": "Rot",
                "en-AU": "Red",
                "en-GB": "Red",
                "en-NZ": "Red",
                "en-US": "Red",
                "es-ES": "Rojo",
                "fr-FR": "Rouge",
                "it-IT": "Rosso",
                "nl-NL": "Rood",
                "pt-PT": "Vermelho",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "yy123-qr-red",
      }
    `);
  });

  it(`should return a yy123Qr01 preset when built for graphql`, () => {
    const yy123Qr01PresetGraphql =
      yy123Qr01().buildGraphql<TProductVariantDraft>();
    expect(yy123Qr01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "12000",
          },
          {
            "name": "color",
            "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "yy123-qr-red",
        "staged": true,
      }
    `);
  });
});
