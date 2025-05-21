import type { TProductDraft } from '../../../types';
import bb456St from './bb-456-st';

describe(`with bb456St preset`, () => {
  it(`should return a bb456St preset`, () => {
    const bb456StPreset = bb456St().build<TProductDraft>();
    expect(bb456StPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Hochleistungs-Flughafenplanierer für effizientes Nivellieren und Instandhalten von Flugzeuglandebahnen.",
          "en": undefined,
          "en-AU": "High-performance airport grader for efficient grading and maintenance of airport runways.",
          "en-GB": "High-performance airport grader for efficient grading and maintenance of airport runways.",
          "en-NZ": "High-performance airport grader for efficient grading and maintenance of airport runways.",
          "en-US": "High-performance airport grader for efficient grading and maintenance of airport runways.",
          "es-ES": "Niveladora de aeropuerto de alto rendimiento para el nivelado eficiente y el mantenimiento de las pistas de aterrizaje del aeropuerto.",
          "fr": undefined,
          "fr-FR": "Niveleuse aéroportuaire haute performance pour le nivellement efficace et l'entretien des pistes d'aéroport.",
          "it-IT": "Livellatrice ad alte prestazioni per aeroporti per una classificazione efficiente e la manutenzione delle piste aeroportuali.",
          "nl-NL": "Hoogpresterende luchthavennivelleermachine voor efficiënte egalisatie en onderhoud van luchthavenstartbanen.",
          "pt-PT": "Niveladora de alto desempenho para aeroportos para classificação eficiente e manutenção de pistas de aeroporto.",
        },
        "key": "bb456-st",
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
                "key": "wheeled",
                "label": "Wheeled",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "bb456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "BB456 ST Flughafenplanierer",
          "en": undefined,
          "en-AU": "BB456 ST Airport Grader",
          "en-GB": "BB456 ST Airport Grader",
          "en-NZ": "BB456 ST Airport Grader",
          "en-US": "BB456 ST Airport Grader",
          "es-ES": "BB456 ST Niveladora de aeropuerto",
          "fr": undefined,
          "fr-FR": "BB456 ST Niveleuse aéroportuaire",
          "it-IT": "BB456 ST Livellatrice per Aeroporti",
          "nl-NL": "BB456 ST Luchthavennivelleermachine",
          "pt-PT": "BB456 ST Niveladora de Aeroporto",
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
          "de-DE": "bb456-st",
          "en": undefined,
          "en-AU": "bb456-st",
          "en-GB": "bb456-st",
          "en-NZ": "bb456-st",
          "en-US": "bb456-st",
          "es-ES": "bb456-st",
          "fr": undefined,
          "fr-FR": "bb456-st",
          "it-IT": "bb456-st",
          "nl-NL": "bb456-st",
          "pt-PT": "bb456-st",
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
                  "key": "wheeled",
                  "label": "Wheeled",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "bb456-st-2019",
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
                  "key": "wheeled",
                  "label": "Wheeled",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "bb456-st-2023",
          },
        ],
      }
    `);
  });

  it(`should return a bb456St preset when built for graphql`, () => {
    const bb456StPresetGraphql = bb456St().buildGraphql<TProductDraft>();
    expect(bb456StPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "Hochleistungs-Flughafenplanierer für effizientes Nivellieren und Instandhalten von Flugzeuglandebahnen.",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrice ad alte prestazioni per aeroporti per una classificazione efficiente e la manutenzione delle piste aeroportuali.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogpresterende luchthavennivelleermachine voor efficiënte egalisatie en onderhoud van luchthavenstartbanen.",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuse aéroportuaire haute performance pour le nivellement efficace et l'entretien des pistes d'aéroport.",
          },
          {
            "locale": "en-AU",
            "value": "High-performance airport grader for efficient grading and maintenance of airport runways.",
          },
          {
            "locale": "es-ES",
            "value": "Niveladora de aeropuerto de alto rendimiento para el nivelado eficiente y el mantenimiento de las pistas de aterrizaje del aeropuerto.",
          },
          {
            "locale": "en-GB",
            "value": "High-performance airport grader for efficient grading and maintenance of airport runways.",
          },
          {
            "locale": "en-NZ",
            "value": "High-performance airport grader for efficient grading and maintenance of airport runways.",
          },
          {
            "locale": "pt-PT",
            "value": "Niveladora de alto desempenho para aeroportos para classificação eficiente e manutenção de pistas de aeroporto.",
          },
          {
            "locale": "en-US",
            "value": "High-performance airport grader for efficient grading and maintenance of airport runways.",
          },
        ],
        "key": "bb456-st",
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
              "value": "{"key":"wheeled","label":"Wheeled"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "bb456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "BB456 ST Flughafenplanierer",
          },
          {
            "locale": "it-IT",
            "value": "BB456 ST Livellatrice per Aeroporti",
          },
          {
            "locale": "nl-NL",
            "value": "BB456 ST Luchthavennivelleermachine",
          },
          {
            "locale": "fr-FR",
            "value": "BB456 ST Niveleuse aéroportuaire",
          },
          {
            "locale": "en-AU",
            "value": "BB456 ST Airport Grader",
          },
          {
            "locale": "es-ES",
            "value": "BB456 ST Niveladora de aeropuerto",
          },
          {
            "locale": "en-GB",
            "value": "BB456 ST Airport Grader",
          },
          {
            "locale": "en-NZ",
            "value": "BB456 ST Airport Grader",
          },
          {
            "locale": "pt-PT",
            "value": "BB456 ST Niveladora de Aeroporto",
          },
          {
            "locale": "en-US",
            "value": "BB456 ST Airport Grader",
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
            "value": "bb456-st",
          },
          {
            "locale": "it-IT",
            "value": "bb456-st",
          },
          {
            "locale": "nl-NL",
            "value": "bb456-st",
          },
          {
            "locale": "fr-FR",
            "value": "bb456-st",
          },
          {
            "locale": "en-AU",
            "value": "bb456-st",
          },
          {
            "locale": "es-ES",
            "value": "bb456-st",
          },
          {
            "locale": "en-GB",
            "value": "bb456-st",
          },
          {
            "locale": "en-NZ",
            "value": "bb456-st",
          },
          {
            "locale": "pt-PT",
            "value": "bb456-st",
          },
          {
            "locale": "en-US",
            "value": "bb456-st",
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
                "value": "{"key":"wheeled","label":"Wheeled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "bb456-st-2019",
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
                "value": "{"key":"wheeled","label":"Wheeled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/bb456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "bb456-st-2023",
          },
        ],
      }
    `);
  });
});
