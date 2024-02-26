import type { TProductDraft } from '../../../types';
import yy123Qr from './yy-123-qr';

describe(`with yy123Qr preset`, () => {
  it(`should return a yy123Qr preset`, () => {
    const yy123QrPreset = yy123Qr().build<TProductDraft>();
    expect(yy123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "blasthole-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Leistungsstarker Blasthole-Bohrer für effizientes Bohren in Bergbauoperationen.",
          "en": undefined,
          "en-AU": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          "en-GB": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          "en-NZ": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          "en-UK": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          "en-US": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          "es-ES": "Perforadora de agujeros de voladura potente diseñada para perforar de manera eficiente en operaciones mineras.",
          "fr": undefined,
          "fr-FR": "Forage de trou de mine puissant conçu pour le forage efficace dans les opérations minières.",
          "it-IT": "Potente trapano per fori di miniera progettato per trapanazioni efficienti in operazioni minerarie.",
          "nl-NL": "Krachtige boorgatboor ontworpen voor efficiënt boren in mijnbouwoperaties.",
          "pt-PT": "Perfuratriz potente projetada para perfuração eficiente em operações de mineração.",
        },
        "key": "yy123-qr",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "yy123-qr-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "YY123 QR Blasthole-Bohrer",
          "en": undefined,
          "en-AU": "YY123 QR Blasthole Drill",
          "en-GB": "YY123 QR Blasthole Drill",
          "en-NZ": "YY123 QR Blasthole Drill",
          "en-UK": "YY123 QR Blasthole Drill",
          "en-US": "YY123 QR Blasthole Drill",
          "es-ES": "YY123 QR Perforadora de agujeros de voladura",
          "fr": undefined,
          "fr-FR": "YY123 QR Forage de trou de mine",
          "it-IT": "YY123 QR Trapano per Fori di Miniera",
          "nl-NL": "YY123 QR Boorgatboor",
          "pt-PT": "YY123 QR Perfuratriz para Furos de Explosão",
        },
        "priceMode": undefined,
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "yy123-qr",
          "en": undefined,
          "en-AU": "yy123-qr",
          "en-GB": "yy123-qr",
          "en-NZ": "yy123-qr",
          "en-UK": "yy123-qr",
          "en-US": "yy123-qr",
          "es-ES": "yy123-qr",
          "fr": undefined,
          "fr-FR": "yy123-qr",
          "it-IT": "yy123-qr",
          "nl-NL": "yy123-qr",
          "pt-PT": "yy123-qr",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "yy123-qr-blue",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "yy123-qr-green",
          },
        ],
      }
    `);
  });

  it(`should return a yy123Qr preset when built for graphql`, () => {
    const yy123QrPresetGraphql = yy123Qr().buildGraphql<TProductDraft>();
    expect(yy123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "blasthole-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Leistungsstarker Blasthole-Bohrer für effizientes Bohren in Bergbauoperationen.",
          },
          {
            "locale": "it-IT",
            "value": "Potente trapano per fori di miniera progettato per trapanazioni efficienti in operazioni minerarie.",
          },
          {
            "locale": "en-UK",
            "value": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          },
          {
            "locale": "nl-NL",
            "value": "Krachtige boorgatboor ontworpen voor efficiënt boren in mijnbouwoperaties.",
          },
          {
            "locale": "fr-FR",
            "value": "Forage de trou de mine puissant conçu pour le forage efficace dans les opérations minières.",
          },
          {
            "locale": "en-AU",
            "value": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          },
          {
            "locale": "es-ES",
            "value": "Perforadora de agujeros de voladura potente diseñada para perforar de manera eficiente en operaciones mineras.",
          },
          {
            "locale": "en-GB",
            "value": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          },
          {
            "locale": "en-NZ",
            "value": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Perfuratriz potente projetada para perfuração eficiente em operações de mineração.",
          },
          {
            "locale": "en-US",
            "value": "Powerful blasthole drill designed for efficient drilling in mining operations.",
          },
        ],
        "key": "yy123-qr",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "yy123-qr-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "YY123 QR Blasthole-Bohrer",
          },
          {
            "locale": "it-IT",
            "value": "YY123 QR Trapano per Fori di Miniera",
          },
          {
            "locale": "en-UK",
            "value": "YY123 QR Blasthole Drill",
          },
          {
            "locale": "nl-NL",
            "value": "YY123 QR Boorgatboor",
          },
          {
            "locale": "fr-FR",
            "value": "YY123 QR Forage de trou de mine",
          },
          {
            "locale": "en-AU",
            "value": "YY123 QR Blasthole Drill",
          },
          {
            "locale": "es-ES",
            "value": "YY123 QR Perforadora de agujeros de voladura",
          },
          {
            "locale": "en-GB",
            "value": "YY123 QR Blasthole Drill",
          },
          {
            "locale": "en-NZ",
            "value": "YY123 QR Blasthole Drill",
          },
          {
            "locale": "pt-PT",
            "value": "YY123 QR Perfuratriz para Furos de Explosão",
          },
          {
            "locale": "en-US",
            "value": "YY123 QR Blasthole Drill",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "yy123-qr",
          },
          {
            "locale": "it-IT",
            "value": "yy123-qr",
          },
          {
            "locale": "en-UK",
            "value": "yy123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "yy123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "yy123-qr",
          },
          {
            "locale": "en-AU",
            "value": "yy123-qr",
          },
          {
            "locale": "es-ES",
            "value": "yy123-qr",
          },
          {
            "locale": "en-GB",
            "value": "yy123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "yy123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "yy123-qr",
          },
          {
            "locale": "en-US",
            "value": "yy123-qr",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "yy123-qr-blue",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/yy123-qr-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "yy123-qr-green",
          },
        ],
      }
    `);
  });
});
