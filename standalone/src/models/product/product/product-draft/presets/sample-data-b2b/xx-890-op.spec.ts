import type { TProductDraft } from '../../../types';
import xx890Op from './xx-890-op';

describe(`with xx890Op preset`, () => {
  it(`should return a xx890Op preset`, () => {
    const xx890OpPreset = xx890Op().build<TProductDraft>();
    expect(xx890OpPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Raupenkran mit hoher Kapazität und außergewöhnlichen Stabilitätsmerkmalen für präzise Hebearbeiten.",
          "en": undefined,
          "en-AU": "High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.",
          "en-GB": "High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.",
          "en-NZ": "High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.",
          "en-US": "High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.",
          "es-ES": "Grúa sobre orugas de gran capacidad con características excepcionales de estabilidad para tareas precisas de elevación pesada.",
          "fr": undefined,
          "fr-FR": "Grue sur chenilles à haute capacité avec des caractéristiques de stabilité exceptionnelles pour des tâches de levage lourdes et précises.",
          "it-IT": "Gru cingolata ad alta capacità con caratteristiche eccezionali di stabilità per compiti di sollevamento pesanti e precisi.",
          "nl-NL": "Hoogcapaciteits rupskraan met uitzonderlijke stabiliteitsfuncties voor nauwkeurige zware hijstaken.",
          "pt-PT": "Grua de esteiras de alta capacidade com características excepcionais de estabilidade para tarefas precisas de elevação pesada.",
        },
        "key": "xx890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 1500,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/xx890-op-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "xx890-op-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "XX890 OP Raupenkran für Stabilität",
          "en": undefined,
          "en-AU": "XX890 OP Crawler Crane for Stability",
          "en-GB": "XX890 OP Crawler Crane for Stability",
          "en-NZ": "XX890 OP Crawler Crane for Stability",
          "en-US": "XX890 OP Crawler Crane for Stability",
          "es-ES": "XX890 OP Grúa sobre orugas para estabilidad",
          "fr": undefined,
          "fr-FR": "XX890 OP Grue sur chenilles pour stabilité",
          "it-IT": "XX890 OP Gru Cingolata per Stabilità",
          "nl-NL": "XX890 OP Rupskraan voor Stabiliteit",
          "pt-PT": "XX890 OP Grua de Esteiras para Estabilidade",
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
          "de-DE": "xx890-op",
          "en": undefined,
          "en-AU": "xx890-op",
          "en-GB": "xx890-op",
          "en-NZ": "xx890-op",
          "en-US": "xx890-op",
          "es-ES": "xx890-op",
          "fr": undefined,
          "fr-FR": "xx890-op",
          "it-IT": "xx890-op",
          "nl-NL": "xx890-op",
          "pt-PT": "xx890-op",
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
                "value": 1500,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/xx890-op-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "xx890-op-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 1500,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/xx890-op-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "xx890-op-green",
          },
        ],
      }
    `);
  });

  it(`should return a xx890Op preset when built for graphql`, () => {
    const xx890OpPresetGraphql = xx890Op().buildGraphql<TProductDraft>();
    expect(xx890OpPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "Raupenkran mit hoher Kapazität und außergewöhnlichen Stabilitätsmerkmalen für präzise Hebearbeiten.",
          },
          {
            "locale": "it-IT",
            "value": "Gru cingolata ad alta capacità con caratteristiche eccezionali di stabilità per compiti di sollevamento pesanti e precisi.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits rupskraan met uitzonderlijke stabiliteitsfuncties voor nauwkeurige zware hijstaken.",
          },
          {
            "locale": "fr-FR",
            "value": "Grue sur chenilles à haute capacité avec des caractéristiques de stabilité exceptionnelles pour des tâches de levage lourdes et précises.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.",
          },
          {
            "locale": "es-ES",
            "value": "Grúa sobre orugas de gran capacidad con características excepcionales de estabilidad para tareas precisas de elevación pesada.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.",
          },
          {
            "locale": "pt-PT",
            "value": "Grua de esteiras de alta capacidade com características excepcionais de estabilidade para tarefas precisas de elevação pesada.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity crawler crane with exceptional stability features for precise heavy lifting tasks.",
          },
        ],
        "key": "xx890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "1500",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/xx890-op-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "xx890-op-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "XX890 OP Raupenkran für Stabilität",
          },
          {
            "locale": "it-IT",
            "value": "XX890 OP Gru Cingolata per Stabilità",
          },
          {
            "locale": "nl-NL",
            "value": "XX890 OP Rupskraan voor Stabiliteit",
          },
          {
            "locale": "fr-FR",
            "value": "XX890 OP Grue sur chenilles pour stabilité",
          },
          {
            "locale": "en-AU",
            "value": "XX890 OP Crawler Crane for Stability",
          },
          {
            "locale": "es-ES",
            "value": "XX890 OP Grúa sobre orugas para estabilidad",
          },
          {
            "locale": "en-GB",
            "value": "XX890 OP Crawler Crane for Stability",
          },
          {
            "locale": "en-NZ",
            "value": "XX890 OP Crawler Crane for Stability",
          },
          {
            "locale": "pt-PT",
            "value": "XX890 OP Grua de Esteiras para Estabilidade",
          },
          {
            "locale": "en-US",
            "value": "XX890 OP Crawler Crane for Stability",
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
            "value": "xx890-op",
          },
          {
            "locale": "it-IT",
            "value": "xx890-op",
          },
          {
            "locale": "nl-NL",
            "value": "xx890-op",
          },
          {
            "locale": "fr-FR",
            "value": "xx890-op",
          },
          {
            "locale": "en-AU",
            "value": "xx890-op",
          },
          {
            "locale": "es-ES",
            "value": "xx890-op",
          },
          {
            "locale": "en-GB",
            "value": "xx890-op",
          },
          {
            "locale": "en-NZ",
            "value": "xx890-op",
          },
          {
            "locale": "pt-PT",
            "value": "xx890-op",
          },
          {
            "locale": "en-US",
            "value": "xx890-op",
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
                "value": "1500",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/xx890-op-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "xx890-op-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "1500",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/xx890-op-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "xx890-op-green",
          },
        ],
      }
    `);
  });
});
