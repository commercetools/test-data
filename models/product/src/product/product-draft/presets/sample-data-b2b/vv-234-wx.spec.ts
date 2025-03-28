import type { TProductDraft } from '../../../types';
import vv234Wx from './vv-234-wx';

describe(`with vv234Wx preset`, () => {
  it(`should return a vv234Wx preset`, () => {
    const vv234WxPreset = vv234Wx().build<TProductDraft>();
    expect(vv234WxPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Stabiler Raupenkran für anspruchsvolle Hebearbeiten in schwierigem Gelände.",
          "en": undefined,
          "en-AU": "Stable crawler crane designed for heavy lifting tasks in challenging terrain.",
          "en-GB": "Stable crawler crane designed for heavy lifting tasks in challenging terrain.",
          "en-NZ": "Stable crawler crane designed for heavy lifting tasks in challenging terrain.",
          "en-US": "Stable crawler crane designed for heavy lifting tasks in challenging terrain.",
          "es-ES": "Grúa sobre orugas estable diseñada para tareas de elevación pesadas en terrenos desafiantes.",
          "fr": undefined,
          "fr-FR": "Grue sur chenilles stable conçue pour des tâches de levage lourdes dans un terrain difficile.",
          "it-IT": "Gru cingolata stabile progettata per compiti di sollevamento pesanti in terreni difficili.",
          "nl-NL": "Stabiele rupskraan ontworpen voor zware hijstaken in uitdagend terrein.",
          "pt-PT": "Grua de esteiras estável projetada para tarefas pesadas de elevação em terrenos desafiadores.",
        },
        "key": "vv234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 1000,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "vv234-wx-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "VV234 WX Raupenkran für Stabilität",
          "en": undefined,
          "en-AU": "VV234 WX Crawler Crane for Stability",
          "en-GB": "VV234 WX Crawler Crane for Stability",
          "en-NZ": "VV234 WX Crawler Crane for Stability",
          "en-US": "VV234 WX Crawler Crane for Stability",
          "es-ES": "VV234 WX Grúa sobre orugas para estabilidad",
          "fr": undefined,
          "fr-FR": "VV234 WX Grue sur chenilles pour stabilité",
          "it-IT": "VV234 WX Gru Cingolata per Stabilità",
          "nl-NL": "VV234 WX Rupskraan voor Stabiliteit",
          "pt-PT": "VV234 WX Grua de Esteiras para Estabilidade",
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
          "de-DE": "vv234-wx",
          "en": undefined,
          "en-AU": "vv234-wx",
          "en-GB": "vv234-wx",
          "en-NZ": "vv234-wx",
          "en-US": "vv234-wx",
          "es-ES": "vv234-wx",
          "fr": undefined,
          "fr-FR": "vv234-wx",
          "it-IT": "vv234-wx",
          "nl-NL": "vv234-wx",
          "pt-PT": "vv234-wx",
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
                "value": 1000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "vv234-wx-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 1000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "vv234-wx-green",
          },
        ],
      }
    `);
  });

  it(`should return a vv234Wx preset when built for graphql`, () => {
    const vv234WxPresetGraphql = vv234Wx().buildGraphql<TProductDraft>();
    expect(vv234WxPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Stabiler Raupenkran für anspruchsvolle Hebearbeiten in schwierigem Gelände.",
          },
          {
            "locale": "it-IT",
            "value": "Gru cingolata stabile progettata per compiti di sollevamento pesanti in terreni difficili.",
          },
          {
            "locale": "nl-NL",
            "value": "Stabiele rupskraan ontworpen voor zware hijstaken in uitdagend terrein.",
          },
          {
            "locale": "fr-FR",
            "value": "Grue sur chenilles stable conçue pour des tâches de levage lourdes dans un terrain difficile.",
          },
          {
            "locale": "en-AU",
            "value": "Stable crawler crane designed for heavy lifting tasks in challenging terrain.",
          },
          {
            "locale": "es-ES",
            "value": "Grúa sobre orugas estable diseñada para tareas de elevación pesadas en terrenos desafiantes.",
          },
          {
            "locale": "en-GB",
            "value": "Stable crawler crane designed for heavy lifting tasks in challenging terrain.",
          },
          {
            "locale": "en-NZ",
            "value": "Stable crawler crane designed for heavy lifting tasks in challenging terrain.",
          },
          {
            "locale": "pt-PT",
            "value": "Grua de esteiras estável projetada para tarefas pesadas de elevação em terrenos desafiadores.",
          },
          {
            "locale": "en-US",
            "value": "Stable crawler crane designed for heavy lifting tasks in challenging terrain.",
          },
        ],
        "key": "vv234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "1000",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "vv234-wx-red",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "VV234 WX Raupenkran für Stabilität",
          },
          {
            "locale": "it-IT",
            "value": "VV234 WX Gru Cingolata per Stabilità",
          },
          {
            "locale": "nl-NL",
            "value": "VV234 WX Rupskraan voor Stabiliteit",
          },
          {
            "locale": "fr-FR",
            "value": "VV234 WX Grue sur chenilles pour stabilité",
          },
          {
            "locale": "en-AU",
            "value": "VV234 WX Crawler Crane for Stability",
          },
          {
            "locale": "es-ES",
            "value": "VV234 WX Grúa sobre orugas para estabilidad",
          },
          {
            "locale": "en-GB",
            "value": "VV234 WX Crawler Crane for Stability",
          },
          {
            "locale": "en-NZ",
            "value": "VV234 WX Crawler Crane for Stability",
          },
          {
            "locale": "pt-PT",
            "value": "VV234 WX Grua de Esteiras para Estabilidade",
          },
          {
            "locale": "en-US",
            "value": "VV234 WX Crawler Crane for Stability",
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
            "value": "vv234-wx",
          },
          {
            "locale": "it-IT",
            "value": "vv234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "vv234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "vv234-wx",
          },
          {
            "locale": "en-AU",
            "value": "vv234-wx",
          },
          {
            "locale": "es-ES",
            "value": "vv234-wx",
          },
          {
            "locale": "en-GB",
            "value": "vv234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "vv234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "vv234-wx",
          },
          {
            "locale": "en-US",
            "value": "vv234-wx",
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
                "value": "1000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "vv234-wx-blue",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "1000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/vv234-wx-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "vv234-wx-green",
            "staged": true,
          },
        ],
      }
    `);
  });
});
