import type { TProductDraft } from '../../../types';
import ff890Op from './ff-890-op';

describe(`with ff890Op preset`, () => {
  it(`should return a ff890Op preset`, () => {
    const ff890OpPreset = ff890Op().build<TProductDraft>();
    expect(ff890OpPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "fine-graders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Feinplanierer mit speziellen Funktionen für präzises Nivellieren von Oberflächen.",
          "en": undefined,
          "en-AU": "Versatile fine grader with specialized features for precise surface grading.",
          "en-GB": "Versatile fine grader with specialized features for precise surface grading.",
          "en-NZ": "Versatile fine grader with specialized features for precise surface grading.",
          "en-UK": "Versatile fine grader with specialized features for precise surface grading.",
          "en-US": "Versatile fine grader with specialized features for precise surface grading.",
          "es-ES": "Niveladora fina versátil con características especializadas para la nivelación precisa de superficies.",
          "fr": undefined,
          "fr-FR": "Niveleuse fine polyvalente avec des fonctionnalités spécialisées pour un nivellement précis des surfaces.",
          "it-IT": "Livellatrice fine versatile con caratteristiche specializzate per la graduazione precisa delle superfici.",
          "nl-NL": "Veelzijdige fijnnivelleermachine met gespecialiseerde functies voor precieze oppervlakte egalisatie.",
          "pt-PT": "Niveladora fina versátil com recursos especializados para graduação precisa de superfícies.",
        },
        "key": "ff890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 550,
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
                "w": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ff890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "FF890 OP Feinplanierer",
          "en": undefined,
          "en-AU": "FF890 OP Fine Grader",
          "en-GB": "FF890 OP Fine Grader",
          "en-NZ": "FF890 OP Fine Grader",
          "en-UK": "FF890 OP Fine Grader",
          "en-US": "FF890 OP Fine Grader",
          "es-ES": "FF890 OP Niveladora fina",
          "fr": undefined,
          "fr-FR": "FF890 OP Niveleuse fine",
          "it-IT": "FF890 OP Livellatrice Fine",
          "nl-NL": "FF890 OP Fijnnivelleermachine",
          "pt-PT": "FF890 OP Niveladora Fina",
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
          "de-DE": "ff890-op",
          "en": undefined,
          "en-AU": "ff890-op",
          "en-GB": "ff890-op",
          "en-NZ": "ff890-op",
          "en-UK": "ff890-op",
          "en-US": "ff890-op",
          "es-ES": "ff890-op",
          "fr": undefined,
          "fr-FR": "ff890-op",
          "it-IT": "ff890-op",
          "nl-NL": "ff890-op",
          "pt-PT": "ff890-op",
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
                "value": 550,
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
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ff890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 550,
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
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ff890-op-2023",
          },
        ],
      }
    `);
  });

  it(`should return a ff890Op preset when built for graphql`, () => {
    const ff890OpPresetGraphql = ff890Op().buildGraphql<TProductDraft>();
    expect(ff890OpPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "fine-graders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Feinplanierer mit speziellen Funktionen für präzises Nivellieren von Oberflächen.",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrice fine versatile con caratteristiche specializzate per la graduazione precisa delle superfici.",
          },
          {
            "locale": "en-UK",
            "value": "Versatile fine grader with specialized features for precise surface grading.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige fijnnivelleermachine met gespecialiseerde functies voor precieze oppervlakte egalisatie.",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuse fine polyvalente avec des fonctionnalités spécialisées pour un nivellement précis des surfaces.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile fine grader with specialized features for precise surface grading.",
          },
          {
            "locale": "es-ES",
            "value": "Niveladora fina versátil con características especializadas para la nivelación precisa de superficies.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile fine grader with specialized features for precise surface grading.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile fine grader with specialized features for precise surface grading.",
          },
          {
            "locale": "pt-PT",
            "value": "Niveladora fina versátil com recursos especializados para graduação precisa de superfícies.",
          },
          {
            "locale": "en-US",
            "value": "Versatile fine grader with specialized features for precise surface grading.",
          },
        ],
        "key": "ff890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "550",
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
                "width": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ff890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "FF890 OP Feinplanierer",
          },
          {
            "locale": "it-IT",
            "value": "FF890 OP Livellatrice Fine",
          },
          {
            "locale": "en-UK",
            "value": "FF890 OP Fine Grader",
          },
          {
            "locale": "nl-NL",
            "value": "FF890 OP Fijnnivelleermachine",
          },
          {
            "locale": "fr-FR",
            "value": "FF890 OP Niveleuse fine",
          },
          {
            "locale": "en-AU",
            "value": "FF890 OP Fine Grader",
          },
          {
            "locale": "es-ES",
            "value": "FF890 OP Niveladora fina",
          },
          {
            "locale": "en-GB",
            "value": "FF890 OP Fine Grader",
          },
          {
            "locale": "en-NZ",
            "value": "FF890 OP Fine Grader",
          },
          {
            "locale": "pt-PT",
            "value": "FF890 OP Niveladora Fina",
          },
          {
            "locale": "en-US",
            "value": "FF890 OP Fine Grader",
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
            "value": "ff890-op",
          },
          {
            "locale": "it-IT",
            "value": "ff890-op",
          },
          {
            "locale": "en-UK",
            "value": "ff890-op",
          },
          {
            "locale": "nl-NL",
            "value": "ff890-op",
          },
          {
            "locale": "fr-FR",
            "value": "ff890-op",
          },
          {
            "locale": "en-AU",
            "value": "ff890-op",
          },
          {
            "locale": "es-ES",
            "value": "ff890-op",
          },
          {
            "locale": "en-GB",
            "value": "ff890-op",
          },
          {
            "locale": "en-NZ",
            "value": "ff890-op",
          },
          {
            "locale": "pt-PT",
            "value": "ff890-op",
          },
          {
            "locale": "en-US",
            "value": "ff890-op",
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
                "value": "550",
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
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ff890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "550",
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
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ff890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ff890-op-2023",
          },
        ],
      }
    `);
  });
});
