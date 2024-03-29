import type { TCategoryDraft } from '../../../types';
import mobileCranes from './mobile-cranes';

describe(`with mobileCranes preset`, () => {
  it(`should return a mobileCranes preset`, () => {
    const mobileCranesPreset = mobileCranes().build<TCategoryDraft>();
    expect(mobileCranesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitige Kräne mit Mobilität für verschiedene Aufgaben",
          "en": undefined,
          "en-AU": "Versatile cranes with mobility for various tasks",
          "en-GB": "Versatile cranes with mobility for various tasks",
          "en-NZ": "Versatile cranes with mobility for various tasks",
          "en-US": "Versatile cranes with mobility for various tasks",
          "es-ES": "Gruas versátiles con movilidad para diversas tareas",
          "fr": undefined,
          "fr-FR": "Grues polyvalentes avec mobilité pour diverses tâches",
          "it-IT": "Gru versatili con mobilità per vari compiti",
          "nl-NL": "Veelzijdige kranen met mobiliteit voor diverse taken",
          "pt-PT": "Guindastes versáteis com mobilidade para várias tarefas",
        },
        "externalId": undefined,
        "key": "mobile-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Mobile Kräne",
          "en": undefined,
          "en-AU": "Mobile Cranes",
          "en-GB": "Mobile Cranes",
          "en-NZ": "Mobile Cranes",
          "en-US": "Mobile Cranes",
          "es-ES": "Gruas móviles",
          "fr": undefined,
          "fr-FR": "Grues mobiles",
          "it-IT": "Gru Mobili",
          "nl-NL": "Mobiele Kranen",
          "pt-PT": "Guindastes Móveis",
        },
        "orderHint": "0.000017113644847721851389614",
        "parent": {
          "key": "heavy-duty-construction-cranes",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "mobile_kraene",
          "en": undefined,
          "en-AU": "mobile_cranes",
          "en-GB": "mobile_cranes",
          "en-NZ": "mobile_cranes",
          "en-US": "mobile_cranes",
          "es-ES": "gruas_moviles",
          "fr": undefined,
          "fr-FR": "grues_mobiles",
          "it-IT": "mobile_cranes",
          "nl-NL": "mobile_cranes",
          "pt-PT": "mobile_cranes",
        },
      }
    `);
  });

  it(`should return a mobileCranes preset when built for graphql`, () => {
    const mobileCranesPresetGraphql =
      mobileCranes().buildGraphql<TCategoryDraft>();
    expect(mobileCranesPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitige Kräne mit Mobilität für verschiedene Aufgaben",
          },
          {
            "locale": "it-IT",
            "value": "Gru versatili con mobilità per vari compiti",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige kranen met mobiliteit voor diverse taken",
          },
          {
            "locale": "fr-FR",
            "value": "Grues polyvalentes avec mobilité pour diverses tâches",
          },
          {
            "locale": "en-AU",
            "value": "Versatile cranes with mobility for various tasks",
          },
          {
            "locale": "es-ES",
            "value": "Gruas versátiles con movilidad para diversas tareas",
          },
          {
            "locale": "en-GB",
            "value": "Versatile cranes with mobility for various tasks",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile cranes with mobility for various tasks",
          },
          {
            "locale": "pt-PT",
            "value": "Guindastes versáteis com mobilidade para várias tarefas",
          },
          {
            "locale": "en-US",
            "value": "Versatile cranes with mobility for various tasks",
          },
        ],
        "externalId": undefined,
        "key": "mobile-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Mobile Kräne",
          },
          {
            "locale": "it-IT",
            "value": "Gru Mobili",
          },
          {
            "locale": "nl-NL",
            "value": "Mobiele Kranen",
          },
          {
            "locale": "fr-FR",
            "value": "Grues mobiles",
          },
          {
            "locale": "en-AU",
            "value": "Mobile Cranes",
          },
          {
            "locale": "es-ES",
            "value": "Gruas móviles",
          },
          {
            "locale": "en-GB",
            "value": "Mobile Cranes",
          },
          {
            "locale": "en-NZ",
            "value": "Mobile Cranes",
          },
          {
            "locale": "pt-PT",
            "value": "Guindastes Móveis",
          },
          {
            "locale": "en-US",
            "value": "Mobile Cranes",
          },
        ],
        "orderHint": "0.000017113644847721851389614",
        "parent": {
          "key": "heavy-duty-construction-cranes",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "mobile_kraene",
          },
          {
            "locale": "it-IT",
            "value": "mobile_cranes",
          },
          {
            "locale": "nl-NL",
            "value": "mobile_cranes",
          },
          {
            "locale": "fr-FR",
            "value": "grues_mobiles",
          },
          {
            "locale": "en-AU",
            "value": "mobile_cranes",
          },
          {
            "locale": "es-ES",
            "value": "gruas_moviles",
          },
          {
            "locale": "en-GB",
            "value": "mobile_cranes",
          },
          {
            "locale": "en-NZ",
            "value": "mobile_cranes",
          },
          {
            "locale": "pt-PT",
            "value": "mobile_cranes",
          },
          {
            "locale": "en-US",
            "value": "mobile_cranes",
          },
        ],
      }
    `);
  });
});
