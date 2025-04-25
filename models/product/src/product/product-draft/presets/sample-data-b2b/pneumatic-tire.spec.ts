import type { TProductDraft } from '../../../types';
import pneumaticTire from './pneumatic-tire';

describe(`with pneumaticTire preset`, () => {
  it(`should return a pneumaticTire preset`, () => {
    const pneumaticTirePreset = pneumaticTire().build<TProductDraft>();
    expect(pneumaticTirePreset).toMatchInlineSnapshot(`
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
          "de-DE": "Gummireifen für Lader und Lkw.",
          "en": undefined,
          "en-AU": "Rubber tire for loaders and trucks.",
          "en-GB": "Rubber tire for loaders and trucks.",
          "en-NZ": "Rubber tire for loaders and trucks.",
          "en-US": "Rubber tire for loaders and trucks.",
          "es-ES": "Neumático de goma para cargadores y camiones.",
          "fr": undefined,
          "fr-FR": "Pneu en caoutchouc pour chargeurs et camions.",
          "it-IT": "Pneumatico in gomma per caricatori e camion.",
          "nl-NL": "Rubberen band voor laders en vrachtwagens.",
          "pt-PT": "Pneu de borracha para carregadeiras e caminhões.",
        },
        "key": "pneumatic-tire",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pneumatic-tire.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "pneumatic-tire",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Luftreifen",
          "en": undefined,
          "en-AU": "Pneumatic Tire",
          "en-GB": "Pneumatic Tire",
          "en-NZ": "Pneumatic Tire",
          "en-US": "Pneumatic Tire",
          "es-ES": "Neumático neumático",
          "fr": undefined,
          "fr-FR": "Pneu pneumatique",
          "it-IT": "Pneumatico pneumatico",
          "nl-NL": "Luchtband",
          "pt-PT": "Pneu pneumático",
        },
        "priceMode": "Standalone",
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "pneumatic-tire",
          "en": undefined,
          "en-AU": "pneumatic-tire",
          "en-GB": "pneumatic-tire",
          "en-NZ": "pneumatic-tire",
          "en-US": "pneumatic-tire",
          "es-ES": "pneumatic-tire",
          "fr": undefined,
          "fr-FR": "pneumatic-tire",
          "it-IT": "pneumatic-tire",
          "nl-NL": "pneumatic-tire",
          "pt-PT": "pneumatic-tire",
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

  it(`should return a pneumaticTire preset when built for graphql`, () => {
    const pneumaticTirePresetGraphql =
      pneumaticTire().buildGraphql<TProductDraft>();
    expect(pneumaticTirePresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "Gummireifen für Lader und Lkw.",
          },
          {
            "locale": "it-IT",
            "value": "Pneumatico in gomma per caricatori e camion.",
          },
          {
            "locale": "nl-NL",
            "value": "Rubberen band voor laders en vrachtwagens.",
          },
          {
            "locale": "fr-FR",
            "value": "Pneu en caoutchouc pour chargeurs et camions.",
          },
          {
            "locale": "es-ES",
            "value": "Neumático de goma para cargadores y camiones.",
          },
          {
            "locale": "pt-PT",
            "value": "Pneu de borracha para carregadeiras e caminhões.",
          },
          {
            "locale": "en-US",
            "value": "Rubber tire for loaders and trucks.",
          },
          {
            "locale": "en-GB",
            "value": "Rubber tire for loaders and trucks.",
          },
          {
            "locale": "en-AU",
            "value": "Rubber tire for loaders and trucks.",
          },
          {
            "locale": "en-NZ",
            "value": "Rubber tire for loaders and trucks.",
          },
        ],
        "key": "pneumatic-tire",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pneumatic-tire.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "pneumatic-tire",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Luftreifen",
          },
          {
            "locale": "it-IT",
            "value": "Pneumatico pneumatico",
          },
          {
            "locale": "nl-NL",
            "value": "Luchtband",
          },
          {
            "locale": "fr-FR",
            "value": "Pneu pneumatique",
          },
          {
            "locale": "es-ES",
            "value": "Neumático neumático",
          },
          {
            "locale": "pt-PT",
            "value": "Pneu pneumático",
          },
          {
            "locale": "en-US",
            "value": "Pneumatic Tire",
          },
          {
            "locale": "en-GB",
            "value": "Pneumatic Tire",
          },
          {
            "locale": "en-AU",
            "value": "Pneumatic Tire",
          },
          {
            "locale": "en-NZ",
            "value": "Pneumatic Tire",
          },
        ],
        "priceMode": "Standalone",
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "pneumatic-tire",
          },
          {
            "locale": "it-IT",
            "value": "pneumatic-tire",
          },
          {
            "locale": "nl-NL",
            "value": "pneumatic-tire",
          },
          {
            "locale": "fr-FR",
            "value": "pneumatic-tire",
          },
          {
            "locale": "es-ES",
            "value": "pneumatic-tire",
          },
          {
            "locale": "pt-PT",
            "value": "pneumatic-tire",
          },
          {
            "locale": "en-US",
            "value": "pneumatic-tire",
          },
          {
            "locale": "en-GB",
            "value": "pneumatic-tire",
          },
          {
            "locale": "en-AU",
            "value": "pneumatic-tire",
          },
          {
            "locale": "en-NZ",
            "value": "pneumatic-tire",
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
