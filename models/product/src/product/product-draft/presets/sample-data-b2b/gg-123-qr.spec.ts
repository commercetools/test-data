import type { TProductDraft } from '../../../types';
import gg123Qr from './gg-123-qr';

describe(`with gg123Qr preset`, () => {
  it(`should return a gg123Qr preset`, () => {
    const gg123QrPreset = gg123Qr().build<TProductDraft>();
    expect(gg123QrPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "vibratory-soil-compactors",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Leistungsstarker Vibrationswalze für die effiziente Verdichtung verschiedener Bodentypen.",
          "en": undefined,
          "en-AU": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          "en-GB": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          "en-NZ": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          "en-UK": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          "en-US": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          "es-ES": "Compactador de suelo vibratorio potente para la compactación eficiente de diversos tipos de suelos.",
          "fr": undefined,
          "fr-FR": "Compacteur de sol vibrant puissant pour la compactage efficace de différents types de sols.",
          "it-IT": "Potente compattatore vibrante per terreni per la compattazione efficiente di vari tipi di suolo.",
          "nl-NL": "Krachtige trilbodemverdichter voor efficiënte verdichting van diverse grondsoorten.",
          "pt-PT": "Compactador de solo vibratório potente para compactação eficiente de vários tipos de solo.",
        },
        "key": "gg123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 600,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "gg123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "GG123 QR Vibrationswalze",
          "en": undefined,
          "en-AU": "GG123 QR Vibratory Soil Compactor",
          "en-GB": "GG123 QR Vibratory Soil Compactor",
          "en-NZ": "GG123 QR Vibratory Soil Compactor",
          "en-UK": "GG123 QR Vibratory Soil Compactor",
          "en-US": "GG123 QR Vibratory Soil Compactor",
          "es-ES": "GG123 QR Compactador de suelo vibratorio",
          "fr": undefined,
          "fr-FR": "GG123 QR Compacteur de sol vibrant",
          "it-IT": "GG123 QR Compattatore Vibrante per Terreni",
          "nl-NL": "GG123 QR Trilbodemverdichter",
          "pt-PT": "GG123 QR Compactador de Solo Vibratório",
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
          "de-DE": "gg123-qr",
          "en": undefined,
          "en-AU": "gg123-qr",
          "en-GB": "gg123-qr",
          "en-NZ": "gg123-qr",
          "en-UK": "gg123-qr",
          "en-US": "gg123-qr",
          "es-ES": "gg123-qr",
          "fr": undefined,
          "fr-FR": "gg123-qr",
          "it-IT": "gg123-qr",
          "nl-NL": "gg123-qr",
          "pt-PT": "gg123-qr",
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
                "value": 600,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "gg123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 600,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "gg123-qr-2023",
          },
        ],
      }
    `);
  });

  it(`should return a gg123Qr preset when built for graphql`, () => {
    const gg123QrPresetGraphql = gg123Qr().buildGraphql<TProductDraft>();
    expect(gg123QrPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "vibratory-soil-compactors",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Leistungsstarker Vibrationswalze für die effiziente Verdichtung verschiedener Bodentypen.",
          },
          {
            "locale": "it-IT",
            "value": "Potente compattatore vibrante per terreni per la compattazione efficiente di vari tipi di suolo.",
          },
          {
            "locale": "en-UK",
            "value": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          },
          {
            "locale": "nl-NL",
            "value": "Krachtige trilbodemverdichter voor efficiënte verdichting van diverse grondsoorten.",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteur de sol vibrant puissant pour la compactage efficace de différents types de sols.",
          },
          {
            "locale": "en-AU",
            "value": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          },
          {
            "locale": "es-ES",
            "value": "Compactador de suelo vibratorio potente para la compactación eficiente de diversos tipos de suelos.",
          },
          {
            "locale": "en-GB",
            "value": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          },
          {
            "locale": "en-NZ",
            "value": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          },
          {
            "locale": "pt-PT",
            "value": "Compactador de solo vibratório potente para compactação eficiente de vários tipos de solo.",
          },
          {
            "locale": "en-US",
            "value": "Powerful vibratory soil compactor for efficient compaction of various soil types.",
          },
        ],
        "key": "gg123-qr",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "600",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "gg123-qr-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "GG123 QR Vibrationswalze",
          },
          {
            "locale": "it-IT",
            "value": "GG123 QR Compattatore Vibrante per Terreni",
          },
          {
            "locale": "en-UK",
            "value": "GG123 QR Vibratory Soil Compactor",
          },
          {
            "locale": "nl-NL",
            "value": "GG123 QR Trilbodemverdichter",
          },
          {
            "locale": "fr-FR",
            "value": "GG123 QR Compacteur de sol vibrant",
          },
          {
            "locale": "en-AU",
            "value": "GG123 QR Vibratory Soil Compactor",
          },
          {
            "locale": "es-ES",
            "value": "GG123 QR Compactador de suelo vibratorio",
          },
          {
            "locale": "en-GB",
            "value": "GG123 QR Vibratory Soil Compactor",
          },
          {
            "locale": "en-NZ",
            "value": "GG123 QR Vibratory Soil Compactor",
          },
          {
            "locale": "pt-PT",
            "value": "GG123 QR Compactador de Solo Vibratório",
          },
          {
            "locale": "en-US",
            "value": "GG123 QR Vibratory Soil Compactor",
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
            "value": "gg123-qr",
          },
          {
            "locale": "it-IT",
            "value": "gg123-qr",
          },
          {
            "locale": "en-UK",
            "value": "gg123-qr",
          },
          {
            "locale": "nl-NL",
            "value": "gg123-qr",
          },
          {
            "locale": "fr-FR",
            "value": "gg123-qr",
          },
          {
            "locale": "en-AU",
            "value": "gg123-qr",
          },
          {
            "locale": "es-ES",
            "value": "gg123-qr",
          },
          {
            "locale": "en-GB",
            "value": "gg123-qr",
          },
          {
            "locale": "en-NZ",
            "value": "gg123-qr",
          },
          {
            "locale": "pt-PT",
            "value": "gg123-qr",
          },
          {
            "locale": "en-US",
            "value": "gg123-qr",
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
                "value": "600",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "gg123-qr-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "600",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/gg123-qr-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "gg123-qr-2023",
          },
        ],
      }
    `);
  });
});
