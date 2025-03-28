import type { TProductDraft } from '../../../types';
import eee123Qr from './eee-123-qr';

describe(`with eee123Qr preset`, () => {
  it(`should return a eee123Qr preset`, () => {
    const eee123QrPreset = eee123Qr().build<TProductDraft>();
    expect(eee123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "demolition-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Leistungsstarker Abbruchhammer für effizientes Brechen und Abbrucharbeiten in Bauprojekten.",
          "en": undefined,
          "en-AU": "Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.",
          "en-GB": "Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.",
          "en-NZ": "Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.",
          "en-US": "Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.",
          "es-ES": "Martillo de demolición potente diseñado para tareas eficientes de rotura y demolición en proyectos de construcción.",
          "fr": undefined,
          "fr-FR": "Marteau de démolition puissant conçu pour des tâches de casse et de démolition efficaces dans les projets de construction.",
          "it-IT": "Potente martello demolitore progettato per compiti efficienti di demolizione e frantumazione in progetti edili.",
          "nl-NL": "Krachtige sloophamer ontworpen voor efficiënt breken en slopen in bouwprojecten.",
          "pt-PT": "Martelo demolidor potente projetado para tarefas eficientes de quebra e demolição em projetos de construção.",
        },
        "key": "eee123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 10000,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "eee123-qr-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "EEE123 QR Abbruchhammer",
          "en": undefined,
          "en-AU": "EEE123 QR Demolition Hammer",
          "en-GB": "EEE123 QR Demolition Hammer",
          "en-NZ": "EEE123 QR Demolition Hammer",
          "en-US": "EEE123 QR Demolition Hammer",
          "es-ES": "EEE123 QR Martillo de demolición",
          "fr": undefined,
          "fr-FR": "EEE123 QR Marteau de démolition",
          "it-IT": "EEE123 QR Martello Demolitore",
          "nl-NL": "EEE123 QR Sloophamer",
          "pt-PT": "EEE123 QR Martelo Demolidor",
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
          "de-DE": "eee123-qr",
          "en": undefined,
          "en-AU": "eee123-qr",
          "en-GB": "eee123-qr",
          "en-NZ": "eee123-qr",
          "en-US": "eee123-qr",
          "es-ES": "eee123-qr",
          "fr": undefined,
          "fr-FR": "eee123-qr",
          "it-IT": "eee123-qr",
          "nl-NL": "eee123-qr",
          "pt-PT": "eee123-qr",
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
                "value": 10000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "eee123-qr-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 10000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "eee123-qr-green",
          },
        ],
      }
    `);
  });

  it(`should return a eee123Qr preset when built for graphql`, () => {
    const eee123QrPresetGraphql = eee123Qr().buildGraphql<TProductDraft>();
    expect(eee123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "demolition-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Leistungsstarker Abbruchhammer für effizientes Brechen und Abbrucharbeiten in Bauprojekten.",
          },
          {
            "locale": "it-IT",
            "value": "Potente martello demolitore progettato per compiti efficienti di demolizione e frantumazione in progetti edili.",
          },
          {
            "locale": "nl-NL",
            "value": "Krachtige sloophamer ontworpen voor efficiënt breken en slopen in bouwprojecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Marteau de démolition puissant conçu pour des tâches de casse et de démolition efficaces dans les projets de construction.",
          },
          {
            "locale": "en-AU",
            "value": "Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.",
          },
          {
            "locale": "es-ES",
            "value": "Martillo de demolición potente diseñado para tareas eficientes de rotura y demolición en proyectos de construcción.",
          },
          {
            "locale": "en-GB",
            "value": "Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.",
          },
          {
            "locale": "en-NZ",
            "value": "Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Martelo demolidor potente projetado para tarefas eficientes de quebra e demolição em projetos de construção.",
          },
          {
            "locale": "en-US",
            "value": "Powerful demolition hammer designed for efficient breaking and demolition tasks in construction projects.",
          },
        ],
        "key": "eee123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "10000",
            },
            {
              "name": "color",
              "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "eee123-qr-red",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "EEE123 QR Abbruchhammer",
          },
          {
            "locale": "it-IT",
            "value": "EEE123 QR Martello Demolitore",
          },
          {
            "locale": "nl-NL",
            "value": "EEE123 QR Sloophamer",
          },
          {
            "locale": "fr-FR",
            "value": "EEE123 QR Marteau de démolition",
          },
          {
            "locale": "en-AU",
            "value": "EEE123 QR Demolition Hammer",
          },
          {
            "locale": "es-ES",
            "value": "EEE123 QR Martillo de demolición",
          },
          {
            "locale": "en-GB",
            "value": "EEE123 QR Demolition Hammer",
          },
          {
            "locale": "en-NZ",
            "value": "EEE123 QR Demolition Hammer",
          },
          {
            "locale": "pt-PT",
            "value": "EEE123 QR Martelo Demolidor",
          },
          {
            "locale": "en-US",
            "value": "EEE123 QR Demolition Hammer",
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
            "value": "eee123-qr",
          },
          {
            "locale": "it-IT",
            "value": "eee123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "eee123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "eee123-qr",
          },
          {
            "locale": "en-AU",
            "value": "eee123-qr",
          },
          {
            "locale": "es-ES",
            "value": "eee123-qr",
          },
          {
            "locale": "en-GB",
            "value": "eee123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "eee123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "eee123-qr",
          },
          {
            "locale": "en-US",
            "value": "eee123-qr",
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
                "value": "10000",
              },
              {
                "name": "color",
                "value": "{"key":"BLUE","label":{"de-DE":"Blau","it-IT":"Blu","nl-NL":"Blauw","fr-FR":"Bleu","en-AU":"Blue","es-ES":"Azul","en-GB":"Blue","en-NZ":"Blue","pt-PT":"Azul","en-US":"Blue"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "eee123-qr-blue",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "10000",
              },
              {
                "name": "color",
                "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/eee123-qr-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "eee123-qr-green",
            "staged": true,
          },
        ],
      }
    `);
  });
});
