import type { TProductVariantDraft } from '../../../types';
import eee123Qr01 from './eee-123-qr-01';

describe(`with eee123Qr01 preset`, () => {
  it(`should return a eee123Qr01 preset`, () => {
    const eee123Qr01Preset = eee123Qr01().build<TProductVariantDraft>();
    expect(eee123Qr01Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "eee123-qr-red",
      }
    `);
  });

  it(`should return a eee123Qr01 preset when built for graphql`, () => {
    const eee123Qr01PresetGraphql =
      eee123Qr01().buildGraphql<TProductVariantDraft>();
    expect(eee123Qr01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "10000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "eee123-qr-red",
      }
    `);
  });
});
