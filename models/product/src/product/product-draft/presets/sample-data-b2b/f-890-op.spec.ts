import type { TProductDraft } from '../../../types';
import f890Op from './f-890-op';

describe(`with f890Op preset`, () => {
  it(`should return a f890Op preset`, () => {
    const f890OpPreset = f890Op().build<TProductDraft>();
    expect(f890OpPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Vielseitiger Holzlader mit speziellen Funktionen für eine effiziente Handhabung von Baumstämmen in Forstanwendungen.",
          "en": undefined,
          "en-AU": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          "en-GB": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          "en-NZ": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          "en-UK": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          "en-US": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          "es-ES": "Cargador de troncos versátil con características especializadas para la manipulación eficiente de troncos en aplicaciones forestales.",
          "fr": undefined,
          "fr-FR": "Chargeur de bûches polyvalent avec des fonctionnalités spécialisées pour une manipulation efficace des grumes dans les applications forestières.",
          "it-IT": "Caricatore di tronchi versatile con caratteristiche specializzate per la manipolazione efficiente di tronchi in applicazioni forestali.",
          "nl-NL": "Veelzijdige boomlader met gespecialiseerde functies voor efficiënte boomstamhantering in bosbouwtoepassingen.",
          "pt-PT": "Carregadeira de toras versátil com características especializadas para manuseio eficiente de toras em aplicações florestais.",
        },
        "key": "f890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 600,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "f890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "F890 OP Holzlader",
          "en": undefined,
          "en-AU": "F890 OP Log Loader",
          "en-GB": "F890 OP Log Loader",
          "en-NZ": "F890 OP Log Loader",
          "en-UK": "F890 OP Log Loader",
          "en-US": "F890 OP Log Loader",
          "es-ES": "F890 OP Cargador de troncos",
          "fr": undefined,
          "fr-FR": "F890 OP Chargeur de bûches",
          "it-IT": "F890 OP Caricatore di Tronchi",
          "nl-NL": "F890 OP Boomlader",
          "pt-PT": "F890 OP Carregadeira de Toras",
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
          "de-DE": "f890-op",
          "en": undefined,
          "en-AU": "f890-op",
          "en-GB": "f890-op",
          "en-NZ": "f890-op",
          "en-UK": "f890-op",
          "en-US": "f890-op",
          "es-ES": "f890-op",
          "fr": undefined,
          "fr-FR": "f890-op",
          "it-IT": "f890-op",
          "nl-NL": "f890-op",
          "pt-PT": "f890-op",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "f890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 600,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "f890-op-2023",
          },
        ],
      }
    `);
  });

  it(`should return a f890Op preset when built for graphql`, () => {
    const f890OpPresetGraphql = f890Op().buildGraphql<TProductDraft>();
    expect(f890OpPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Vielseitiger Holzlader mit speziellen Funktionen für eine effiziente Handhabung von Baumstämmen in Forstanwendungen.",
          },
          {
            "locale": "it-IT",
            "value": "Caricatore di tronchi versatile con caratteristiche specializzate per la manipolazione efficiente di tronchi in applicazioni forestali.",
          },
          {
            "locale": "en-UK",
            "value": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige boomlader met gespecialiseerde functies voor efficiënte boomstamhantering in bosbouwtoepassingen.",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeur de bûches polyvalent avec des fonctionnalités spécialisées pour une manipulation efficace des grumes dans les applications forestières.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          },
          {
            "locale": "es-ES",
            "value": "Cargador de troncos versátil con características especializadas para la manipulación eficiente de troncos en aplicaciones forestales.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeira de toras versátil com características especializadas para manuseio eficiente de toras em aplicações florestais.",
          },
          {
            "locale": "en-US",
            "value": "Versatile log loader with specialized features for efficient log handling in forestry applications.",
          },
        ],
        "key": "f890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "600",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "f890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "F890 OP Holzlader",
          },
          {
            "locale": "it-IT",
            "value": "F890 OP Caricatore di Tronchi",
          },
          {
            "locale": "en-UK",
            "value": "F890 OP Log Loader",
          },
          {
            "locale": "nl-NL",
            "value": "F890 OP Boomlader",
          },
          {
            "locale": "fr-FR",
            "value": "F890 OP Chargeur de bûches",
          },
          {
            "locale": "en-AU",
            "value": "F890 OP Log Loader",
          },
          {
            "locale": "es-ES",
            "value": "F890 OP Cargador de troncos",
          },
          {
            "locale": "en-GB",
            "value": "F890 OP Log Loader",
          },
          {
            "locale": "en-NZ",
            "value": "F890 OP Log Loader",
          },
          {
            "locale": "pt-PT",
            "value": "F890 OP Carregadeira de Toras",
          },
          {
            "locale": "en-US",
            "value": "F890 OP Log Loader",
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
            "value": "f890-op",
          },
          {
            "locale": "it-IT",
            "value": "f890-op",
          },
          {
            "locale": "en-UK",
            "value": "f890-op",
          },
          {
            "locale": "nl-NL",
            "value": "f890-op",
          },
          {
            "locale": "fr-FR",
            "value": "f890-op",
          },
          {
            "locale": "en-AU",
            "value": "f890-op",
          },
          {
            "locale": "es-ES",
            "value": "f890-op",
          },
          {
            "locale": "en-GB",
            "value": "f890-op",
          },
          {
            "locale": "en-NZ",
            "value": "f890-op",
          },
          {
            "locale": "pt-PT",
            "value": "f890-op",
          },
          {
            "locale": "en-US",
            "value": "f890-op",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "f890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "600",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/f890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "f890-op-2023",
          },
        ],
      }
    `);
  });
});
