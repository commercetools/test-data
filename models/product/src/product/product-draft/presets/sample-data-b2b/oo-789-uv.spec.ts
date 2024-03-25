import type { TProductDraft } from '../../../types';
import oo789Uv from './oo-789-uv';

describe(`with oo789Uv preset`, () => {
  it(`should return a oo789Uv preset`, () => {
    const oo789UvPreset = oo789Uv().build<TProductDraft>();
    expect(oo789UvPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "wheeled-excavators-for-mining",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Fortgeschrittener Radbagger mit speziellen Funktionen für Präzision in Bergbauoperationen.",
          "en": undefined,
          "en-AU": "Advanced wheeled excavator with specialized features for precision in mining operations.",
          "en-GB": "Advanced wheeled excavator with specialized features for precision in mining operations.",
          "en-NZ": "Advanced wheeled excavator with specialized features for precision in mining operations.",
          "en-US": "Advanced wheeled excavator with specialized features for precision in mining operations.",
          "es-ES": "Excavadora de ruedas avanzada con características especializadas para la precisión en operaciones mineras.",
          "fr": undefined,
          "fr-FR": "Excavatrice sur roues avancée avec des fonctionnalités spécialisées pour la précision dans les opérations minières.",
          "it-IT": "Escavatore avanzato su ruote con caratteristiche specializzate per precisione nelle operazioni minerarie.",
          "nl-NL": "Geavanceerde wiellader met gespecialiseerde functies voor precisie in mijnbouwoperaties.",
          "pt-PT": "Escavadeira com rodas avançada com recursos especializados para precisão em operações de mineração.",
        },
        "key": "oo789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 800,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "oo789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "OO789 UV Radbagger für Bergbau",
          "en": undefined,
          "en-AU": "OO789 UV Wheeled Excavator for Mining",
          "en-GB": "OO789 UV Wheeled Excavator for Mining",
          "en-NZ": "OO789 UV Wheeled Excavator for Mining",
          "en-US": "OO789 UV Wheeled Excavator for Mining",
          "es-ES": "OO789 UV Excavadora de ruedas para minería",
          "fr": undefined,
          "fr-FR": "OO789 UV Excavatrice sur roues pour l'exploitation minière",
          "it-IT": "OO789 UV Escavatore su Ruote per Miniere",
          "nl-NL": "OO789 UV Wiellader voor Mijnbouw",
          "pt-PT": "OO789 UV Escavadeira com Rodas para Mineração",
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
          "de-DE": "oo789-uv",
          "en": undefined,
          "en-AU": "oo789-uv",
          "en-GB": "oo789-uv",
          "en-NZ": "oo789-uv",
          "en-US": "oo789-uv",
          "es-ES": "oo789-uv",
          "fr": undefined,
          "fr-FR": "oo789-uv",
          "it-IT": "oo789-uv",
          "nl-NL": "oo789-uv",
          "pt-PT": "oo789-uv",
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
                "value": 800,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "oo789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 800,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "oo789-uv-2023",
          },
        ],
      }
    `);
  });

  it(`should return a oo789Uv preset when built for graphql`, () => {
    const oo789UvPresetGraphql = oo789Uv().buildGraphql<TProductDraft>();
    expect(oo789UvPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "wheeled-excavators-for-mining",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Fortgeschrittener Radbagger mit speziellen Funktionen für Präzision in Bergbauoperationen.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore avanzato su ruote con caratteristiche specializzate per precisione nelle operazioni minerarie.",
          },
          {
            "locale": "nl-NL",
            "value": "Geavanceerde wiellader met gespecialiseerde functies voor precisie in mijnbouwoperaties.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrice sur roues avancée avec des fonctionnalités spécialisées pour la précision dans les opérations minières.",
          },
          {
            "locale": "en-AU",
            "value": "Advanced wheeled excavator with specialized features for precision in mining operations.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora de ruedas avanzada con características especializadas para la precisión en operaciones mineras.",
          },
          {
            "locale": "en-GB",
            "value": "Advanced wheeled excavator with specialized features for precision in mining operations.",
          },
          {
            "locale": "en-NZ",
            "value": "Advanced wheeled excavator with specialized features for precision in mining operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira com rodas avançada com recursos especializados para precisão em operações de mineração.",
          },
          {
            "locale": "en-US",
            "value": "Advanced wheeled excavator with specialized features for precision in mining operations.",
          },
        ],
        "key": "oo789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "800",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "oo789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "OO789 UV Radbagger für Bergbau",
          },
          {
            "locale": "it-IT",
            "value": "OO789 UV Escavatore su Ruote per Miniere",
          },
          {
            "locale": "nl-NL",
            "value": "OO789 UV Wiellader voor Mijnbouw",
          },
          {
            "locale": "fr-FR",
            "value": "OO789 UV Excavatrice sur roues pour l'exploitation minière",
          },
          {
            "locale": "en-AU",
            "value": "OO789 UV Wheeled Excavator for Mining",
          },
          {
            "locale": "es-ES",
            "value": "OO789 UV Excavadora de ruedas para minería",
          },
          {
            "locale": "en-GB",
            "value": "OO789 UV Wheeled Excavator for Mining",
          },
          {
            "locale": "en-NZ",
            "value": "OO789 UV Wheeled Excavator for Mining",
          },
          {
            "locale": "pt-PT",
            "value": "OO789 UV Escavadeira com Rodas para Mineração",
          },
          {
            "locale": "en-US",
            "value": "OO789 UV Wheeled Excavator for Mining",
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
            "value": "oo789-uv",
          },
          {
            "locale": "it-IT",
            "value": "oo789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "oo789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "oo789-uv",
          },
          {
            "locale": "en-AU",
            "value": "oo789-uv",
          },
          {
            "locale": "es-ES",
            "value": "oo789-uv",
          },
          {
            "locale": "en-GB",
            "value": "oo789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "oo789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "oo789-uv",
          },
          {
            "locale": "en-US",
            "value": "oo789-uv",
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
                "value": "800",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "oo789-uv-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "800",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/oo789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "oo789-uv-2023",
          },
        ],
      }
    `);
  });
});
