import type { TProductVariantDraft } from '../../../types';
import jjj890Op02 from './jjj-890-op-02';

describe(`with jjj890Op02 preset`, () => {
  it(`should return a jjj890Op02 preset`, () => {
    const jjj890Op02Preset = jjj890Op02().build<TProductVariantDraft>();
    expect(jjj890Op02Preset).toMatchInlineSnapshot(`
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
            "value": true,
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "jjj890-op-blue",
      }
    `);
  });

  it(`should return a jjj890Op02 preset when built for graphql`, () => {
    const jjj890Op02PresetGraphql =
      jjj890Op02().buildGraphql<TProductVariantDraft>();
    expect(jjj890Op02PresetGraphql).toMatchInlineSnapshot(`
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
            "value": "true",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-blue.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "jjj890-op-blue",
      }
    `);
  });
});
