import type { TProductVariantDraft } from '../../../types';
import ggg789Uv02 from './ggg-789-uv-02';

describe(`with ggg789Uv02 preset`, () => {
  it(`should return a ggg789Uv02 preset`, () => {
    const ggg789Uv02Preset = ggg789Uv02().build<TProductVariantDraft>();
    expect(ggg789Uv02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 15000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ggg789-uv-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ggg789-uv-blue",
      }
    `);
  });

  it(`should return a ggg789Uv02 preset when built for graphql`, () => {
    const ggg789Uv02PresetGraphql =
      ggg789Uv02().buildGraphql<TProductVariantDraft>();
    expect(ggg789Uv02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "15000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ggg789-uv-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ggg789-uv-blue",
        "staged": true,
      }
    `);
  });
});
