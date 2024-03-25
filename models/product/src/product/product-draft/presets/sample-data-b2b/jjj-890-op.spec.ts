import type { TProductDraft } from '../../../types';
import jjj890Op from './jjj-890-op';

describe(`with jjj890Op preset`, () => {
  it(`should return a jjj890Op preset`, () => {
    const jjj890OpPreset = jjj890Op().build<TProductDraft>();
    expect(jjj890OpPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "piling-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Rammpfahlhammer für verschiedene Rammarbeiten im Bau und in Infrastrukturprojekten geeignet.",
          "en": undefined,
          "en-AU": "Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.",
          "en-GB": "Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.",
          "en-NZ": "Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.",
          "en-US": "Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.",
          "es-ES": "Martillo de pilotaje versátil adecuado para diversas tareas de pilotes de cimentación en proyectos de construcción e infraestructura.",
          "fr": undefined,
          "fr-FR": "Marteau de battage polyvalent adapté à diverses tâches de fonçage de fondation dans des projets de construction et d&#39;infrastructure.",
          "it-IT": "Martello versatile per pali adatto per vari compiti di piantare pali in progetti di costruzione e infrastruttura.",
          "nl-NL": "Veelzijdige heihamer geschikt voor diverse heiwerkzaamheden in bouw- en infrastructuurprojecten.",
          "pt-PT": "Martelo de cravação versátil adequado para várias tarefas de cravação de fundações em projetos de construção e infraestrutura.",
        },
        "key": "jjj890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 18000,
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
                "key": "fixed",
                "label": "Fixed",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "jjj890-op-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "JJJ890 OP Rammpfahlhammer",
          "en": undefined,
          "en-AU": "JJJ890 OP Piling Hammer",
          "en-GB": "JJJ890 OP Piling Hammer",
          "en-NZ": "JJJ890 OP Piling Hammer",
          "en-US": "JJJ890 OP Piling Hammer",
          "es-ES": "JJJ890 OP Martillo de pilotaje",
          "fr": undefined,
          "fr-FR": "JJJ890 OP Marteau de battage",
          "it-IT": "JJJ890 OP Martello per Pali",
          "nl-NL": "JJJ890 OP Heihamer",
          "pt-PT": "JJJ890 OP Martelo de Cravação",
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
          "de-DE": "jjj890-op",
          "en": undefined,
          "en-AU": "jjj890-op",
          "en-GB": "jjj890-op",
          "en-NZ": "jjj890-op",
          "en-US": "jjj890-op",
          "es-ES": "jjj890-op",
          "fr": undefined,
          "fr-FR": "jjj890-op",
          "it-IT": "jjj890-op",
          "nl-NL": "jjj890-op",
          "pt-PT": "jjj890-op",
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
                "value": 18000,
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
                  "key": "fixed",
                  "label": "Fixed",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "jjj890-op-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 18000,
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
                  "key": "fixed",
                  "label": "Fixed",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "jjj890-op-green",
          },
        ],
      }
    `);
  });

  it(`should return a jjj890Op preset when built for graphql`, () => {
    const jjj890OpPresetGraphql = jjj890Op().buildGraphql<TProductDraft>();
    expect(jjj890OpPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "piling-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Rammpfahlhammer für verschiedene Rammarbeiten im Bau und in Infrastrukturprojekten geeignet.",
          },
          {
            "locale": "it-IT",
            "value": "Martello versatile per pali adatto per vari compiti di piantare pali in progetti di costruzione e infrastruttura.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige heihamer geschikt voor diverse heiwerkzaamheden in bouw- en infrastructuurprojecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Marteau de battage polyvalent adapté à diverses tâches de fonçage de fondation dans des projets de construction et d&#39;infrastructure.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.",
          },
          {
            "locale": "es-ES",
            "value": "Martillo de pilotaje versátil adecuado para diversas tareas de pilotes de cimentación en proyectos de construcción e infraestructura.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Martelo de cravação versátil adequado para várias tarefas de cravação de fundações em projetos de construção e infraestrutura.",
          },
          {
            "locale": "en-US",
            "value": "Versatile piling hammer suitable for various foundation piling tasks in construction and infrastructure projects.",
          },
        ],
        "key": "jjj890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "18000",
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
              "value": "{"key":"fixed","label":"Fixed"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "jjj890-op-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "JJJ890 OP Rammpfahlhammer",
          },
          {
            "locale": "it-IT",
            "value": "JJJ890 OP Martello per Pali",
          },
          {
            "locale": "nl-NL",
            "value": "JJJ890 OP Heihamer",
          },
          {
            "locale": "fr-FR",
            "value": "JJJ890 OP Marteau de battage",
          },
          {
            "locale": "en-AU",
            "value": "JJJ890 OP Piling Hammer",
          },
          {
            "locale": "es-ES",
            "value": "JJJ890 OP Martillo de pilotaje",
          },
          {
            "locale": "en-GB",
            "value": "JJJ890 OP Piling Hammer",
          },
          {
            "locale": "en-NZ",
            "value": "JJJ890 OP Piling Hammer",
          },
          {
            "locale": "pt-PT",
            "value": "JJJ890 OP Martelo de Cravação",
          },
          {
            "locale": "en-US",
            "value": "JJJ890 OP Piling Hammer",
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
            "value": "jjj890-op",
          },
          {
            "locale": "it-IT",
            "value": "jjj890-op",
          },
          {
            "locale": "nl-NL",
            "value": "jjj890-op",
          },
          {
            "locale": "fr-FR",
            "value": "jjj890-op",
          },
          {
            "locale": "en-AU",
            "value": "jjj890-op",
          },
          {
            "locale": "es-ES",
            "value": "jjj890-op",
          },
          {
            "locale": "en-GB",
            "value": "jjj890-op",
          },
          {
            "locale": "en-NZ",
            "value": "jjj890-op",
          },
          {
            "locale": "pt-PT",
            "value": "jjj890-op",
          },
          {
            "locale": "en-US",
            "value": "jjj890-op",
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
                "value": "18000",
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
                "value": "{"key":"fixed","label":"Fixed"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "jjj890-op-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "18000",
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
                "value": "{"key":"fixed","label":"Fixed"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jjj890-op-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "jjj890-op-green",
          },
        ],
      }
    `);
  });
});
