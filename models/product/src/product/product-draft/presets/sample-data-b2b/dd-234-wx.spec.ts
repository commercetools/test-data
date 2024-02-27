import type { TProductDraft } from '../../../types';
import dd234Wx from './dd-234-wx';

describe(`with dd234Wx preset`, () => {
  it(`should return a dd234Wx preset`, () => {
    const dd234WxPreset = dd234Wx().build<TProductDraft>();
    expect(dd234WxPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Präziser Feinplanierer für sorgfältiges Finish und Nivellierung von Oberflächen.",
          "en": undefined,
          "en-AU": "Precision fine grader for meticulous finishing and grading of surfaces.",
          "en-GB": "Precision fine grader for meticulous finishing and grading of surfaces.",
          "en-NZ": "Precision fine grader for meticulous finishing and grading of surfaces.",
          "en-UK": "Precision fine grader for meticulous finishing and grading of surfaces.",
          "en-US": "Precision fine grader for meticulous finishing and grading of surfaces.",
          "es-ES": "Niveladora fina de precisión para un acabado meticuloso y la nivelación de superficies.",
          "fr": undefined,
          "fr-FR": "Niveleuse fine de précision pour une finition méticuleuse et le nivellement des surfaces.",
          "it-IT": "Livellatrice fine di precisione per finiture meticolose e graduazione di superfici.",
          "nl-NL": "Precisie fijnnivelleermachine voor nauwkeurige afwerking en egalisatie van oppervlakken.",
          "pt-PT": "Niveladora fina de precisão para acabamento meticuloso e graduação de superfícies.",
        },
        "key": "dd234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 450,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "dd234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "DD234 WX Feinplanierer",
          "en": undefined,
          "en-AU": "DD234 WX Fine Grader",
          "en-GB": "DD234 WX Fine Grader",
          "en-NZ": "DD234 WX Fine Grader",
          "en-UK": "DD234 WX Fine Grader",
          "en-US": "DD234 WX Fine Grader",
          "es-ES": "DD234 WX Niveladora fina",
          "fr": undefined,
          "fr-FR": "DD234 WX Niveleuse fine",
          "it-IT": "DD234 WX Livellatrice Fine",
          "nl-NL": "DD234 WX Fijnnivelleermachine",
          "pt-PT": "DD234 WX Niveladora Fina",
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
          "de-DE": "dd234-wx",
          "en": undefined,
          "en-AU": "dd234-wx",
          "en-GB": "dd234-wx",
          "en-NZ": "dd234-wx",
          "en-UK": "dd234-wx",
          "en-US": "dd234-wx",
          "es-ES": "dd234-wx",
          "fr": undefined,
          "fr-FR": "dd234-wx",
          "it-IT": "dd234-wx",
          "nl-NL": "dd234-wx",
          "pt-PT": "dd234-wx",
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
                "value": 450,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "dd234-wx-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 450,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "dd234-wx-2023",
          },
        ],
      }
    `);
  });

  it(`should return a dd234Wx preset when built for graphql`, () => {
    const dd234WxPresetGraphql = dd234Wx().buildGraphql<TProductDraft>();
    expect(dd234WxPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Präziser Feinplanierer für sorgfältiges Finish und Nivellierung von Oberflächen.",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrice fine di precisione per finiture meticolose e graduazione di superfici.",
          },
          {
            "locale": "en-UK",
            "value": "Precision fine grader for meticulous finishing and grading of surfaces.",
          },
          {
            "locale": "nl-NL",
            "value": "Precisie fijnnivelleermachine voor nauwkeurige afwerking en egalisatie van oppervlakken.",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuse fine de précision pour une finition méticuleuse et le nivellement des surfaces.",
          },
          {
            "locale": "en-AU",
            "value": "Precision fine grader for meticulous finishing and grading of surfaces.",
          },
          {
            "locale": "es-ES",
            "value": "Niveladora fina de precisión para un acabado meticuloso y la nivelación de superficies.",
          },
          {
            "locale": "en-GB",
            "value": "Precision fine grader for meticulous finishing and grading of surfaces.",
          },
          {
            "locale": "en-NZ",
            "value": "Precision fine grader for meticulous finishing and grading of surfaces.",
          },
          {
            "locale": "pt-PT",
            "value": "Niveladora fina de precisão para acabamento meticuloso e graduação de superfícies.",
          },
          {
            "locale": "en-US",
            "value": "Precision fine grader for meticulous finishing and grading of surfaces.",
          },
        ],
        "key": "dd234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "450",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "dd234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "DD234 WX Feinplanierer",
          },
          {
            "locale": "it-IT",
            "value": "DD234 WX Livellatrice Fine",
          },
          {
            "locale": "en-UK",
            "value": "DD234 WX Fine Grader",
          },
          {
            "locale": "nl-NL",
            "value": "DD234 WX Fijnnivelleermachine",
          },
          {
            "locale": "fr-FR",
            "value": "DD234 WX Niveleuse fine",
          },
          {
            "locale": "en-AU",
            "value": "DD234 WX Fine Grader",
          },
          {
            "locale": "es-ES",
            "value": "DD234 WX Niveladora fina",
          },
          {
            "locale": "en-GB",
            "value": "DD234 WX Fine Grader",
          },
          {
            "locale": "en-NZ",
            "value": "DD234 WX Fine Grader",
          },
          {
            "locale": "pt-PT",
            "value": "DD234 WX Niveladora Fina",
          },
          {
            "locale": "en-US",
            "value": "DD234 WX Fine Grader",
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
            "value": "dd234-wx",
          },
          {
            "locale": "it-IT",
            "value": "dd234-wx",
          },
          {
            "locale": "en-UK",
            "value": "dd234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "dd234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "dd234-wx",
          },
          {
            "locale": "en-AU",
            "value": "dd234-wx",
          },
          {
            "locale": "es-ES",
            "value": "dd234-wx",
          },
          {
            "locale": "en-GB",
            "value": "dd234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "dd234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "dd234-wx",
          },
          {
            "locale": "en-US",
            "value": "dd234-wx",
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
                "value": "450",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "dd234-wx-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "450",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/dd234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "dd234-wx-2023",
          },
        ],
      }
    `);
  });
});
