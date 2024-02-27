import type { TProductDraft } from '../../../types';
import cc789Uv from './cc-789-uv';

describe(`with cc789Uv preset`, () => {
  it(`should return a cc789Uv preset`, () => {
    const cc789UvPreset = cc789Uv().build<TProductDraft>();
    expect(cc789UvPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "airport-graders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Fortgeschrittener Flughafenplanierer mit speziellen Funktionen für präzises Nivellieren von Start- und Landebahnen.",
          "en": undefined,
          "en-AU": "Advanced airport grader with specialized features for precise runway grading.",
          "en-GB": "Advanced airport grader with specialized features for precise runway grading.",
          "en-NZ": "Advanced airport grader with specialized features for precise runway grading.",
          "en-UK": "Advanced airport grader with specialized features for precise runway grading.",
          "en-US": "Advanced airport grader with specialized features for precise runway grading.",
          "es-ES": "Niveladora de aeropuerto avanzada con características especializadas para el nivelado preciso de pistas.",
          "fr": undefined,
          "fr-FR": "Niveleuse aéroportuaire avancée avec des fonctionnalités spécialisées pour un nivellement précis des pistes.",
          "it-IT": "Livellatrice avanzata per aeroporti con caratteristiche specializzate per la classificazione precisa delle piste.",
          "nl-NL": "Geavanceerde luchthavennivelleermachine met gespecialiseerde functies voor precieze baanegalisatie.",
          "pt-PT": "Niveladora avançada de aeroporto com recursos especializados para classificação precisa de pistas.",
        },
        "key": "cc789-uv",
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
                "key": "tracked",
                "label": "Tracked",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 1024,
                "w": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "cc789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "CC789 UV Flughafenplanierer",
          "en": undefined,
          "en-AU": "CC789 UV Airport Grader",
          "en-GB": "CC789 UV Airport Grader",
          "en-NZ": "CC789 UV Airport Grader",
          "en-UK": "CC789 UV Airport Grader",
          "en-US": "CC789 UV Airport Grader",
          "es-ES": "CC789 UV Niveladora de aeropuerto",
          "fr": undefined,
          "fr-FR": "CC789 UV Niveleuse aéroportuaire",
          "it-IT": "CC789 UV Livellatrice per Aeroporti",
          "nl-NL": "CC789 UV Luchthavennivelleermachine",
          "pt-PT": "CC789 UV Niveladora de Aeroporto",
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
          "de-DE": "cc789-uv",
          "en": undefined,
          "en-AU": "cc789-uv",
          "en-GB": "cc789-uv",
          "en-NZ": "cc789-uv",
          "en-UK": "cc789-uv",
          "en-US": "cc789-uv",
          "es-ES": "cc789-uv",
          "fr": undefined,
          "fr-FR": "cc789-uv",
          "it-IT": "cc789-uv",
          "nl-NL": "cc789-uv",
          "pt-PT": "cc789-uv",
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
                  "key": "tracked",
                  "label": "Tracked",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 1024,
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "cc789-uv-2019",
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
                  "key": "tracked",
                  "label": "Tracked",
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 1024,
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "cc789-uv-2023",
          },
        ],
      }
    `);
  });

  it(`should return a cc789Uv preset when built for graphql`, () => {
    const cc789UvPresetGraphql = cc789Uv().buildGraphql<TProductDraft>();
    expect(cc789UvPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "airport-graders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Fortgeschrittener Flughafenplanierer mit speziellen Funktionen für präzises Nivellieren von Start- und Landebahnen.",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrice avanzata per aeroporti con caratteristiche specializzate per la classificazione precisa delle piste.",
          },
          {
            "locale": "en-UK",
            "value": "Advanced airport grader with specialized features for precise runway grading.",
          },
          {
            "locale": "nl-NL",
            "value": "Geavanceerde luchthavennivelleermachine met gespecialiseerde functies voor precieze baanegalisatie.",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuse aéroportuaire avancée avec des fonctionnalités spécialisées pour un nivellement précis des pistes.",
          },
          {
            "locale": "en-AU",
            "value": "Advanced airport grader with specialized features for precise runway grading.",
          },
          {
            "locale": "es-ES",
            "value": "Niveladora de aeropuerto avanzada con características especializadas para el nivelado preciso de pistas.",
          },
          {
            "locale": "en-GB",
            "value": "Advanced airport grader with specialized features for precise runway grading.",
          },
          {
            "locale": "en-NZ",
            "value": "Advanced airport grader with specialized features for precise runway grading.",
          },
          {
            "locale": "pt-PT",
            "value": "Niveladora avançada de aeroporto com recursos especializados para classificação precisa de pistas.",
          },
          {
            "locale": "en-US",
            "value": "Advanced airport grader with specialized features for precise runway grading.",
          },
        ],
        "key": "cc789-uv",
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
              "value": "{"key":"tracked","label":"Tracked"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "cc789-uv-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "CC789 UV Flughafenplanierer",
          },
          {
            "locale": "it-IT",
            "value": "CC789 UV Livellatrice per Aeroporti",
          },
          {
            "locale": "en-UK",
            "value": "CC789 UV Airport Grader",
          },
          {
            "locale": "nl-NL",
            "value": "CC789 UV Luchthavennivelleermachine",
          },
          {
            "locale": "fr-FR",
            "value": "CC789 UV Niveleuse aéroportuaire",
          },
          {
            "locale": "en-AU",
            "value": "CC789 UV Airport Grader",
          },
          {
            "locale": "es-ES",
            "value": "CC789 UV Niveladora de aeropuerto",
          },
          {
            "locale": "en-GB",
            "value": "CC789 UV Airport Grader",
          },
          {
            "locale": "en-NZ",
            "value": "CC789 UV Airport Grader",
          },
          {
            "locale": "pt-PT",
            "value": "CC789 UV Niveladora de Aeroporto",
          },
          {
            "locale": "en-US",
            "value": "CC789 UV Airport Grader",
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
            "value": "cc789-uv",
          },
          {
            "locale": "it-IT",
            "value": "cc789-uv",
          },
          {
            "locale": "en-UK",
            "value": "cc789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "cc789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "cc789-uv",
          },
          {
            "locale": "en-AU",
            "value": "cc789-uv",
          },
          {
            "locale": "es-ES",
            "value": "cc789-uv",
          },
          {
            "locale": "en-GB",
            "value": "cc789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "cc789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "cc789-uv",
          },
          {
            "locale": "en-US",
            "value": "cc789-uv",
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
                "value": "{"key":"tracked","label":"Tracked"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "cc789-uv-2019",
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
                "value": "{"key":"tracked","label":"Tracked"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/cc789-uv-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "cc789-uv-2023",
          },
        ],
      }
    `);
  });
});
