import type { TCategoryDraft } from '../../../types';
import wheeledExcavatorsForMining from './wheeled-excavators-for-mining';

describe(`with wheeledExcavatorsForMining preset`, () => {
  it(`should return a wheeledExcavatorsForMining preset`, () => {
    const wheeledExcavatorsForMiningPreset =
      wheeledExcavatorsForMining().build<TCategoryDraft>();
    expect(wheeledExcavatorsForMiningPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Radbagger, die für den Bergbau konzipiert sind",
          "en-AU": "Wheel excavators designed for mining use",
          "en-GB": "Wheel excavators designed for mining use",
          "en-NZ": "Wheel excavators designed for mining use",
          "en-US": "Wheel excavators designed for mining use",
          "es-ES": "Excavadoras de ruedas diseñadas para uso en minería",
          "fr-FR": "Excavatrices à roues conçues pour une utilisation minière",
          "it-IT": "Escavatori su ruote progettati per uso minerario",
          "nl-NL": "Wielladers ontworpen voor mijnbouwgebruik",
          "pt-PT": "Escavadeiras com rodas projetadas para uso na mineração",
        },
        "externalId": undefined,
        "key": "wheeled-excavators-for-mining",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Radbagger für den Bergbau",
          "en-AU": "Wheeled Excavators for Mining",
          "en-GB": "Wheeled Excavators for Mining",
          "en-NZ": "Wheeled Excavators for Mining",
          "en-US": "Wheeled Excavators for Mining",
          "es-ES": "Excavadoras de ruedas para minería",
          "fr-FR": "Excavatrices à roues pour l'exploitation minière",
          "it-IT": "Escavatori su Ruote per Miniere",
          "nl-NL": "Graafmachines op Wielen voor Mijnbouw",
          "pt-PT": "Escavadeiras com Rodas para Mineração",
        },
        "orderHint": "0.00001711364484959828673262",
        "parent": {
          "key": "large-wheel-excavators",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "radbagger_fuer_bergbau",
          "en-AU": "wheeled_excavators_for_mining",
          "en-GB": "wheeled_excavators_for_mining",
          "en-NZ": "wheeled_excavators_for_mining",
          "en-US": "wheeled_excavators_for_mining",
          "es-ES": "excavadoras_ruedas_mineria",
          "fr-FR": "excavatrices_roues_mining",
          "it-IT": "wheeled_excavators_for_mining",
          "nl-NL": "wheeled_excavators_for_mining",
          "pt-PT": "wheeled_excavators_for_mining",
        },
      }
    `);
  });

  it(`should return a wheeledExcavatorsForMining preset when built for graphql`, () => {
    const wheeledExcavatorsForMiningPresetGraphql =
      wheeledExcavatorsForMining().buildGraphql<TCategoryDraft>();
    expect(wheeledExcavatorsForMiningPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Radbagger, die für den Bergbau konzipiert sind",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori su ruote progettati per uso minerario",
          },
          {
            "locale": "nl-NL",
            "value": "Wielladers ontworpen voor mijnbouwgebruik",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices à roues conçues pour une utilisation minière",
          },
          {
            "locale": "en-AU",
            "value": "Wheel excavators designed for mining use",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de ruedas diseñadas para uso en minería",
          },
          {
            "locale": "en-GB",
            "value": "Wheel excavators designed for mining use",
          },
          {
            "locale": "en-NZ",
            "value": "Wheel excavators designed for mining use",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras com rodas projetadas para uso na mineração",
          },
          {
            "locale": "en-US",
            "value": "Wheel excavators designed for mining use",
          },
        ],
        "externalId": undefined,
        "key": "wheeled-excavators-for-mining",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Radbagger für den Bergbau",
          },
          {
            "locale": "it-IT",
            "value": "Escavatori su Ruote per Miniere",
          },
          {
            "locale": "nl-NL",
            "value": "Graafmachines op Wielen voor Mijnbouw",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrices à roues pour l'exploitation minière",
          },
          {
            "locale": "en-AU",
            "value": "Wheeled Excavators for Mining",
          },
          {
            "locale": "es-ES",
            "value": "Excavadoras de ruedas para minería",
          },
          {
            "locale": "en-GB",
            "value": "Wheeled Excavators for Mining",
          },
          {
            "locale": "en-NZ",
            "value": "Wheeled Excavators for Mining",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeiras com Rodas para Mineração",
          },
          {
            "locale": "en-US",
            "value": "Wheeled Excavators for Mining",
          },
        ],
        "orderHint": "0.00001711364484959828673262",
        "parent": {
          "key": "large-wheel-excavators",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "radbagger_fuer_bergbau",
          },
          {
            "locale": "it-IT",
            "value": "wheeled_excavators_for_mining",
          },
          {
            "locale": "nl-NL",
            "value": "wheeled_excavators_for_mining",
          },
          {
            "locale": "fr-FR",
            "value": "excavatrices_roues_mining",
          },
          {
            "locale": "en-AU",
            "value": "wheeled_excavators_for_mining",
          },
          {
            "locale": "es-ES",
            "value": "excavadoras_ruedas_mineria",
          },
          {
            "locale": "en-GB",
            "value": "wheeled_excavators_for_mining",
          },
          {
            "locale": "en-NZ",
            "value": "wheeled_excavators_for_mining",
          },
          {
            "locale": "pt-PT",
            "value": "wheeled_excavators_for_mining",
          },
          {
            "locale": "en-US",
            "value": "wheeled_excavators_for_mining",
          },
        ],
      }
    `);
  });
});
