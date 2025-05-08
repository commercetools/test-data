import type { TCategoryDraft } from '../../../types';
import wheeledExcavatorsForConstruction from './wheeled-excavators-for-construction';

describe(`with wheeledExcavatorsForConstruction preset`, () => {
  it(`should return a wheeledExcavatorsForConstruction preset`, () => {
    const wheeledExcavatorsForConstructionPreset =
      wheeledExcavatorsForConstruction().build<TCategoryDraft>();
    expect(wheeledExcavatorsForConstructionPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Radbagger, die für Bauaufgaben geeignet sind",
          "en": undefined,
          "en-AU": "Wheel excavators suitable for construction tasks",
          "en-GB": "Wheel excavators suitable for construction tasks",
          "en-NZ": "Wheel excavators suitable for construction tasks",
          "en-US": "Wheel excavators suitable for construction tasks",
          "es-ES": "Excavadoras de ruedas adecuadas para tareas de construcción",
          "fr": undefined,
          "fr-FR": "Excavatrices à roues adaptées aux tâches de construction",
          "it-IT": "Escavatori su ruote adatti per compiti di costruzione",
          "nl-NL": "Wielladers geschikt voor bouwtaken",
          "pt-PT": "Escavadeiras com rodas adequadas para tarefas de construção",
        },
        "externalId": undefined,
        "key": "wheeled-excavators-for-construction",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Radbagger für den Bau",
          "en": undefined,
          "en-AU": "Wheeled Excavators for Construction",
          "en-GB": "Wheeled Excavators for Construction",
          "en-NZ": "Wheeled Excavators for Construction",
          "en-US": "Wheeled Excavators for Construction",
          "es-ES": "Excavadoras de ruedas para construcción",
          "fr": undefined,
          "fr-FR": "Excavatrices à roues pour la construction",
          "it-IT": "Escavatori su Ruote per la Costruzione",
          "nl-NL": "Graafmachines op Wielen voor Bouw",
          "pt-PT": "Escavadeiras com Rodas para Construção",
        },
        "orderHint": "0.00001711364484938846724481",
        "parent": {
          "key": "large-wheel-excavators",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "radbagger_fuer_bau",
          "en": undefined,
          "en-AU": "wheeled_excavators_for_construction",
          "en-GB": "wheeled_excavators_for_construction",
          "en-NZ": "wheeled_excavators_for_construction",
          "en-US": "wheeled_excavators_for_construction",
          "es-ES": "excavadoras_ruedas_construccion",
          "fr": undefined,
          "fr-FR": "excavatrices_roues_construction",
          "it-IT": "wheeled_excavators_for_construction",
          "nl-NL": "wheeled_excavators_for_construction",
          "pt-PT": "wheeled_excavators_for_construction",
        },
      }
    `);
  });

  it(`should return a wheeledExcavatorsForConstruction preset when built for graphql`, () => {
    const wheeledExcavatorsForConstructionPresetGraphql =
      wheeledExcavatorsForConstruction().buildGraphql<TCategoryDraft>();
    expect(wheeledExcavatorsForConstructionPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Radbagger, die für Bauaufgaben geeignet sind",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori su ruote adatti per compiti di costruzione",
          },
          {
            "locale": "nl-NL",
            "value": "Wielladers geschikt voor bouwtaken",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices à roues adaptées aux tâches de construction",
          },
          {
            "locale": "en-AU",
            "value": "Wheel excavators suitable for construction tasks",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de ruedas adecuadas para tareas de construcción",
          },
          {
            "locale": "en-GB",
            "value": "Wheel excavators suitable for construction tasks",
          },
          {
            "locale": "en-NZ",
            "value": "Wheel excavators suitable for construction tasks",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras com rodas adequadas para tarefas de construção",
          },
          {
            "locale": "en-US",
            "value": "Wheel excavators suitable for construction tasks",
          },
        ],
        "externalId": undefined,
        "key": "wheeled-excavators-for-construction",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Radbagger für den Bau",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori su Ruote per la Costruzione",
          },
          {
            "locale": "nl-NL",
            "value": "Graafmachines op Wielen voor Bouw",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices à roues pour la construction",
          },
          {
            "locale": "en-AU",
            "value": "Wheeled Excavators for Construction",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de ruedas para construcción",
          },
          {
            "locale": "en-GB",
            "value": "Wheeled Excavators for Construction",
          },
          {
            "locale": "en-NZ",
            "value": "Wheeled Excavators for Construction",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras com Rodas para Construção",
          },
          {
            "locale": "en-US",
            "value": "Wheeled Excavators for Construction",
          },
        ],
        "orderHint": "0.00001711364484938846724481",
        "parent": {
          "key": "large-wheel-excavators",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "radbagger_fuer_bau",
          },
          {
            "locale": "it-IT",
            "value": "wheeled_excavators_for_construction",
          },
          {
            "locale": "nl-NL",
            "value": "wheeled_excavators_for_construction",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices_roues_construction",
          },
          {
            "locale": "en-AU",
            "value": "wheeled_excavators_for_construction",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras_ruedas_construccion",
          },
          {
            "locale": "en-GB",
            "value": "wheeled_excavators_for_construction",
          },
          {
            "locale": "en-NZ",
            "value": "wheeled_excavators_for_construction",
          },
          {
            "locale": "pt-PT",
            "value": "wheeled_excavators_for_construction",
          },
          {
            "locale": "en-US",
            "value": "wheeled_excavators_for_construction",
          },
        ],
      }
    `);
  });
});
