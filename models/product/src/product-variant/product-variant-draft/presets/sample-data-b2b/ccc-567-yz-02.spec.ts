import type { TProductVariantDraft } from '../../../types';
import ccc567Yz02 from './ccc-567-yz-02';

describe(`with ccc567Yz02 preset`, () => {
  it(`should return a ccc567Yz02 preset`, () => {
    const ccc567Yz02Preset = ccc567Yz02().build<TProductVariantDraft>();
    expect(ccc567Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 18000,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ccc567-yz-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ccc567-yz-blue",
      }
    `);
  });

  it(`should return a ccc567Yz02 preset when built for graphql`, () => {
    const ccc567Yz02PresetGraphql =
      ccc567Yz02().buildGraphql<TProductVariantDraft>();
    expect(ccc567Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "18000",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ccc567-yz-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "ccc567-yz-blue",
      }
    `);
  });
});
