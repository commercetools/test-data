import type { TCategoryDraft } from '../../../types';
import largeDiameterMiningDrills from './large-diameter-mining-drills';

describe(`with largeDiameterMiningDrills preset`, () => {
  it(`should return a largeDiameterMiningDrills preset`, () => {
    const largeDiameterMiningDrillsPreset =
      largeDiameterMiningDrills().build<TCategoryDraft>();
    expect(largeDiameterMiningDrillsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-diameter-mining-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Bergbau-Bohrgeräte",
          "en": undefined,
          "en-AU": "Mining Drills",
          "en-GB": "Mining Drills",
          "en-NZ": "Mining Drills",
          "en-US": "Mining Drills",
          "es-ES": "Perforadoras mineras",
          "fr": undefined,
          "fr-FR": "Forages miniers",
          "it-IT": "Trapani Minerari",
          "nl-NL": "Mijnbouwboormachines",
          "pt-PT": "Brocas de Mineração",
        },
        "orderHint": "0.000017083829390071648330240",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "bergbau_bohrer_grosser_durchmesser",
          "en": undefined,
          "en-AU": "large_diameter_mining_drills",
          "en-GB": "large_diameter_mining_drills",
          "en-NZ": "large_diameter_mining_drills",
          "en-US": "large_diameter_mining_drills",
          "es-ES": "perforadoras_gran_diametro_mineria",
          "fr": undefined,
          "fr-FR": "forages_grand_diametre_mining",
          "it-IT": "large_diameter_mining_drills",
          "nl-NL": "large_diameter_mining_drills",
          "pt-PT": "large_diameter_mining_drills",
        },
      }
    `);
  });

  it(`should return a largeDiameterMiningDrills preset when built for graphql`, () => {
    const largeDiameterMiningDrillsPresetGraphql =
      largeDiameterMiningDrills().buildGraphql<TCategoryDraft>();
    expect(largeDiameterMiningDrillsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "large-diameter-mining-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Bergbau-Bohrgeräte",
          },
          {
            "locale": "it-IT",
            "value": "Trapani Minerari",
          },
          {
            "locale": "nl-NL",
            "value": "Mijnbouwboormachines",
          },
          {
            "locale": "fr-FR",
            "value": "Forages miniers",
          },
          {
            "locale": "en-AU",
            "value": "Mining Drills",
          },
          {
            "locale": "es-ES",
            "value": "Perforadoras mineras",
          },
          {
            "locale": "en-GB",
            "value": "Mining Drills",
          },
          {
            "locale": "en-NZ",
            "value": "Mining Drills",
          },
          {
            "locale": "pt-PT",
            "value": "Brocas de Mineração",
          },
          {
            "locale": "en-US",
            "value": "Mining Drills",
          },
        ],
        "orderHint": "0.000017083829390071648330240",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "bergbau_bohrer_grosser_durchmesser",
          },
          {
            "locale": "it-IT",
            "value": "large_diameter_mining_drills",
          },
          {
            "locale": "nl-NL",
            "value": "large_diameter_mining_drills",
          },
          {
            "locale": "fr-FR",
            "value": "forages_grand_diametre_mining",
          },
          {
            "locale": "en-AU",
            "value": "large_diameter_mining_drills",
          },
          {
            "locale": "es-ES",
            "value": "perforadoras_gran_diametro_mineria",
          },
          {
            "locale": "en-GB",
            "value": "large_diameter_mining_drills",
          },
          {
            "locale": "en-NZ",
            "value": "large_diameter_mining_drills",
          },
          {
            "locale": "pt-PT",
            "value": "large_diameter_mining_drills",
          },
          {
            "locale": "en-US",
            "value": "large_diameter_mining_drills",
          },
        ],
      }
    `);
  });
});
