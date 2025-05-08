import type { TProductDraft } from '../../../types';
import nn456St from './nn-456-st';

describe(`with nn456St preset`, () => {
  it(`should return a nn456St preset`, () => {
    const nn456StPreset = nn456St().build<TProductDraft>();
    expect(nn456StPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Radbagger mit hoher Kapazität und speziellen Funktionen für effiziente Bergbauoperationen.",
          "en": undefined,
          "en-AU": "High-capacity wheeled excavator with specialized features for efficient mining operations.",
          "en-GB": "High-capacity wheeled excavator with specialized features for efficient mining operations.",
          "en-NZ": "High-capacity wheeled excavator with specialized features for efficient mining operations.",
          "en-US": "High-capacity wheeled excavator with specialized features for efficient mining operations.",
          "es-ES": "Excavadora de ruedas de alta capacidad con características especializadas para operaciones mineras eficientes.",
          "fr": undefined,
          "fr-FR": "Excavatrice sur roues haute capacité avec des fonctionnalités spécialisées pour des opérations minières efficaces.",
          "it-IT": "Escavatore su ruote ad alta capacità con caratteristiche specializzate per operazioni di estrazione efficienti.",
          "nl-NL": "Hoogcapaciteits wiellader met gespecialiseerde functies voor efficiënte mijnbouwoperaties.",
          "pt-PT": "Escavadeira com rodas de alta capacidade com recursos especializados para operações eficientes de mineração.",
        },
        "key": "nn456-st",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "nn456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "NN456 ST Radbagger für Bergbau",
          "en": undefined,
          "en-AU": "NN456 ST Wheeled Excavator for Mining",
          "en-GB": "NN456 ST Wheeled Excavator for Mining",
          "en-NZ": "NN456 ST Wheeled Excavator for Mining",
          "en-US": "NN456 ST Wheeled Excavator for Mining",
          "es-ES": "NN456 ST Excavadora de ruedas para minería",
          "fr": undefined,
          "fr-FR": "NN456 ST Excavatrice sur roues pour l'exploitation minière",
          "it-IT": "NN456 ST Escavatore su Ruote per Miniere",
          "nl-NL": "NN456 ST Wiellader voor Mijnbouw",
          "pt-PT": "NN456 ST Escavadeira com Rodas para Mineração",
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
          "de-DE": "nn456-st",
          "en": undefined,
          "en-AU": "nn456-st",
          "en-GB": "nn456-st",
          "en-NZ": "nn456-st",
          "en-US": "nn456-st",
          "es-ES": "nn456-st",
          "fr": undefined,
          "fr-FR": "nn456-st",
          "it-IT": "nn456-st",
          "nl-NL": "nn456-st",
          "pt-PT": "nn456-st",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "nn456-st-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "nn456-st-2023",
          },
        ],
      }
    `);
  });

  it(`should return a nn456St preset when built for graphql`, () => {
    const nn456StPresetGraphql = nn456St().buildGraphql<TProductDraft>();
    expect(nn456StPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "Radbagger mit hoher Kapazität und speziellen Funktionen für effiziente Bergbauoperationen.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore su ruote ad alta capacità con caratteristiche specializzate per operazioni di estrazione efficienti.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits wiellader met gespecialiseerde functies voor efficiënte mijnbouwoperaties.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrice sur roues haute capacité avec des fonctionnalités spécialisées pour des opérations minières efficaces.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity wheeled excavator with specialized features for efficient mining operations.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora de ruedas de alta capacidad con características especializadas para operaciones mineras eficientes.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity wheeled excavator with specialized features for efficient mining operations.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity wheeled excavator with specialized features for efficient mining operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira com rodas de alta capacidade com recursos especializados para operações eficientes de mineração.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity wheeled excavator with specialized features for efficient mining operations.",
          },
        ],
        "key": "nn456-st",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "nn456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "NN456 ST Radbagger für Bergbau",
          },
          {
            "locale": "it-IT",
            "value": "NN456 ST Escavatore su Ruote per Miniere",
          },
          {
            "locale": "nl-NL",
            "value": "NN456 ST Wiellader voor Mijnbouw",
          },
          {
            "locale": "fr-FR",
            "value": "NN456 ST Excavatrice sur roues pour l'exploitation minière",
          },
          {
            "locale": "en-AU",
            "value": "NN456 ST Wheeled Excavator for Mining",
          },
          {
            "locale": "es-ES",
            "value": "NN456 ST Excavadora de ruedas para minería",
          },
          {
            "locale": "en-GB",
            "value": "NN456 ST Wheeled Excavator for Mining",
          },
          {
            "locale": "en-NZ",
            "value": "NN456 ST Wheeled Excavator for Mining",
          },
          {
            "locale": "pt-PT",
            "value": "NN456 ST Escavadeira com Rodas para Mineração",
          },
          {
            "locale": "en-US",
            "value": "NN456 ST Wheeled Excavator for Mining",
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
            "value": "nn456-st",
          },
          {
            "locale": "it-IT",
            "value": "nn456-st",
          },
          {
            "locale": "nl-NL",
            "value": "nn456-st",
          },
          {
            "locale": "fr-FR",
            "value": "nn456-st",
          },
          {
            "locale": "en-AU",
            "value": "nn456-st",
          },
          {
            "locale": "es-ES",
            "value": "nn456-st",
          },
          {
            "locale": "en-GB",
            "value": "nn456-st",
          },
          {
            "locale": "en-NZ",
            "value": "nn456-st",
          },
          {
            "locale": "pt-PT",
            "value": "nn456-st",
          },
          {
            "locale": "en-US",
            "value": "nn456-st",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "nn456-st-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/nn456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "nn456-st-2023",
          },
        ],
      }
    `);
  });
});
