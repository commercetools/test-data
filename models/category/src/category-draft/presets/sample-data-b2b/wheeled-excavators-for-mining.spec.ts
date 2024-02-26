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
        "description": undefined,
        "externalId": undefined,
        "key": "wheeled-excavators-for-mining",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Radbagger für den Bergbau",
          "en": undefined,
          "en-AU": "Wheeled Excavators for Mining",
          "en-GB": "Wheeled Excavators for Mining",
          "en-NZ": "Wheeled Excavators for Mining",
          "en-US": "Wheeled Excavators for Mining",
          "es-ES": "Excavadoras de ruedas para minería",
          "fr": undefined,
          "fr-FR": "Excavatrices à roues pour l&#39;exploitation minière",
          "it-IT": "Escavatori su Ruote per Miniere",
          "nl-NL": "Graafmachines op Wielen voor Mijnbouw",
          "pt-PT": "Escavadeiras com Rodas para Mineração",
        },
        "orderHint": "0.00001708382942192468814460",
        "parent": {
          "key": "large-wheel-excavators",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "radbagger_fuer_bergbau",
          "en": undefined,
          "en-AU": "wheeled_excavators_for_mining",
          "en-GB": "wheeled_excavators_for_mining",
          "en-NZ": "wheeled_excavators_for_mining",
          "en-US": "wheeled_excavators_for_mining",
          "es-ES": "excavadoras_ruedas_mineria",
          "fr": undefined,
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
        "description": undefined,
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
            "value": "Excavatrices à roues pour l&#39;exploitation minière",
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
        "orderHint": "0.00001708382942192468814460",
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
