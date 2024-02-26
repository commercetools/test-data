import type { TProductDraft } from '../../../types';
import pinAndBushingKit from './pin-and-bushing-kit';

describe(`with pinAndBushingKit preset`, () => {
  it(`should return a pinAndBushingKit preset`, () => {
    const pinAndBushingKitPreset = pinAndBushingKit().build<TProductDraft>();
    expect(pinAndBushingKitPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "spare-parts",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Für Gelenke in Armen und Schaufeln von Baggern und Ladern.",
          "en": undefined,
          "en-US": "For joints in arms and buckets of excavators and loaders.",
          "es-ES": "Para articulaciones en brazos y cucharones de excavadoras y cargadoras.",
          "fr": undefined,
          "fr-FR": "Pour les articulations des bras et des godets des excavatrices et des chargeurs.",
          "it-IT": "Per giunti su bracci e benne di escavatori e caricatrici.",
          "nl-NL": "Voor gewrichten in armen en bakken van graafmachines en laders.",
          "pt-PT": "Para articulações em braços e baldes de escavadeiras e carregadeiras.",
        },
        "key": "pin-and-bushing-kit",
        "masterVariant": {
          "assets": undefined,
          "attributes": [],
          "images": [
            {
              "dimensions": {
                "h": 1024,
                "w": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pin-and-bushing-kit.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "pin-and-bushing-kit",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Stift- und Buchsensatz",
          "en": undefined,
          "en-US": "Pin and Bushing Kit",
          "es-ES": "Kit de pasadores y casquillos",
          "fr": undefined,
          "fr-FR": "Kit de goupilles et de bagues",
          "it-IT": "Kit di perni e boccole",
          "nl-NL": "Pen- en bussenset",
          "pt-PT": "Kit de pinos e buchas",
        },
        "priceMode": undefined,
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "pin-and-bushing-kit",
          "en": undefined,
          "en-US": "pin-and-bushing-kit",
          "es-ES": "pin-and-bushing-kit",
          "fr": undefined,
          "fr-FR": "pin-and-bushing-kit",
          "it-IT": "pin-and-bushing-kit",
          "nl-NL": "pin-and-bushing-kit",
          "pt-PT": "pin-and-bushing-kit",
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a pinAndBushingKit preset when built for graphql`, () => {
    const pinAndBushingKitPresetGraphql =
      pinAndBushingKit().buildGraphql<TProductDraft>();
    expect(pinAndBushingKitPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "spare-parts",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Für Gelenke in Armen und Schaufeln von Baggern und Ladern.",
          },
          {
            "locale": "it-IT",
            "value": "Per giunti su bracci e benne di escavatori e caricatrici.",
          },
          {
            "locale": "nl-NL",
            "value": "Voor gewrichten in armen en bakken van graafmachines en laders.",
          },
          {
            "locale": "fr-FR",
            "value": "Pour les articulations des bras et des godets des excavatrices et des chargeurs.",
          },
          {
            "locale": "es-ES",
            "value": "Para articulaciones en brazos y cucharones de excavadoras y cargadoras.",
          },
          {
            "locale": "pt-PT",
            "value": "Para articulações em braços e baldes de escavadeiras e carregadeiras.",
          },
          {
            "locale": "en-US",
            "value": "For joints in arms and buckets of excavators and loaders.",
          },
        ],
        "key": "pin-and-bushing-kit",
        "masterVariant": {
          "assets": undefined,
          "attributes": [],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pin-and-bushing-kit.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "pin-and-bushing-kit",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Stift- und Buchsensatz",
          },
          {
            "locale": "it-IT",
            "value": "Kit di perni e boccole",
          },
          {
            "locale": "nl-NL",
            "value": "Pen- en bussenset",
          },
          {
            "locale": "fr-FR",
            "value": "Kit de goupilles et de bagues",
          },
          {
            "locale": "es-ES",
            "value": "Kit de pasadores y casquillos",
          },
          {
            "locale": "pt-PT",
            "value": "Kit de pinos e buchas",
          },
          {
            "locale": "en-US",
            "value": "Pin and Bushing Kit",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "pin-and-bushing-kit",
          },
          {
            "locale": "it-IT",
            "value": "pin-and-bushing-kit",
          },
          {
            "locale": "nl-NL",
            "value": "pin-and-bushing-kit",
          },
          {
            "locale": "fr-FR",
            "value": "pin-and-bushing-kit",
          },
          {
            "locale": "es-ES",
            "value": "pin-and-bushing-kit",
          },
          {
            "locale": "pt-PT",
            "value": "pin-and-bushing-kit",
          },
          {
            "locale": "en-US",
            "value": "pin-and-bushing-kit",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
