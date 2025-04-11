import type { TProductDraft } from '../../../types';
import h456St from './h-456-st';

describe(`with h456St preset`, () => {
  it(`should return a h456St preset`, () => {
    const h456StPreset = h456St().build<TProductDraft>();
    expect(h456StPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "waste-handling-bulldozers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Spezialisierter Bulldozer für die effiziente Handhabung von Abfallmaterialien in Abfallwirtschaftsprojekten.",
          "en": undefined,
          "en-AU": "Specialized bulldozer for efficient handling of waste materials in waste management projects.",
          "en-GB": "Specialized bulldozer for efficient handling of waste materials in waste management projects.",
          "en-NZ": "Specialized bulldozer for efficient handling of waste materials in waste management projects.",
          "en-US": "Specialized bulldozer for efficient handling of waste materials in waste management projects.",
          "es-ES": "Topadora especializada para la manipulación eficiente de materiales de desecho en proyectos de gestión de residuos.",
          "fr": undefined,
          "fr-FR": "Bulldozer spécialisé pour la manipulation efficace des matériaux de déchets dans les projets de gestion des déchets.",
          "it-IT": "Bulldozer specializzato per la gestione efficiente dei materiali di scarto in progetti di gestione dei rifiuti.",
          "nl-NL": "Gespecialiseerde bulldozer voor efficiënte afvalverwerking in afvalbeheerprojecten.",
          "pt-PT": "Trator de esteiras especializado para manuseio eficiente de materiais de resíduos em projetos de gestão de resíduos.",
        },
        "key": "h456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 800,
            },
            {
              "name": "model",
              "value": 2015,
            },
            {
              "name": "iso45001",
              "value": true,
            },
            {
              "name": "mobility",
              "value": {
                "key": "tracked",
                "label": "Tracked",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 1024,
                "w": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "h456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "H456 ST Abfallverarbeitungsbagger",
          "en": undefined,
          "en-AU": "H456 ST Waste Handling Bulldozer",
          "en-GB": "H456 ST Waste Handling Bulldozer",
          "en-NZ": "H456 ST Waste Handling Bulldozer",
          "en-US": "H456 ST Waste Handling Bulldozer",
          "es-ES": "H456 ST Topadora de manipulación de residuos",
          "fr": undefined,
          "fr-FR": "H456 ST Bulldozer de manutention des déchets",
          "it-IT": "H456 ST Bulldozer per la Gestione dei Rifiuti",
          "nl-NL": "H456 ST Afvalverwerkings Bulldozer",
          "pt-PT": "H456 ST Trator de Esteiras para Manejo de Resíduos",
        },
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-earthmoving-and-construction-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "h456-st",
          "en": undefined,
          "en-AU": "h456-st",
          "en-GB": "h456-st",
          "en-NZ": "h456-st",
          "en-US": "h456-st",
          "es-ES": "h456-st",
          "fr": undefined,
          "fr-FR": "h456-st",
          "it-IT": "h456-st",
          "nl-NL": "h456-st",
          "pt-PT": "h456-st",
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 800,
              },
              {
                "name": "model",
                "value": 2019,
              },
              {
                "name": "iso45001",
                "value": true,
              },
              {
                "name": "mobility",
                "value": {
                  "key": "tracked",
                  "label": "Tracked",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 1024,
                  "w": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "h456-st-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 800,
              },
              {
                "name": "model",
                "value": 2023,
              },
              {
                "name": "iso45001",
                "value": true,
              },
              {
                "name": "mobility",
                "value": {
                  "key": "tracked",
                  "label": "Tracked",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 1024,
                  "w": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "h456-st-2023",
          },
        ],
      }
    `);
  });

  it(`should return a h456St preset when built for graphql`, () => {
    const h456StPresetGraphql = h456St().buildGraphql<TProductDraft>();
    expect(h456StPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "waste-handling-bulldozers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Spezialisierter Bulldozer für die effiziente Handhabung von Abfallmaterialien in Abfallwirtschaftsprojekten.",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer specializzato per la gestione efficiente dei materiali di scarto in progetti di gestione dei rifiuti.",
          },
          {
            "locale": "nl-NL",
            "value": "Gespecialiseerde bulldozer voor efficiënte afvalverwerking in afvalbeheerprojecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozer spécialisé pour la manipulation efficace des matériaux de déchets dans les projets de gestion des déchets.",
          },
          {
            "locale": "en-AU",
            "value": "Specialized bulldozer for efficient handling of waste materials in waste management projects.",
          },
          {
            "locale": "es-ES",
            "value": "Topadora especializada para la manipulación eficiente de materiales de desecho en proyectos de gestión de residuos.",
          },
          {
            "locale": "en-GB",
            "value": "Specialized bulldozer for efficient handling of waste materials in waste management projects.",
          },
          {
            "locale": "en-NZ",
            "value": "Specialized bulldozer for efficient handling of waste materials in waste management projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Trator de esteiras especializado para manuseio eficiente de materiais de resíduos em projetos de gestão de resíduos.",
          },
          {
            "locale": "en-US",
            "value": "Specialized bulldozer for efficient handling of waste materials in waste management projects.",
          },
        ],
        "key": "h456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "800",
            },
            {
              "name": "model",
              "value": "2015",
            },
            {
              "name": "iso45001",
              "value": "true",
            },
            {
              "name": "mobility",
              "value": "{"key":"tracked","label":"Tracked"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "h456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "H456 ST Abfallverarbeitungsbagger",
          },
          {
            "locale": "it-IT",
            "value": "H456 ST Bulldozer per la Gestione dei Rifiuti",
          },
          {
            "locale": "nl-NL",
            "value": "H456 ST Afvalverwerkings Bulldozer",
          },
          {
            "locale": "fr-FR",
            "value": "H456 ST Bulldozer de manutention des déchets",
          },
          {
            "locale": "en-AU",
            "value": "H456 ST Waste Handling Bulldozer",
          },
          {
            "locale": "es-ES",
            "value": "H456 ST Topadora de manipulación de residuos",
          },
          {
            "locale": "en-GB",
            "value": "H456 ST Waste Handling Bulldozer",
          },
          {
            "locale": "en-NZ",
            "value": "H456 ST Waste Handling Bulldozer",
          },
          {
            "locale": "pt-PT",
            "value": "H456 ST Trator de Esteiras para Manejo de Resíduos",
          },
          {
            "locale": "en-US",
            "value": "H456 ST Waste Handling Bulldozer",
          },
        ],
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-earthmoving-and-construction-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "h456-st",
          },
          {
            "locale": "it-IT",
            "value": "h456-st",
          },
          {
            "locale": "nl-NL",
            "value": "h456-st",
          },
          {
            "locale": "fr-FR",
            "value": "h456-st",
          },
          {
            "locale": "en-AU",
            "value": "h456-st",
          },
          {
            "locale": "es-ES",
            "value": "h456-st",
          },
          {
            "locale": "en-GB",
            "value": "h456-st",
          },
          {
            "locale": "en-NZ",
            "value": "h456-st",
          },
          {
            "locale": "pt-PT",
            "value": "h456-st",
          },
          {
            "locale": "en-US",
            "value": "h456-st",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "800",
              },
              {
                "name": "model",
                "value": "2019",
              },
              {
                "name": "iso45001",
                "value": "true",
              },
              {
                "name": "mobility",
                "value": "{"key":"tracked","label":"Tracked"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "h456-st-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "800",
              },
              {
                "name": "model",
                "value": "2023",
              },
              {
                "name": "iso45001",
                "value": "true",
              },
              {
                "name": "mobility",
                "value": "{"key":"tracked","label":"Tracked"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/h456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "h456-st-2023",
          },
        ],
      }
    `);
  });
});
