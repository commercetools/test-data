import type { TProductDraft } from '../../../types';
import w789Uv from './w-789-uv';

describe(`with w789Uv preset`, () => {
  it(`should return a w789Uv preset`, () => {
    const w789UvPreset = w789Uv().build<TProductDraft>();
    expect(w789UvPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rigid-dump-trucks",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Starren Kipplaster mit hoher Kapazität und fortschrittlichen Funktionen für den effizienten Transport von Material.",
          "en": undefined,
          "en-AU": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          "en-GB": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          "en-NZ": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          "en-UK": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          "en-US": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          "es-ES": "Camión volquete rígido de alta capacidad con características avanzadas para el transporte eficiente de materiales.",
          "fr": undefined,
          "fr-FR": "Camion benne rigide haute capacité avec des fonctionnalités avancées pour un transport efficace des matériaux.",
          "it-IT": "Camion ribaltabile rigido ad alta capacità con caratteristiche avanzate per il trasporto efficiente di materiali.",
          "nl-NL": "Hoogcapaciteits starre dumptruck met geavanceerde functies voor efficiënt materiaaltransport.",
          "pt-PT": "Caminhão basculante rígido de alta capacidade com recursos avançados para transporte eficiente de materiais.",
        },
        "key": "w789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 350,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "w789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "W789 UV Starren Kipplaster",
          "en": undefined,
          "en-AU": "W789 UV Rigid Dump Truck",
          "en-GB": "W789 UV Rigid Dump Truck",
          "en-NZ": "W789 UV Rigid Dump Truck",
          "en-UK": "W789 UV Rigid Dump Truck",
          "en-US": "W789 UV Rigid Dump Truck",
          "es-ES": "W789 UV Camión volquete rígido",
          "fr": undefined,
          "fr-FR": "W789 UV Camion benne rigide",
          "it-IT": "W789 UV Camion Ribaltabile Rigido",
          "nl-NL": "W789 UV Starre Dumptruck",
          "pt-PT": "W789 UV Caminhão Basculante Rígido",
        },
        "priceMode": undefined,
        "productType": {
          "key": "heavy-earthmoving-and-construction-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "w789-uv",
          "en": undefined,
          "en-AU": "w789-uv",
          "en-GB": "w789-uv",
          "en-NZ": "w789-uv",
          "en-UK": "w789-uv",
          "en-US": "w789-uv",
          "es-ES": "w789-uv",
          "fr": undefined,
          "fr-FR": "w789-uv",
          "it-IT": "w789-uv",
          "nl-NL": "w789-uv",
          "pt-PT": "w789-uv",
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
                "value": 350,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "w789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 350,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "w789-uv-2023",
          },
        ],
      }
    `);
  });

  it(`should return a w789Uv preset when built for graphql`, () => {
    const w789UvPresetGraphql = w789Uv().buildGraphql<TProductDraft>();
    expect(w789UvPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rigid-dump-trucks",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Starren Kipplaster mit hoher Kapazität und fortschrittlichen Funktionen für den effizienten Transport von Material.",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabile rigido ad alta capacità con caratteristiche avanzate per il trasporto efficiente di materiali.",
          },
          {
            "locale": "en-UK",
            "value": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits starre dumptruck met geavanceerde functies voor efficiënt materiaaltransport.",
          },
          {
            "locale": "fr-FR",
            "value": "Camion benne rigide haute capacité avec des fonctionnalités avancées pour un transport efficace des matériaux.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          },
          {
            "locale": "es-ES",
            "value": "Camión volquete rígido de alta capacidad con características avanzadas para el transporte eficiente de materiales.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhão basculante rígido de alta capacidade com recursos avançados para transporte eficiente de materiais.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity rigid dump truck with advanced features for efficient material transport.",
          },
        ],
        "key": "w789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "350",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "w789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "W789 UV Starren Kipplaster",
          },
          {
            "locale": "it-IT",
            "value": "W789 UV Camion Ribaltabile Rigido",
          },
          {
            "locale": "en-UK",
            "value": "W789 UV Rigid Dump Truck",
          },
          {
            "locale": "nl-NL",
            "value": "W789 UV Starre Dumptruck",
          },
          {
            "locale": "fr-FR",
            "value": "W789 UV Camion benne rigide",
          },
          {
            "locale": "en-AU",
            "value": "W789 UV Rigid Dump Truck",
          },
          {
            "locale": "es-ES",
            "value": "W789 UV Camión volquete rígido",
          },
          {
            "locale": "en-GB",
            "value": "W789 UV Rigid Dump Truck",
          },
          {
            "locale": "en-NZ",
            "value": "W789 UV Rigid Dump Truck",
          },
          {
            "locale": "pt-PT",
            "value": "W789 UV Caminhão Basculante Rígido",
          },
          {
            "locale": "en-US",
            "value": "W789 UV Rigid Dump Truck",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "heavy-earthmoving-and-construction-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "w789-uv",
          },
          {
            "locale": "it-IT",
            "value": "w789-uv",
          },
          {
            "locale": "en-UK",
            "value": "w789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "w789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "w789-uv",
          },
          {
            "locale": "en-AU",
            "value": "w789-uv",
          },
          {
            "locale": "es-ES",
            "value": "w789-uv",
          },
          {
            "locale": "en-GB",
            "value": "w789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "w789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "w789-uv",
          },
          {
            "locale": "en-US",
            "value": "w789-uv",
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
                "value": "350",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "w789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "350",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/w789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "w789-uv-2023",
          },
        ],
      }
    `);
  });
});
