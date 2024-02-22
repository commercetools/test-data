import type { TCategoryDraft } from '../../../types';
import excavators from './excavators';

describe(`with excavators preset`, () => {
  it(`should return a excavators preset`, () => {
    const excavatorsPreset = excavators().build<TCategoryDraft>();
    expect(excavatorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
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
        "orderHint": "0.000017083829365781074397182",
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
        "description": undefined,
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
        "orderHint": "0.000017083829365781074397182",
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
