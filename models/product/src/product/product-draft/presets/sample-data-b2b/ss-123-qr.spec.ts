import type { TProductDraft } from '../../../types';
import ss123Qr from './ss-123-qr';

describe(`with ss123Qr preset`, () => {
  it(`should return a ss123Qr preset`, () => {
    const ss123QrPreset = ss123Qr().build<TProductDraft>();
    expect(ss123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tower-cranes",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Hochleistungs-Turmkran für effizientes Heben in Hochhausbau-Projekten.",
          "en": undefined,
          "en-AU": "High-performance tower crane designed for efficient lifting in high-rise construction projects.",
          "en-GB": "High-performance tower crane designed for efficient lifting in high-rise construction projects.",
          "en-NZ": "High-performance tower crane designed for efficient lifting in high-rise construction projects.",
          "en-US": "High-performance tower crane designed for efficient lifting in high-rise construction projects.",
          "es-ES": "Grúa torre de alto rendimiento diseñada para elevación eficiente en proyectos de construcción de rascacielos.",
          "fr": undefined,
          "fr-FR": "Grue de chantier haute performance conçue pour un levage efficace dans les projets de construction de gratte-ciel.",
          "it-IT": "Gru a torre ad alte prestazioni progettata per sollevamenti efficienti in progetti di costruzione di grattacieli.",
          "nl-NL": "Hoogpresterende torenkraan ontworpen voor efficiënt hijsen bij hoogbouwprojecten.",
          "pt-PT": "Grua de torre de alto desempenho projetada para elevação eficiente em projetos de construção de edifícios altos.",
        },
        "key": "ss123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 800,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ss123-qr-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "SS123 QR Turmkran für Hochhausbau",
          "en": undefined,
          "en-AU": "SS123 QR Tower Crane for High-rise Construction",
          "en-GB": "SS123 QR Tower Crane for High-rise Construction",
          "en-NZ": "SS123 QR Tower Crane for High-rise Construction",
          "en-US": "SS123 QR Tower Crane for High-rise Construction",
          "es-ES": "SS123 QR Grúa torre para construcción de rascacielos",
          "fr": undefined,
          "fr-FR": "SS123 QR Grue de chantier pour la construction de gratte-ciel",
          "it-IT": "SS123 QR Gru a Torre per Costruzioni Alte",
          "nl-NL": "SS123 QR Torenkraan voor Hoogbouw",
          "pt-PT": "SS123 QR Grua de Torre para Construção em Altura",
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
          "de-DE": "ss123-qr",
          "en": undefined,
          "en-AU": "ss123-qr",
          "en-GB": "ss123-qr",
          "en-NZ": "ss123-qr",
          "en-US": "ss123-qr",
          "es-ES": "ss123-qr",
          "fr": undefined,
          "fr-FR": "ss123-qr",
          "it-IT": "ss123-qr",
          "nl-NL": "ss123-qr",
          "pt-PT": "ss123-qr",
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
                "value": 800,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ss123-qr-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 800,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ss123-qr-green",
          },
        ],
      }
    `);
  });

  it(`should return a ss123Qr preset when built for graphql`, () => {
    const ss123QrPresetGraphql = ss123Qr().buildGraphql<TProductDraft>();
    expect(ss123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tower-cranes",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Hochleistungs-Turmkran für effizientes Heben in Hochhausbau-Projekten.",
          },
          {
            "locale": "it-IT",
            "value": "Gru a torre ad alte prestazioni progettata per sollevamenti efficienti in progetti di costruzione di grattacieli.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogpresterende torenkraan ontworpen voor efficiënt hijsen bij hoogbouwprojecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Grue de chantier haute performance conçue pour un levage efficace dans les projets de construction de gratte-ciel.",
          },
          {
            "locale": "en-AU",
            "value": "High-performance tower crane designed for efficient lifting in high-rise construction projects.",
          },
          {
            "locale": "es-ES",
            "value": "Grúa torre de alto rendimiento diseñada para elevación eficiente en proyectos de construcción de rascacielos.",
          },
          {
            "locale": "en-GB",
            "value": "High-performance tower crane designed for efficient lifting in high-rise construction projects.",
          },
          {
            "locale": "en-NZ",
            "value": "High-performance tower crane designed for efficient lifting in high-rise construction projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Grua de torre de alto desempenho projetada para elevação eficiente em projetos de construção de edifícios altos.",
          },
          {
            "locale": "en-US",
            "value": "High-performance tower crane designed for efficient lifting in high-rise construction projects.",
          },
        ],
        "key": "ss123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "800",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ss123-qr-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "SS123 QR Turmkran für Hochhausbau",
          },
          {
            "locale": "it-IT",
            "value": "SS123 QR Gru a Torre per Costruzioni Alte",
          },
          {
            "locale": "nl-NL",
            "value": "SS123 QR Torenkraan voor Hoogbouw",
          },
          {
            "locale": "fr-FR",
            "value": "SS123 QR Grue de chantier pour la construction de gratte-ciel",
          },
          {
            "locale": "en-AU",
            "value": "SS123 QR Tower Crane for High-rise Construction",
          },
          {
            "locale": "es-ES",
            "value": "SS123 QR Grúa torre para construcción de rascacielos",
          },
          {
            "locale": "en-GB",
            "value": "SS123 QR Tower Crane for High-rise Construction",
          },
          {
            "locale": "en-NZ",
            "value": "SS123 QR Tower Crane for High-rise Construction",
          },
          {
            "locale": "pt-PT",
            "value": "SS123 QR Grua de Torre para Construção em Altura",
          },
          {
            "locale": "en-US",
            "value": "SS123 QR Tower Crane for High-rise Construction",
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
            "value": "ss123-qr",
          },
          {
            "locale": "it-IT",
            "value": "ss123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "ss123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "ss123-qr",
          },
          {
            "locale": "en-AU",
            "value": "ss123-qr",
          },
          {
            "locale": "es-ES",
            "value": "ss123-qr",
          },
          {
            "locale": "en-GB",
            "value": "ss123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "ss123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "ss123-qr",
          },
          {
            "locale": "en-US",
            "value": "ss123-qr",
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
                "value": "800",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ss123-qr-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "800",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ss123-qr-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ss123-qr-green",
          },
        ],
      }
    `);
  });
});
