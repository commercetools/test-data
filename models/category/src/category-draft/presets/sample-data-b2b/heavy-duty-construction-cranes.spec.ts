import type { TCategoryDraft } from '../../../types';
import heavyDutyConstructionCranes from './heavy-duty-construction-cranes';

describe(`with heavyDutyConstructionCranes preset`, () => {
  it(`should return a heavyDutyConstructionCranes preset`, () => {
    const heavyDutyConstructionCranesPreset =
      heavyDutyConstructionCranes().build<TCategoryDraft>();
    expect(heavyDutyConstructionCranesPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Kräne, die für anspruchsvolle Bauaufgaben konzipiert sind",
          "en": undefined,
          "en-AU": "Cranes designed for heavy-duty construction tasks",
          "en-GB": "Cranes designed for heavy-duty construction tasks",
          "en-NZ": "Cranes designed for heavy-duty construction tasks",
          "en-US": "Cranes designed for heavy-duty construction tasks",
          "es-ES": "Gruas diseñadas para tareas de construcción de servicio pesado",
          "fr": undefined,
          "fr-FR": "Grues conçues pour des tâches de construction lourdes",
          "it-IT": "Gru progettate per compiti di costruzione pesanti",
          "nl-NL": "Kranen ontworpen voor zware bouwtaken",
          "pt-PT": "Guindastes projetados para tarefas pesadas de construção",
        },
        "externalId": undefined,
        "key": "heavy-duty-construction-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Baukräne",
          "en": undefined,
          "en-AU": "Construction Cranes",
          "en-GB": "Construction Cranes",
          "en-NZ": "Construction Cranes",
          "en-US": "Construction Cranes",
          "es-ES": "Gruas de construcción",
          "fr": undefined,
          "fr-FR": "Grues de construction",
          "it-IT": "Gru da Costruzione",
          "nl-NL": "Bouwkranen",
          "pt-PT": "Guindastes de Construção",
        },
        "orderHint": "0.000017113644845512100710765",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "schwerlast_baukraene",
          "en": undefined,
          "en-AU": "heavy_duty_construction_cranes",
          "en-GB": "heavy_duty_construction_cranes",
          "en-NZ": "heavy_duty_construction_cranes",
          "en-US": "heavy_duty_construction_cranes",
          "es-ES": "gruas_construccion_servicio_pesado",
          "fr": undefined,
          "fr-FR": "gros_engins_construction",
          "it-IT": "heavy_duty_construction_cranes",
          "nl-NL": "heavy_duty_construction_cranes",
          "pt-PT": "heavy_duty_construction_cranes",
        },
      }
    `);
  });

  it(`should return a heavyDutyConstructionCranes preset when built for graphql`, () => {
    const heavyDutyConstructionCranesPresetGraphql =
      heavyDutyConstructionCranes().buildGraphql<TCategoryDraft>();
    expect(heavyDutyConstructionCranesPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Kräne, die für anspruchsvolle Bauaufgaben konzipiert sind",
          },
          {
            "locale": "it-IT",
            "value": "Gru progettate per compiti di costruzione pesanti",
          },
          {
            "locale": "nl-NL",
            "value": "Kranen ontworpen voor zware bouwtaken",
          },
          {
            "locale": "fr-FR",
            "value": "Grues conçues pour des tâches de construction lourdes",
          },
          {
            "locale": "en-AU",
            "value": "Cranes designed for heavy-duty construction tasks",
          },
          {
            "locale": "es-ES",
            "value": "Gruas diseñadas para tareas de construcción de servicio pesado",
          },
          {
            "locale": "en-GB",
            "value": "Cranes designed for heavy-duty construction tasks",
          },
          {
            "locale": "en-NZ",
            "value": "Cranes designed for heavy-duty construction tasks",
          },
          {
            "locale": "pt-PT",
            "value": "Guindastes projetados para tarefas pesadas de construção",
          },
          {
            "locale": "en-US",
            "value": "Cranes designed for heavy-duty construction tasks",
          },
        ],
        "externalId": undefined,
        "key": "heavy-duty-construction-cranes",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Baukräne",
          },
          {
            "locale": "it-IT",
            "value": "Gru da Costruzione",
          },
          {
            "locale": "nl-NL",
            "value": "Bouwkranen",
          },
          {
            "locale": "fr-FR",
            "value": "Grues de construction",
          },
          {
            "locale": "en-AU",
            "value": "Construction Cranes",
          },
          {
            "locale": "es-ES",
            "value": "Gruas de construcción",
          },
          {
            "locale": "en-GB",
            "value": "Construction Cranes",
          },
          {
            "locale": "en-NZ",
            "value": "Construction Cranes",
          },
          {
            "locale": "pt-PT",
            "value": "Guindastes de Construção",
          },
          {
            "locale": "en-US",
            "value": "Construction Cranes",
          },
        ],
        "orderHint": "0.000017113644845512100710765",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "schwerlast_baukraene",
          },
          {
            "locale": "it-IT",
            "value": "heavy_duty_construction_cranes",
          },
          {
            "locale": "nl-NL",
            "value": "heavy_duty_construction_cranes",
          },
          {
            "locale": "fr-FR",
            "value": "gros_engins_construction",
          },
          {
            "locale": "en-AU",
            "value": "heavy_duty_construction_cranes",
          },
          {
            "locale": "es-ES",
            "value": "gruas_construccion_servicio_pesado",
          },
          {
            "locale": "en-GB",
            "value": "heavy_duty_construction_cranes",
          },
          {
            "locale": "en-NZ",
            "value": "heavy_duty_construction_cranes",
          },
          {
            "locale": "pt-PT",
            "value": "heavy_duty_construction_cranes",
          },
          {
            "locale": "en-US",
            "value": "heavy_duty_construction_cranes",
          },
        ],
      }
    `);
  });
});
