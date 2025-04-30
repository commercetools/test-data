import type { TProductDraft } from '../../../types';
import hydraulicHose from './hydraulic-hose';

describe(`with hydraulicHose preset`, () => {
  it(`should return a hydraulicHose preset`, () => {
    const hydraulicHosePreset = hydraulicHose().build<TProductDraft>();
    expect(hydraulicHosePreset).toMatchInlineSnapshot(`
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
          "de-DE": "Flexibler Schlauch zum Übertragen von Hydraulikflüssigkeit zwischen Komponenten.",
          "en": undefined,
          "en-AU": "Flexible hose to convey hydraulic fluid between components.",
          "en-GB": "Flexible hose to convey hydraulic fluid between components.",
          "en-NZ": "Flexible hose to convey hydraulic fluid between components.",
          "en-US": "Flexible hose to convey hydraulic fluid between components.",
          "es-ES": "Manguera flexible para transportar fluido hidráulico entre componentes.",
          "fr": undefined,
          "fr-FR": "Tuyau flexible pour transporter le fluide hydraulique entre les composants.",
          "it-IT": "Tubo flessibile per convogliare il fluido idraulico tra i componenti.",
          "nl-NL": "Flexibele slang voor het overbrengen van hydraulische vloeistof tussen componenten.",
          "pt-PT": "Mangueira flexível para conduzir fluido hidráulico entre componentes.",
        },
        "key": "hydraulic-hose",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hydraulic-hose.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "hydraulic-hose",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Hydraulikschlauch",
          "en": undefined,
          "en-AU": "Hydraulic Hose",
          "en-GB": "Hydraulic Hose",
          "en-NZ": "Hydraulic Hose",
          "en-US": "Hydraulic Hose",
          "es-ES": "Manguera hidráulica",
          "fr": undefined,
          "fr-FR": "Tuyau hydraulique",
          "it-IT": "Tubo idraulico",
          "nl-NL": "Hydraulische slang",
          "pt-PT": "Mangueira hidráulica",
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
          "de-DE": "hydraulic-hose",
          "en": undefined,
          "en-AU": "hydraulic-hose",
          "en-GB": "hydraulic-hose",
          "en-NZ": "hydraulic-hose",
          "en-US": "hydraulic-hose",
          "es-ES": "hydraulic-hose",
          "fr": undefined,
          "fr-FR": "hydraulic-hose",
          "it-IT": "hydraulic-hose",
          "nl-NL": "hydraulic-hose",
          "pt-PT": "hydraulic-hose",
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

  it(`should return a hydraulicHose preset when built for graphql`, () => {
    const hydraulicHosePresetGraphql =
      hydraulicHose().buildGraphql<TProductDraft>();
    expect(hydraulicHosePresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Flexibler Schlauch zum Übertragen von Hydraulikflüssigkeit zwischen Komponenten.",
          },
          {
            "locale": "it-IT",
            "value": "Tubo flessibile per convogliare il fluido idraulico tra i componenti.",
          },
          {
            "locale": "nl-NL",
            "value": "Flexibele slang voor het overbrengen van hydraulische vloeistof tussen componenten.",
          },
          {
            "locale": "fr-FR",
            "value": "Tuyau flexible pour transporter le fluide hydraulique entre les composants.",
          },
          {
            "locale": "es-ES",
            "value": "Manguera flexible para transportar fluido hidráulico entre componentes.",
          },
          {
            "locale": "pt-PT",
            "value": "Mangueira flexível para conduzir fluido hidráulico entre componentes.",
          },
          {
            "locale": "en-US",
            "value": "Flexible hose to convey hydraulic fluid between components.",
          },
          {
            "locale": "en-GB",
            "value": "Flexible hose to convey hydraulic fluid between components.",
          },
          {
            "locale": "en-AU",
            "value": "Flexible hose to convey hydraulic fluid between components.",
          },
          {
            "locale": "en-NZ",
            "value": "Flexible hose to convey hydraulic fluid between components.",
          },
        ],
        "key": "hydraulic-hose",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hydraulic-hose.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "hydraulic-hose",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Hydraulikschlauch",
          },
          {
            "locale": "it-IT",
            "value": "Tubo idraulico",
          },
          {
            "locale": "nl-NL",
            "value": "Hydraulische slang",
          },
          {
            "locale": "fr-FR",
            "value": "Tuyau hydraulique",
          },
          {
            "locale": "es-ES",
            "value": "Manguera hidráulica",
          },
          {
            "locale": "pt-PT",
            "value": "Mangueira hidráulica",
          },
          {
            "locale": "en-US",
            "value": "Hydraulic Hose",
          },
          {
            "locale": "en-GB",
            "value": "Hydraulic Hose",
          },
          {
            "locale": "en-AU",
            "value": "Hydraulic Hose",
          },
          {
            "locale": "en-NZ",
            "value": "Hydraulic Hose",
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
            "value": "hydraulic-hose",
          },
          {
            "locale": "it-IT",
            "value": "hydraulic-hose",
          },
          {
            "locale": "nl-NL",
            "value": "hydraulic-hose",
          },
          {
            "locale": "fr-FR",
            "value": "hydraulic-hose",
          },
          {
            "locale": "es-ES",
            "value": "hydraulic-hose",
          },
          {
            "locale": "pt-PT",
            "value": "hydraulic-hose",
          },
          {
            "locale": "en-US",
            "value": "hydraulic-hose",
          },
          {
            "locale": "en-GB",
            "value": "hydraulic-hose",
          },
          {
            "locale": "en-AU",
            "value": "hydraulic-hose",
          },
          {
            "locale": "en-NZ",
            "value": "hydraulic-hose",
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
