import type { TCategoryDraft } from '../../../types';
import railroadWheeledExcavators from './railroad-wheeled-excavators';

describe(`with railroadWheeledExcavators preset`, () => {
  it(`should return a railroadWheeledExcavators preset`, () => {
    const railroadWheeledExcavatorsPreset =
      railroadWheeledExcavators().build<TCategoryDraft>();
    expect(railroadWheeledExcavatorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "railroad-wheeled-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Schienen-Radbagger",
          "en": undefined,
          "en-AU": "Railroad Wheeled Excavators",
          "en-GB": "Railroad Wheeled Excavators",
          "en-NZ": "Railroad Wheeled Excavators",
          "en-US": "Railroad Wheeled Excavators",
          "es-ES": "Excavadoras de ruedas para ferrocarriles",
          "fr": undefined,
          "fr-FR": "Excavatrices à roues pour les voies ferrées",
          "it-IT": "Escavatori su Ruote per Ferrovie",
          "nl-NL": "Spoorweg Graafmachines op Wielen",
          "pt-PT": "Escavadeiras com Rodas para Ferrovias",
        },
        "orderHint": "0.00001708382942468756331689",
        "parent": {
          "key": "large-wheel-excavators",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "schienen_radbagger",
          "en": undefined,
          "en-AU": "railroad_wheeled_excavators",
          "en-GB": "railroad_wheeled_excavators",
          "en-NZ": "railroad_wheeled_excavators",
          "en-US": "railroad_wheeled_excavators",
          "es-ES": "excavadoras_ruedas_ferrocarriles",
          "fr": undefined,
          "fr-FR": "excavatrices_roues_ferrovieres",
          "it-IT": "railroad_wheeled_excavators",
          "nl-NL": "railroad_wheeled_excavators",
          "pt-PT": "railroad_wheeled_excavators",
        },
      }
    `);
  });

  it(`should return a railroadWheeledExcavators preset when built for graphql`, () => {
    const railroadWheeledExcavatorsPresetGraphql =
      railroadWheeledExcavators().buildGraphql<TCategoryDraft>();
    expect(railroadWheeledExcavatorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "railroad-wheeled-excavators",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Schienen-Radbagger",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori su Ruote per Ferrovie",
          },
          {
            "locale": "nl-NL",
            "value": "Spoorweg Graafmachines op Wielen",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices à roues pour les voies ferrées",
          },
          {
            "locale": "en-AU",
            "value": "Railroad Wheeled Excavators",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de ruedas para ferrocarriles",
          },
          {
            "locale": "en-GB",
            "value": "Railroad Wheeled Excavators",
          },
          {
            "locale": "en-NZ",
            "value": "Railroad Wheeled Excavators",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras com Rodas para Ferrovias",
          },
          {
            "locale": "en-US",
            "value": "Railroad Wheeled Excavators",
          },
        ],
        "orderHint": "0.00001708382942468756331689",
        "parent": {
          "key": "large-wheel-excavators",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "schienen_radbagger",
          },
          {
            "locale": "it-IT",
            "value": "railroad_wheeled_excavators",
          },
          {
            "locale": "nl-NL",
            "value": "railroad_wheeled_excavators",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices_roues_ferrovieres",
          },
          {
            "locale": "en-AU",
            "value": "railroad_wheeled_excavators",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras_ruedas_ferrocarriles",
          },
          {
            "locale": "en-GB",
            "value": "railroad_wheeled_excavators",
          },
          {
            "locale": "en-NZ",
            "value": "railroad_wheeled_excavators",
          },
          {
            "locale": "pt-PT",
            "value": "railroad_wheeled_excavators",
          },
          {
            "locale": "en-US",
            "value": "railroad_wheeled_excavators",
          },
        ],
      }
    `);
  });
});
