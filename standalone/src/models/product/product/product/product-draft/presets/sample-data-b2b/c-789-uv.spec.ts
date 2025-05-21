import type { TProductDraft } from '../../../types';
import c789Uv from './c-789-uv';

describe(`with c789Uv preset`, () => {
  it(`should return a c789Uv preset`, () => {
    const c789UvPreset = c789Uv().build<TProductDraft>();
    expect(c789UvPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "construction-loaders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Baulader mit hoher Kapazität und fortschrittlichen Funktionen für anspruchsvolle Bauaufgaben.",
          "en": undefined,
          "en-AU": "High-capacity construction loader with advanced features for heavy-duty construction tasks.",
          "en-GB": "High-capacity construction loader with advanced features for heavy-duty construction tasks.",
          "en-NZ": "High-capacity construction loader with advanced features for heavy-duty construction tasks.",
          "en-US": "High-capacity construction loader with advanced features for heavy-duty construction tasks.",
          "es-ES": "Cargador de construcción de alta capacidad con características avanzadas para tareas de construcción pesada.",
          "fr": undefined,
          "fr-FR": "Chargeur de construction haute capacité avec des fonctionnalités avancées pour les tâches de construction intensives.",
          "it-IT": "Caricatore per costruzioni ad alta capacità con caratteristiche avanzate per compiti gravosi di costruzione.",
          "nl-NL": "Hoogcapaciteits bouwlader met geavanceerde functies voor zware bouwtaken.",
          "pt-PT": "Carregadeira de construção de alta capacidade com recursos avançados para tarefas pesadas de construção.",
        },
        "key": "c789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 700,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "c789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "C789 UV Bau-Lader",
          "en": undefined,
          "en-AU": "C789 UV Construction Loader",
          "en-GB": "C789 UV Construction Loader",
          "en-NZ": "C789 UV Construction Loader",
          "en-US": "C789 UV Construction Loader",
          "es-ES": "C789 UV Cargador de construcción",
          "fr": undefined,
          "fr-FR": "C789 UV Chargeur de construction",
          "it-IT": "C789 UV Caricatore per Costruzioni",
          "nl-NL": "C789 UV Bouwlader",
          "pt-PT": "C789 UV Carregadeira de Construção",
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
          "de-DE": "c789-uv",
          "en": undefined,
          "en-AU": "c789-uv",
          "en-GB": "c789-uv",
          "en-NZ": "c789-uv",
          "en-US": "c789-uv",
          "es-ES": "c789-uv",
          "fr": undefined,
          "fr-FR": "c789-uv",
          "it-IT": "c789-uv",
          "nl-NL": "c789-uv",
          "pt-PT": "c789-uv",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "c789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 700,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "c789-uv-2023",
          },
        ],
      }
    `);
  });

  it(`should return a c789Uv preset when built for graphql`, () => {
    const c789UvPresetGraphql = c789Uv().buildGraphql<TProductDraft>();
    expect(c789UvPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "construction-loaders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Baulader mit hoher Kapazität und fortschrittlichen Funktionen für anspruchsvolle Bauaufgaben.",
          },
          {
            "locale": "it-IT",
            "value": "Caricatore per costruzioni ad alta capacità con caratteristiche avanzate per compiti gravosi di costruzione.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits bouwlader met geavanceerde functies voor zware bouwtaken.",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeur de construction haute capacité avec des fonctionnalités avancées pour les tâches de construction intensives.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity construction loader with advanced features for heavy-duty construction tasks.",
          },
          {
            "locale": "es-ES",
            "value": "Cargador de construcción de alta capacidad con características avanzadas para tareas de construcción pesada.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity construction loader with advanced features for heavy-duty construction tasks.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity construction loader with advanced features for heavy-duty construction tasks.",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeira de construção de alta capacidade com recursos avançados para tarefas pesadas de construção.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity construction loader with advanced features for heavy-duty construction tasks.",
          },
        ],
        "key": "c789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "700",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "c789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "C789 UV Bau-Lader",
          },
          {
            "locale": "it-IT",
            "value": "C789 UV Caricatore per Costruzioni",
          },
          {
            "locale": "nl-NL",
            "value": "C789 UV Bouwlader",
          },
          {
            "locale": "fr-FR",
            "value": "C789 UV Chargeur de construction",
          },
          {
            "locale": "en-AU",
            "value": "C789 UV Construction Loader",
          },
          {
            "locale": "es-ES",
            "value": "C789 UV Cargador de construcción",
          },
          {
            "locale": "en-GB",
            "value": "C789 UV Construction Loader",
          },
          {
            "locale": "en-NZ",
            "value": "C789 UV Construction Loader",
          },
          {
            "locale": "pt-PT",
            "value": "C789 UV Carregadeira de Construção",
          },
          {
            "locale": "en-US",
            "value": "C789 UV Construction Loader",
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
            "value": "c789-uv",
          },
          {
            "locale": "it-IT",
            "value": "c789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "c789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "c789-uv",
          },
          {
            "locale": "en-AU",
            "value": "c789-uv",
          },
          {
            "locale": "es-ES",
            "value": "c789-uv",
          },
          {
            "locale": "en-GB",
            "value": "c789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "c789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "c789-uv",
          },
          {
            "locale": "en-US",
            "value": "c789-uv",
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
                "name": "model",
                "value": "2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "c789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "700",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/c789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "c789-uv-2023",
          },
        ],
      }
    `);
  });
});
