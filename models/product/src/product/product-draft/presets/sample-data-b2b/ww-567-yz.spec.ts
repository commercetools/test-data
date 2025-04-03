import type { TProductDraft } from '../../../types';
import ww567Yz from './ww-567-yz';

describe(`with ww567Yz preset`, () => {
  it(`should return a ww567Yz preset`, () => {
    const ww567YzPreset = ww567Yz().build<TProductDraft>();
    expect(ww567YzPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "crawler-cranes",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Robuster Raupenkran mit fortschrittlichen Stabilitätsfunktionen für anspruchsvolle Hebeoperationen.",
          "en": undefined,
          "en-AU": "Robust crawler crane with advanced stability features for heavy-duty lifting operations.",
          "en-GB": "Robust crawler crane with advanced stability features for heavy-duty lifting operations.",
          "en-NZ": "Robust crawler crane with advanced stability features for heavy-duty lifting operations.",
          "en-US": "Robust crawler crane with advanced stability features for heavy-duty lifting operations.",
          "es-ES": "Grúa sobre orugas robusta con características avanzadas de estabilidad para operaciones de elevación de servicio pesado.",
          "fr": undefined,
          "fr-FR": "Grue sur chenilles robuste avec des fonctionnalités de stabilité avancées pour des opérations de levage intensives.",
          "it-IT": "Gru cingolata robusta con caratteristiche avanzate di stabilità per operazioni di sollevamento pesanti.",
          "nl-NL": "Robuuste rupskraan met geavanceerde stabiliteitsfuncties voor zware hijswerkzaamheden.",
          "pt-PT": "Grua de esteiras robusta com características avançadas de estabilidade para operações pesadas de elevação.",
        },
        "key": "ww567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 1200,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ww567-yz-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "WW567 YZ Raupenkran für Stabilität",
          "en": undefined,
          "en-AU": "WW567 YZ Crawler Crane for Stability",
          "en-GB": "WW567 YZ Crawler Crane for Stability",
          "en-NZ": "WW567 YZ Crawler Crane for Stability",
          "en-US": "WW567 YZ Crawler Crane for Stability",
          "es-ES": "WW567 YZ Grúa sobre orugas para estabilidad",
          "fr": undefined,
          "fr-FR": "WW567 YZ Grue sur chenilles pour stabilité",
          "it-IT": "WW567 YZ Gru Cingolata per Stabilità",
          "nl-NL": "WW567 YZ Rupskraan voor Stabiliteit",
          "pt-PT": "WW567 YZ Grua de Esteiras para Estabilidade",
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
          "de-DE": "ww567-yz",
          "en": undefined,
          "en-AU": "ww567-yz",
          "en-GB": "ww567-yz",
          "en-NZ": "ww567-yz",
          "en-US": "ww567-yz",
          "es-ES": "ww567-yz",
          "fr": undefined,
          "fr-FR": "ww567-yz",
          "it-IT": "ww567-yz",
          "nl-NL": "ww567-yz",
          "pt-PT": "ww567-yz",
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
                "value": 1200,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ww567-yz-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 1200,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ww567-yz-green",
          },
        ],
      }
    `);
  });

  it(`should return a ww567Yz preset when built for graphql`, () => {
    const ww567YzPresetGraphql = ww567Yz().buildGraphql<TProductDraft>();
    expect(ww567YzPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "crawler-cranes",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Robuster Raupenkran mit fortschrittlichen Stabilitätsfunktionen für anspruchsvolle Hebeoperationen.",
          },
          {
            "locale": "it-IT",
            "value": "Gru cingolata robusta con caratteristiche avanzate di stabilità per operazioni di sollevamento pesanti.",
          },
          {
            "locale": "nl-NL",
            "value": "Robuuste rupskraan met geavanceerde stabiliteitsfuncties voor zware hijswerkzaamheden.",
          },
          {
            "locale": "fr-FR",
            "value": "Grue sur chenilles robuste avec des fonctionnalités de stabilité avancées pour des opérations de levage intensives.",
          },
          {
            "locale": "en-AU",
            "value": "Robust crawler crane with advanced stability features for heavy-duty lifting operations.",
          },
          {
            "locale": "es-ES",
            "value": "Grúa sobre orugas robusta con características avanzadas de estabilidad para operaciones de elevación de servicio pesado.",
          },
          {
            "locale": "en-GB",
            "value": "Robust crawler crane with advanced stability features for heavy-duty lifting operations.",
          },
          {
            "locale": "en-NZ",
            "value": "Robust crawler crane with advanced stability features for heavy-duty lifting operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Grua de esteiras robusta com características avançadas de estabilidade para operações pesadas de elevação.",
          },
          {
            "locale": "en-US",
            "value": "Robust crawler crane with advanced stability features for heavy-duty lifting operations.",
          },
        ],
        "key": "ww567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "1200",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ww567-yz-red",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "WW567 YZ Raupenkran für Stabilität",
          },
          {
            "locale": "it-IT",
            "value": "WW567 YZ Gru Cingolata per Stabilità",
          },
          {
            "locale": "nl-NL",
            "value": "WW567 YZ Rupskraan voor Stabiliteit",
          },
          {
            "locale": "fr-FR",
            "value": "WW567 YZ Grue sur chenilles pour stabilité",
          },
          {
            "locale": "en-AU",
            "value": "WW567 YZ Crawler Crane for Stability",
          },
          {
            "locale": "es-ES",
            "value": "WW567 YZ Grúa sobre orugas para estabilidad",
          },
          {
            "locale": "en-GB",
            "value": "WW567 YZ Crawler Crane for Stability",
          },
          {
            "locale": "en-NZ",
            "value": "WW567 YZ Crawler Crane for Stability",
          },
          {
            "locale": "pt-PT",
            "value": "WW567 YZ Grua de Esteiras para Estabilidade",
          },
          {
            "locale": "en-US",
            "value": "WW567 YZ Crawler Crane for Stability",
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
            "value": "ww567-yz",
          },
          {
            "locale": "it-IT",
            "value": "ww567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "ww567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "ww567-yz",
          },
          {
            "locale": "en-AU",
            "value": "ww567-yz",
          },
          {
            "locale": "es-ES",
            "value": "ww567-yz",
          },
          {
            "locale": "en-GB",
            "value": "ww567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "ww567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "ww567-yz",
          },
          {
            "locale": "en-US",
            "value": "ww567-yz",
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
                "value": "1200",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ww567-yz-blue",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "1200",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ww567-yz-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ww567-yz-green",
            "staged": true,
          },
        ],
      }
    `);
  });
});
