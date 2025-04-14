import type { TProductDraft } from '../../../types';
import i789Uv from './i-789-uv';

describe(`with i789Uv preset`, () => {
  it(`should return a i789Uv preset`, () => {
    const i789UvPreset = i789Uv().build<TProductDraft>();
    expect(i789UvPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Fortgeschrittener Abfallverarbeitungsbagger mit erweiterten Funktionen für komplexe Aufgaben der Abfallwirtschaft.",
          "en": undefined,
          "en-AU": "Advanced waste handling bulldozer with enhanced features for complex waste management tasks.",
          "en-GB": "Advanced waste handling bulldozer with enhanced features for complex waste management tasks.",
          "en-NZ": "Advanced waste handling bulldozer with enhanced features for complex waste management tasks.",
          "en-US": "Advanced waste handling bulldozer with enhanced features for complex waste management tasks.",
          "es-ES": "Topadora de manipulación de residuos avanzada con características mejoradas para tareas complejas de gestión de residuos.",
          "fr": undefined,
          "fr-FR": "Bulldozer de manutention des déchets avancé avec des fonctionnalités améliorées pour des tâches complexes de gestion des déchets.",
          "it-IT": "Bulldozer avanzato per la gestione dei rifiuti con caratteristiche potenziate per compiti di gestione dei rifiuti complessi.",
          "nl-NL": "Geavanceerde afvalverwerkings bulldozer met verbeterde functies voor complexe afvalbeheertaken.",
          "pt-PT": "Trator de esteiras avançado para manejo de resíduos com características aprimoradas para tarefas complexas de gestão de resíduos.",
        },
        "key": "i789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 900,
            },
            {
              "name": "model",
              "value": 2015,
            },
            {
              "name": "iso45001",
              "value": false,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "i789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "I789 UV Abfallverarbeitungsbagger",
          "en": undefined,
          "en-AU": "I789 UV Waste Handling Bulldozer",
          "en-GB": "I789 UV Waste Handling Bulldozer",
          "en-NZ": "I789 UV Waste Handling Bulldozer",
          "en-US": "I789 UV Waste Handling Bulldozer",
          "es-ES": "I789 UV Topadora de manipulación de residuos",
          "fr": undefined,
          "fr-FR": "I789 UV Bulldozer de manutention des déchets",
          "it-IT": "I789 UV Bulldozer per la Gestione dei Rifiuti",
          "nl-NL": "I789 UV Afvalverwerkings Bulldozer",
          "pt-PT": "I789 UV Trator de Esteiras para Manejo de Resíduos",
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
          "de-DE": "i789-uv",
          "en": undefined,
          "en-AU": "i789-uv",
          "en-GB": "i789-uv",
          "en-NZ": "i789-uv",
          "en-US": "i789-uv",
          "es-ES": "i789-uv",
          "fr": undefined,
          "fr-FR": "i789-uv",
          "it-IT": "i789-uv",
          "nl-NL": "i789-uv",
          "pt-PT": "i789-uv",
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
                "value": 900,
              },
              {
                "name": "model",
                "value": 2019,
              },
              {
                "name": "iso45001",
                "value": false,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "i789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 900,
              },
              {
                "name": "model",
                "value": 2023,
              },
              {
                "name": "iso45001",
                "value": false,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "i789-uv-2023",
          },
        ],
      }
    `);
  });

  it(`should return a i789Uv preset when built for graphql`, () => {
    const i789UvPresetGraphql = i789Uv().buildGraphql<TProductDraft>();
    expect(i789UvPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Fortgeschrittener Abfallverarbeitungsbagger mit erweiterten Funktionen für komplexe Aufgaben der Abfallwirtschaft.",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer avanzato per la gestione dei rifiuti con caratteristiche potenziate per compiti di gestione dei rifiuti complessi.",
          },
          {
            "locale": "nl-NL",
            "value": "Geavanceerde afvalverwerkings bulldozer met verbeterde functies voor complexe afvalbeheertaken.",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozer de manutention des déchets avancé avec des fonctionnalités améliorées pour des tâches complexes de gestion des déchets.",
          },
          {
            "locale": "en-AU",
            "value": "Advanced waste handling bulldozer with enhanced features for complex waste management tasks.",
          },
          {
            "locale": "es-ES",
            "value": "Topadora de manipulación de residuos avanzada con características mejoradas para tareas complejas de gestión de residuos.",
          },
          {
            "locale": "en-GB",
            "value": "Advanced waste handling bulldozer with enhanced features for complex waste management tasks.",
          },
          {
            "locale": "en-NZ",
            "value": "Advanced waste handling bulldozer with enhanced features for complex waste management tasks.",
          },
          {
            "locale": "pt-PT",
            "value": "Trator de esteiras avançado para manejo de resíduos com características aprimoradas para tarefas complexas de gestão de resíduos.",
          },
          {
            "locale": "en-US",
            "value": "Advanced waste handling bulldozer with enhanced features for complex waste management tasks.",
          },
        ],
        "key": "i789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "900",
            },
            {
              "name": "model",
              "value": "2015",
            },
            {
              "name": "iso45001",
              "value": "false",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "i789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "I789 UV Abfallverarbeitungsbagger",
          },
          {
            "locale": "it-IT",
            "value": "I789 UV Bulldozer per la Gestione dei Rifiuti",
          },
          {
            "locale": "nl-NL",
            "value": "I789 UV Afvalverwerkings Bulldozer",
          },
          {
            "locale": "fr-FR",
            "value": "I789 UV Bulldozer de manutention des déchets",
          },
          {
            "locale": "en-AU",
            "value": "I789 UV Waste Handling Bulldozer",
          },
          {
            "locale": "es-ES",
            "value": "I789 UV Topadora de manipulación de residuos",
          },
          {
            "locale": "en-GB",
            "value": "I789 UV Waste Handling Bulldozer",
          },
          {
            "locale": "en-NZ",
            "value": "I789 UV Waste Handling Bulldozer",
          },
          {
            "locale": "pt-PT",
            "value": "I789 UV Trator de Esteiras para Manejo de Resíduos",
          },
          {
            "locale": "en-US",
            "value": "I789 UV Waste Handling Bulldozer",
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
            "value": "i789-uv",
          },
          {
            "locale": "it-IT",
            "value": "i789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "i789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "i789-uv",
          },
          {
            "locale": "en-AU",
            "value": "i789-uv",
          },
          {
            "locale": "es-ES",
            "value": "i789-uv",
          },
          {
            "locale": "en-GB",
            "value": "i789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "i789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "i789-uv",
          },
          {
            "locale": "en-US",
            "value": "i789-uv",
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
                "value": "900",
              },
              {
                "name": "model",
                "value": "2019",
              },
              {
                "name": "iso45001",
                "value": "false",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "i789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "900",
              },
              {
                "name": "model",
                "value": "2023",
              },
              {
                "name": "iso45001",
                "value": "false",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/i789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "i789-uv-2023",
          },
        ],
      }
    `);
  });
});
