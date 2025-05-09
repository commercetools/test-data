import type { TProductDraft } from '../../../types';
import n123Qr from './n-123-qr';

describe(`with n123Qr preset`, () => {
  it(`should return a n123Qr preset`, () => {
    const n123QrPreset = n123Qr().build<TProductDraft>();
    expect(n123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "quarry-loaders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Robuster Steinbruchlader für effiziente Materialverarbeitung im Bergbau und Bauwesen.",
          "en": undefined,
          "en-AU": "Robust quarry loader designed for efficient material handling in mining and construction.",
          "en-GB": "Robust quarry loader designed for efficient material handling in mining and construction.",
          "en-NZ": "Robust quarry loader designed for efficient material handling in mining and construction.",
          "en-US": "Robust quarry loader designed for efficient material handling in mining and construction.",
          "es-ES": "Cargador de cantera resistente diseñado para la manipulación eficiente de materiales en minería y construcción.",
          "fr": undefined,
          "fr-FR": "Chargeur de carrière robuste conçu pour la manipulation efficace des matériaux dans l'exploitation minière et la construction.",
          "it-IT": "Caricatore robusto per cave progettato per la manipolazione efficiente di materiali in miniere e costruzioni.",
          "nl-NL": "Robuuste steengroeve lader ontworpen voor efficiënte materiaalhantering in mijnbouw en bouw.",
          "pt-PT": "Carregadeira robusta para pedreiras projetada para manuseio eficiente de materiais em mineração e construção.",
        },
        "key": "n123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 550,
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
                "key": "wheeled",
                "label": "Wheeled",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "n123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "N123 QR Steinbruchlader",
          "en": undefined,
          "en-AU": "N123 QR Quarry Loader",
          "en-GB": "N123 QR Quarry Loader",
          "en-NZ": "N123 QR Quarry Loader",
          "en-US": "N123 QR Quarry Loader",
          "es-ES": "N123 QR Cargador de cantera",
          "fr": undefined,
          "fr-FR": "N123 QR Chargeur de carrière",
          "it-IT": "N123 QR Caricatore per Cave",
          "nl-NL": "N123 QR Steengroeve Lader",
          "pt-PT": "N123 QR Carregadeira de Pedreira",
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
          "de-DE": "n123-qr",
          "en": undefined,
          "en-AU": "n123-qr",
          "en-GB": "n123-qr",
          "en-NZ": "n123-qr",
          "en-US": "n123-qr",
          "es-ES": "n123-qr",
          "fr": undefined,
          "fr-FR": "n123-qr",
          "it-IT": "n123-qr",
          "nl-NL": "n123-qr",
          "pt-PT": "n123-qr",
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
                "value": 550,
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
                  "key": "wheeled",
                  "label": "Wheeled",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "n123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 550,
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
                  "key": "wheeled",
                  "label": "Wheeled",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "n123-qr-2023",
          },
        ],
      }
    `);
  });

  it(`should return a n123Qr preset when built for graphql`, () => {
    const n123QrPresetGraphql = n123Qr().buildGraphql<TProductDraft>();
    expect(n123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "quarry-loaders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Robuster Steinbruchlader für effiziente Materialverarbeitung im Bergbau und Bauwesen.",
          },
          {
            "locale": "it-IT",
            "value": "Caricatore robusto per cave progettato per la manipolazione efficiente di materiali in miniere e costruzioni.",
          },
          {
            "locale": "nl-NL",
            "value": "Robuuste steengroeve lader ontworpen voor efficiënte materiaalhantering in mijnbouw en bouw.",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeur de carrière robuste conçu pour la manipulation efficace des matériaux dans l'exploitation minière et la construction.",
          },
          {
            "locale": "en-AU",
            "value": "Robust quarry loader designed for efficient material handling in mining and construction.",
          },
          {
            "locale": "es-ES",
            "value": "Cargador de cantera resistente diseñado para la manipulación eficiente de materiales en minería y construcción.",
          },
          {
            "locale": "en-GB",
            "value": "Robust quarry loader designed for efficient material handling in mining and construction.",
          },
          {
            "locale": "en-NZ",
            "value": "Robust quarry loader designed for efficient material handling in mining and construction.",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeira robusta para pedreiras projetada para manuseio eficiente de materiais em mineração e construção.",
          },
          {
            "locale": "en-US",
            "value": "Robust quarry loader designed for efficient material handling in mining and construction.",
          },
        ],
        "key": "n123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "550",
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
              "value": "{"key":"wheeled","label":"Wheeled"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "n123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "N123 QR Steinbruchlader",
          },
          {
            "locale": "it-IT",
            "value": "N123 QR Caricatore per Cave",
          },
          {
            "locale": "nl-NL",
            "value": "N123 QR Steengroeve Lader",
          },
          {
            "locale": "fr-FR",
            "value": "N123 QR Chargeur de carrière",
          },
          {
            "locale": "en-AU",
            "value": "N123 QR Quarry Loader",
          },
          {
            "locale": "es-ES",
            "value": "N123 QR Cargador de cantera",
          },
          {
            "locale": "en-GB",
            "value": "N123 QR Quarry Loader",
          },
          {
            "locale": "en-NZ",
            "value": "N123 QR Quarry Loader",
          },
          {
            "locale": "pt-PT",
            "value": "N123 QR Carregadeira de Pedreira",
          },
          {
            "locale": "en-US",
            "value": "N123 QR Quarry Loader",
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
            "value": "n123-qr",
          },
          {
            "locale": "it-IT",
            "value": "n123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "n123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "n123-qr",
          },
          {
            "locale": "en-AU",
            "value": "n123-qr",
          },
          {
            "locale": "es-ES",
            "value": "n123-qr",
          },
          {
            "locale": "en-GB",
            "value": "n123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "n123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "n123-qr",
          },
          {
            "locale": "en-US",
            "value": "n123-qr",
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
                "value": "550",
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
                "value": "{"key":"wheeled","label":"Wheeled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "n123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "550",
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
                "value": "{"key":"wheeled","label":"Wheeled"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/n123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "n123-qr-2023",
          },
        ],
      }
    `);
  });
});
