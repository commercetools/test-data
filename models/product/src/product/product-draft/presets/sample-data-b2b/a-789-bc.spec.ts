import type { TProductDraft } from '../../../types';
import a789Bc from './a-789-bc';

describe(`with a789Bc preset`, () => {
  it(`should return a a789Bc preset`, () => {
    const a789BcPreset = a789Bc().build<TProductDraft>();
    expect(a789BcPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "deep-mining-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Fortgeschrittener Tiefbergbaubagger mit Präzisionskontrolle für die Gewinnung von Ressourcen aus der Tiefe.",
          "en": undefined,
          "en-AU": "Advanced deep mining excavator with precision control for extracting resources from depth.",
          "en-GB": "Advanced deep mining excavator with precision control for extracting resources from depth.",
          "en-NZ": "Advanced deep mining excavator with precision control for extracting resources from depth.",
          "en-US": "Advanced deep mining excavator with precision control for extracting resources from depth.",
          "es-ES": "Excavadora minera profunda avanzada con control de precisión para extraer recursos desde la profundidad.",
          "fr": undefined,
          "fr-FR": "Excavateur minier profond avancé avec contrôle de précision pour l'extraction de ressources en profondeur.",
          "it-IT": "Escavatore avanzato per miniere profonde con controllo di precisione per l'estrazione di risorse in profondità.",
          "nl-NL": "Geavanceerde diepe mijnbouw graafmachine met precisiecontrole voor het extraheren van grondstoffen uit de diepte.",
          "pt-PT": "Escavadeira avançada para mineração profunda com controle de precisão para extração de recursos das profundezas.",
        },
        "key": "a789-bc",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 750,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "a789-bc-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "A789 BC Tiefbergbaubagger",
          "en": undefined,
          "en-AU": "A789 BC Deep Mining Excavator",
          "en-GB": "A789 BC Deep Mining Excavator",
          "en-NZ": "A789 BC Deep Mining Excavator",
          "en-US": "A789 BC Deep Mining Excavator",
          "es-ES": "A789 BC Excavadora minera profunda",
          "fr": undefined,
          "fr-FR": "A789 BC Excavateur minier profond",
          "it-IT": "A789 BC Escavatore per Miniere Profonde",
          "nl-NL": "A789 BC Diepe Mijnbouw Graafmachine",
          "pt-PT": "A789 BC Escavadeira para Mineração Profunda",
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
          "de-DE": "a789-bc",
          "en": undefined,
          "en-AU": "a789-bc",
          "en-GB": "a789-bc",
          "en-NZ": "a789-bc",
          "en-US": "a789-bc",
          "es-ES": "a789-bc",
          "fr": undefined,
          "fr-FR": "a789-bc",
          "it-IT": "a789-bc",
          "nl-NL": "a789-bc",
          "pt-PT": "a789-bc",
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
                "value": 750,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "a789-bc-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 750,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "a789-bc-2023",
          },
        ],
      }
    `);
  });

  it(`should return a a789Bc preset when built for graphql`, () => {
    const a789BcPresetGraphql = a789Bc().buildGraphql<TProductDraft>();
    expect(a789BcPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "deep-mining-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Fortgeschrittener Tiefbergbaubagger mit Präzisionskontrolle für die Gewinnung von Ressourcen aus der Tiefe.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore avanzato per miniere profonde con controllo di precisione per l'estrazione di risorse in profondità.",
          },
          {
            "locale": "nl-NL",
            "value": "Geavanceerde diepe mijnbouw graafmachine met precisiecontrole voor het extraheren van grondstoffen uit de diepte.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavateur minier profond avancé avec contrôle de précision pour l'extraction de ressources en profondeur.",
          },
          {
            "locale": "en-AU",
            "value": "Advanced deep mining excavator with precision control for extracting resources from depth.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora minera profunda avanzada con control de precisión para extraer recursos desde la profundidad.",
          },
          {
            "locale": "en-GB",
            "value": "Advanced deep mining excavator with precision control for extracting resources from depth.",
          },
          {
            "locale": "en-NZ",
            "value": "Advanced deep mining excavator with precision control for extracting resources from depth.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira avançada para mineração profunda com controle de precisão para extração de recursos das profundezas.",
          },
          {
            "locale": "en-US",
            "value": "Advanced deep mining excavator with precision control for extracting resources from depth.",
          },
        ],
        "key": "a789-bc",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "750",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "a789-bc-2015",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "A789 BC Tiefbergbaubagger",
          },
          {
            "locale": "it-IT",
            "value": "A789 BC Escavatore per Miniere Profonde",
          },
          {
            "locale": "nl-NL",
            "value": "A789 BC Diepe Mijnbouw Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "A789 BC Excavateur minier profond",
          },
          {
            "locale": "en-AU",
            "value": "A789 BC Deep Mining Excavator",
          },
          {
            "locale": "es-ES",
            "value": "A789 BC Excavadora minera profunda",
          },
          {
            "locale": "en-GB",
            "value": "A789 BC Deep Mining Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "A789 BC Deep Mining Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "A789 BC Escavadeira para Mineração Profunda",
          },
          {
            "locale": "en-US",
            "value": "A789 BC Deep Mining Excavator",
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
            "value": "a789-bc",
          },
          {
            "locale": "it-IT",
            "value": "a789-bc",
          },
          {
            "locale": "nl-NL",
            "value": "a789-bc",
          },
          {
            "locale": "fr-FR",
            "value": "a789-bc",
          },
          {
            "locale": "en-AU",
            "value": "a789-bc",
          },
          {
            "locale": "es-ES",
            "value": "a789-bc",
          },
          {
            "locale": "en-GB",
            "value": "a789-bc",
          },
          {
            "locale": "en-NZ",
            "value": "a789-bc",
          },
          {
            "locale": "pt-PT",
            "value": "a789-bc",
          },
          {
            "locale": "en-US",
            "value": "a789-bc",
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
                "value": "750",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "a789-bc-2019",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "750",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/a789-bc-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "a789-bc-2023",
            "staged": true,
          },
        ],
      }
    `);
  });
});
