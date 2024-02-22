import type { TCategoryDraft } from '../../../types';
import heavyDutySoilCompactorsRollers from './heavy-duty-soil-compactors-rollers';

describe(`with heavyDutySoilCompactorsRollers preset`, () => {
  it(`should return a heavyDutySoilCompactorsRollers preset`, () => {
    const heavyDutySoilCompactorsRollersPreset =
      heavyDutySoilCompactorsRollers().build<TCategoryDraft>();
    expect(heavyDutySoilCompactorsRollersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "heavy-duty-soil-compactors-rollers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Schwerlast-Bodenverdichter",
          "en": undefined,
          "en-AU": "Soil Compactors",
          "en-GB": "Soil Compactors",
          "en-NZ": "Soil Compactors",
          "en-US": "Soil Compactors",
          "es-ES": "Compactadores de suelo",
          "fr": undefined,
          "fr-FR": "Compacteurs de sol",
          "it-IT": "Compattatori di Suolo",
          "nl-NL": "Bodemverdichters",
          "pt-PT": "Compactadores de Solo",
        },
        "orderHint": "0.000017083829382892122055945",
        "parent": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "schwerlast_bodenverdichter_walzen",
          "en": undefined,
          "en-AU": "heavy_duty_soil_compactors_rollers",
          "en-GB": "heavy_duty_soil_compactors_rollers",
          "en-NZ": "heavy_duty_soil_compactors_rollers",
          "en-US": "heavy_duty_soil_compactors_rollers",
          "es-ES": "compactadores_rodillos_suelo_servicio_pesado",
          "fr": undefined,
          "fr-FR": "compacteurs_rouleaux_sol_haute_resistance",
          "it-IT": "heavy_duty_soil_compactors_rollers",
          "nl-NL": "heavy_duty_soil_compactors_rollers",
          "pt-PT": "heavy_duty_soil_compactors_rollers",
        },
      }
    `);
  });

  it(`should return a heavyDutySoilCompactorsRollers preset when built for graphql`, () => {
    const heavyDutySoilCompactorsRollersPresetGraphql =
      heavyDutySoilCompactorsRollers().buildGraphql<TCategoryDraft>();
    expect(heavyDutySoilCompactorsRollersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": undefined,
        "externalId": undefined,
        "key": "heavy-duty-soil-compactors-rollers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Schwerlast-Bodenverdichter",
          },
          {
            "locale": "it-IT",
            "value": "Compattatori di Suolo",
          },
          {
            "locale": "nl-NL",
            "value": "Bodemverdichters",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteurs de sol",
          },
          {
            "locale": "en-AU",
            "value": "Soil Compactors",
          },
          {
            "locale": "es-ES",
            "value": "Compactadores de suelo",
          },
          {
            "locale": "en-GB",
            "value": "Soil Compactors",
          },
          {
            "locale": "en-NZ",
            "value": "Soil Compactors",
          },
          {
            "locale": "pt-PT",
            "value": "Compactadores de Solo",
          },
          {
            "locale": "en-US",
            "value": "Soil Compactors",
          },
        ],
        "orderHint": "0.000017083829382892122055945",
        "parent": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "schwerlast_bodenverdichter_walzen",
          },
          {
            "locale": "it-IT",
            "value": "heavy_duty_soil_compactors_rollers",
          },
          {
            "locale": "nl-NL",
            "value": "heavy_duty_soil_compactors_rollers",
          },
          {
            "locale": "fr-FR",
            "value": "compacteurs_rouleaux_sol_haute_resistance",
          },
          {
            "locale": "en-AU",
            "value": "heavy_duty_soil_compactors_rollers",
          },
          {
            "locale": "es-ES",
            "value": "compactadores_rodillos_suelo_servicio_pesado",
          },
          {
            "locale": "en-GB",
            "value": "heavy_duty_soil_compactors_rollers",
          },
          {
            "locale": "en-NZ",
            "value": "heavy_duty_soil_compactors_rollers",
          },
          {
            "locale": "pt-PT",
            "value": "heavy_duty_soil_compactors_rollers",
          },
          {
            "locale": "en-US",
            "value": "heavy_duty_soil_compactors_rollers",
          },
        ],
      }
    `);
  });
});
