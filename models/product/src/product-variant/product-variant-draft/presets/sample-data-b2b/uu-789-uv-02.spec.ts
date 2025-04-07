import type { TProductVariantDraft } from '../../../types';
import uu789Uv02 from './uu-789-uv-02';

describe(`with uu789Uv02 preset`, () => {
  it(`should return a uu789Uv02 preset`, () => {
    const uu789Uv02Preset = uu789Uv02().build<TProductVariantDraft>();
    expect(uu789Uv02Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "uu789-uv-blue",
      }
    `);
  });

  it(`should return a uu789Uv02 preset when built for graphql`, () => {
    const uu789Uv02PresetGraphql =
      uu789Uv02().buildGraphql<TProductVariantDraft>();
    expect(uu789Uv02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "600",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "uu789-uv-blue",
        "staged": true,
      }
    `);
  });
});
