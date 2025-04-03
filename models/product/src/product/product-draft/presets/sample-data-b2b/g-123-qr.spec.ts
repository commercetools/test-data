import type { TProductDraft } from '../../../types';
import g123Qr from './g-123-qr';

describe(`with g123Qr preset`, () => {
  it(`should return a g123Qr preset`, () => {
    const g123QrPreset = g123Qr().build<TProductDraft>();
    expect(g123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "earthmoving-bulldozers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Leistungsstarker Erdbewegungsbagger für effiziente Geländemanipulation und Aushub.",
          "en": undefined,
          "en-AU": "Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.",
          "en-GB": "Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.",
          "en-NZ": "Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.",
          "en-US": "Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.",
          "es-ES": "Topadora de movimiento de tierras potente para la manipulación eficiente del terreno y la excavación.",
          "fr": undefined,
          "fr-FR": "Bulldozer de terrassement puissant pour une manipulation efficace du terrain et l'excavation.",
          "it-IT": "Potente bulldozer per movimento terra per la manipolazione efficiente del terreno e l'escavazione.",
          "nl-NL": "Krachtige aardeverzet bulldozer voor efficiënte terreinmanipulatie en graafwerkzaamheden.",
          "pt-PT": "Trator de esteiras poderoso para movimentação eficiente de terra e escavação.",
        },
        "key": "g123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 700,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "g123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "G123 QR Erdbewegungsbagger",
          "en": undefined,
          "en-AU": "G123 QR Earthmoving Bulldozer",
          "en-GB": "G123 QR Earthmoving Bulldozer",
          "en-NZ": "G123 QR Earthmoving Bulldozer",
          "en-US": "G123 QR Earthmoving Bulldozer",
          "es-ES": "G123 QR Topadora de movimiento de tierras",
          "fr": undefined,
          "fr-FR": "G123 QR Bulldozer de terrassement",
          "it-IT": "G123 QR Bulldozer per Movimento Terra",
          "nl-NL": "G123 QR Aardeverzet Bulldozer",
          "pt-PT": "G123 QR Trator de Esteiras para Movimentação de Terra",
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
          "de-DE": "g123-qr",
          "en": undefined,
          "en-AU": "g123-qr",
          "en-GB": "g123-qr",
          "en-NZ": "g123-qr",
          "en-US": "g123-qr",
          "es-ES": "g123-qr",
          "fr": undefined,
          "fr-FR": "g123-qr",
          "it-IT": "g123-qr",
          "nl-NL": "g123-qr",
          "pt-PT": "g123-qr",
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
                "value": 700,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "g123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 700,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "g123-qr-2023",
          },
        ],
      }
    `);
  });

  it(`should return a g123Qr preset when built for graphql`, () => {
    const g123QrPresetGraphql = g123Qr().buildGraphql<TProductDraft>();
    expect(g123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "earthmoving-bulldozers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Leistungsstarker Erdbewegungsbagger für effiziente Geländemanipulation und Aushub.",
          },
          {
            "locale": "it-IT",
            "value": "Potente bulldozer per movimento terra per la manipolazione efficiente del terreno e l'escavazione.",
          },
          {
            "locale": "nl-NL",
            "value": "Krachtige aardeverzet bulldozer voor efficiënte terreinmanipulatie en graafwerkzaamheden.",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozer de terrassement puissant pour une manipulation efficace du terrain et l'excavation.",
          },
          {
            "locale": "en-AU",
            "value": "Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.",
          },
          {
            "locale": "es-ES",
            "value": "Topadora de movimiento de tierras potente para la manipulación eficiente del terreno y la excavación.",
          },
          {
            "locale": "en-GB",
            "value": "Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.",
          },
          {
            "locale": "en-NZ",
            "value": "Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.",
          },
          {
            "locale": "pt-PT",
            "value": "Trator de esteiras poderoso para movimentação eficiente de terra e escavação.",
          },
          {
            "locale": "en-US",
            "value": "Powerful earthmoving bulldozer for efficient terrain manipulation and excavation.",
          },
        ],
        "key": "g123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "700",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "g123-qr-2015",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "G123 QR Erdbewegungsbagger",
          },
          {
            "locale": "it-IT",
            "value": "G123 QR Bulldozer per Movimento Terra",
          },
          {
            "locale": "nl-NL",
            "value": "G123 QR Aardeverzet Bulldozer",
          },
          {
            "locale": "fr-FR",
            "value": "G123 QR Bulldozer de terrassement",
          },
          {
            "locale": "en-AU",
            "value": "G123 QR Earthmoving Bulldozer",
          },
          {
            "locale": "es-ES",
            "value": "G123 QR Topadora de movimiento de tierras",
          },
          {
            "locale": "en-GB",
            "value": "G123 QR Earthmoving Bulldozer",
          },
          {
            "locale": "en-NZ",
            "value": "G123 QR Earthmoving Bulldozer",
          },
          {
            "locale": "pt-PT",
            "value": "G123 QR Trator de Esteiras para Movimentação de Terra",
          },
          {
            "locale": "en-US",
            "value": "G123 QR Earthmoving Bulldozer",
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
            "value": "g123-qr",
          },
          {
            "locale": "it-IT",
            "value": "g123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "g123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "g123-qr",
          },
          {
            "locale": "en-AU",
            "value": "g123-qr",
          },
          {
            "locale": "es-ES",
            "value": "g123-qr",
          },
          {
            "locale": "en-GB",
            "value": "g123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "g123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "g123-qr",
          },
          {
            "locale": "en-US",
            "value": "g123-qr",
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
                "value": "700",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "g123-qr-2019",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "700",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/g123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "g123-qr-2023",
            "staged": true,
          },
        ],
      }
    `);
  });
});
