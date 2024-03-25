import type { TProductDraft } from '../../../types';
import aa123Qr from './aa-123-qr';

describe(`with aa123Qr preset`, () => {
  it(`should return a aa123Qr preset`, () => {
    const aa123QrPreset = aa123Qr().build<TProductDraft>();
    expect(aa123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "road-graders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Straßenplanierer für präzises Nivellieren und Planieren von Straßenoberflächen.",
          "en": undefined,
          "en-AU": "Versatile road grader for precise leveling and grading of road surfaces.",
          "en-GB": "Versatile road grader for precise leveling and grading of road surfaces.",
          "en-NZ": "Versatile road grader for precise leveling and grading of road surfaces.",
          "en-US": "Versatile road grader for precise leveling and grading of road surfaces.",
          "es-ES": "Niveladora de carreteras versátil para el nivelado preciso y la nivelación de superficies de carreteras.",
          "fr": undefined,
          "fr-FR": "Niveleuse routière polyvalente pour le nivellement et le nivellement précis des surfaces routières.",
          "it-IT": "Livellatrice stradale versatile per livellamento e graduazione precisi delle superfici stradali.",
          "nl-NL": "Veelzijdige wegnivelleermachine voor precieze nivellering en egalisering van wegoppervlakken.",
          "pt-PT": "Niveladora de estradas versátil para nivelamento preciso e graduação de superfícies rodoviárias.",
        },
        "key": "aa123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 500,
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
                "w": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "aa123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "AA123 QR Straßenplanierer",
          "en": undefined,
          "en-AU": "AA123 QR Road Grader",
          "en-GB": "AA123 QR Road Grader",
          "en-NZ": "AA123 QR Road Grader",
          "en-US": "AA123 QR Road Grader",
          "es-ES": "AA123 QR Niveladora de carreteras",
          "fr": undefined,
          "fr-FR": "AA123 QR Niveleuse routière",
          "it-IT": "AA123 QR Livellatrice Stradale",
          "nl-NL": "AA123 QR Wegnivelleermachine",
          "pt-PT": "AA123 QR Niveladora de Estradas",
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
          "de-DE": "aa123-qr",
          "en": undefined,
          "en-AU": "aa123-qr",
          "en-GB": "aa123-qr",
          "en-NZ": "aa123-qr",
          "en-US": "aa123-qr",
          "es-ES": "aa123-qr",
          "fr": undefined,
          "fr-FR": "aa123-qr",
          "it-IT": "aa123-qr",
          "nl-NL": "aa123-qr",
          "pt-PT": "aa123-qr",
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
                "value": 500,
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
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "aa123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 500,
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
                  "w": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "aa123-qr-2023",
          },
        ],
      }
    `);
  });

  it(`should return a aa123Qr preset when built for graphql`, () => {
    const aa123QrPresetGraphql = aa123Qr().buildGraphql<TProductDraft>();
    expect(aa123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "road-graders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Straßenplanierer für präzises Nivellieren und Planieren von Straßenoberflächen.",
          },
          {
            "locale": "it-IT",
            "value": "Livellatrice stradale versatile per livellamento e graduazione precisi delle superfici stradali.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige wegnivelleermachine voor precieze nivellering en egalisering van wegoppervlakken.",
          },
          {
            "locale": "fr-FR",
            "value": "Niveleuse routière polyvalente pour le nivellement et le nivellement précis des surfaces routières.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile road grader for precise leveling and grading of road surfaces.",
          },
          {
            "locale": "es-ES",
            "value": "Niveladora de carreteras versátil para el nivelado preciso y la nivelación de superficies de carreteras.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile road grader for precise leveling and grading of road surfaces.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile road grader for precise leveling and grading of road surfaces.",
          },
          {
            "locale": "pt-PT",
            "value": "Niveladora de estradas versátil para nivelamento preciso e graduação de superfícies rodoviárias.",
          },
          {
            "locale": "en-US",
            "value": "Versatile road grader for precise leveling and grading of road surfaces.",
          },
        ],
        "key": "aa123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "500",
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
                "width": 1792,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "aa123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "AA123 QR Straßenplanierer",
          },
          {
            "locale": "it-IT",
            "value": "AA123 QR Livellatrice Stradale",
          },
          {
            "locale": "nl-NL",
            "value": "AA123 QR Wegnivelleermachine",
          },
          {
            "locale": "fr-FR",
            "value": "AA123 QR Niveleuse routière",
          },
          {
            "locale": "en-AU",
            "value": "AA123 QR Road Grader",
          },
          {
            "locale": "es-ES",
            "value": "AA123 QR Niveladora de carreteras",
          },
          {
            "locale": "en-GB",
            "value": "AA123 QR Road Grader",
          },
          {
            "locale": "en-NZ",
            "value": "AA123 QR Road Grader",
          },
          {
            "locale": "pt-PT",
            "value": "AA123 QR Niveladora de Estradas",
          },
          {
            "locale": "en-US",
            "value": "AA123 QR Road Grader",
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
            "value": "aa123-qr",
          },
          {
            "locale": "it-IT",
            "value": "aa123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "aa123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "aa123-qr",
          },
          {
            "locale": "en-AU",
            "value": "aa123-qr",
          },
          {
            "locale": "es-ES",
            "value": "aa123-qr",
          },
          {
            "locale": "en-GB",
            "value": "aa123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "aa123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "aa123-qr",
          },
          {
            "locale": "en-US",
            "value": "aa123-qr",
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
                "value": "500",
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
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "aa123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "500",
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
                  "width": 1792,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aa123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "aa123-qr-2023",
          },
        ],
      }
    `);
  });
});
