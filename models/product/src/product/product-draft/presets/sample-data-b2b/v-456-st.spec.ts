import type { TProductDraft } from '../../../types';
import v456St from './v-456-st';

describe(`with v456St preset`, () => {
  it(`should return a v456St preset`, () => {
    const v456StPreset = v456St().build<TProductDraft>();
    expect(v456StPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rigid-dump-trucks",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Robuster Starren Kipplaster für den zuverlässigen Transport großer Materialmengen im Bergbau und Bauwesen.",
          "en": undefined,
          "en-AU": "V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.",
          "en-GB": "V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.",
          "en-NZ": "V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.",
          "en-US": "V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.",
          "es-ES": "Camión volquete rígido resistente para el transporte confiable de grandes volúmenes de material en minería y construcción.",
          "fr": undefined,
          "fr-FR": "Camion benne rigide robuste pour le transport fiable de grandes quantités de matériau dans l'exploitation minière et la construction.",
          "it-IT": "Camion ribaltabile rigido V456 ST per impieghi pesanti per il trasporto affidabile di grandi volumi di materiale in miniere e costruzioni.",
          "nl-NL": "V456 ST Zware starre dumptruck voor betrouwbaar transport van grote hoeveelheden materiaal in mijnbouw en bouw.",
          "pt-PT": "Caminhão basculante rígido V456 ST para serviço pesado para transporte confiável de grandes volumes de material em mineração e construção.",
        },
        "key": "v456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 300,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "v456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "V456 ST Starren Kipplaster",
          "en": undefined,
          "en-AU": "V456 ST Rigid Dump Truck",
          "en-GB": "V456 ST Rigid Dump Truck",
          "en-NZ": "V456 ST Rigid Dump Truck",
          "en-US": "V456 ST Rigid Dump Truck",
          "es-ES": "V456 ST Camión volquete rígido",
          "fr": undefined,
          "fr-FR": "V456 ST Camion benne rigide",
          "it-IT": "V456 ST Camion Ribaltabile Rigido",
          "nl-NL": "V456 ST Starre Dumptruck",
          "pt-PT": "V456 ST Caminhão Basculante Rígido",
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
          "de-DE": "v456-st",
          "en": undefined,
          "en-AU": "v456-st",
          "en-GB": "v456-st",
          "en-NZ": "v456-st",
          "en-US": "v456-st",
          "es-ES": "v456-st",
          "fr": undefined,
          "fr-FR": "v456-st",
          "it-IT": "v456-st",
          "nl-NL": "v456-st",
          "pt-PT": "v456-st",
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
                "value": 300,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "v456-st-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 300,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "v456-st-2023",
          },
        ],
      }
    `);
  });

  it(`should return a v456St preset when built for graphql`, () => {
    const v456StPresetGraphql = v456St().buildGraphql<TProductDraft>();
    expect(v456StPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rigid-dump-trucks",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Robuster Starren Kipplaster für den zuverlässigen Transport großer Materialmengen im Bergbau und Bauwesen.",
          },
          {
            "locale": "it-IT",
            "value": "Camion ribaltabile rigido V456 ST per impieghi pesanti per il trasporto affidabile di grandi volumi di materiale in miniere e costruzioni.",
          },
          {
            "locale": "nl-NL",
            "value": "V456 ST Zware starre dumptruck voor betrouwbaar transport van grote hoeveelheden materiaal in mijnbouw en bouw.",
          },
          {
            "locale": "fr-FR",
            "value": "Camion benne rigide robuste pour le transport fiable de grandes quantités de matériau dans l'exploitation minière et la construction.",
          },
          {
            "locale": "en-AU",
            "value": "V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.",
          },
          {
            "locale": "es-ES",
            "value": "Camión volquete rígido resistente para el transporte confiable de grandes volúmenes de material en minería y construcción.",
          },
          {
            "locale": "en-GB",
            "value": "V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.",
          },
          {
            "locale": "en-NZ",
            "value": "V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.",
          },
          {
            "locale": "pt-PT",
            "value": "Caminhão basculante rígido V456 ST para serviço pesado para transporte confiável de grandes volumes de material em mineração e construção.",
          },
          {
            "locale": "en-US",
            "value": "V456 ST Heavy-duty rigid dump truck for reliable transport of large volumes of material in mining and construction.",
          },
        ],
        "key": "v456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "300",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "v456-st-2015",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "V456 ST Starren Kipplaster",
          },
          {
            "locale": "it-IT",
            "value": "V456 ST Camion Ribaltabile Rigido",
          },
          {
            "locale": "nl-NL",
            "value": "V456 ST Starre Dumptruck",
          },
          {
            "locale": "fr-FR",
            "value": "V456 ST Camion benne rigide",
          },
          {
            "locale": "en-AU",
            "value": "V456 ST Rigid Dump Truck",
          },
          {
            "locale": "es-ES",
            "value": "V456 ST Camión volquete rígido",
          },
          {
            "locale": "en-GB",
            "value": "V456 ST Rigid Dump Truck",
          },
          {
            "locale": "en-NZ",
            "value": "V456 ST Rigid Dump Truck",
          },
          {
            "locale": "pt-PT",
            "value": "V456 ST Caminhão Basculante Rígido",
          },
          {
            "locale": "en-US",
            "value": "V456 ST Rigid Dump Truck",
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
            "value": "v456-st",
          },
          {
            "locale": "it-IT",
            "value": "v456-st",
          },
          {
            "locale": "nl-NL",
            "value": "v456-st",
          },
          {
            "locale": "fr-FR",
            "value": "v456-st",
          },
          {
            "locale": "en-AU",
            "value": "v456-st",
          },
          {
            "locale": "es-ES",
            "value": "v456-st",
          },
          {
            "locale": "en-GB",
            "value": "v456-st",
          },
          {
            "locale": "en-NZ",
            "value": "v456-st",
          },
          {
            "locale": "pt-PT",
            "value": "v456-st",
          },
          {
            "locale": "en-US",
            "value": "v456-st",
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
                "value": "300",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "v456-st-2019",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "300",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/v456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "v456-st-2023",
            "staged": true,
          },
        ],
      }
    `);
  });
});
