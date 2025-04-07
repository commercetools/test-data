import type { TProductVariantDraft } from '../../../types';
import ww567Yz02 from './ww-567-yz-02';

describe(`with ww567Yz02 preset`, () => {
  it(`should return a ww567Yz02 preset`, () => {
    const ww567Yz02Preset = ww567Yz02().build<TProductVariantDraft>();
    expect(ww567Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 1200,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ww567-yz-blue",
      }
    `);
  });

  it(`should return a ww567Yz02 preset when built for graphql`, () => {
    const ww567Yz02PresetGraphql =
      ww567Yz02().buildGraphql<TProductVariantDraft>();
    expect(ww567Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "1200",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ww567-yz-blue",
        "staged": true,
      }
    `);
  });
});
