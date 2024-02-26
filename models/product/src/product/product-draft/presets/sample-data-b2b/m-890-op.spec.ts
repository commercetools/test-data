import type { TProductDraft } from '../../../types';
import m890Op from './m-890-op';

describe(`with m890Op preset`, () => {
  it(`should return a m890Op preset`, () => {
    const m890OpPreset = m890Op().build<TProductDraft>();
    expect(m890OpPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "amphibious-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Amphibienbagger mit speziellen Funktionen für vielseitige Land- und Wasserprojekte.",
          "en": undefined,
          "en-AU": "Amphibious excavator with specialized features for versatile land and water projects.",
          "en-GB": "Amphibious excavator with specialized features for versatile land and water projects.",
          "en-NZ": "Amphibious excavator with specialized features for versatile land and water projects.",
          "en-UK": "Amphibious excavator with specialized features for versatile land and water projects.",
          "en-US": "Amphibious excavator with specialized features for versatile land and water projects.",
          "es-ES": "Excavadora anfibia con características especializadas para proyectos versátiles en tierra y agua.",
          "fr": undefined,
          "fr-FR": "Excavateur amphibie avec des fonctionnalités spécialisées pour des projets polyvalents sur terre et dans l&#39;eau.",
          "it-IT": "Escavatore anfibio con caratteristiche specializzate per progetti versatili su terra e in acqua.",
          "nl-NL": "Amfibische graafmachine met gespecialiseerde functies voor veelzijdige land- en waterprojecten.",
          "pt-PT": "Escavadeira anfíbia com características especializadas para projetos versáteis em terra e água.",
        },
        "key": "m890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 650,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "m890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "M890 OP Amphibienbagger",
          "en": undefined,
          "en-AU": "M890 OP Amphibious Excavator",
          "en-GB": "M890 OP Amphibious Excavator",
          "en-NZ": "M890 OP Amphibious Excavator",
          "en-UK": "M890 OP Amphibious Excavator",
          "en-US": "M890 OP Amphibious Excavator",
          "es-ES": "M890 OP Excavadora anfibia",
          "fr": undefined,
          "fr-FR": "M890 OP Excavateur amphibie",
          "it-IT": "M890 OP Escavatore Anfibio",
          "nl-NL": "M890 OP Amfibische Graafmachine",
          "pt-PT": "M890 OP Escavadeira Anfíbia",
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
          "de-DE": "m890-op",
          "en": undefined,
          "en-AU": "m890-op",
          "en-GB": "m890-op",
          "en-NZ": "m890-op",
          "en-UK": "m890-op",
          "en-US": "m890-op",
          "es-ES": "m890-op",
          "fr": undefined,
          "fr-FR": "m890-op",
          "it-IT": "m890-op",
          "nl-NL": "m890-op",
          "pt-PT": "m890-op",
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
                "value": 650,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "m890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 650,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "m890-op-2023",
          },
        ],
      }
    `);
  });

  it(`should return a m890Op preset when built for graphql`, () => {
    const m890OpPresetGraphql = m890Op().buildGraphql<TProductDraft>();
    expect(m890OpPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "amphibious-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Amphibienbagger mit speziellen Funktionen für vielseitige Land- und Wasserprojekte.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore anfibio con caratteristiche specializzate per progetti versatili su terra e in acqua.",
          },
          {
            "locale": "en-UK",
            "value": "Amphibious excavator with specialized features for versatile land and water projects.",
          },
          {
            "locale": "nl-NL",
            "value": "Amfibische graafmachine met gespecialiseerde functies voor veelzijdige land- en waterprojecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavateur amphibie avec des fonctionnalités spécialisées pour des projets polyvalents sur terre et dans l&#39;eau.",
          },
          {
            "locale": "en-AU",
            "value": "Amphibious excavator with specialized features for versatile land and water projects.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora anfibia con características especializadas para proyectos versátiles en tierra y agua.",
          },
          {
            "locale": "en-GB",
            "value": "Amphibious excavator with specialized features for versatile land and water projects.",
          },
          {
            "locale": "en-NZ",
            "value": "Amphibious excavator with specialized features for versatile land and water projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira anfíbia com características especializadas para projetos versáteis em terra e água.",
          },
          {
            "locale": "en-US",
            "value": "Amphibious excavator with specialized features for versatile land and water projects.",
          },
        ],
        "key": "m890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "650",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "m890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "M890 OP Amphibienbagger",
          },
          {
            "locale": "it-IT",
            "value": "M890 OP Escavatore Anfibio",
          },
          {
            "locale": "en-UK",
            "value": "M890 OP Amphibious Excavator",
          },
          {
            "locale": "nl-NL",
            "value": "M890 OP Amfibische Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "M890 OP Excavateur amphibie",
          },
          {
            "locale": "en-AU",
            "value": "M890 OP Amphibious Excavator",
          },
          {
            "locale": "es-ES",
            "value": "M890 OP Excavadora anfibia",
          },
          {
            "locale": "en-GB",
            "value": "M890 OP Amphibious Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "M890 OP Amphibious Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "M890 OP Escavadeira Anfíbia",
          },
          {
            "locale": "en-US",
            "value": "M890 OP Amphibious Excavator",
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
            "value": "m890-op",
          },
          {
            "locale": "it-IT",
            "value": "m890-op",
          },
          {
            "locale": "en-UK",
            "value": "m890-op",
          },
          {
            "locale": "nl-NL",
            "value": "m890-op",
          },
          {
            "locale": "fr-FR",
            "value": "m890-op",
          },
          {
            "locale": "en-AU",
            "value": "m890-op",
          },
          {
            "locale": "es-ES",
            "value": "m890-op",
          },
          {
            "locale": "en-GB",
            "value": "m890-op",
          },
          {
            "locale": "en-NZ",
            "value": "m890-op",
          },
          {
            "locale": "pt-PT",
            "value": "m890-op",
          },
          {
            "locale": "en-US",
            "value": "m890-op",
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
                "value": "650",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "m890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "650",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/m890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "m890-op-2023",
          },
        ],
      }
    `);
  });
});
