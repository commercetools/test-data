import type { TProductDraft } from '../../../types';
import ll890Op from './ll-890-op';

describe(`with ll890Op preset`, () => {
  it(`should return a ll890Op preset`, () => {
    const ll890OpPreset = ll890Op().build<TProductDraft>();
    expect(ll890OpPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "landfill-compactors",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Deponie-Verdichter für verschiedene Anwendungen im Bereich der Abfallverdichtung.",
          "en": undefined,
          "en-AU": "Versatile landfill compactor for various waste compaction applications.",
          "en-GB": "Versatile landfill compactor for various waste compaction applications.",
          "en-NZ": "Versatile landfill compactor for various waste compaction applications.",
          "en-US": "Versatile landfill compactor for various waste compaction applications.",
          "es-ES": "Compactador de vertedero versátil para diversas aplicaciones de compactación de residuos.",
          "fr": undefined,
          "fr-FR": "Compacteur de décharge polyvalent pour diverses applications de compactage des déchets.",
          "it-IT": "Compattatore per discariche versatile per varie applicazioni di compattazione dei rifiuti.",
          "nl-NL": "Veelzijdige stortplaatsverdichter voor diverse afvalverdichtingstoepassingen.",
          "pt-PT": "Compactador de aterro versátil para várias aplicações de compactação de resíduos.",
        },
        "key": "ll890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 1000,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ll890-op-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "LL890 OP Deponie-Verdichter",
          "en": undefined,
          "en-AU": "LL890 OP Landfill Compactor",
          "en-GB": "LL890 OP Landfill Compactor",
          "en-NZ": "LL890 OP Landfill Compactor",
          "en-US": "LL890 OP Landfill Compactor",
          "es-ES": "LL890 OP Compactador de vertedero",
          "fr": undefined,
          "fr-FR": "LL890 OP Compacteur de décharge",
          "it-IT": "LL890 OP Compattatore per Discariche",
          "nl-NL": "LL890 OP Stortplaatsverdichter",
          "pt-PT": "LL890 OP Compactador de Aterro",
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
          "de-DE": "ll890-op",
          "en": undefined,
          "en-AU": "ll890-op",
          "en-GB": "ll890-op",
          "en-NZ": "ll890-op",
          "en-US": "ll890-op",
          "es-ES": "ll890-op",
          "fr": undefined,
          "fr-FR": "ll890-op",
          "it-IT": "ll890-op",
          "nl-NL": "ll890-op",
          "pt-PT": "ll890-op",
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
                "value": 1000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ll890-op-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 1000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ll890-op-2023",
          },
        ],
      }
    `);
  });

  it(`should return a ll890Op preset when built for graphql`, () => {
    const ll890OpPresetGraphql = ll890Op().buildGraphql<TProductDraft>();
    expect(ll890OpPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "landfill-compactors",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Deponie-Verdichter für verschiedene Anwendungen im Bereich der Abfallverdichtung.",
          },
          {
            "locale": "it-IT",
            "value": "Compattatore per discariche versatile per varie applicazioni di compattazione dei rifiuti.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige stortplaatsverdichter voor diverse afvalverdichtingstoepassingen.",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteur de décharge polyvalent pour diverses applications de compactage des déchets.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile landfill compactor for various waste compaction applications.",
          },
          {
            "locale": "es-ES",
            "value": "Compactador de vertedero versátil para diversas aplicaciones de compactación de residuos.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile landfill compactor for various waste compaction applications.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile landfill compactor for various waste compaction applications.",
          },
          {
            "locale": "pt-PT",
            "value": "Compactador de aterro versátil para várias aplicações de compactação de resíduos.",
          },
          {
            "locale": "en-US",
            "value": "Versatile landfill compactor for various waste compaction applications.",
          },
        ],
        "key": "ll890-op",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "1000",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ll890-op-2015",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "LL890 OP Deponie-Verdichter",
          },
          {
            "locale": "it-IT",
            "value": "LL890 OP Compattatore per Discariche",
          },
          {
            "locale": "nl-NL",
            "value": "LL890 OP Stortplaatsverdichter",
          },
          {
            "locale": "fr-FR",
            "value": "LL890 OP Compacteur de décharge",
          },
          {
            "locale": "en-AU",
            "value": "LL890 OP Landfill Compactor",
          },
          {
            "locale": "es-ES",
            "value": "LL890 OP Compactador de vertedero",
          },
          {
            "locale": "en-GB",
            "value": "LL890 OP Landfill Compactor",
          },
          {
            "locale": "en-NZ",
            "value": "LL890 OP Landfill Compactor",
          },
          {
            "locale": "pt-PT",
            "value": "LL890 OP Compactador de Aterro",
          },
          {
            "locale": "en-US",
            "value": "LL890 OP Landfill Compactor",
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
            "value": "ll890-op",
          },
          {
            "locale": "it-IT",
            "value": "ll890-op",
          },
          {
            "locale": "nl-NL",
            "value": "ll890-op",
          },
          {
            "locale": "fr-FR",
            "value": "ll890-op",
          },
          {
            "locale": "en-AU",
            "value": "ll890-op",
          },
          {
            "locale": "es-ES",
            "value": "ll890-op",
          },
          {
            "locale": "en-GB",
            "value": "ll890-op",
          },
          {
            "locale": "en-NZ",
            "value": "ll890-op",
          },
          {
            "locale": "pt-PT",
            "value": "ll890-op",
          },
          {
            "locale": "en-US",
            "value": "ll890-op",
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
                "value": "1000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ll890-op-2019",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "1000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ll890-op-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ll890-op-2023",
            "staged": true,
          },
        ],
      }
    `);
  });
});
