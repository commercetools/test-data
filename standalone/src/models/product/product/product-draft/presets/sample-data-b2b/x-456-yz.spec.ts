import type { TProductDraft } from '../../../types';
import x456Yz from './x-456-yz';

describe(`with x456Yz preset`, () => {
  it(`should return a x456Yz preset`, () => {
    const x456YzPreset = x456Yz().build<TProductDraft>();
    expect(x456YzPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Hoch effizienter Tiefbergbaubagger, konzipiert für die Gewinnung von Ressourcen aus der Tiefe.",
          "en": undefined,
          "en-AU": "Highly efficient deep mining excavator designed for extracting resources from depth.",
          "en-GB": "Highly efficient deep mining excavator designed for extracting resources from depth.",
          "en-NZ": "Highly efficient deep mining excavator designed for extracting resources from depth.",
          "en-US": "Highly efficient deep mining excavator designed for extracting resources from depth.",
          "es-ES": "Excavadora minera profunda altamente eficiente diseñada para extraer recursos desde la profundidad.",
          "fr": undefined,
          "fr-FR": "Excavateur minier profond hautement efficace conçu pour extraire des ressources en profondeur.",
          "it-IT": "Escavatore per miniere profonde ad alta efficienza progettato per l'estrazione di risorse in profondità.",
          "nl-NL": "Zeer efficiënte diepe mijnbouw graafmachine ontworpen voor het extraheren van grondstoffen uit de diepte.",
          "pt-PT": "Escavadeira para mineração profunda altamente eficiente projetada para extrair recursos das profundezas.",
        },
        "key": "x456-yz",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "x456-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "X456 YZ Tiefbergbaubagger",
          "en": undefined,
          "en-AU": "X456 YZ Deep Mining Excavator",
          "en-GB": "X456 YZ Deep Mining Excavator",
          "en-NZ": "X456 YZ Deep Mining Excavator",
          "en-US": "X456 YZ Deep Mining Excavator",
          "es-ES": "X456 YZ Excavadora minera profunda",
          "fr": undefined,
          "fr-FR": "X456 YZ Excavateur minier profond",
          "it-IT": "X456 YZ Escavatore per Miniere Profonde",
          "nl-NL": "X456 YZ Diepe Mijnbouw Graafmachine",
          "pt-PT": "X456 YZ Escavadeira para Mineração Profunda",
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
          "de-DE": "x456-yz",
          "en": undefined,
          "en-AU": "x456-yz",
          "en-GB": "x456-yz",
          "en-NZ": "x456-yz",
          "en-US": "x456-yz",
          "es-ES": "x456-yz",
          "fr": undefined,
          "fr-FR": "x456-yz",
          "it-IT": "x456-yz",
          "nl-NL": "x456-yz",
          "pt-PT": "x456-yz",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "x456-yz-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "x456-yz-2023",
          },
        ],
      }
    `);
  });

  it(`should return a x456Yz preset when built for graphql`, () => {
    const x456YzPresetGraphql = x456Yz().buildGraphql<TProductDraft>();
    expect(x456YzPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "Hoch effizienter Tiefbergbaubagger, konzipiert für die Gewinnung von Ressourcen aus der Tiefe.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore per miniere profonde ad alta efficienza progettato per l'estrazione di risorse in profondità.",
          },
          {
            "locale": "nl-NL",
            "value": "Zeer efficiënte diepe mijnbouw graafmachine ontworpen voor het extraheren van grondstoffen uit de diepte.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavateur minier profond hautement efficace conçu pour extraire des ressources en profondeur.",
          },
          {
            "locale": "en-AU",
            "value": "Highly efficient deep mining excavator designed for extracting resources from depth.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora minera profunda altamente eficiente diseñada para extraer recursos desde la profundidad.",
          },
          {
            "locale": "en-GB",
            "value": "Highly efficient deep mining excavator designed for extracting resources from depth.",
          },
          {
            "locale": "en-NZ",
            "value": "Highly efficient deep mining excavator designed for extracting resources from depth.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira para mineração profunda altamente eficiente projetada para extrair recursos das profundezas.",
          },
          {
            "locale": "en-US",
            "value": "Highly efficient deep mining excavator designed for extracting resources from depth.",
          },
        ],
        "key": "x456-yz",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "x456-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "X456 YZ Tiefbergbaubagger",
          },
          {
            "locale": "it-IT",
            "value": "X456 YZ Escavatore per Miniere Profonde",
          },
          {
            "locale": "nl-NL",
            "value": "X456 YZ Diepe Mijnbouw Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "X456 YZ Excavateur minier profond",
          },
          {
            "locale": "en-AU",
            "value": "X456 YZ Deep Mining Excavator",
          },
          {
            "locale": "es-ES",
            "value": "X456 YZ Excavadora minera profunda",
          },
          {
            "locale": "en-GB",
            "value": "X456 YZ Deep Mining Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "X456 YZ Deep Mining Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "X456 YZ Escavadeira para Mineração Profunda",
          },
          {
            "locale": "en-US",
            "value": "X456 YZ Deep Mining Excavator",
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
            "value": "x456-yz",
          },
          {
            "locale": "it-IT",
            "value": "x456-yz",
          },
          {
            "locale": "nl-NL",
            "value": "x456-yz",
          },
          {
            "locale": "fr-FR",
            "value": "x456-yz",
          },
          {
            "locale": "en-AU",
            "value": "x456-yz",
          },
          {
            "locale": "es-ES",
            "value": "x456-yz",
          },
          {
            "locale": "en-GB",
            "value": "x456-yz",
          },
          {
            "locale": "en-NZ",
            "value": "x456-yz",
          },
          {
            "locale": "pt-PT",
            "value": "x456-yz",
          },
          {
            "locale": "en-US",
            "value": "x456-yz",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "x456-yz-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/x456-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "x456-yz-2023",
          },
        ],
      }
    `);
  });
});
