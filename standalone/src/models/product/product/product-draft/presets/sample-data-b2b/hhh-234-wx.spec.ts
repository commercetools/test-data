import type { TProductDraft } from '../../../types';
import hhh234Wx from './hhh-234-wx';

describe(`with hhh234Wx preset`, () => {
  it(`should return a hhh234Wx preset`, () => {
    const hhh234WxPreset = hhh234Wx().build<TProductDraft>();
    expect(hhh234WxPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "piling-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Hochleistungs-Rammpfahlhammer für effizientes und präzises Rammen von Fundamenten in Bauprojekten.",
          "en": undefined,
          "en-AU": "High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.",
          "en-GB": "High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.",
          "en-NZ": "High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.",
          "en-US": "High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.",
          "es-ES": "Martillo de pilotaje de gran capacidad diseñado para pilotes de cimentación eficientes y precisos en proyectos de construcción.",
          "fr": undefined,
          "fr-FR": "Marteau de battage haute capacité conçu pour un fonçage de fondation efficace et précis dans les projets de construction.",
          "it-IT": "Martello per pali ad alta capacità progettato per piantare pali in modo efficiente e preciso in progetti edili.",
          "nl-NL": "Hoogcapaciteits heihamer ontworpen voor efficiënt en nauwkeurig heien van funderingen in bouwprojecten.",
          "pt-PT": "Martelo de cravação de alta capacidade projetado para cravação eficiente e precisa de fundações em projetos de construção.",
        },
        "key": "hhh234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 20000,
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
                "key": "fixed",
                "label": "Fixed",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "hhh234-wx-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "HHH234 WX Rammpfahlhammer",
          "en": undefined,
          "en-AU": "HHH234 WX Piling Hammer",
          "en-GB": "HHH234 WX Piling Hammer",
          "en-NZ": "HHH234 WX Piling Hammer",
          "en-US": "HHH234 WX Piling Hammer",
          "es-ES": "HHH234 WX Martillo de pilotaje",
          "fr": undefined,
          "fr-FR": "HHH234 WX Marteau de battage",
          "it-IT": "HHH234 WX Martello per Pali",
          "nl-NL": "HHH234 WX Heihamer",
          "pt-PT": "HHH234 WX Martelo de Cravação",
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
          "de-DE": "hhh234-wx",
          "en": undefined,
          "en-AU": "hhh234-wx",
          "en-GB": "hhh234-wx",
          "en-NZ": "hhh234-wx",
          "en-US": "hhh234-wx",
          "es-ES": "hhh234-wx",
          "fr": undefined,
          "fr-FR": "hhh234-wx",
          "it-IT": "hhh234-wx",
          "nl-NL": "hhh234-wx",
          "pt-PT": "hhh234-wx",
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
                "value": 20000,
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
                  "key": "fixed",
                  "label": "Fixed",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "hhh234-wx-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 20000,
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
                  "key": "fixed",
                  "label": "Fixed",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "hhh234-wx-green",
          },
        ],
      }
    `);
  });

  it(`should return a hhh234Wx preset when built for graphql`, () => {
    const hhh234WxPresetGraphql = hhh234Wx().buildGraphql<TProductDraft>();
    expect(hhh234WxPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "piling-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Hochleistungs-Rammpfahlhammer für effizientes und präzises Rammen von Fundamenten in Bauprojekten.",
          },
          {
            "locale": "it-IT",
            "value": "Martello per pali ad alta capacità progettato per piantare pali in modo efficiente e preciso in progetti edili.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits heihamer ontworpen voor efficiënt en nauwkeurig heien van funderingen in bouwprojecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Marteau de battage haute capacité conçu pour un fonçage de fondation efficace et précis dans les projets de construction.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.",
          },
          {
            "locale": "es-ES",
            "value": "Martillo de pilotaje de gran capacidad diseñado para pilotes de cimentación eficientes y precisos en proyectos de construcción.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Martelo de cravação de alta capacidade projetado para cravação eficiente e precisa de fundações em projetos de construção.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity piling hammer designed for efficient and precise foundation piling in construction projects.",
          },
        ],
        "key": "hhh234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "20000",
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
              "value": "{"key":"fixed","label":"Fixed"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "hhh234-wx-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "HHH234 WX Rammpfahlhammer",
          },
          {
            "locale": "it-IT",
            "value": "HHH234 WX Martello per Pali",
          },
          {
            "locale": "nl-NL",
            "value": "HHH234 WX Heihamer",
          },
          {
            "locale": "fr-FR",
            "value": "HHH234 WX Marteau de battage",
          },
          {
            "locale": "en-AU",
            "value": "HHH234 WX Piling Hammer",
          },
          {
            "locale": "es-ES",
            "value": "HHH234 WX Martillo de pilotaje",
          },
          {
            "locale": "en-GB",
            "value": "HHH234 WX Piling Hammer",
          },
          {
            "locale": "en-NZ",
            "value": "HHH234 WX Piling Hammer",
          },
          {
            "locale": "pt-PT",
            "value": "HHH234 WX Martelo de Cravação",
          },
          {
            "locale": "en-US",
            "value": "HHH234 WX Piling Hammer",
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
            "value": "hhh234-wx",
          },
          {
            "locale": "it-IT",
            "value": "hhh234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "hhh234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "hhh234-wx",
          },
          {
            "locale": "en-AU",
            "value": "hhh234-wx",
          },
          {
            "locale": "es-ES",
            "value": "hhh234-wx",
          },
          {
            "locale": "en-GB",
            "value": "hhh234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "hhh234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "hhh234-wx",
          },
          {
            "locale": "en-US",
            "value": "hhh234-wx",
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
                "value": "20000",
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
                "value": "{"key":"fixed","label":"Fixed"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "hhh234-wx-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "20000",
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
                "value": "{"key":"fixed","label":"Fixed"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hhh234-wx-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "hhh234-wx-green",
          },
        ],
      }
    `);
  });
});
