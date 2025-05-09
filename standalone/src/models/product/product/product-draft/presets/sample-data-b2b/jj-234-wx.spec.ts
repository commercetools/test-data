import type { TProductDraft } from '../../../types';
import jj234Wx from './jj-234-wx';

describe(`with jj234Wx preset`, () => {
  it(`should return a jj234Wx preset`, () => {
    const jj234WxPreset = jj234Wx().build<TProductDraft>();
    expect(jj234WxPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Hochleistungs-Deponie-Verdichter für effiziente Verdichtung von Abfällen auf Deponiestandorten.",
          "en": undefined,
          "en-AU": "High-capacity landfill compactor for efficient compaction of waste in landfill sites.",
          "en-GB": "High-capacity landfill compactor for efficient compaction of waste in landfill sites.",
          "en-NZ": "High-capacity landfill compactor for efficient compaction of waste in landfill sites.",
          "en-US": "High-capacity landfill compactor for efficient compaction of waste in landfill sites.",
          "es-ES": "Compactador de vertedero de alta capacidad para la compactación eficiente de residuos en vertederos.",
          "fr": undefined,
          "fr-FR": "Compacteur de décharge haute capacité pour le compactage efficace des déchets sur les sites d'enfouissement.",
          "it-IT": "Compattatore per discariche ad alta capacità per la compattazione efficiente dei rifiuti nei siti di discarica.",
          "nl-NL": "Hoogcapaciteits stortplaatsverdichter voor efficiënte verdichting van afval op stortplaatsen.",
          "pt-PT": "Compactador de aterro de alta capacidade para compactação eficiente de resíduos em aterros sanitários.",
        },
        "key": "jj234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 800,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jj234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "jj234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "JJ234 WX Deponie-Verdichter",
          "en": undefined,
          "en-AU": "JJ234 WX Landfill Compactor",
          "en-GB": "JJ234 WX Landfill Compactor",
          "en-NZ": "JJ234 WX Landfill Compactor",
          "en-US": "JJ234 WX Landfill Compactor",
          "es-ES": "JJ234 WX Compactador de vertedero",
          "fr": undefined,
          "fr-FR": "JJ234 WX Compacteur de décharge",
          "it-IT": "JJ234 WX Compattatore per Discariche",
          "nl-NL": "JJ234 WX Stortplaatsverdichter",
          "pt-PT": "JJ234 WX Compactador de Aterro",
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
          "de-DE": "jj234-wx",
          "en": undefined,
          "en-AU": "jj234-wx",
          "en-GB": "jj234-wx",
          "en-NZ": "jj234-wx",
          "en-US": "jj234-wx",
          "es-ES": "jj234-wx",
          "fr": undefined,
          "fr-FR": "jj234-wx",
          "it-IT": "jj234-wx",
          "nl-NL": "jj234-wx",
          "pt-PT": "jj234-wx",
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
                "value": 800,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jj234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "jj234-wx-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 800,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jj234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "jj234-wx-2023",
          },
        ],
      }
    `);
  });

  it(`should return a jj234Wx preset when built for graphql`, () => {
    const jj234WxPresetGraphql = jj234Wx().buildGraphql<TProductDraft>();
    expect(jj234WxPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "Hochleistungs-Deponie-Verdichter für effiziente Verdichtung von Abfällen auf Deponiestandorten.",
          },
          {
            "locale": "it-IT",
            "value": "Compattatore per discariche ad alta capacità per la compattazione efficiente dei rifiuti nei siti di discarica.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits stortplaatsverdichter voor efficiënte verdichting van afval op stortplaatsen.",
          },
          {
            "locale": "fr-FR",
            "value": "Compacteur de décharge haute capacité pour le compactage efficace des déchets sur les sites d'enfouissement.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity landfill compactor for efficient compaction of waste in landfill sites.",
          },
          {
            "locale": "es-ES",
            "value": "Compactador de vertedero de alta capacidad para la compactación eficiente de residuos en vertederos.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity landfill compactor for efficient compaction of waste in landfill sites.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity landfill compactor for efficient compaction of waste in landfill sites.",
          },
          {
            "locale": "pt-PT",
            "value": "Compactador de aterro de alta capacidade para compactação eficiente de resíduos em aterros sanitários.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity landfill compactor for efficient compaction of waste in landfill sites.",
          },
        ],
        "key": "jj234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "800",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jj234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "jj234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "JJ234 WX Deponie-Verdichter",
          },
          {
            "locale": "it-IT",
            "value": "JJ234 WX Compattatore per Discariche",
          },
          {
            "locale": "nl-NL",
            "value": "JJ234 WX Stortplaatsverdichter",
          },
          {
            "locale": "fr-FR",
            "value": "JJ234 WX Compacteur de décharge",
          },
          {
            "locale": "en-AU",
            "value": "JJ234 WX Landfill Compactor",
          },
          {
            "locale": "es-ES",
            "value": "JJ234 WX Compactador de vertedero",
          },
          {
            "locale": "en-GB",
            "value": "JJ234 WX Landfill Compactor",
          },
          {
            "locale": "en-NZ",
            "value": "JJ234 WX Landfill Compactor",
          },
          {
            "locale": "pt-PT",
            "value": "JJ234 WX Compactador de Aterro",
          },
          {
            "locale": "en-US",
            "value": "JJ234 WX Landfill Compactor",
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
            "value": "jj234-wx",
          },
          {
            "locale": "it-IT",
            "value": "jj234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "jj234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "jj234-wx",
          },
          {
            "locale": "en-AU",
            "value": "jj234-wx",
          },
          {
            "locale": "es-ES",
            "value": "jj234-wx",
          },
          {
            "locale": "en-GB",
            "value": "jj234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "jj234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "jj234-wx",
          },
          {
            "locale": "en-US",
            "value": "jj234-wx",
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
                "value": "800",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jj234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "jj234-wx-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "800",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/jj234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "jj234-wx-2023",
          },
        ],
      }
    `);
  });
});
