import type { TProductDraft } from '../../../types';
import j234Wx from './j-234-wx';

describe(`with j234Wx preset`, () => {
  it(`should return a j234Wx preset`, () => {
    const j234WxPreset = j234Wx().build<TProductDraft>();
    expect(j234WxPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "swamp-bulldozers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Spezialisierter Sumpfbagger für effiziente Arbeiten in moorigen und feuchten Gebieten.",
          "en": undefined,
          "en-AU": "Specialized swamp bulldozer for efficient operations in marshy and wetland areas.",
          "en-GB": "Specialized swamp bulldozer for efficient operations in marshy and wetland areas.",
          "en-NZ": "Specialized swamp bulldozer for efficient operations in marshy and wetland areas.",
          "en-US": "Specialized swamp bulldozer for efficient operations in marshy and wetland areas.",
          "es-ES": "Topadora de pantano especializada para operaciones eficientes en áreas pantanosas y húmedas.",
          "fr": undefined,
          "fr-FR": "Bulldozer des marais spécialisé pour des opérations efficaces dans les zones marécageuses et humides.",
          "it-IT": "Bulldozer specializzato per paludi per operazioni efficienti in aree paludose e terreni umidi.",
          "nl-NL": "Gespecialiseerde moeras bulldozer voor efficiënte operaties in moerassige en wetland gebieden.",
          "pt-PT": "Trator de esteiras especializado para operações eficientes em áreas pantanosas e terrenos úmidos.",
        },
        "key": "j234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 750,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "j234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "J234 WX Sumpfbagger",
          "en": undefined,
          "en-AU": "J234 WX Swamp Bulldozer",
          "en-GB": "J234 WX Swamp Bulldozer",
          "en-NZ": "J234 WX Swamp Bulldozer",
          "en-US": "J234 WX Swamp Bulldozer",
          "es-ES": "J234 WX Topadora de pantano",
          "fr": undefined,
          "fr-FR": "J234 WX Bulldozer des marais",
          "it-IT": "J234 WX Bulldozer per Paludi",
          "nl-NL": "J234 WX Moeras Bulldozer",
          "pt-PT": "J234 WX Trator de Esteiras para Pântano",
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
          "de-DE": "j234-wx",
          "en": undefined,
          "en-AU": "j234-wx",
          "en-GB": "j234-wx",
          "en-NZ": "j234-wx",
          "en-US": "j234-wx",
          "es-ES": "j234-wx",
          "fr": undefined,
          "fr-FR": "j234-wx",
          "it-IT": "j234-wx",
          "nl-NL": "j234-wx",
          "pt-PT": "j234-wx",
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
                "value": 750,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "j234-wx-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 750,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "j234-wx-2023",
          },
        ],
      }
    `);
  });

  it(`should return a j234Wx preset when built for graphql`, () => {
    const j234WxPresetGraphql = j234Wx().buildGraphql<TProductDraft>();
    expect(j234WxPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "swamp-bulldozers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Spezialisierter Sumpfbagger für effiziente Arbeiten in moorigen und feuchten Gebieten.",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer specializzato per paludi per operazioni efficienti in aree paludose e terreni umidi.",
          },
          {
            "locale": "nl-NL",
            "value": "Gespecialiseerde moeras bulldozer voor efficiënte operaties in moerassige en wetland gebieden.",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozer des marais spécialisé pour des opérations efficaces dans les zones marécageuses et humides.",
          },
          {
            "locale": "en-AU",
            "value": "Specialized swamp bulldozer for efficient operations in marshy and wetland areas.",
          },
          {
            "locale": "es-ES",
            "value": "Topadora de pantano especializada para operaciones eficientes en áreas pantanosas y húmedas.",
          },
          {
            "locale": "en-GB",
            "value": "Specialized swamp bulldozer for efficient operations in marshy and wetland areas.",
          },
          {
            "locale": "en-NZ",
            "value": "Specialized swamp bulldozer for efficient operations in marshy and wetland areas.",
          },
          {
            "locale": "pt-PT",
            "value": "Trator de esteiras especializado para operações eficientes em áreas pantanosas e terrenos úmidos.",
          },
          {
            "locale": "en-US",
            "value": "Specialized swamp bulldozer for efficient operations in marshy and wetland areas.",
          },
        ],
        "key": "j234-wx",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "750",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "j234-wx-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "J234 WX Sumpfbagger",
          },
          {
            "locale": "it-IT",
            "value": "J234 WX Bulldozer per Paludi",
          },
          {
            "locale": "nl-NL",
            "value": "J234 WX Moeras Bulldozer",
          },
          {
            "locale": "fr-FR",
            "value": "J234 WX Bulldozer des marais",
          },
          {
            "locale": "en-AU",
            "value": "J234 WX Swamp Bulldozer",
          },
          {
            "locale": "es-ES",
            "value": "J234 WX Topadora de pantano",
          },
          {
            "locale": "en-GB",
            "value": "J234 WX Swamp Bulldozer",
          },
          {
            "locale": "en-NZ",
            "value": "J234 WX Swamp Bulldozer",
          },
          {
            "locale": "pt-PT",
            "value": "J234 WX Trator de Esteiras para Pântano",
          },
          {
            "locale": "en-US",
            "value": "J234 WX Swamp Bulldozer",
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
            "value": "j234-wx",
          },
          {
            "locale": "it-IT",
            "value": "j234-wx",
          },
          {
            "locale": "nl-NL",
            "value": "j234-wx",
          },
          {
            "locale": "fr-FR",
            "value": "j234-wx",
          },
          {
            "locale": "en-AU",
            "value": "j234-wx",
          },
          {
            "locale": "es-ES",
            "value": "j234-wx",
          },
          {
            "locale": "en-GB",
            "value": "j234-wx",
          },
          {
            "locale": "en-NZ",
            "value": "j234-wx",
          },
          {
            "locale": "pt-PT",
            "value": "j234-wx",
          },
          {
            "locale": "en-US",
            "value": "j234-wx",
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
                "value": "750",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "j234-wx-2019",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "750",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/j234-wx-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "j234-wx-2023",
          },
        ],
      }
    `);
  });
});
