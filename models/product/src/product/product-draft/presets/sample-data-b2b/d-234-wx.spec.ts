import type { TProductDraft } from '../../../types';
import d234Wx from './d-234-wx';

describe(`with d234Wx preset`, () => {
  it(`should return a d234Wx preset`, () => {
    const d234WxPreset = d234Wx().build<TProductDraft>();
    expect(d234WxPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Spezialisierter Holzlader für effiziente Handhabung von Baumstämmen in Forstbetrieben.",
          "en": undefined,
          "en-AU": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          "en-GB": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          "en-NZ": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          "en-UK": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          "en-US": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          "es-ES": "Cargador de troncos especializado diseñado para la manipulación eficiente de troncos en operaciones forestales.",
          "fr": undefined,
          "fr-FR": "Chargeur de bûches spécialisé conçu pour la manipulation efficace des grumes dans les opérations forestières.",
          "it-IT": "Caricatore di tronchi specializzato progettato per la manipolazione efficiente di tronchi in operazioni forestali.",
          "nl-NL": "Gespecialiseerde boomlader ontworpen voor efficiënte hantering van boomstammen in bosbouwoperaties.",
          "pt-PT": "Carregadeira especializada de toras projetada para manuseio eficiente de toras em operações florestais.",
        },
        "key": "d234-wx",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "d234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "D234 WX Holzlader",
          "en": undefined,
          "en-AU": "D234 WX Log Loader",
          "en-GB": "D234 WX Log Loader",
          "en-NZ": "D234 WX Log Loader",
          "en-UK": "D234 WX Log Loader",
          "en-US": "D234 WX Log Loader",
          "es-ES": "D234 WX Cargador de troncos",
          "fr": undefined,
          "fr-FR": "D234 WX Chargeur de bûches",
          "it-IT": "D234 WX Caricatore di Tronchi",
          "nl-NL": "D234 WX Boomlader",
          "pt-PT": "D234 WX Carregadeira de Toras",
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
          "de-DE": "d234-wx",
          "en": undefined,
          "en-AU": "d234-wx",
          "en-GB": "d234-wx",
          "en-NZ": "d234-wx",
          "en-UK": "d234-wx",
          "en-US": "d234-wx",
          "es-ES": "d234-wx",
          "fr": undefined,
          "fr-FR": "d234-wx",
          "it-IT": "d234-wx",
          "nl-NL": "d234-wx",
          "pt-PT": "d234-wx",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "d234-wx-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "d234-wx-2023",
          },
        ],
      }
    `);
  });

  it(`should return a d234Wx preset when built for graphql`, () => {
    const d234WxPresetGraphql = d234Wx().buildGraphql<TProductDraft>();
    expect(d234WxPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Spezialisierter Holzlader für effiziente Handhabung von Baumstämmen in Forstbetrieben.",
          },
          {
            "locale": "it-IT",
            "value": "Caricatore di tronchi specializzato progettato per la manipolazione efficiente di tronchi in operazioni forestali.",
          },
          {
            "locale": "en-UK",
            "value": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          },
          {
            "locale": "nl-NL",
            "value": "Gespecialiseerde boomlader ontworpen voor efficiënte hantering van boomstammen in bosbouwoperaties.",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeur de bûches spécialisé conçu pour la manipulation efficace des grumes dans les opérations forestières.",
          },
          {
            "locale": "en-AU",
            "value": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          },
          {
            "locale": "es-ES",
            "value": "Cargador de troncos especializado diseñado para la manipulación eficiente de troncos en operaciones forestales.",
          },
          {
            "locale": "en-GB",
            "value": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          },
          {
            "locale": "en-NZ",
            "value": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeira especializada de toras projetada para manuseio eficiente de toras em operações florestais.",
          },
          {
            "locale": "en-US",
            "value": "Specialized log loader designed for efficient handling of logs in forestry operations.",
          },
        ],
        "key": "d234-wx",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "d234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "D234 WX Holzlader",
          },
          {
            "locale": "it-IT",
            "value": "D234 WX Caricatore di Tronchi",
          },
          {
            "locale": "en-UK",
            "value": "D234 WX Log Loader",
          },
          {
            "locale": "nl-NL",
            "value": "D234 WX Boomlader",
          },
          {
            "locale": "fr-FR",
            "value": "D234 WX Chargeur de bûches",
          },
          {
            "locale": "en-AU",
            "value": "D234 WX Log Loader",
          },
          {
            "locale": "es-ES",
            "value": "D234 WX Cargador de troncos",
          },
          {
            "locale": "en-GB",
            "value": "D234 WX Log Loader",
          },
          {
            "locale": "en-NZ",
            "value": "D234 WX Log Loader",
          },
          {
            "locale": "pt-PT",
            "value": "D234 WX Carregadeira de Toras",
          },
          {
            "locale": "en-US",
            "value": "D234 WX Log Loader",
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
            "value": "d234-wx",
          },
          {
            "locale": "it-IT",
            "value": "d234-wx",
          },
          {
            "locale": "en-UK",
            "value": "d234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "d234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "d234-wx",
          },
          {
            "locale": "en-AU",
            "value": "d234-wx",
          },
          {
            "locale": "es-ES",
            "value": "d234-wx",
          },
          {
            "locale": "en-GB",
            "value": "d234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "d234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "d234-wx",
          },
          {
            "locale": "en-US",
            "value": "d234-wx",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "d234-wx-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/d234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "d234-wx-2023",
          },
        ],
      }
    `);
  });
});
