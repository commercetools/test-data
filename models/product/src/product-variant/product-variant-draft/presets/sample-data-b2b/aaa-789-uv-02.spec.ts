import type { TProductVariantDraft } from '../../../types';
import aaa789Uv02 from './aaa-789-uv-02';

describe(`with aaa789Uv02 preset`, () => {
  it(`should return a aaa789Uv02 preset`, () => {
    const aaa789Uv02Preset = aaa789Uv02().build<TProductVariantDraft>();
    expect(aaa789Uv02Preset).toMatchInlineSnapshot(`
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aaa789-uv-blue",
      }
    `);
  });

  it(`should return a aaa789Uv02 preset when built for graphql`, () => {
    const aaa789Uv02PresetGraphql =
      aaa789Uv02().buildGraphql<TProductVariantDraft>();
    expect(aaa789Uv02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "10000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "aaa789-uv-blue",
      }
    `);
  });
});
