import type { TCategoryDraft } from '../../../types';
import vibratorySoilCompactors from './vibratory-soil-compactors';

describe(`with vibratorySoilCompactors preset`, () => {
  it(`should return a vibratorySoilCompactors preset`, () => {
    const vibratorySoilCompactorsPreset =
      vibratorySoilCompactors().build<TCategoryDraft>();
    expect(vibratorySoilCompactorsPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de-DE": "Verdichter, die Vibration für die Bodenverdichtung verwenden",
          "en-AU": "Compactors using vibration for soil compaction",
          "en-GB": "Compactors using vibration for soil compaction",
          "en-NZ": "Compactors using vibration for soil compaction",
          "en-US": "Compactors using vibration for soil compaction",
          "es-ES": "Compactadores que utilizan vibración para compactar el suelo",
          "fr-FR": "Compacteurs utilisant la vibration pour le compactage du sol",
          "it-IT": "Compattatori che utilizzano la vibrazione per la compattazione del suolo",
          "nl-NL": "Verdichters die trillingen gebruiken voor bodemverdichting",
          "pt-PT": "Compactadores que utilizam vibração para compactação de solo",
        },
        "externalId": undefined,
        "key": "vibratory-soil-compactors",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de-DE": "Vibrations-Bodenverdichter",
          "en-AU": "Vibratory Soil Compactors",
          "en-GB": "Vibratory Soil Compactors",
          "en-NZ": "Vibratory Soil Compactors",
          "en-US": "Vibratory Soil Compactors",
          "es-ES": "Compactadores vibratorios de suelo",
          "fr-FR": "Compacteurs vibrants de sol",
          "it-IT": "Compattatori Vibranti per Suolo",
          "nl-NL": "Trilbodemverdichters",
          "pt-PT": "Compactadores de Solo Vibratórios",
        },
        "orderHint": "0.00001711364484765204216013",
        "parent": {
          "key": "heavy-duty-soil-compactors-rollers",
          "typeId": "category",
        },
        "slug": {
          "de-DE": "vibrations_bodenverdichter",
          "en-AU": "vibratory_soil_compactors",
          "en-GB": "vibratory_soil_compactors",
          "en-NZ": "vibratory_soil_compactors",
          "en-US": "vibratory_soil_compactors",
          "es-ES": "compactadores_vibratorios_suelo",
          "fr-FR": "compacteurs_vibrants_sol",
          "it-IT": "vibratory_soil_compactors",
          "nl-NL": "vibratory_soil_compactors",
          "pt-PT": "vibratory_soil_compactors",
        },
      }
    `);
  });

  it(`should return a vibratorySoilCompactors preset when built for graphql`, () => {
    const vibratorySoilCompactorsPresetGraphql =
      vibratorySoilCompactors().buildGraphql<TCategoryDraft>();
    expect(vibratorySoilCompactorsPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Verdichter, die Vibration für die Bodenverdichtung verwenden",
          },
          {
            "locale": "it-IT",
            "value": "Compattatori che utilizzano la vibrazione per la compattazione del suolo",
          },
          {
            "locale": "nl-NL",
            "value": "Verdichters die trillingen gebruiken voor bodemverdichting",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteurs utilisant la vibration pour le compactage du sol",
          },
          {
            "locale": "en-AU",
            "value": "Compactors using vibration for soil compaction",
          },
          {
            "locale": "es-ES",
            "value": "Compactadores que utilizan vibración para compactar el suelo",
          },
          {
            "locale": "en-GB",
            "value": "Compactors using vibration for soil compaction",
          },
          {
            "locale": "en-NZ",
            "value": "Compactors using vibration for soil compaction",
          },
          {
            "locale": "pt-PT",
            "value": "Compactadores que utilizam vibração para compactação de solo",
          },
          {
            "locale": "en-US",
            "value": "Compactors using vibration for soil compaction",
          },
        ],
        "externalId": undefined,
        "key": "vibratory-soil-compactors",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Vibrations-Bodenverdichter",
          },
          {
            "locale": "it-IT",
            "value": "Compattatori Vibranti per Suolo",
          },
          {
            "locale": "nl-NL",
            "value": "Trilbodemverdichters",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteurs vibrants de sol",
          },
          {
            "locale": "en-AU",
            "value": "Vibratory Soil Compactors",
          },
          {
            "locale": "es-ES",
            "value": "Compactadores vibratorios de suelo",
          },
          {
            "locale": "en-GB",
            "value": "Vibratory Soil Compactors",
          },
          {
            "locale": "en-NZ",
            "value": "Vibratory Soil Compactors",
          },
          {
            "locale": "pt-PT",
            "value": "Compactadores de Solo Vibratórios",
          },
          {
            "locale": "en-US",
            "value": "Vibratory Soil Compactors",
          },
        ],
        "orderHint": "0.00001711364484765204216013",
        "parent": {
          "key": "heavy-duty-soil-compactors-rollers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "vibrations_bodenverdichter",
          },
          {
            "locale": "it-IT",
            "value": "vibratory_soil_compactors",
          },
          {
            "locale": "nl-NL",
            "value": "vibratory_soil_compactors",
          },
          {
            "locale": "fr-FR",
            "value": "compacteurs_vibrants_sol",
          },
          {
            "locale": "en-AU",
            "value": "vibratory_soil_compactors",
          },
          {
            "locale": "es-ES",
            "value": "compactadores_vibratorios_suelo",
          },
          {
            "locale": "en-GB",
            "value": "vibratory_soil_compactors",
          },
          {
            "locale": "en-NZ",
            "value": "vibratory_soil_compactors",
          },
          {
            "locale": "pt-PT",
            "value": "vibratory_soil_compactors",
          },
          {
            "locale": "en-US",
            "value": "vibratory_soil_compactors",
          },
        ],
      }
    `);
  });
});
