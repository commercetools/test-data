import type { TProductDraft } from '../../../types';
import fff456St from './fff-456-st';

describe(`with fff456St preset`, () => {
  it(`should return a fff456St preset`, () => {
    const fff456StPreset = fff456St().build<TProductDraft>();
    expect(fff456StPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "quarrying-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Schwerlast-Steinbruchhammer für effiziente Gesteinsgewinnung in Steinbruch- und Bergbauoperationen.",
          "en": undefined,
          "en-AU": "Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.",
          "en-GB": "Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.",
          "en-NZ": "Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.",
          "en-US": "Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.",
          "es-ES": "Martillo de cantera resistente para una extracción eficiente de rocas en operaciones de canteras y minería.",
          "fr": undefined,
          "fr-FR": "Marteau de carrière robuste pour l'extraction efficace de roches dans les opérations de carrière et d'exploitation minière.",
          "it-IT": "Martello pesante per cave per l'estrazione efficiente di roccia in operazioni di cava e minerarie.",
          "nl-NL": "Zware steengroevehamer voor efficiënte rotsontginning in steengroeve- en mijnbouwoperaties.",
          "pt-PT": "Martelo de pedreira de serviço pesado para extração eficiente de rochas em operações de pedreiras e mineração.",
        },
        "key": "fff456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 12000,
            },
            {
              "name": "color",
              "value": {
                "key": "RED",
                "label": {
                  "de-DE": "Rot",
                  "en-AU": "Red",
                  "en-GB": "Red",
                  "en-NZ": "Red",
                  "en-US": "Red",
                  "es-ES": "Rojo",
                  "fr-FR": "Rouge",
                  "it-IT": "Rosso",
                  "nl-NL": "Rood",
                  "pt-PT": "Vermelho",
                },
              },
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fff456-st-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "fff456-st-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "FFF456 ST Steinbruchhammer",
          "en": undefined,
          "en-AU": "FFF456 ST Quarrying Hammer",
          "en-GB": "FFF456 ST Quarrying Hammer",
          "en-NZ": "FFF456 ST Quarrying Hammer",
          "en-US": "FFF456 ST Quarrying Hammer",
          "es-ES": "FFF456 ST Martillo de cantera",
          "fr": undefined,
          "fr-FR": "FFF456 ST Marteau de carrière",
          "it-IT": "FFF456 ST Martello per Cave",
          "nl-NL": "FFF456 ST Steengroevehamer",
          "pt-PT": "FFF456 ST Martelo de Pedreira",
        },
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "fff456-st",
          "en": undefined,
          "en-AU": "fff456-st",
          "en-GB": "fff456-st",
          "en-NZ": "fff456-st",
          "en-US": "fff456-st",
          "es-ES": "fff456-st",
          "fr": undefined,
          "fr-FR": "fff456-st",
          "it-IT": "fff456-st",
          "nl-NL": "fff456-st",
          "pt-PT": "fff456-st",
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
                "value": 12000,
              },
              {
                "name": "color",
                "value": {
                  "key": "BLUE",
                  "label": {
                    "de-DE": "Blau",
                    "en-AU": "Blue",
                    "en-GB": "Blue",
                    "en-NZ": "Blue",
                    "en-US": "Blue",
                    "es-ES": "Azul",
                    "fr-FR": "Bleu",
                    "it-IT": "Blu",
                    "nl-NL": "Blauw",
                    "pt-PT": "Azul",
                  },
                },
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fff456-st-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "fff456-st-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 12000,
              },
              {
                "name": "color",
                "value": {
                  "key": "GREEN",
                  "label": {
                    "de-DE": "Grün",
                    "en-AU": "Green",
                    "en-GB": "Green",
                    "en-NZ": "Green",
                    "en-US": "Green",
                    "es-ES": "Verde",
                    "fr-FR": "Vert",
                    "it-IT": "Verde",
                    "nl-NL": "Groen",
                    "pt-PT": "Verde",
                  },
                },
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fff456-st-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "fff456-st-green",
          },
        ],
      }
    `);
  });

  it(`should return a fff456St preset when built for graphql`, () => {
    const fff456StPresetGraphql = fff456St().buildGraphql<TProductDraft>();
    expect(fff456StPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "quarrying-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Schwerlast-Steinbruchhammer für effiziente Gesteinsgewinnung in Steinbruch- und Bergbauoperationen.",
          },
          {
            "locale": "it-IT",
            "value": "Martello pesante per cave per l'estrazione efficiente di roccia in operazioni di cava e minerarie.",
          },
          {
            "locale": "nl-NL",
            "value": "Zware steengroevehamer voor efficiënte rotsontginning in steengroeve- en mijnbouwoperaties.",
          },
          {
            "locale": "fr-FR",
            "value": "Marteau de carrière robuste pour l'extraction efficace de roches dans les opérations de carrière et d'exploitation minière.",
          },
          {
            "locale": "en-AU",
            "value": "Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.",
          },
          {
            "locale": "es-ES",
            "value": "Martillo de cantera resistente para una extracción eficiente de rocas en operaciones de canteras y minería.",
          },
          {
            "locale": "en-GB",
            "value": "Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.",
          },
          {
            "locale": "en-NZ",
            "value": "Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Martelo de pedreira de serviço pesado para extração eficiente de rochas em operações de pedreiras e mineração.",
          },
          {
            "locale": "en-US",
            "value": "Heavy-duty quarrying hammer for efficient rock extraction in quarry and mining operations.",
          },
        ],
        "key": "fff456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "12000",
            },
            {
              "name": "color",
              "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fff456-st-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "fff456-st-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "FFF456 ST Steinbruchhammer",
          },
          {
            "locale": "it-IT",
            "value": "FFF456 ST Martello per Cave",
          },
          {
            "locale": "nl-NL",
            "value": "FFF456 ST Steengroevehamer",
          },
          {
            "locale": "fr-FR",
            "value": "FFF456 ST Marteau de carrière",
          },
          {
            "locale": "en-AU",
            "value": "FFF456 ST Quarrying Hammer",
          },
          {
            "locale": "es-ES",
            "value": "FFF456 ST Martillo de cantera",
          },
          {
            "locale": "en-GB",
            "value": "FFF456 ST Quarrying Hammer",
          },
          {
            "locale": "en-NZ",
            "value": "FFF456 ST Quarrying Hammer",
          },
          {
            "locale": "pt-PT",
            "value": "FFF456 ST Martelo de Pedreira",
          },
          {
            "locale": "en-US",
            "value": "FFF456 ST Quarrying Hammer",
          },
        ],
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "fff456-st",
          },
          {
            "locale": "it-IT",
            "value": "fff456-st",
          },
          {
            "locale": "nl-NL",
            "value": "fff456-st",
          },
          {
            "locale": "fr-FR",
            "value": "fff456-st",
          },
          {
            "locale": "en-AU",
            "value": "fff456-st",
          },
          {
            "locale": "es-ES",
            "value": "fff456-st",
          },
          {
            "locale": "en-GB",
            "value": "fff456-st",
          },
          {
            "locale": "en-NZ",
            "value": "fff456-st",
          },
          {
            "locale": "pt-PT",
            "value": "fff456-st",
          },
          {
            "locale": "en-US",
            "value": "fff456-st",
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
                "value": "12000",
              },
              {
                "name": "color",
                "value": "{"key":"BLUE","label":{"de-DE":"Blau","it-IT":"Blu","nl-NL":"Blauw","fr-FR":"Bleu","en-AU":"Blue","es-ES":"Azul","en-GB":"Blue","en-NZ":"Blue","pt-PT":"Azul","en-US":"Blue"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fff456-st-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "fff456-st-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "12000",
              },
              {
                "name": "color",
                "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/fff456-st-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "fff456-st-green",
          },
        ],
      }
    `);
  });
});
