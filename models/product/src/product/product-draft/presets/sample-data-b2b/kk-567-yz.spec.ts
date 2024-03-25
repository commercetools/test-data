import type { TProductDraft } from '../../../types';
import kk567Yz from './kk-567-yz';

describe(`with kk567Yz preset`, () => {
  it(`should return a kk567Yz preset`, () => {
    const kk567YzPreset = kk567Yz().build<TProductDraft>();
    expect(kk567YzPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Fortgeschrittener Deponie-Verdichter mit speziellen Funktionen für effektive Verdichtung von Abfällen.",
          "en": undefined,
          "en-AU": "Advanced landfill compactor with specialized features for effective waste compaction.",
          "en-GB": "Advanced landfill compactor with specialized features for effective waste compaction.",
          "en-NZ": "Advanced landfill compactor with specialized features for effective waste compaction.",
          "en-US": "Advanced landfill compactor with specialized features for effective waste compaction.",
          "es-ES": "Compactador de vertedero avanzado con características especializadas para una compactación efectiva de residuos.",
          "fr": undefined,
          "fr-FR": "Compacteur de décharge avancé avec des fonctionnalités spécialisées pour un compactage efficace des déchets.",
          "it-IT": "Compattatore avanzato per discariche con caratteristiche specializzate per una compattazione efficace dei rifiuti.",
          "nl-NL": "Geavanceerde stortplaatsverdichter met gespecialiseerde functies voor effectieve afvalverdichting.",
          "pt-PT": "Compactador de aterro avançado com recursos especializados para compactação eficaz de resíduos.",
        },
        "key": "kk567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 900,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "kk567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "KK567 YZ Deponie-Verdichter",
          "en": undefined,
          "en-AU": "KK567 YZ Landfill Compactor",
          "en-GB": "KK567 YZ Landfill Compactor",
          "en-NZ": "KK567 YZ Landfill Compactor",
          "en-US": "KK567 YZ Landfill Compactor",
          "es-ES": "KK567 YZ Compactador de vertedero",
          "fr": undefined,
          "fr-FR": "KK567 YZ Compacteur de décharge",
          "it-IT": "KK567 YZ Compattatore per Discariche",
          "nl-NL": "KK567 YZ Stortplaatsverdichter",
          "pt-PT": "KK567 YZ Compactador de Aterro",
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
          "de-DE": "kk567-yz",
          "en": undefined,
          "en-AU": "kk567-yz",
          "en-GB": "kk567-yz",
          "en-NZ": "kk567-yz",
          "en-US": "kk567-yz",
          "es-ES": "kk567-yz",
          "fr": undefined,
          "fr-FR": "kk567-yz",
          "it-IT": "kk567-yz",
          "nl-NL": "kk567-yz",
          "pt-PT": "kk567-yz",
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
                "value": 900,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "kk567-yz-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 900,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "kk567-yz-2023",
          },
        ],
      }
    `);
  });

  it(`should return a kk567Yz preset when built for graphql`, () => {
    const kk567YzPresetGraphql = kk567Yz().buildGraphql<TProductDraft>();
    expect(kk567YzPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Fortgeschrittener Deponie-Verdichter mit speziellen Funktionen für effektive Verdichtung von Abfällen.",
          },
          {
            "locale": "it-IT",
            "value": "Compattatore avanzato per discariche con caratteristiche specializzate per una compattazione efficace dei rifiuti.",
          },
          {
            "locale": "nl-NL",
            "value": "Geavanceerde stortplaatsverdichter met gespecialiseerde functies voor effectieve afvalverdichting.",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteur de décharge avancé avec des fonctionnalités spécialisées pour un compactage efficace des déchets.",
          },
          {
            "locale": "en-AU",
            "value": "Advanced landfill compactor with specialized features for effective waste compaction.",
          },
          {
            "locale": "es-ES",
            "value": "Compactador de vertedero avanzado con características especializadas para una compactación efectiva de residuos.",
          },
          {
            "locale": "en-GB",
            "value": "Advanced landfill compactor with specialized features for effective waste compaction.",
          },
          {
            "locale": "en-NZ",
            "value": "Advanced landfill compactor with specialized features for effective waste compaction.",
          },
          {
            "locale": "pt-PT",
            "value": "Compactador de aterro avançado com recursos especializados para compactação eficaz de resíduos.",
          },
          {
            "locale": "en-US",
            "value": "Advanced landfill compactor with specialized features for effective waste compaction.",
          },
        ],
        "key": "kk567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "900",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "kk567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "KK567 YZ Deponie-Verdichter",
          },
          {
            "locale": "it-IT",
            "value": "KK567 YZ Compattatore per Discariche",
          },
          {
            "locale": "nl-NL",
            "value": "KK567 YZ Stortplaatsverdichter",
          },
          {
            "locale": "fr-FR",
            "value": "KK567 YZ Compacteur de décharge",
          },
          {
            "locale": "en-AU",
            "value": "KK567 YZ Landfill Compactor",
          },
          {
            "locale": "es-ES",
            "value": "KK567 YZ Compactador de vertedero",
          },
          {
            "locale": "en-GB",
            "value": "KK567 YZ Landfill Compactor",
          },
          {
            "locale": "en-NZ",
            "value": "KK567 YZ Landfill Compactor",
          },
          {
            "locale": "pt-PT",
            "value": "KK567 YZ Compactador de Aterro",
          },
          {
            "locale": "en-US",
            "value": "KK567 YZ Landfill Compactor",
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
            "value": "kk567-yz",
          },
          {
            "locale": "it-IT",
            "value": "kk567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "kk567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "kk567-yz",
          },
          {
            "locale": "en-AU",
            "value": "kk567-yz",
          },
          {
            "locale": "es-ES",
            "value": "kk567-yz",
          },
          {
            "locale": "en-GB",
            "value": "kk567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "kk567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "kk567-yz",
          },
          {
            "locale": "en-US",
            "value": "kk567-yz",
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
                "value": "900",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "kk567-yz-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "900",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/kk567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "kk567-yz-2023",
          },
        ],
      }
    `);
  });
});
