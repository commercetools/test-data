import type { TProductDraft } from '../../../types';
import ddd890Op from './ddd-890-op';

describe(`with ddd890Op preset`, () => {
  it(`should return a ddd890Op preset`, () => {
    const ddd890OpPreset = ddd890Op().build<TProductDraft>();
    expect(ddd890OpPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "production-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Produktionsbohrer für verschiedene Bohraufgaben in groß angelegten Bergbauprojekten geeignet.",
          "en": undefined,
          "en-AU": "Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.",
          "en-GB": "Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.",
          "en-NZ": "Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.",
          "en-US": "Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.",
          "es-ES": "Perforadora de producción versátil adecuada para una variedad de tareas de perforación en proyectos mineros a gran escala.",
          "fr": undefined,
          "fr-FR": "Forage de production polyvalent adapté à diverses tâches de forage dans des projets miniers à grande échelle.",
          "it-IT": "Trapano versatile per produzione adatto per una varietà di compiti di trapanazione in progetti minerari su larga scala.",
          "nl-NL": "Veelzijdige productieboor geschikt voor een verscheidenheid aan boortaken in grootschalige mijnbouwprojecten.",
          "pt-PT": "Perfuratriz de produção versátil adequada para uma variedade de tarefas de perfuração em projetos de mineração em grande escala.",
        },
        "key": "ddd890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 12000,
            },
            {
              "name": "color",
              "value": {
                "key": "RED",
                "label": {
                  "de-DE": "Rot",
                  "en-AU": "Red",
                  "en-GB": "Red",
                  "en-NZ": "Red",
                  "en-US": "Red",
                  "es-ES": "Rojo",
                  "fr-FR": "Rouge",
                  "it-IT": "Rosso",
                  "nl-NL": "Rood",
                  "pt-PT": "Vermelho",
                },
              },
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ddd890-op-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "DDD890 OP Produktionsbohrer",
          "en": undefined,
          "en-AU": "DDD890 OP Production Drill",
          "en-GB": "DDD890 OP Production Drill",
          "en-NZ": "DDD890 OP Production Drill",
          "en-US": "DDD890 OP Production Drill",
          "es-ES": "DDD890 OP Perforadora de producción",
          "fr": undefined,
          "fr-FR": "DDD890 OP Forage de production",
          "it-IT": "DDD890 OP Trapano per Produzione",
          "nl-NL": "DDD890 OP Productieboor",
          "pt-PT": "DDD890 OP Perfuratriz de Produção",
        },
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "ddd890-op",
          "en": undefined,
          "en-AU": "ddd890-op",
          "en-GB": "ddd890-op",
          "en-NZ": "ddd890-op",
          "en-US": "ddd890-op",
          "es-ES": "ddd890-op",
          "fr": undefined,
          "fr-FR": "ddd890-op",
          "it-IT": "ddd890-op",
          "nl-NL": "ddd890-op",
          "pt-PT": "ddd890-op",
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
                "value": 12000,
              },
              {
                "name": "color",
                "value": {
                  "key": "BLUE",
                  "label": {
                    "de-DE": "Blau",
                    "en-AU": "Blue",
                    "en-GB": "Blue",
                    "en-NZ": "Blue",
                    "en-US": "Blue",
                    "es-ES": "Azul",
                    "fr-FR": "Bleu",
                    "it-IT": "Blu",
                    "nl-NL": "Blauw",
                    "pt-PT": "Azul",
                  },
                },
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ddd890-op-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 12000,
              },
              {
                "name": "color",
                "value": {
                  "key": "GREEN",
                  "label": {
                    "de-DE": "Grün",
                    "en-AU": "Green",
                    "en-GB": "Green",
                    "en-NZ": "Green",
                    "en-US": "Green",
                    "es-ES": "Verde",
                    "fr-FR": "Vert",
                    "it-IT": "Verde",
                    "nl-NL": "Groen",
                    "pt-PT": "Verde",
                  },
                },
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ddd890-op-green",
          },
        ],
      }
    `);
  });

  it(`should return a ddd890Op preset when built for graphql`, () => {
    const ddd890OpPresetGraphql = ddd890Op().buildGraphql<TProductDraft>();
    expect(ddd890OpPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "production-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Produktionsbohrer für verschiedene Bohraufgaben in groß angelegten Bergbauprojekten geeignet.",
          },
          {
            "locale": "it-IT",
            "value": "Trapano versatile per produzione adatto per una varietà di compiti di trapanazione in progetti minerari su larga scala.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige productieboor geschikt voor een verscheidenheid aan boortaken in grootschalige mijnbouwprojecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Forage de production polyvalent adapté à diverses tâches de forage dans des projets miniers à grande échelle.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.",
          },
          {
            "locale": "es-ES",
            "value": "Perforadora de producción versátil adecuada para una variedad de tareas de perforación en proyectos mineros a gran escala.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Perfuratriz de produção versátil adequada para uma variedade de tarefas de perfuração em projetos de mineração em grande escala.",
          },
          {
            "locale": "en-US",
            "value": "Versatile production drill suitable for a variety of drilling tasks in large-scale mining projects.",
          },
        ],
        "key": "ddd890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "12000",
            },
            {
              "name": "color",
              "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ddd890-op-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "DDD890 OP Produktionsbohrer",
          },
          {
            "locale": "it-IT",
            "value": "DDD890 OP Trapano per Produzione",
          },
          {
            "locale": "nl-NL",
            "value": "DDD890 OP Productieboor",
          },
          {
            "locale": "fr-FR",
            "value": "DDD890 OP Forage de production",
          },
          {
            "locale": "en-AU",
            "value": "DDD890 OP Production Drill",
          },
          {
            "locale": "es-ES",
            "value": "DDD890 OP Perforadora de producción",
          },
          {
            "locale": "en-GB",
            "value": "DDD890 OP Production Drill",
          },
          {
            "locale": "en-NZ",
            "value": "DDD890 OP Production Drill",
          },
          {
            "locale": "pt-PT",
            "value": "DDD890 OP Perfuratriz de Produção",
          },
          {
            "locale": "en-US",
            "value": "DDD890 OP Production Drill",
          },
        ],
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "ddd890-op",
          },
          {
            "locale": "it-IT",
            "value": "ddd890-op",
          },
          {
            "locale": "nl-NL",
            "value": "ddd890-op",
          },
          {
            "locale": "fr-FR",
            "value": "ddd890-op",
          },
          {
            "locale": "en-AU",
            "value": "ddd890-op",
          },
          {
            "locale": "es-ES",
            "value": "ddd890-op",
          },
          {
            "locale": "en-GB",
            "value": "ddd890-op",
          },
          {
            "locale": "en-NZ",
            "value": "ddd890-op",
          },
          {
            "locale": "pt-PT",
            "value": "ddd890-op",
          },
          {
            "locale": "en-US",
            "value": "ddd890-op",
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
                "value": "12000",
              },
              {
                "name": "color",
                "value": "{"key":"BLUE","label":{"de-DE":"Blau","it-IT":"Blu","nl-NL":"Blauw","fr-FR":"Bleu","en-AU":"Blue","es-ES":"Azul","en-GB":"Blue","en-NZ":"Blue","pt-PT":"Azul","en-US":"Blue"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ddd890-op-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "12000",
              },
              {
                "name": "color",
                "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ddd890-op-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ddd890-op-green",
          },
        ],
      }
    `);
  });
});
