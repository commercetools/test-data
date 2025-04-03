import type { TProductDraft } from '../../../types';
import tt456St from './tt-456-st';

describe(`with tt456St preset`, () => {
  it(`should return a tt456St preset`, () => {
    const tt456StPreset = tt456St().build<TProductDraft>();
    expect(tt456StPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Vielseitiger Mobilkran mit fortschrittlichen Funktionen für eine Vielzahl von Hebeanwendungen.",
          "en": undefined,
          "en-AU": "Versatile mobile crane with advanced features for a wide range of lifting applications.",
          "en-GB": "Versatile mobile crane with advanced features for a wide range of lifting applications.",
          "en-NZ": "Versatile mobile crane with advanced features for a wide range of lifting applications.",
          "en-US": "Versatile mobile crane with advanced features for a wide range of lifting applications.",
          "es-ES": "Grúa móvil versátil con características avanzadas para una amplia gama de aplicaciones de elevación.",
          "fr": undefined,
          "fr-FR": "Grue mobile polyvalente avec des fonctionnalités avancées pour une large gamme d'applications de levage.",
          "it-IT": "Gru mobile versatile con caratteristiche avanzate per una vasta gamma di applicazioni di sollevamento.",
          "nl-NL": "Veelzijdige mobiele kraan met geavanceerde functies voor een breed scala aan hijstoepassingen.",
          "pt-PT": "Grua móvel versátil com características avançadas para uma ampla gama de aplicações de elevação.",
        },
        "key": "tt456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 700,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tt456-st-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "tt456-st-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "TT456 ST Mobilkran für Vielseitigkeit",
          "en": undefined,
          "en-AU": "TT456 ST Mobile Crane for Versatility",
          "en-GB": "TT456 ST Mobile Crane for Versatility",
          "en-NZ": "TT456 ST Mobile Crane for Versatility",
          "en-US": "TT456 ST Mobile Crane for Versatility",
          "es-ES": "TT456 ST Grúa móvil para versatilidad",
          "fr": undefined,
          "fr-FR": "TT456 ST Grue mobile pour polyvalence",
          "it-IT": "TT456 ST Gru Mobile per Versatilità",
          "nl-NL": "TT456 ST Mobiele Kraan voor Veelzijdigheid",
          "pt-PT": "TT456 ST Grua Móvel para Versatilidade",
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
          "de-DE": "tt456-st",
          "en": undefined,
          "en-AU": "tt456-st",
          "en-GB": "tt456-st",
          "en-NZ": "tt456-st",
          "en-US": "tt456-st",
          "es-ES": "tt456-st",
          "fr": undefined,
          "fr-FR": "tt456-st",
          "it-IT": "tt456-st",
          "nl-NL": "tt456-st",
          "pt-PT": "tt456-st",
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
                "value": 700,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tt456-st-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "tt456-st-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 700,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tt456-st-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "tt456-st-green",
          },
        ],
      }
    `);
  });

  it(`should return a tt456St preset when built for graphql`, () => {
    const tt456StPresetGraphql = tt456St().buildGraphql<TProductDraft>();
    expect(tt456StPresetGraphql).toMatchInlineSnapshot(`
      {
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
            "value": "Vielseitiger Mobilkran mit fortschrittlichen Funktionen für eine Vielzahl von Hebeanwendungen.",
          },
          {
            "locale": "it-IT",
            "value": "Gru mobile versatile con caratteristiche avanzate per una vasta gamma di applicazioni di sollevamento.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige mobiele kraan met geavanceerde functies voor een breed scala aan hijstoepassingen.",
          },
          {
            "locale": "fr-FR",
            "value": "Grue mobile polyvalente avec des fonctionnalités avancées pour une large gamme d'applications de levage.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile mobile crane with advanced features for a wide range of lifting applications.",
          },
          {
            "locale": "es-ES",
            "value": "Grúa móvil versátil con características avanzadas para una amplia gama de aplicaciones de elevación.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile mobile crane with advanced features for a wide range of lifting applications.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile mobile crane with advanced features for a wide range of lifting applications.",
          },
          {
            "locale": "pt-PT",
            "value": "Grua móvel versátil com características avançadas para uma ampla gama de aplicações de elevação.",
          },
          {
            "locale": "en-US",
            "value": "Versatile mobile crane with advanced features for a wide range of lifting applications.",
          },
        ],
        "key": "tt456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "700",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tt456-st-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "tt456-st-red",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "TT456 ST Mobilkran für Vielseitigkeit",
          },
          {
            "locale": "it-IT",
            "value": "TT456 ST Gru Mobile per Versatilità",
          },
          {
            "locale": "nl-NL",
            "value": "TT456 ST Mobiele Kraan voor Veelzijdigheid",
          },
          {
            "locale": "fr-FR",
            "value": "TT456 ST Grue mobile pour polyvalence",
          },
          {
            "locale": "en-AU",
            "value": "TT456 ST Mobile Crane for Versatility",
          },
          {
            "locale": "es-ES",
            "value": "TT456 ST Grúa móvil para versatilidad",
          },
          {
            "locale": "en-GB",
            "value": "TT456 ST Mobile Crane for Versatility",
          },
          {
            "locale": "en-NZ",
            "value": "TT456 ST Mobile Crane for Versatility",
          },
          {
            "locale": "pt-PT",
            "value": "TT456 ST Grua Móvel para Versatilidade",
          },
          {
            "locale": "en-US",
            "value": "TT456 ST Mobile Crane for Versatility",
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
            "value": "tt456-st",
          },
          {
            "locale": "it-IT",
            "value": "tt456-st",
          },
          {
            "locale": "nl-NL",
            "value": "tt456-st",
          },
          {
            "locale": "fr-FR",
            "value": "tt456-st",
          },
          {
            "locale": "en-AU",
            "value": "tt456-st",
          },
          {
            "locale": "es-ES",
            "value": "tt456-st",
          },
          {
            "locale": "en-GB",
            "value": "tt456-st",
          },
          {
            "locale": "en-NZ",
            "value": "tt456-st",
          },
          {
            "locale": "pt-PT",
            "value": "tt456-st",
          },
          {
            "locale": "en-US",
            "value": "tt456-st",
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
                "value": "700",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tt456-st-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "tt456-st-blue",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "700",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tt456-st-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "tt456-st-green",
            "staged": true,
          },
        ],
      }
    `);
  });
});
