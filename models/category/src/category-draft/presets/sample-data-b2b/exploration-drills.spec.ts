import type { TCategoryDraft } from '../../../types';
import explorationDrills from './exploration-drills';

describe(`with explorationDrills preset`, () => {
  it(`should return a explorationDrills preset`, () => {
    const explorationDrillsPreset = explorationDrills().build<TCategoryDraft>();
    expect(explorationDrillsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "exploration-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Erkundungsbohrer",
          "en": undefined,
          "en-AU": "Exploration Drills",
          "en-GB": "Exploration Drills",
          "en-NZ": "Exploration Drills",
          "en-US": "Exploration Drills",
          "es-ES": "Perforadoras de exploración",
          "fr": undefined,
          "fr-FR": "Forages d'exploration",
          "it-IT": "Trapani di Esplorazione",
          "nl-NL": "Exploratieboormachines",
          "pt-PT": "Brocas de Exploração",
        },
        "orderHint": "0.000017083829497591898860695",
        "parent": {
          "key": "large-diameter-mining-drills",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "erkundungs_bohrer",
          "en": undefined,
          "en-AU": "exploration_drills",
          "en-GB": "exploration_drills",
          "en-NZ": "exploration_drills",
          "en-US": "exploration_drills",
          "es-ES": "perforadoras_exploracion",
          "fr": undefined,
          "fr-FR": "forages_exploration",
          "it-IT": "exploration_drills",
          "nl-NL": "exploration_drills",
          "pt-PT": "exploration_drills",
        },
      }
    `);
  });

  it(`should return a explorationDrills preset when built for graphql`, () => {
    const explorationDrillsPresetGraphql =
      explorationDrills().buildGraphql<TCategoryDraft>();
    expect(explorationDrillsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "exploration-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Erkundungsbohrer",
          },
          {
            "locale": "it-IT",
            "value": "Trapani di Esplorazione",
          },
          {
            "locale": "nl-NL",
            "value": "Exploratieboormachines",
          },
          {
            "locale": "fr-FR",
            "value": "Forages d'exploration",
          },
          {
            "locale": "en-AU",
            "value": "Exploration Drills",
          },
          {
            "locale": "es-ES",
            "value": "Perforadoras de exploración",
          },
          {
            "locale": "en-GB",
            "value": "Exploration Drills",
          },
          {
            "locale": "en-NZ",
            "value": "Exploration Drills",
          },
          {
            "locale": "pt-PT",
            "value": "Brocas de Exploração",
          },
          {
            "locale": "en-US",
            "value": "Exploration Drills",
          },
        ],
        "orderHint": "0.000017083829497591898860695",
        "parent": {
          "key": "large-diameter-mining-drills",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "erkundungs_bohrer",
          },
          {
            "locale": "it-IT",
            "value": "exploration_drills",
          },
          {
            "locale": "nl-NL",
            "value": "exploration_drills",
          },
          {
            "locale": "fr-FR",
            "value": "forages_exploration",
          },
          {
            "locale": "en-AU",
            "value": "exploration_drills",
          },
          {
            "locale": "es-ES",
            "value": "perforadoras_exploracion",
          },
          {
            "locale": "en-GB",
            "value": "exploration_drills",
          },
          {
            "locale": "en-NZ",
            "value": "exploration_drills",
          },
          {
            "locale": "pt-PT",
            "value": "exploration_drills",
          },
          {
            "locale": "en-US",
            "value": "exploration_drills",
          },
        ],
      }
    `);
  });
});
