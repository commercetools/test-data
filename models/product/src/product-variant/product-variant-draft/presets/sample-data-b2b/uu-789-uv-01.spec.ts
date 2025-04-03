import type { TProductVariantDraft } from '../../../types';
import uu789Uv01 from './uu-789-uv-01';

describe(`with uu789Uv01 preset`, () => {
  it(`should return a uu789Uv01 preset`, () => {
    const uu789Uv01Preset = uu789Uv01().build<TProductVariantDraft>();
    expect(uu789Uv01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 600,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "uu789-uv-red",
      }
    `);
  });

  it(`should return a uu789Uv01 preset when built for graphql`, () => {
    const uu789Uv01PresetGraphql =
      uu789Uv01().buildGraphql<TProductVariantDraft>();
    expect(uu789Uv01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-red.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "uu789-uv-red",
        "staged": true,
      }
    `);
  });
});
