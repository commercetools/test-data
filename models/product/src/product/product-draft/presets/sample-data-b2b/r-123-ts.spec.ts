import type { TProductDraft } from '../../../types';
import r123Ts from './r-123-ts';

describe(`with r123Ts preset`, () => {
  it(`should return a r123Ts preset`, () => {
    const r123TsPreset = r123Ts().build<TProductDraft>();
    expect(r123TsPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "surface-mining-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Leistungsstarker Oberflächenbergbaubagger für den Großbergbau konzipiert.",
          "en": undefined,
          "en-AU": "Powerful surface mining excavator designed for large-scale mining operations.",
          "en-GB": "Powerful surface mining excavator designed for large-scale mining operations.",
          "en-NZ": "Powerful surface mining excavator designed for large-scale mining operations.",
          "en-US": "Powerful surface mining excavator designed for large-scale mining operations.",
          "es-ES": "Excavadora minera de superficie potente diseñada para operaciones mineras a gran escala.",
          "fr": undefined,
          "fr-FR": "Excavateur minier de surface puissant conçu pour les opérations minières à grande échelle.",
          "it-IT": "Potente escavatore per miniere di superficie progettato per operazioni di estrazione su larga scala.",
          "nl-NL": "Krachtige oppervlakte mijnbouw graafmachine ontworpen voor grootschalige mijnbouwoperaties.",
          "pt-PT": "Escavadeira potente para mineração de superfície projetada para operações de mineração em grande escala.",
        },
        "key": "r123-ts",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "r123-ts-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "R123 TS Oberflächenbergbaubagger",
          "en": undefined,
          "en-AU": "R123 TS Surface Mining Excavator",
          "en-GB": "R123 TS Surface Mining Excavator",
          "en-NZ": "R123 TS Surface Mining Excavator",
          "en-US": "R123 TS Surface Mining Excavator",
          "es-ES": "R123 TS Excavadora minera de superficie",
          "fr": undefined,
          "fr-FR": "R123 TS Excavateur minier de surface",
          "it-IT": "R123 TS Escavatore per Miniere di Superficie",
          "nl-NL": "R123 TS Oppervlakte Mijnbouw Graafmachine",
          "pt-PT": "R123 TS Escavadeira para Mineração de Superfície",
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
          "de-DE": "r123-ts",
          "en": undefined,
          "en-AU": "r123-ts",
          "en-GB": "r123-ts",
          "en-NZ": "r123-ts",
          "en-US": "r123-ts",
          "es-ES": "r123-ts",
          "fr": undefined,
          "fr-FR": "r123-ts",
          "it-IT": "r123-ts",
          "nl-NL": "r123-ts",
          "pt-PT": "r123-ts",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "r123-ts-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "r123-ts-2023",
          },
        ],
      }
    `);
  });

  it(`should return a r123Ts preset when built for graphql`, () => {
    const r123TsPresetGraphql = r123Ts().buildGraphql<TProductDraft>();
    expect(r123TsPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "surface-mining-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Leistungsstarker Oberflächenbergbaubagger für den Großbergbau konzipiert.",
          },
          {
            "locale": "it-IT",
            "value": "Potente escavatore per miniere di superficie progettato per operazioni di estrazione su larga scala.",
          },
          {
            "locale": "nl-NL",
            "value": "Krachtige oppervlakte mijnbouw graafmachine ontworpen voor grootschalige mijnbouwoperaties.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavateur minier de surface puissant conçu pour les opérations minières à grande échelle.",
          },
          {
            "locale": "en-AU",
            "value": "Powerful surface mining excavator designed for large-scale mining operations.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora minera de superficie potente diseñada para operaciones mineras a gran escala.",
          },
          {
            "locale": "en-GB",
            "value": "Powerful surface mining excavator designed for large-scale mining operations.",
          },
          {
            "locale": "en-NZ",
            "value": "Powerful surface mining excavator designed for large-scale mining operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira potente para mineração de superfície projetada para operações de mineração em grande escala.",
          },
          {
            "locale": "en-US",
            "value": "Powerful surface mining excavator designed for large-scale mining operations.",
          },
        ],
        "key": "r123-ts",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "r123-ts-2015",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "R123 TS Oberflächenbergbaubagger",
          },
          {
            "locale": "it-IT",
            "value": "R123 TS Escavatore per Miniere di Superficie",
          },
          {
            "locale": "nl-NL",
            "value": "R123 TS Oppervlakte Mijnbouw Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "R123 TS Excavateur minier de surface",
          },
          {
            "locale": "en-AU",
            "value": "R123 TS Surface Mining Excavator",
          },
          {
            "locale": "es-ES",
            "value": "R123 TS Excavadora minera de superficie",
          },
          {
            "locale": "en-GB",
            "value": "R123 TS Surface Mining Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "R123 TS Surface Mining Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "R123 TS Escavadeira para Mineração de Superfície",
          },
          {
            "locale": "en-US",
            "value": "R123 TS Surface Mining Excavator",
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
            "value": "r123-ts",
          },
          {
            "locale": "it-IT",
            "value": "r123-ts",
          },
          {
            "locale": "nl-NL",
            "value": "r123-ts",
          },
          {
            "locale": "fr-FR",
            "value": "r123-ts",
          },
          {
            "locale": "en-AU",
            "value": "r123-ts",
          },
          {
            "locale": "es-ES",
            "value": "r123-ts",
          },
          {
            "locale": "en-GB",
            "value": "r123-ts",
          },
          {
            "locale": "en-NZ",
            "value": "r123-ts",
          },
          {
            "locale": "pt-PT",
            "value": "r123-ts",
          },
          {
            "locale": "en-US",
            "value": "r123-ts",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "r123-ts-2019",
            "staged": true,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/r123-ts-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "r123-ts-2023",
            "staged": true,
          },
        ],
      }
    `);
  });
});
