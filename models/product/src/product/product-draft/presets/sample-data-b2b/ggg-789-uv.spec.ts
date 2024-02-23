import type { TProductDraft } from '../../../types';
import ggg789Uv from './ggg-789-uv';

describe(`with ggg789Uv preset`, () => {
  it(`should return a ggg789Uv preset`, () => {
    const ggg789UvPreset = ggg789Uv().build<TProductDraft>();
    expect(ggg789UvPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Vielseitiger Steinbruchhammer mit präziser Steuerung für verschiedene Gesteinsgewinnungsaufgaben im Bergbau und Bauwesen.",
          "en": undefined,
          "en-AU": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          "en-GB": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          "en-NZ": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          "en-UK": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          "en-US": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          "es-ES": "Martillo de cantera versátil con control preciso para diversas tareas de extracción de rocas en minería y construcción.",
          "fr": undefined,
          "fr-FR": "Marteau de carrière polyvalent avec commande précise pour diverses tâches d&#39;extraction de roches dans l&#39;exploitation minière et la construction.",
          "it-IT": "Martello per cave versatile con controllo di precisione per vari compiti di estrazione di roccia in miniere e costruzioni.",
          "nl-NL": "Veelzijdige steengroevehamer met precisiecontrole voor diverse rotsontginningstaken in mijnbouw en bouw.",
          "pt-PT": "Martelo de pedreira versátil com controle de precisão para várias tarefas de extração de rochas em mineração e construção.",
        },
        "key": "ggg789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 15000,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ggg789-uv-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ggg789-uv-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "GGG789 UV Steinbruchhammer",
          "en": undefined,
          "en-AU": "GGG789 UV Quarrying Hammer",
          "en-GB": "GGG789 UV Quarrying Hammer",
          "en-NZ": "GGG789 UV Quarrying Hammer",
          "en-UK": "GGG789 UV Quarrying Hammer",
          "en-US": "GGG789 UV Quarrying Hammer",
          "es-ES": "GGG789 UV Martillo de cantera",
          "fr": undefined,
          "fr-FR": "GGG789 UV Marteau de carrière",
          "it-IT": "GGG789 UV Martello per Cave",
          "nl-NL": "GGG789 UV Steengroevehamer",
          "pt-PT": "GGG789 UV Martelo de Pedreira",
        },
        "priceMode": undefined,
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "ggg789-uv",
          "en": undefined,
          "en-AU": "ggg789-uv",
          "en-GB": "ggg789-uv",
          "en-NZ": "ggg789-uv",
          "en-UK": "ggg789-uv",
          "en-US": "ggg789-uv",
          "es-ES": "ggg789-uv",
          "fr": undefined,
          "fr-FR": "ggg789-uv",
          "it-IT": "ggg789-uv",
          "nl-NL": "ggg789-uv",
          "pt-PT": "ggg789-uv",
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
                "value": 15000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ggg789-uv-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ggg789-uv-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 15000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ggg789-uv-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ggg789-uv-green",
          },
        ],
      }
    `);
  });

  it(`should return a ggg789Uv preset when built for graphql`, () => {
    const ggg789UvPresetGraphql = ggg789Uv().buildGraphql<TProductDraft>();
    expect(ggg789UvPresetGraphql).toMatchInlineSnapshot(`
      {
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
            "value": "Vielseitiger Steinbruchhammer mit präziser Steuerung für verschiedene Gesteinsgewinnungsaufgaben im Bergbau und Bauwesen.",
          },
          {
            "locale": "it-IT",
            "value": "Martello per cave versatile con controllo di precisione per vari compiti di estrazione di roccia in miniere e costruzioni.",
          },
          {
            "locale": "en-UK",
            "value": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige steengroevehamer met precisiecontrole voor diverse rotsontginningstaken in mijnbouw en bouw.",
          },
          {
            "locale": "fr-FR",
            "value": "Marteau de carrière polyvalent avec commande précise pour diverses tâches d&#39;extraction de roches dans l&#39;exploitation minière et la construction.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          },
          {
            "locale": "es-ES",
            "value": "Martillo de cantera versátil con control preciso para diversas tareas de extracción de rocas en minería y construcción.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          },
          {
            "locale": "pt-PT",
            "value": "Martelo de pedreira versátil com controle de precisão para várias tarefas de extração de rochas em mineração e construção.",
          },
          {
            "locale": "en-US",
            "value": "Versatile quarrying hammer with precision control for various rock extraction tasks in mining and construction.",
          },
        ],
        "key": "ggg789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "15000",
            },
            {
              "name": "color",
              "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ggg789-uv-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ggg789-uv-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "GGG789 UV Steinbruchhammer",
          },
          {
            "locale": "it-IT",
            "value": "GGG789 UV Martello per Cave",
          },
          {
            "locale": "en-UK",
            "value": "GGG789 UV Quarrying Hammer",
          },
          {
            "locale": "nl-NL",
            "value": "GGG789 UV Steengroevehamer",
          },
          {
            "locale": "fr-FR",
            "value": "GGG789 UV Marteau de carrière",
          },
          {
            "locale": "en-AU",
            "value": "GGG789 UV Quarrying Hammer",
          },
          {
            "locale": "es-ES",
            "value": "GGG789 UV Martillo de cantera",
          },
          {
            "locale": "en-GB",
            "value": "GGG789 UV Quarrying Hammer",
          },
          {
            "locale": "en-NZ",
            "value": "GGG789 UV Quarrying Hammer",
          },
          {
            "locale": "pt-PT",
            "value": "GGG789 UV Martelo de Pedreira",
          },
          {
            "locale": "en-US",
            "value": "GGG789 UV Quarrying Hammer",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "ggg789-uv",
          },
          {
            "locale": "it-IT",
            "value": "ggg789-uv",
          },
          {
            "locale": "en-UK",
            "value": "ggg789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "ggg789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "ggg789-uv",
          },
          {
            "locale": "en-AU",
            "value": "ggg789-uv",
          },
          {
            "locale": "es-ES",
            "value": "ggg789-uv",
          },
          {
            "locale": "en-GB",
            "value": "ggg789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "ggg789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "ggg789-uv",
          },
          {
            "locale": "en-US",
            "value": "ggg789-uv",
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
                "value": "15000",
              },
              {
                "name": "color",
                "value": "{"key":"BLUE","label":{"de-DE":"Blau","it-IT":"Blu","nl-NL":"Blauw","fr-FR":"Bleu","en-AU":"Blue","es-ES":"Azul","en-GB":"Blue","en-NZ":"Blue","pt-PT":"Azul","en-US":"Blue"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ggg789-uv-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ggg789-uv-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "15000",
              },
              {
                "name": "color",
                "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ggg789-uv-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ggg789-uv-green",
          },
        ],
      }
    `);
  });
});
