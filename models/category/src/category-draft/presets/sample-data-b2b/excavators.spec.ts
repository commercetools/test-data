import type { TCategoryDraft } from '../../../types';
import excavators from './excavators';

describe(`with excavators preset`, () => {
  it(`should return a excavators preset`, () => {
    const excavatorsPreset = excavators().build<TCategoryDraft>();
    expect(excavatorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Bagger für den Einsatz in groß angelegten Betrieb",
          "en": undefined,
          "en-AU": "Excavators used in large-scale operations",
          "en-GB": "Excavators used in large-scale operations",
          "en-NZ": "Excavators used in large-scale operations",
          "en-US": "Excavators used in large-scale operations",
          "es-ES": "Excavadoras utilizadas en operaciones a gran escala",
          "fr": undefined,
          "fr-FR": "Excavatrices utilisées dans les opérations à grande échelle",
          "it-IT": "Escavatori utilizzati in operazioni su larga scala",
          "nl-NL": "Graafmachines gebruikt in grootschalige operaties",
          "pt-PT": "Escavadeiras usadas em operações de grande escala",
        },
        "externalId": undefined,
        "key": "excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bagger",
          "en": undefined,
          "en-AU": "Excavators",
          "en-GB": "Excavators",
          "en-NZ": "Excavators",
          "en-US": "Excavators",
          "es-ES": "Excavadoras",
          "fr": undefined,
          "fr-FR": "Excavatrices",
          "it-IT": "Escavatori",
          "nl-NL": "Graafmachines",
          "pt-PT": "Escavadeiras",
        },
        "orderHint": "0.0000171136448452649936338",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "bagger",
          "en": undefined,
          "en-AU": "excavators",
          "en-GB": "excavators",
          "en-NZ": "excavators",
          "en-US": "excavators",
          "es-ES": "excavadoras",
          "fr": undefined,
          "fr-FR": "excavatrices",
          "it-IT": "excavators",
          "nl-NL": "excavators",
          "pt-PT": "excavators",
        },
      }
    `);
  });

  it(`should return a excavators preset when built for graphql`, () => {
    const excavatorsPresetGraphql = excavators().buildGraphql<TCategoryDraft>();
    expect(excavatorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Bagger für den Einsatz in groß angelegten Betrieb",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori utilizzati in operazioni su larga scala",
          },
          {
            "locale": "nl-NL",
            "value": "Graafmachines gebruikt in grootschalige operaties",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices utilisées dans les opérations à grande échelle",
          },
          {
            "locale": "en-AU",
            "value": "Excavators used in large-scale operations",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras utilizadas en operaciones a gran escala",
          },
          {
            "locale": "en-GB",
            "value": "Excavators used in large-scale operations",
          },
          {
            "locale": "en-NZ",
            "value": "Excavators used in large-scale operations",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras usadas em operações de grande escala",
          },
          {
            "locale": "en-US",
            "value": "Excavators used in large-scale operations",
          },
        ],
        "externalId": undefined,
        "key": "excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Bagger",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori",
          },
          {
            "locale": "nl-NL",
            "value": "Graafmachines",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices",
          },
          {
            "locale": "en-AU",
            "value": "Excavators",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras",
          },
          {
            "locale": "en-GB",
            "value": "Excavators",
          },
          {
            "locale": "en-NZ",
            "value": "Excavators",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras",
          },
          {
            "locale": "en-US",
            "value": "Excavators",
          },
        ],
        "orderHint": "0.0000171136448452649936338",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "bagger",
          },
          {
            "locale": "it-IT",
            "value": "excavators",
          },
          {
            "locale": "nl-NL",
            "value": "excavators",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices",
          },
          {
            "locale": "en-AU",
            "value": "excavators",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras",
          },
          {
            "locale": "en-GB",
            "value": "excavators",
          },
          {
            "locale": "en-NZ",
            "value": "excavators",
          },
          {
            "locale": "pt-PT",
            "value": "excavators",
          },
          {
            "locale": "en-US",
            "value": "excavators",
          },
        ],
      }
    `);
  });
});
