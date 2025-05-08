import type { TProductVariantDraft } from '../../../types';
import jjj890Op03 from './jjj-890-op-03';

describe(`with jjj890Op03 preset`, () => {
  it(`should return a jjj890Op03 preset`, () => {
    const jjj890Op03Preset = jjj890Op03().build<TProductVariantDraft>();
    expect(jjj890Op03Preset).toMatchInlineSnapshot(`
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
              "key": "GREEN",
              "label": {
                "de-DE": "Grün",
                "en-AU": "Green",
                "en-GB": "Green",
                "en-NZ": "Green",
                "en-US": "Green",
                "es-ES": "Verde",
                "fr-FR": "Vert",
                "it-IT": "Verde",
                "nl-NL": "Groen",
                "pt-PT": "Verde",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "jjj890-op-green",
      }
    `);
  });

  it(`should return a jjj890Op03 preset when built for graphql`, () => {
    const jjj890Op03PresetGraphql =
      jjj890Op03().buildGraphql<TProductVariantDraft>();
    expect(jjj890Op03PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "capacity",
            "value": "18000",
          },
          {
            "name": "color",
            "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
            "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-green.webp",
          },
        ],
        "key": undefined,
        "prices": undefined,
        "sku": "jjj890-op-green",
      }
    `);
  });
});
