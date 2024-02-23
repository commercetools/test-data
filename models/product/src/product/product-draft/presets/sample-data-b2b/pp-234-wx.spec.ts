import type { TProductDraft } from '../../../types';
import pp234Wx from './pp-234-wx';

describe(`with pp234Wx preset`, () => {
  it(`should return a pp234Wx preset`, () => {
    const pp234WxPreset = pp234Wx().build<TProductDraft>();
    expect(pp234WxPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Spezialisierter Schienenradbagger für effiziente Arbeiten auf Eisenbahngleisen.",
          "en": undefined,
          "en-AU": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          "en-GB": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          "en-NZ": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          "en-UK": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          "en-US": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          "es-ES": "Excavadora de ruedas especializada para operaciones eficientes en vías férreas.",
          "fr": undefined,
          "fr-FR": "Excavatrice sur roues spécialisée pour des opérations efficaces sur les voies ferrées.",
          "it-IT": "Escavatore su ruote specializzato per ferrovie per operazioni efficienti sui binari ferroviari.",
          "nl-NL": "Gespecialiseerde spoorweg wiellader graafmachine voor efficiënte operaties op spoorwegen.",
          "pt-PT": "Escavadeira com rodas especializada para ferrovias para operações eficientes em trilhos ferroviários.",
        },
        "key": "pp234-wx",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "pp234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "PP234 WX Railroad Schienenradbagger",
          "en": undefined,
          "en-AU": "PP234 WX Railroad Railroad Wheeled Excavator",
          "en-GB": "PP234 WX Railroad Railroad Wheeled Excavator",
          "en-NZ": "PP234 WX Railroad Railroad Wheeled Excavator",
          "en-UK": "PP234 WX Railroad Railroad Wheeled Excavator",
          "en-US": "PP234 WX Railroad Railroad Wheeled Excavator",
          "es-ES": "PP234 WX Railroad Excavadora de ruedas para ferrocarril",
          "fr": undefined,
          "fr-FR": "PP234 WX Railroad Excavatrice sur roues pour chemin de fer",
          "it-IT": "PP234 WX Escavatore su Ruote per Ferrovie",
          "nl-NL": "PP234 WX Spoorweg Wiellader Graafmachine",
          "pt-PT": "PP234 WX Escavadeira com Rodas para Ferrovias",
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
          "de-DE": "pp234-wx",
          "en": undefined,
          "en-AU": "pp234-wx",
          "en-GB": "pp234-wx",
          "en-NZ": "pp234-wx",
          "en-UK": "pp234-wx",
          "en-US": "pp234-wx",
          "es-ES": "pp234-wx",
          "fr": undefined,
          "fr-FR": "pp234-wx",
          "it-IT": "pp234-wx",
          "nl-NL": "pp234-wx",
          "pt-PT": "pp234-wx",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "pp234-wx-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "pp234-wx-2023",
          },
        ],
      }
    `);
  });

  it(`should return a pp234Wx preset when built for graphql`, () => {
    const pp234WxPresetGraphql = pp234Wx().buildGraphql<TProductDraft>();
    expect(pp234WxPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Spezialisierter Schienenradbagger für effiziente Arbeiten auf Eisenbahngleisen.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore su ruote specializzato per ferrovie per operazioni efficienti sui binari ferroviari.",
          },
          {
            "locale": "en-UK",
            "value": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          },
          {
            "locale": "nl-NL",
            "value": "Gespecialiseerde spoorweg wiellader graafmachine voor efficiënte operaties op spoorwegen.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrice sur roues spécialisée pour des opérations efficaces sur les voies ferrées.",
          },
          {
            "locale": "en-AU",
            "value": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora de ruedas especializada para operaciones eficientes en vías férreas.",
          },
          {
            "locale": "en-GB",
            "value": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          },
          {
            "locale": "en-NZ",
            "value": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira com rodas especializada para ferrovias para operações eficientes em trilhos ferroviários.",
          },
          {
            "locale": "en-US",
            "value": "Specialized railroad wheeled excavator for efficient operations on railway tracks.",
          },
        ],
        "key": "pp234-wx",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "pp234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "PP234 WX Railroad Schienenradbagger",
          },
          {
            "locale": "it-IT",
            "value": "PP234 WX Escavatore su Ruote per Ferrovie",
          },
          {
            "locale": "en-UK",
            "value": "PP234 WX Railroad Railroad Wheeled Excavator",
          },
          {
            "locale": "nl-NL",
            "value": "PP234 WX Spoorweg Wiellader Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "PP234 WX Railroad Excavatrice sur roues pour chemin de fer",
          },
          {
            "locale": "en-AU",
            "value": "PP234 WX Railroad Railroad Wheeled Excavator",
          },
          {
            "locale": "es-ES",
            "value": "PP234 WX Railroad Excavadora de ruedas para ferrocarril",
          },
          {
            "locale": "en-GB",
            "value": "PP234 WX Railroad Railroad Wheeled Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "PP234 WX Railroad Railroad Wheeled Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "PP234 WX Escavadeira com Rodas para Ferrovias",
          },
          {
            "locale": "en-US",
            "value": "PP234 WX Railroad Railroad Wheeled Excavator",
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
            "value": "pp234-wx",
          },
          {
            "locale": "it-IT",
            "value": "pp234-wx",
          },
          {
            "locale": "en-UK",
            "value": "pp234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "pp234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "pp234-wx",
          },
          {
            "locale": "en-AU",
            "value": "pp234-wx",
          },
          {
            "locale": "es-ES",
            "value": "pp234-wx",
          },
          {
            "locale": "en-GB",
            "value": "pp234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "pp234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "pp234-wx",
          },
          {
            "locale": "en-US",
            "value": "pp234-wx",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "pp234-wx-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pp234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "pp234-wx-2023",
          },
        ],
      }
    `);
  });
});
