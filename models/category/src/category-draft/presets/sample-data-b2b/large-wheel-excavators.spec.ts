import type { TCategoryDraft } from '../../../types';
import largeWheelExcavators from './large-wheel-excavators';

describe(`with largeWheelExcavators preset`, () => {
  it(`should return a largeWheelExcavators preset`, () => {
    const largeWheelExcavatorsPreset =
      largeWheelExcavators().build<TCategoryDraft>();
    expect(largeWheelExcavatorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-wheel-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Großradbagger",
          "en": undefined,
          "en-AU": "Wheeled Excavators",
          "en-GB": "Wheeled Excavators",
          "en-NZ": "Wheeled Excavators",
          "en-US": "Wheeled Excavators",
          "es-ES": "Excavadoras de ruedas",
          "fr": undefined,
          "fr-FR": "Excavatrices à roues",
          "it-IT": "Escavatori su Ruote",
          "nl-NL": "Graafmachines op Wielen",
          "pt-PT": "Escavadeiras com Rodas",
        },
        "orderHint": "0.00001708382941289446240444",
        "parent": {
          "key": "excavators",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "grossradbagger",
          "en": undefined,
          "en-AU": "wheeled_excavators",
          "en-GB": "wheeled_excavators",
          "en-NZ": "wheeled_excavators",
          "en-US": "wheeled_excavators",
          "es-ES": "excavadoras_ruedas",
          "fr": undefined,
          "fr-FR": "excavatrices_roues",
          "it-IT": "wheeled_excavators",
          "nl-NL": "wheeled_excavators",
          "pt-PT": "wheeled_excavators",
        },
      }
    `);
  });

  it(`should return a largeWheelExcavators preset when built for graphql`, () => {
    const largeWheelExcavatorsPresetGraphql =
      largeWheelExcavators().buildGraphql<TCategoryDraft>();
    expect(largeWheelExcavatorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-wheel-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Großradbagger",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori su Ruote",
          },
          {
            "locale": "nl-NL",
            "value": "Graafmachines op Wielen",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices à roues",
          },
          {
            "locale": "en-AU",
            "value": "Wheeled Excavators",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de ruedas",
          },
          {
            "locale": "en-GB",
            "value": "Wheeled Excavators",
          },
          {
            "locale": "en-NZ",
            "value": "Wheeled Excavators",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras com Rodas",
          },
          {
            "locale": "en-US",
            "value": "Wheeled Excavators",
          },
        ],
        "orderHint": "0.00001708382941289446240444",
        "parent": {
          "key": "excavators",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "grossradbagger",
          },
          {
            "locale": "it-IT",
            "value": "wheeled_excavators",
          },
          {
            "locale": "nl-NL",
            "value": "wheeled_excavators",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices_roues",
          },
          {
            "locale": "en-AU",
            "value": "wheeled_excavators",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras_ruedas",
          },
          {
            "locale": "en-GB",
            "value": "wheeled_excavators",
          },
          {
            "locale": "en-NZ",
            "value": "wheeled_excavators",
          },
          {
            "locale": "pt-PT",
            "value": "wheeled_excavators",
          },
          {
            "locale": "en-US",
            "value": "wheeled_excavators",
          },
        ],
      }
    `);
  });
});
