import type { TProductDraft } from '../../../types';
import b456St from './b-456-st';

describe(`with b456St preset`, () => {
  it(`should return a b456St preset`, () => {
    const b456StPreset = b456St().build<TProductDraft>();
    expect(b456StPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "construction-loaders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Baulader für verschiedene Bau- und Ladeanwendungen.",
          "en": undefined,
          "en-AU": "Versatile construction loader for various construction and loading applications.",
          "en-GB": "Versatile construction loader for various construction and loading applications.",
          "en-NZ": "Versatile construction loader for various construction and loading applications.",
          "en-UK": "Versatile construction loader for various construction and loading applications.",
          "en-US": "Versatile construction loader for various construction and loading applications.",
          "es-ES": "Cargador de construcción versátil para diversas aplicaciones de construcción y carga.",
          "fr": undefined,
          "fr-FR": "Chargeur de construction polyvalent pour diverses applications de construction et de chargement.",
          "it-IT": "Caricatore per costruzioni versatile per varie applicazioni di costruzione e carico.",
          "nl-NL": "Veelzijdige bouwlader voor diverse bouw- en laadtoepassingen.",
          "pt-PT": "Carregadeira de construção versátil para várias aplicações de construção e carregamento.",
        },
        "key": "b456-st",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "b456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "B456 ST Bau-Lader",
          "en": undefined,
          "en-AU": "B456 ST Construction Loader",
          "en-GB": "B456 ST Construction Loader",
          "en-NZ": "B456 ST Construction Loader",
          "en-UK": "B456 ST Construction Loader",
          "en-US": "B456 ST Construction Loader",
          "es-ES": "B456 ST Cargador de construcción",
          "fr": undefined,
          "fr-FR": "B456 ST Chargeur de construction",
          "it-IT": "B456 ST Caricatore per Costruzioni",
          "nl-NL": "B456 ST Bouwlader",
          "pt-PT": "B456 ST Carregadeira de Construção",
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
          "de-DE": "b456-st",
          "en": undefined,
          "en-AU": "b456-st",
          "en-GB": "b456-st",
          "en-NZ": "b456-st",
          "en-UK": "b456-st",
          "en-US": "b456-st",
          "es-ES": "b456-st",
          "fr": undefined,
          "fr-FR": "b456-st",
          "it-IT": "b456-st",
          "nl-NL": "b456-st",
          "pt-PT": "b456-st",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "b456-st-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "b456-st-2023",
          },
        ],
      }
    `);
  });

  it(`should return a b456St preset when built for graphql`, () => {
    const b456StPresetGraphql = b456St().buildGraphql<TProductDraft>();
    expect(b456StPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "construction-loaders",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Baulader für verschiedene Bau- und Ladeanwendungen.",
          },
          {
            "locale": "it-IT",
            "value": "Caricatore per costruzioni versatile per varie applicazioni di costruzione e carico.",
          },
          {
            "locale": "en-UK",
            "value": "Versatile construction loader for various construction and loading applications.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige bouwlader voor diverse bouw- en laadtoepassingen.",
          },
          {
            "locale": "fr-FR",
            "value": "Chargeur de construction polyvalent pour diverses applications de construction et de chargement.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile construction loader for various construction and loading applications.",
          },
          {
            "locale": "es-ES",
            "value": "Cargador de construcción versátil para diversas aplicaciones de construcción y carga.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile construction loader for various construction and loading applications.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile construction loader for various construction and loading applications.",
          },
          {
            "locale": "pt-PT",
            "value": "Carregadeira de construção versátil para várias aplicações de construção e carregamento.",
          },
          {
            "locale": "en-US",
            "value": "Versatile construction loader for various construction and loading applications.",
          },
        ],
        "key": "b456-st",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "b456-st-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "B456 ST Bau-Lader",
          },
          {
            "locale": "it-IT",
            "value": "B456 ST Caricatore per Costruzioni",
          },
          {
            "locale": "en-UK",
            "value": "B456 ST Construction Loader",
          },
          {
            "locale": "nl-NL",
            "value": "B456 ST Bouwlader",
          },
          {
            "locale": "fr-FR",
            "value": "B456 ST Chargeur de construction",
          },
          {
            "locale": "en-AU",
            "value": "B456 ST Construction Loader",
          },
          {
            "locale": "es-ES",
            "value": "B456 ST Cargador de construcción",
          },
          {
            "locale": "en-GB",
            "value": "B456 ST Construction Loader",
          },
          {
            "locale": "en-NZ",
            "value": "B456 ST Construction Loader",
          },
          {
            "locale": "pt-PT",
            "value": "B456 ST Carregadeira de Construção",
          },
          {
            "locale": "en-US",
            "value": "B456 ST Construction Loader",
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
            "value": "b456-st",
          },
          {
            "locale": "it-IT",
            "value": "b456-st",
          },
          {
            "locale": "en-UK",
            "value": "b456-st",
          },
          {
            "locale": "nl-NL",
            "value": "b456-st",
          },
          {
            "locale": "fr-FR",
            "value": "b456-st",
          },
          {
            "locale": "en-AU",
            "value": "b456-st",
          },
          {
            "locale": "es-ES",
            "value": "b456-st",
          },
          {
            "locale": "en-GB",
            "value": "b456-st",
          },
          {
            "locale": "en-NZ",
            "value": "b456-st",
          },
          {
            "locale": "pt-PT",
            "value": "b456-st",
          },
          {
            "locale": "en-US",
            "value": "b456-st",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "b456-st-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/b456-st-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "b456-st-2023",
          },
        ],
      }
    `);
  });
});
