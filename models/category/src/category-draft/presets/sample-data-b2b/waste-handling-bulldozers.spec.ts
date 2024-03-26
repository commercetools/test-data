import type { TCategoryDraft } from '../../../types';
import wasteHandlingBulldozers from './waste-handling-bulldozers';

describe(`with wasteHandlingBulldozers preset`, () => {
  it(`should return a wasteHandlingBulldozers preset`, () => {
    const wasteHandlingBulldozersPreset =
      wasteHandlingBulldozers().build<TCategoryDraft>();
    expect(wasteHandlingBulldozersPreset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Bulldozer, die für die Abfallbewältigung konzipiert sind",
          "en": undefined,
          "en-AU": "Bulldozers designed for waste handling",
          "en-GB": "Bulldozers designed for waste handling",
          "en-NZ": "Bulldozers designed for waste handling",
          "en-US": "Bulldozers designed for waste handling",
          "es-ES": "Bulldozers diseñados para el manejo de residuos",
          "fr": undefined,
          "fr-FR": "Bulldozers conçus pour la manutention des déchets",
          "it-IT": "Bulldozer progettati per la gestione dei rifiuti",
          "nl-NL": "Bulldozers ontworpen voor afvalverwerking",
          "pt-PT": "Bulldozers projetados para manejo de resíduos",
        },
        "externalId": undefined,
        "key": "waste-handling-bulldozers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Abfallbewältigungs-Bulldozer",
          "en": undefined,
          "en-AU": "Waste Handling Bulldozers",
          "en-GB": "Waste Handling Bulldozers",
          "en-NZ": "Waste Handling Bulldozers",
          "en-US": "Waste Handling Bulldozers",
          "es-ES": "Bulldozers para el manejo de residuos",
          "fr": undefined,
          "fr-FR": "Bulldozers de manutention des déchets",
          "it-IT": "Bulldozer per Gestione Rifiuti",
          "nl-NL": "Bulldozers voor Afvalverwerking",
          "pt-PT": "Bulldozers para Manejo de Resíduos",
        },
        "orderHint": "0.000017113644847491257581521",
        "parent": {
          "key": "large-bulldozers",
          "typeId": "category",
        },
        "slug": {
          "de": undefined,
          "de-DE": "abfall_bulldozer",
          "en": undefined,
          "en-AU": "waste_handling_bulldozers",
          "en-GB": "waste_handling_bulldozers",
          "en-NZ": "waste_handling_bulldozers",
          "en-US": "waste_handling_bulldozers",
          "es-ES": "bulldozers_manjeo_residuos",
          "fr": undefined,
          "fr-FR": "bulldozers_manutention_dechets",
          "it-IT": "waste_handling_bulldozers",
          "nl-NL": "waste_handling_bulldozers",
          "pt-PT": "waste_handling_bulldozers",
        },
      }
    `);
  });

  it(`should return a wasteHandlingBulldozers preset when built for graphql`, () => {
    const wasteHandlingBulldozersPresetGraphql =
      wasteHandlingBulldozers().buildGraphql<TCategoryDraft>();
    expect(wasteHandlingBulldozersPresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "custom": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Bulldozer, die für die Abfallbewältigung konzipiert sind",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer progettati per la gestione dei rifiuti",
          },
          {
            "locale": "nl-NL",
            "value": "Bulldozers ontworpen voor afvalverwerking",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozers conçus pour la manutention des déchets",
          },
          {
            "locale": "en-AU",
            "value": "Bulldozers designed for waste handling",
          },
          {
            "locale": "es-ES",
            "value": "Bulldozers diseñados para el manejo de residuos",
          },
          {
            "locale": "en-GB",
            "value": "Bulldozers designed for waste handling",
          },
          {
            "locale": "en-NZ",
            "value": "Bulldozers designed for waste handling",
          },
          {
            "locale": "pt-PT",
            "value": "Bulldozers projetados para manejo de resíduos",
          },
          {
            "locale": "en-US",
            "value": "Bulldozers designed for waste handling",
          },
        ],
        "externalId": undefined,
        "key": "waste-handling-bulldozers",
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Abfallbewältigungs-Bulldozer",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer per Gestione Rifiuti",
          },
          {
            "locale": "nl-NL",
            "value": "Bulldozers voor Afvalverwerking",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozers de manutention des déchets",
          },
          {
            "locale": "en-AU",
            "value": "Waste Handling Bulldozers",
          },
          {
            "locale": "es-ES",
            "value": "Bulldozers para el manejo de residuos",
          },
          {
            "locale": "en-GB",
            "value": "Waste Handling Bulldozers",
          },
          {
            "locale": "en-NZ",
            "value": "Waste Handling Bulldozers",
          },
          {
            "locale": "pt-PT",
            "value": "Bulldozers para Manejo de Resíduos",
          },
          {
            "locale": "en-US",
            "value": "Waste Handling Bulldozers",
          },
        ],
        "orderHint": "0.000017113644847491257581521",
        "parent": {
          "key": "large-bulldozers",
          "typeId": "category",
        },
        "slug": [
          {
            "locale": "de-DE",
            "value": "abfall_bulldozer",
          },
          {
            "locale": "it-IT",
            "value": "waste_handling_bulldozers",
          },
          {
            "locale": "nl-NL",
            "value": "waste_handling_bulldozers",
          },
          {
            "locale": "fr-FR",
            "value": "bulldozers_manutention_dechets",
          },
          {
            "locale": "en-AU",
            "value": "waste_handling_bulldozers",
          },
          {
            "locale": "es-ES",
            "value": "bulldozers_manjeo_residuos",
          },
          {
            "locale": "en-GB",
            "value": "waste_handling_bulldozers",
          },
          {
            "locale": "en-NZ",
            "value": "waste_handling_bulldozers",
          },
          {
            "locale": "pt-PT",
            "value": "waste_handling_bulldozers",
          },
          {
            "locale": "en-US",
            "value": "waste_handling_bulldozers",
          },
        ],
      }
    `);
  });
});
