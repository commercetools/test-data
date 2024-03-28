import type { TProductDraft } from '../../../types';
import rr890Op from './rr-890-op';

describe(`with rr890Op preset`, () => {
  it(`should return a rr890Op preset`, () => {
    const rr890OpPreset = rr890Op().build<TProductDraft>();
    expect(rr890OpPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "railroad-wheeled-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Schienenradbagger mit speziellen Funktionen für verschiedene Aufgaben im Bahnbau.",
          "en": undefined,
          "en-AU": "Versatile railroad wheeled excavator with specialized features for various railway construction tasks.",
          "en-GB": "Versatile railroad wheeled excavator with specialized features for various railway construction tasks.",
          "en-NZ": "Versatile railroad wheeled excavator with specialized features for various railway construction tasks.",
          "en-US": "Versatile railroad wheeled excavator with specialized features for various railway construction tasks.",
          "es-ES": "Excavadora de ruedas versátil con características especializadas para diversas tareas de construcción ferroviaria.",
          "fr": undefined,
          "fr-FR": "Excavatrice sur roues polyvalente avec des fonctionnalités spécialisées pour diverses tâches de construction ferroviaire.",
          "it-IT": "Escavatore su ruote per ferrovie versatile con caratteristiche specializzate per vari compiti nella costruzione di ferrovie.",
          "nl-NL": "Veelzijdige spoorweg wiellader graafmachine met gespecialiseerde functies voor diverse spoorwegbouwtaken.",
          "pt-PT": "Escavadeira rodoviária versátil com características especializadas para várias tarefas de construção ferroviária.",
        },
        "key": "rr890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 900,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "rr890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "RR890 OP Railroad Schienenradbagger",
          "en": undefined,
          "en-AU": "RR890 OP Railroad Wheeled Excavator",
          "en-GB": "RR890 OP Railroad Wheeled Excavator",
          "en-NZ": "RR890 OP Railroad Wheeled Excavator",
          "en-US": "RR890 OP Railroad Wheeled Excavator",
          "es-ES": "RR890 OP Railroad Excavadora de ruedas para ferrocarril",
          "fr": undefined,
          "fr-FR": "RR890 OP Railroad Excavatrice sur roues pour chemin de fer",
          "it-IT": "RR890 OP Escavatore su Ruote per Ferrovie",
          "nl-NL": "RR890 OP Spoorweg Wiellader Graafmachine",
          "pt-PT": "RR890 OP Escavadeira Rodoviária para Ferrovias",
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
          "de-DE": "rr890-op",
          "en": undefined,
          "en-AU": "rr890-op",
          "en-GB": "rr890-op",
          "en-NZ": "rr890-op",
          "en-US": "rr890-op",
          "es-ES": "rr890-op",
          "fr": undefined,
          "fr-FR": "rr890-op",
          "it-IT": "rr890-op",
          "nl-NL": "rr890-op",
          "pt-PT": "rr890-op",
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
                "value": 900,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "rr890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 900,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "rr890-op-2023",
          },
        ],
      }
    `);
  });

  it(`should return a rr890Op preset when built for graphql`, () => {
    const rr890OpPresetGraphql = rr890Op().buildGraphql<TProductDraft>();
    expect(rr890OpPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "railroad-wheeled-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Schienenradbagger mit speziellen Funktionen für verschiedene Aufgaben im Bahnbau.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore su ruote per ferrovie versatile con caratteristiche specializzate per vari compiti nella costruzione di ferrovie.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige spoorweg wiellader graafmachine met gespecialiseerde functies voor diverse spoorwegbouwtaken.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrice sur roues polyvalente avec des fonctionnalités spécialisées pour diverses tâches de construction ferroviaire.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile railroad wheeled excavator with specialized features for various railway construction tasks.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora de ruedas versátil con características especializadas para diversas tareas de construcción ferroviaria.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile railroad wheeled excavator with specialized features for various railway construction tasks.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile railroad wheeled excavator with specialized features for various railway construction tasks.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira rodoviária versátil com características especializadas para várias tarefas de construção ferroviária.",
          },
          {
            "locale": "en-US",
            "value": "Versatile railroad wheeled excavator with specialized features for various railway construction tasks.",
          },
        ],
        "key": "rr890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "900",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "rr890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "RR890 OP Railroad Schienenradbagger",
          },
          {
            "locale": "it-IT",
            "value": "RR890 OP Escavatore su Ruote per Ferrovie",
          },
          {
            "locale": "nl-NL",
            "value": "RR890 OP Spoorweg Wiellader Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "RR890 OP Railroad Excavatrice sur roues pour chemin de fer",
          },
          {
            "locale": "en-AU",
            "value": "RR890 OP Railroad Wheeled Excavator",
          },
          {
            "locale": "es-ES",
            "value": "RR890 OP Railroad Excavadora de ruedas para ferrocarril",
          },
          {
            "locale": "en-GB",
            "value": "RR890 OP Railroad Wheeled Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "RR890 OP Railroad Wheeled Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "RR890 OP Escavadeira Rodoviária para Ferrovias",
          },
          {
            "locale": "en-US",
            "value": "RR890 OP Railroad Wheeled Excavator",
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
            "value": "rr890-op",
          },
          {
            "locale": "it-IT",
            "value": "rr890-op",
          },
          {
            "locale": "nl-NL",
            "value": "rr890-op",
          },
          {
            "locale": "fr-FR",
            "value": "rr890-op",
          },
          {
            "locale": "en-AU",
            "value": "rr890-op",
          },
          {
            "locale": "es-ES",
            "value": "rr890-op",
          },
          {
            "locale": "en-GB",
            "value": "rr890-op",
          },
          {
            "locale": "en-NZ",
            "value": "rr890-op",
          },
          {
            "locale": "pt-PT",
            "value": "rr890-op",
          },
          {
            "locale": "en-US",
            "value": "rr890-op",
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
                "value": "900",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "rr890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "900",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/rr890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "rr890-op-2023",
          },
        ],
      }
    `);
  });
});
