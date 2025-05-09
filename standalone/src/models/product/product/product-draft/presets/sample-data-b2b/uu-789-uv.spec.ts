import type { TProductDraft } from '../../../types';
import uu789Uv from './uu-789-uv';

describe(`with uu789Uv preset`, () => {
  it(`should return a uu789Uv preset`, () => {
    const uu789UvPreset = uu789Uv().build<TProductDraft>();
    expect(uu789UvPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "mobile-cranes",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Kompakter Mobilkran, geeignet für eine Vielzahl von Hebearbeiten mit einfacher Mobilität.",
          "en": undefined,
          "en-AU": "Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.",
          "en-GB": "Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.",
          "en-NZ": "Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.",
          "en-US": "Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.",
          "es-ES": "Grúa móvil compacta adecuada para una variedad de tareas de elevación con facilidad de movilidad.",
          "fr": undefined,
          "fr-FR": "Grue mobile compacte adaptée à diverses tâches de levage avec une grande facilité de mobilité.",
          "it-IT": "Gru mobile compatta adatta per una varietà di compiti di sollevamento con facilità di mobilità.",
          "nl-NL": "Compacte mobiele kraan geschikt voor diverse hijstaken met gemak van mobiliteit.",
          "pt-PT": "Grua móvel compacta adequada para uma variedade de tarefas de elevação com facilidade de mobilidade.",
        },
        "key": "uu789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 600,
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
                "key": "wheeled",
                "label": "Wheeled",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "uu789-uv-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "UU789 UV Mobilkran für Vielseitigkeit",
          "en": undefined,
          "en-AU": "UU789 UV Mobile Crane for Versatility",
          "en-GB": "UU789 UV Mobile Crane for Versatility",
          "en-NZ": "UU789 UV Mobile Crane for Versatility",
          "en-US": "UU789 UV Mobile Crane for Versatility",
          "es-ES": "UU789 UV Grúa móvil para versatilidad",
          "fr": undefined,
          "fr-FR": "UU789 UV Grue mobile pour polyvalence",
          "it-IT": "UU789 UV Gru Mobile per Versatilità",
          "nl-NL": "UU789 UV Mobiele Kraan voor Veelzijdigheid",
          "pt-PT": "UU789 UV Grua Móvel para Versatilidade",
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
          "de-DE": "uu789-uv",
          "en": undefined,
          "en-AU": "uu789-uv",
          "en-GB": "uu789-uv",
          "en-NZ": "uu789-uv",
          "en-US": "uu789-uv",
          "es-ES": "uu789-uv",
          "fr": undefined,
          "fr-FR": "uu789-uv",
          "it-IT": "uu789-uv",
          "nl-NL": "uu789-uv",
          "pt-PT": "uu789-uv",
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
                "value": 600,
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
                  "key": "wheeled",
                  "label": "Wheeled",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "uu789-uv-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 600,
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
                  "key": "wheeled",
                  "label": "Wheeled",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "uu789-uv-green",
          },
        ],
      }
    `);
  });

  it(`should return a uu789Uv preset when built for graphql`, () => {
    const uu789UvPresetGraphql = uu789Uv().buildGraphql<TProductDraft>();
    expect(uu789UvPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "mobile-cranes",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Kompakter Mobilkran, geeignet für eine Vielzahl von Hebearbeiten mit einfacher Mobilität.",
          },
          {
            "locale": "it-IT",
            "value": "Gru mobile compatta adatta per una varietà di compiti di sollevamento con facilità di mobilità.",
          },
          {
            "locale": "nl-NL",
            "value": "Compacte mobiele kraan geschikt voor diverse hijstaken met gemak van mobiliteit.",
          },
          {
            "locale": "fr-FR",
            "value": "Grue mobile compacte adaptée à diverses tâches de levage avec une grande facilité de mobilité.",
          },
          {
            "locale": "en-AU",
            "value": "Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.",
          },
          {
            "locale": "es-ES",
            "value": "Grúa móvil compacta adecuada para una variedad de tareas de elevación con facilidad de movilidad.",
          },
          {
            "locale": "en-GB",
            "value": "Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.",
          },
          {
            "locale": "en-NZ",
            "value": "Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.",
          },
          {
            "locale": "pt-PT",
            "value": "Grua móvel compacta adequada para uma variedade de tarefas de elevação com facilidade de mobilidade.",
          },
          {
            "locale": "en-US",
            "value": "Compact mobile crane suitable for a variety of lifting tasks with ease of mobility.",
          },
        ],
        "key": "uu789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "600",
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
              "value": "{"key":"wheeled","label":"Wheeled"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "uu789-uv-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "UU789 UV Mobilkran für Vielseitigkeit",
          },
          {
            "locale": "it-IT",
            "value": "UU789 UV Gru Mobile per Versatilità",
          },
          {
            "locale": "nl-NL",
            "value": "UU789 UV Mobiele Kraan voor Veelzijdigheid",
          },
          {
            "locale": "fr-FR",
            "value": "UU789 UV Grue mobile pour polyvalence",
          },
          {
            "locale": "en-AU",
            "value": "UU789 UV Mobile Crane for Versatility",
          },
          {
            "locale": "es-ES",
            "value": "UU789 UV Grúa móvil para versatilidad",
          },
          {
            "locale": "en-GB",
            "value": "UU789 UV Mobile Crane for Versatility",
          },
          {
            "locale": "en-NZ",
            "value": "UU789 UV Mobile Crane for Versatility",
          },
          {
            "locale": "pt-PT",
            "value": "UU789 UV Grua Móvel para Versatilidade",
          },
          {
            "locale": "en-US",
            "value": "UU789 UV Mobile Crane for Versatility",
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
            "value": "uu789-uv",
          },
          {
            "locale": "it-IT",
            "value": "uu789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "uu789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "uu789-uv",
          },
          {
            "locale": "en-AU",
            "value": "uu789-uv",
          },
          {
            "locale": "es-ES",
            "value": "uu789-uv",
          },
          {
            "locale": "en-GB",
            "value": "uu789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "uu789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "uu789-uv",
          },
          {
            "locale": "en-US",
            "value": "uu789-uv",
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
                "value": "600",
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
                "value": "{"key":"wheeled","label":"Wheeled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "uu789-uv-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "600",
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
                "value": "{"key":"wheeled","label":"Wheeled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/uu789-uv-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "uu789-uv-green",
          },
        ],
      }
    `);
  });
});
