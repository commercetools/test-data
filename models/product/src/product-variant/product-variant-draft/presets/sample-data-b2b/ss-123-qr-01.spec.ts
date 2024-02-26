import type { TProductVariantDraft } from '../../../types';
import ss123Qr01 from './ss-123-qr-01';

describe(`with ss123Qr01 preset`, () => {
  it(`should return a ss123Qr01 preset`, () => {
    const ss123Qr01Preset = ss123Qr01().build<TProductVariantDraft>();
    expect(ss123Qr01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 800,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ss123-qr-red",
      }
    `);
  });

  it(`should return a ss123Qr01 preset when built for graphql`, () => {
    const ss123Qr01PresetGraphql =
      ss123Qr01().buildGraphql<TProductVariantDraft>();
    expect(ss123Qr01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "800",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ss123-qr-red",
      }
    `);
  });
});
