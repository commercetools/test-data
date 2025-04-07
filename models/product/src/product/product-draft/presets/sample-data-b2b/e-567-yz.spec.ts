import type { TProductDraft } from '../../../types';
import e567Yz from './e-567-yz';

describe(`with e567Yz preset`, () => {
  it(`should return a e567Yz preset`, () => {
    const e567YzPreset = e567Yz().build<TProductDraft>();
    expect(e567YzPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "log-loaders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Fortgeschrittener Holzlader mit Präzisionskontrolle für eine effiziente Handhabung von Baumstämmen in Forstanwendungen.",
          "en": undefined,
          "en-AU": "Advanced log loader with precision control for efficient log handling in forestry applications.",
          "en-GB": "Advanced log loader with precision control for efficient log handling in forestry applications.",
          "en-NZ": "Advanced log loader with precision control for efficient log handling in forestry applications.",
          "en-US": "Advanced log loader with precision control for efficient log handling in forestry applications.",
          "es-ES": "Cargador de troncos avanzado con control de precisión para una manipulación eficiente de troncos en aplicaciones forestales.",
          "fr": undefined,
          "fr-FR": "Chargeur de bûches avancé avec contrôle de précision pour une manipulation efficace des grumes dans les applications forestières.",
          "it-IT": "Caricatore di tronchi avanzato con controllo di precisione per la manipolazione efficiente di tronchi in applicazioni forestali.",
          "nl-NL": "Geavanceerde boomlader met precisiecontrole voor efficiënte boomstamhantering in bosbouwtoepassingen.",
          "pt-PT": "Carregadeira de toras avançada com controle de precisão para manuseio eficiente de toras em aplicações florestais.",
        },
        "key": "e567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 550,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "e567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "E567 YZ Holzlader",
          "en": undefined,
          "en-AU": "E567 YZ Log Loader",
          "en-GB": "E567 YZ Log Loader",
          "en-NZ": "E567 YZ Log Loader",
          "en-US": "E567 YZ Log Loader",
          "es-ES": "E567 YZ Cargador de troncos",
          "fr": undefined,
          "fr-FR": "E567 YZ Chargeur de bûches",
          "it-IT": "E567 YZ Caricatore di Tronchi",
          "nl-NL": "E567 YZ Boomlader",
          "pt-PT": "E567 YZ Carregadeira de Toras",
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
          "de-DE": "e567-yz",
          "en": undefined,
          "en-AU": "e567-yz",
          "en-GB": "e567-yz",
          "en-NZ": "e567-yz",
          "en-US": "e567-yz",
          "es-ES": "e567-yz",
          "fr": undefined,
          "fr-FR": "e567-yz",
          "it-IT": "e567-yz",
          "nl-NL": "e567-yz",
          "pt-PT": "e567-yz",
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
                "value": 550,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "e567-yz-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 550,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "e567-yz-2023",
          },
        ],
      }
    `);
  });

  it(`should return a e567Yz preset when built for graphql`, () => {
    const e567YzPresetGraphql = e567Yz().buildGraphql<TProductDraft>();
    expect(e567YzPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "log-loaders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Fortgeschrittener Holzlader mit Präzisionskontrolle für eine effiziente Handhabung von Baumstämmen in Forstanwendungen.",
          },
          {
            "locale": "it-IT",
            "value": "Caricatore di tronchi avanzato con controllo di precisione per la manipolazione efficiente di tronchi in applicazioni forestali.",
          },
          {
            "locale": "nl-NL",
            "value": "Geavanceerde boomlader met precisiecontrole voor efficiënte boomstamhantering in bosbouwtoepassingen.",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeur de bûches avancé avec contrôle de précision pour une manipulation efficace des grumes dans les applications forestières.",
          },
          {
            "locale": "en-AU",
            "value": "Advanced log loader with precision control for efficient log handling in forestry applications.",
          },
          {
            "locale": "es-ES",
            "value": "Cargador de troncos avanzado con control de precisión para una manipulación eficiente de troncos en aplicaciones forestales.",
          },
          {
            "locale": "en-GB",
            "value": "Advanced log loader with precision control for efficient log handling in forestry applications.",
          },
          {
            "locale": "en-NZ",
            "value": "Advanced log loader with precision control for efficient log handling in forestry applications.",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeira de toras avançada com controle de precisão para manuseio eficiente de toras em aplicações florestais.",
          },
          {
            "locale": "en-US",
            "value": "Advanced log loader with precision control for efficient log handling in forestry applications.",
          },
        ],
        "key": "e567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "550",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "e567-yz-2015",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "E567 YZ Holzlader",
          },
          {
            "locale": "it-IT",
            "value": "E567 YZ Caricatore di Tronchi",
          },
          {
            "locale": "nl-NL",
            "value": "E567 YZ Boomlader",
          },
          {
            "locale": "fr-FR",
            "value": "E567 YZ Chargeur de bûches",
          },
          {
            "locale": "en-AU",
            "value": "E567 YZ Log Loader",
          },
          {
            "locale": "es-ES",
            "value": "E567 YZ Cargador de troncos",
          },
          {
            "locale": "en-GB",
            "value": "E567 YZ Log Loader",
          },
          {
            "locale": "en-NZ",
            "value": "E567 YZ Log Loader",
          },
          {
            "locale": "pt-PT",
            "value": "E567 YZ Carregadeira de Toras",
          },
          {
            "locale": "en-US",
            "value": "E567 YZ Log Loader",
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
            "value": "e567-yz",
          },
          {
            "locale": "it-IT",
            "value": "e567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "e567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "e567-yz",
          },
          {
            "locale": "en-AU",
            "value": "e567-yz",
          },
          {
            "locale": "es-ES",
            "value": "e567-yz",
          },
          {
            "locale": "en-GB",
            "value": "e567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "e567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "e567-yz",
          },
          {
            "locale": "en-US",
            "value": "e567-yz",
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
                "value": "550",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "e567-yz-2019",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "550",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/e567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "e567-yz-2023",
            "staged": true,
          },
        ],
      }
    `);
  });
});
