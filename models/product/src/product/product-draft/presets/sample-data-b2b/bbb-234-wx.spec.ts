import type { TProductDraft } from '../../../types';
import bbb234Wx from './bbb-234-wx';

describe(`with bbb234Wx preset`, () => {
  it(`should return a bbb234Wx preset`, () => {
    const bbb234WxPreset = bbb234Wx().build<TProductDraft>();
    expect(bbb234WxPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "production-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Leistungsstarker Produktionsbohrer für effizientes Bohren in groß angelegten Bergbauoperationen.",
          "en": undefined,
          "en-AU": "High-performance production drill designed for efficient drilling in large-scale mining operations.",
          "en-GB": "High-performance production drill designed for efficient drilling in large-scale mining operations.",
          "en-NZ": "High-performance production drill designed for efficient drilling in large-scale mining operations.",
          "en-US": "High-performance production drill designed for efficient drilling in large-scale mining operations.",
          "es-ES": "Perforadora de producción de alto rendimiento diseñada para perforar de manera eficiente en operaciones mineras a gran escala.",
          "fr": undefined,
          "fr-FR": "Forage de production haute performance conçu pour un forage efficace dans les opérations minières à grande échelle.",
          "it-IT": "Trapano ad alte prestazioni per produzione progettato per trapanazioni efficienti in operazioni minerarie su larga scala.",
          "nl-NL": "Hoogpresterende productieboor ontworpen voor efficiënt boren in grootschalige mijnbouwoperaties.",
          "pt-PT": "Perfuratriz de produção de alto desempenho projetada para perfuração eficiente em operações de mineração em grande escala.",
        },
        "key": "bbb234-wx",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "bbb234-wx-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "BBB234 WX Produktionsbohrer",
          "en": undefined,
          "en-AU": "BBB234 WX Production Drill",
          "en-GB": "BBB234 WX Production Drill",
          "en-NZ": "BBB234 WX Production Drill",
          "en-US": "BBB234 WX Production Drill",
          "es-ES": "BBB234 WX Perforadora de producción",
          "fr": undefined,
          "fr-FR": "BBB234 WX Forage de production",
          "it-IT": "BBB234 WX Trapano per Produzione",
          "nl-NL": "BBB234 WX Productieboor",
          "pt-PT": "BBB234 WX Perfuratriz de Produção",
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
          "de-DE": "bbb234-wx",
          "en": undefined,
          "en-AU": "bbb234-wx",
          "en-GB": "bbb234-wx",
          "en-NZ": "bbb234-wx",
          "en-US": "bbb234-wx",
          "es-ES": "bbb234-wx",
          "fr": undefined,
          "fr-FR": "bbb234-wx",
          "it-IT": "bbb234-wx",
          "nl-NL": "bbb234-wx",
          "pt-PT": "bbb234-wx",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "bbb234-wx-blue",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "bbb234-wx-green",
          },
        ],
      }
    `);
  });

  it(`should return a bbb234Wx preset when built for graphql`, () => {
    const bbb234WxPresetGraphql = bbb234Wx().buildGraphql<TProductDraft>();
    expect(bbb234WxPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "production-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Leistungsstarker Produktionsbohrer für effizientes Bohren in groß angelegten Bergbauoperationen.",
          },
          {
            "locale": "it-IT",
            "value": "Trapano ad alte prestazioni per produzione progettato per trapanazioni efficienti in operazioni minerarie su larga scala.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogpresterende productieboor ontworpen voor efficiënt boren in grootschalige mijnbouwoperaties.",
          },
          {
            "locale": "fr-FR",
            "value": "Forage de production haute performance conçu pour un forage efficace dans les opérations minières à grande échelle.",
          },
          {
            "locale": "en-AU",
            "value": "High-performance production drill designed for efficient drilling in large-scale mining operations.",
          },
          {
            "locale": "es-ES",
            "value": "Perforadora de producción de alto rendimiento diseñada para perforar de manera eficiente en operaciones mineras a gran escala.",
          },
          {
            "locale": "en-GB",
            "value": "High-performance production drill designed for efficient drilling in large-scale mining operations.",
          },
          {
            "locale": "en-NZ",
            "value": "High-performance production drill designed for efficient drilling in large-scale mining operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Perfuratriz de produção de alto desempenho projetada para perfuração eficiente em operações de mineração em grande escala.",
          },
          {
            "locale": "en-US",
            "value": "High-performance production drill designed for efficient drilling in large-scale mining operations.",
          },
        ],
        "key": "bbb234-wx",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "bbb234-wx-red",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "BBB234 WX Produktionsbohrer",
          },
          {
            "locale": "it-IT",
            "value": "BBB234 WX Trapano per Produzione",
          },
          {
            "locale": "nl-NL",
            "value": "BBB234 WX Productieboor",
          },
          {
            "locale": "fr-FR",
            "value": "BBB234 WX Forage de production",
          },
          {
            "locale": "en-AU",
            "value": "BBB234 WX Production Drill",
          },
          {
            "locale": "es-ES",
            "value": "BBB234 WX Perforadora de producción",
          },
          {
            "locale": "en-GB",
            "value": "BBB234 WX Production Drill",
          },
          {
            "locale": "en-NZ",
            "value": "BBB234 WX Production Drill",
          },
          {
            "locale": "pt-PT",
            "value": "BBB234 WX Perfuratriz de Produção",
          },
          {
            "locale": "en-US",
            "value": "BBB234 WX Production Drill",
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
            "value": "bbb234-wx",
          },
          {
            "locale": "it-IT",
            "value": "bbb234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "bbb234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "bbb234-wx",
          },
          {
            "locale": "en-AU",
            "value": "bbb234-wx",
          },
          {
            "locale": "es-ES",
            "value": "bbb234-wx",
          },
          {
            "locale": "en-GB",
            "value": "bbb234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "bbb234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "bbb234-wx",
          },
          {
            "locale": "en-US",
            "value": "bbb234-wx",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "bbb234-wx-blue",
            "staged": true,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bbb234-wx-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "bbb234-wx-green",
            "staged": true,
          },
        ],
      }
    `);
  });
});
