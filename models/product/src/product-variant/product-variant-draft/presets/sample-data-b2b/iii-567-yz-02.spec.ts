import type { TProductVariantDraft } from '../../../types';
import iii567Yz02 from './iii-567-yz-02';

describe(`with iii567Yz02 preset`, () => {
  it(`should return a iii567Yz02 preset`, () => {
    const iii567Yz02Preset = iii567Yz02().build<TProductVariantDraft>();
    expect(iii567Yz02Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": 25000,
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
              "key": "fixed",
              "label": "Fixed",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "iii567-yz-blue",
      }
    `);
  });

  it(`should return a iii567Yz02 preset when built for graphql`, () => {
    const iii567Yz02PresetGraphql =
      iii567Yz02().buildGraphql<TProductVariantDraft>();
    expect(iii567Yz02PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "25000",
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
            "value": "{"key":"fixed","label":"Fixed"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 1024,
              "width": 1024,
            },
            "label": undefined,
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "iii567-yz-blue",
      }
    `);
  });
});
