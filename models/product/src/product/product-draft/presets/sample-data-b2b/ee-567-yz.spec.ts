import type { TProductDraft } from '../../../types';
import ee567Yz from './ee-567-yz';

describe(`with ee567Yz preset`, () => {
  it(`should return a ee567Yz preset`, () => {
    const ee567YzPreset = ee567Yz().build<TProductDraft>();
    expect(ee567YzPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "fine-graders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Feinplanierer mit hoher Kapazität und fortschrittlichen Funktionen für effizientes Finish von Oberflächen.",
          "en": undefined,
          "en-AU": "High-capacity fine grader with advanced features for efficient surface finishing.",
          "en-GB": "High-capacity fine grader with advanced features for efficient surface finishing.",
          "en-NZ": "High-capacity fine grader with advanced features for efficient surface finishing.",
          "en-UK": "High-capacity fine grader with advanced features for efficient surface finishing.",
          "en-US": "High-capacity fine grader with advanced features for efficient surface finishing.",
          "es-ES": "Niveladora fina de alta capacidad con características avanzadas para un acabado de superficie eficiente.",
          "fr": undefined,
          "fr-FR": "Niveleuse fine haute capacité avec des fonctionnalités avancées pour une finition de surface efficace.",
          "it-IT": "Livellatrice fine ad alta capacità con caratteristiche avanzate per una finitura efficiente delle superfici.",
          "nl-NL": "Hoogcapaciteits fijnnivelleermachine met geavanceerde functies voor efficiënte oppervlakteafwerking.",
          "pt-PT": "Niveladora fina de alta capacidade com recursos avançados para acabamento eficiente de superfícies.",
        },
        "key": "ee567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 500,
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
                "w": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ee567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "EE567 YZ Feinplanierer",
          "en": undefined,
          "en-AU": "EE567 YZ Fine Grader",
          "en-GB": "EE567 YZ Fine Grader",
          "en-NZ": "EE567 YZ Fine Grader",
          "en-UK": "EE567 YZ Fine Grader",
          "en-US": "EE567 YZ Fine Grader",
          "es-ES": "EE567 YZ Niveladora fina",
          "fr": undefined,
          "fr-FR": "EE567 YZ Niveleuse fine",
          "it-IT": "EE567 YZ Livellatrice Fine",
          "nl-NL": "EE567 YZ Fijnnivelleermachine",
          "pt-PT": "EE567 YZ Niveladora Fina",
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
          "de-DE": "ee567-yz",
          "en": undefined,
          "en-AU": "ee567-yz",
          "en-GB": "ee567-yz",
          "en-NZ": "ee567-yz",
          "en-UK": "ee567-yz",
          "en-US": "ee567-yz",
          "es-ES": "ee567-yz",
          "fr": undefined,
          "fr-FR": "ee567-yz",
          "it-IT": "ee567-yz",
          "nl-NL": "ee567-yz",
          "pt-PT": "ee567-yz",
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
                "value": 500,
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
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ee567-yz-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 500,
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
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ee567-yz-2023",
          },
        ],
      }
    `);
  });

  it(`should return a ee567Yz preset when built for graphql`, () => {
    const ee567YzPresetGraphql = ee567Yz().buildGraphql<TProductDraft>();
    expect(ee567YzPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "fine-graders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Feinplanierer mit hoher Kapazität und fortschrittlichen Funktionen für effizientes Finish von Oberflächen.",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrice fine ad alta capacità con caratteristiche avanzate per una finitura efficiente delle superfici.",
          },
          {
            "locale": "en-UK",
            "value": "High-capacity fine grader with advanced features for efficient surface finishing.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits fijnnivelleermachine met geavanceerde functies voor efficiënte oppervlakteafwerking.",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuse fine haute capacité avec des fonctionnalités avancées pour une finition de surface efficace.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity fine grader with advanced features for efficient surface finishing.",
          },
          {
            "locale": "es-ES",
            "value": "Niveladora fina de alta capacidad con características avanzadas para un acabado de superficie eficiente.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity fine grader with advanced features for efficient surface finishing.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity fine grader with advanced features for efficient surface finishing.",
          },
          {
            "locale": "pt-PT",
            "value": "Niveladora fina de alta capacidade com recursos avançados para acabamento eficiente de superfícies.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity fine grader with advanced features for efficient surface finishing.",
          },
        ],
        "key": "ee567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "500",
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
                "width": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ee567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "EE567 YZ Feinplanierer",
          },
          {
            "locale": "it-IT",
            "value": "EE567 YZ Livellatrice Fine",
          },
          {
            "locale": "en-UK",
            "value": "EE567 YZ Fine Grader",
          },
          {
            "locale": "nl-NL",
            "value": "EE567 YZ Fijnnivelleermachine",
          },
          {
            "locale": "fr-FR",
            "value": "EE567 YZ Niveleuse fine",
          },
          {
            "locale": "en-AU",
            "value": "EE567 YZ Fine Grader",
          },
          {
            "locale": "es-ES",
            "value": "EE567 YZ Niveladora fina",
          },
          {
            "locale": "en-GB",
            "value": "EE567 YZ Fine Grader",
          },
          {
            "locale": "en-NZ",
            "value": "EE567 YZ Fine Grader",
          },
          {
            "locale": "pt-PT",
            "value": "EE567 YZ Niveladora Fina",
          },
          {
            "locale": "en-US",
            "value": "EE567 YZ Fine Grader",
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
            "value": "ee567-yz",
          },
          {
            "locale": "it-IT",
            "value": "ee567-yz",
          },
          {
            "locale": "en-UK",
            "value": "ee567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "ee567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "ee567-yz",
          },
          {
            "locale": "en-AU",
            "value": "ee567-yz",
          },
          {
            "locale": "es-ES",
            "value": "ee567-yz",
          },
          {
            "locale": "en-GB",
            "value": "ee567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "ee567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "ee567-yz",
          },
          {
            "locale": "en-US",
            "value": "ee567-yz",
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
                "value": "500",
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
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ee567-yz-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "500",
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
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ee567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ee567-yz-2023",
          },
        ],
      }
    `);
  });
});
