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
        "description": {
          "de-DE": "Bohrer mit großem Durchmesser für Bergbauoperationen",
          "en-AU": "Drills with large diameter for mining operations",
          "en-GB": "Drills with large diameter for mining operations",
          "en-NZ": "Drills with large diameter for mining operations",
          "en-US": "Drills with large diameter for mining operations",
          "es-ES": "Perforadoras con gran diámetro para operaciones mineras",
          "fr-FR": "Forages de grand diamètre pour les opérations minières",
          "it-IT": "Trapani con grande diametro per operazioni minerarie",
          "nl-NL": "Boormachines met grote diameter voor mijnbouwoperaties",
          "pt-PT": "Brocas com grande diâmetro para operações de mineração",
        },
        "externalId": undefined,
        "key": "large-diameter-mining-drills",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Bergbau-Bohrgeräte",
          "en-AU": "Mining Drills",
          "en-GB": "Mining Drills",
          "en-NZ": "Mining Drills",
          "en-US": "Mining Drills",
          "es-ES": "Perforadoras mineras",
          "fr-FR": "Forages miniers",
          "it-IT": "Trapani Minerari",
          "nl-NL": "Mijnbouwboormachines",
          "pt-PT": "Brocas de Mineração",
        },
        "orderHint": "0.000017113644845261017998287",
        "parent": undefined,
        "slug": {
          "de-DE": "bergbau_bohrer_grosser_durchmesser",
          "en-AU": "large_diameter_mining_drills",
          "en-GB": "large_diameter_mining_drills",
          "en-NZ": "large_diameter_mining_drills",
          "en-US": "large_diameter_mining_drills",
          "es-ES": "perforadoras_gran_diametro_mineria",
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
        "description": [
          {
            "locale": "de-DE",
            "value": "Bohrer mit großem Durchmesser für Bergbauoperationen",
          },
          {
            "locale": "it-IT",
            "value": "Trapani con grande diametro per operazioni minerarie",
          },
          {
            "locale": "nl-NL",
            "value": "Boormachines met grote diameter voor mijnbouwoperaties",
          },
          {
            "locale": "fr-FR",
            "value": "Forages de grand diamètre pour les opérations minières",
          },
          {
            "locale": "en-AU",
            "value": "Drills with large diameter for mining operations",
          },
          {
            "locale": "es-ES",
            "value": "Perforadoras con gran diámetro para operaciones mineras",
          },
          {
            "locale": "en-GB",
            "value": "Drills with large diameter for mining operations",
          },
          {
            "locale": "en-NZ",
            "value": "Drills with large diameter for mining operations",
          },
          {
            "locale": "pt-PT",
            "value": "Brocas com grande diâmetro para operações de mineração",
          },
          {
            "locale": "en-US",
            "value": "Drills with large diameter for mining operations",
          },
        ],
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
        "orderHint": "0.000017113644845261017998287",
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
