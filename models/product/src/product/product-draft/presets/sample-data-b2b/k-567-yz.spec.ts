import type { TProductDraft } from '../../../types';
import k567Yz from './k-567-yz';

describe(`with k567Yz preset`, () => {
  it(`should return a k567Yz preset`, () => {
    const k567YzPreset = k567Yz().build<TProductDraft>();
    expect(k567YzPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Vielseitiger Sumpfbagger mit fortschrittlichen Funktionen für vielfältige Arbeiten in Feuchtgebieten.",
          "en": undefined,
          "en-AU": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          "en-GB": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          "en-NZ": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          "en-UK": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          "en-US": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          "es-ES": "Topadora de pantano versátil con características avanzadas para operaciones diversas en entornos húmedos.",
          "fr": undefined,
          "fr-FR": "Bulldozer des marais polyvalent avec des fonctionnalités avancées pour des opérations diverses dans des environnements humides.",
          "it-IT": "Bulldozer per paludi versatile con caratteristiche avanzate per operazioni diverse in ambienti umidi.",
          "nl-NL": "Veelzijdige moeras bulldozer met geavanceerde functies voor diverse operaties in wetland omgevingen.",
          "pt-PT": "Trator de esteiras versátil para pântano com características avançadas para operações diversas em ambientes úmidos.",
        },
        "key": "k567-yz",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "k567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "K567 YZ Sumpfbagger",
          "en": undefined,
          "en-AU": "K567 YZ Swamp Bulldozer",
          "en-GB": "K567 YZ Swamp Bulldozer",
          "en-NZ": "K567 YZ Swamp Bulldozer",
          "en-UK": "K567 YZ Swamp Bulldozer",
          "en-US": "K567 YZ Swamp Bulldozer",
          "es-ES": "K567 YZ Topadora de pantano",
          "fr": undefined,
          "fr-FR": "K567 YZ Bulldozer des marais",
          "it-IT": "K567 YZ Bulldozer per Paludi",
          "nl-NL": "K567 YZ Moeras Bulldozer",
          "pt-PT": "K567 YZ Trator de Esteiras para Pântano",
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
          "de-DE": "k567-yz",
          "en": undefined,
          "en-AU": "k567-yz",
          "en-GB": "k567-yz",
          "en-NZ": "k567-yz",
          "en-UK": "k567-yz",
          "en-US": "k567-yz",
          "es-ES": "k567-yz",
          "fr": undefined,
          "fr-FR": "k567-yz",
          "it-IT": "k567-yz",
          "nl-NL": "k567-yz",
          "pt-PT": "k567-yz",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "k567-yz-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "k567-yz-2023",
          },
        ],
      }
    `);
  });

  it(`should return a k567Yz preset when built for graphql`, () => {
    const k567YzPresetGraphql = k567Yz().buildGraphql<TProductDraft>();
    expect(k567YzPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Vielseitiger Sumpfbagger mit fortschrittlichen Funktionen für vielfältige Arbeiten in Feuchtgebieten.",
          },
          {
            "locale": "it-IT",
            "value": "Bulldozer per paludi versatile con caratteristiche avanzate per operazioni diverse in ambienti umidi.",
          },
          {
            "locale": "en-UK",
            "value": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige moeras bulldozer met geavanceerde functies voor diverse operaties in wetland omgevingen.",
          },
          {
            "locale": "fr-FR",
            "value": "Bulldozer des marais polyvalent avec des fonctionnalités avancées pour des opérations diverses dans des environnements humides.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          },
          {
            "locale": "es-ES",
            "value": "Topadora de pantano versátil con características avanzadas para operaciones diversas en entornos húmedos.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          },
          {
            "locale": "pt-PT",
            "value": "Trator de esteiras versátil para pântano com características avançadas para operações diversas em ambientes úmidos.",
          },
          {
            "locale": "en-US",
            "value": "Versatile swamp bulldozer with advanced features for diverse operations in wetland environments.",
          },
        ],
        "key": "k567-yz",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "k567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "K567 YZ Sumpfbagger",
          },
          {
            "locale": "it-IT",
            "value": "K567 YZ Bulldozer per Paludi",
          },
          {
            "locale": "en-UK",
            "value": "K567 YZ Swamp Bulldozer",
          },
          {
            "locale": "nl-NL",
            "value": "K567 YZ Moeras Bulldozer",
          },
          {
            "locale": "fr-FR",
            "value": "K567 YZ Bulldozer des marais",
          },
          {
            "locale": "en-AU",
            "value": "K567 YZ Swamp Bulldozer",
          },
          {
            "locale": "es-ES",
            "value": "K567 YZ Topadora de pantano",
          },
          {
            "locale": "en-GB",
            "value": "K567 YZ Swamp Bulldozer",
          },
          {
            "locale": "en-NZ",
            "value": "K567 YZ Swamp Bulldozer",
          },
          {
            "locale": "pt-PT",
            "value": "K567 YZ Trator de Esteiras para Pântano",
          },
          {
            "locale": "en-US",
            "value": "K567 YZ Swamp Bulldozer",
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
            "value": "k567-yz",
          },
          {
            "locale": "it-IT",
            "value": "k567-yz",
          },
          {
            "locale": "en-UK",
            "value": "k567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "k567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "k567-yz",
          },
          {
            "locale": "en-AU",
            "value": "k567-yz",
          },
          {
            "locale": "es-ES",
            "value": "k567-yz",
          },
          {
            "locale": "en-GB",
            "value": "k567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "k567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "k567-yz",
          },
          {
            "locale": "en-US",
            "value": "k567-yz",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "k567-yz-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/k567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "k567-yz-2023",
          },
        ],
      }
    `);
  });
});
