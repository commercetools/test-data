import type { TProductDraft } from '../../../types';
import qq567Yz from './qq-567-yz';

describe(`with qq567Yz preset`, () => {
  it(`should return a qq567Yz preset`, () => {
    const qq567YzPreset = qq567Yz().build<TProductDraft>();
    expect(qq567YzPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "railroad-wheeled-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Schienenradbagger mit hoher Kapazität und fortschrittlichen Funktionen für effizienten Bahnbau.",
          "en": undefined,
          "en-AU": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          "en-GB": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          "en-NZ": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          "en-UK": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          "en-US": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          "es-ES": "Excavadora de ruedas para ferrocarril de alta capacidad con características avanzadas para una construcción ferroviaria eficiente.",
          "fr": undefined,
          "fr-FR": "Excavatrice sur roues pour chemin de fer haute capacité avec des fonctionnalités avancées pour une construction ferroviaire efficace.",
          "it-IT": "Escavatore su ruote per ferrovie ad alta capacità con caratteristiche avanzate per la costruzione efficiente di ferrovie.",
          "nl-NL": "Hoogcapaciteits spoorweg wiellader graafmachine met geavanceerde functies voor efficiënte spoorwegbouw.",
          "pt-PT": "Escavadeira rodoviária de alta capacidade com características avançadas para construção eficiente de ferrovias.",
        },
        "key": "qq567-yz",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "qq567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "QQ567 YZ Railroad Schienenradbagger",
          "en": undefined,
          "en-AU": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          "en-GB": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          "en-NZ": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          "en-UK": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          "en-US": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          "es-ES": "QQ567 YZ Railroad Excavadora de ruedas para ferrocarril",
          "fr": undefined,
          "fr-FR": "QQ567 YZ Railroad Excavatrice sur roues pour chemin de fer",
          "it-IT": "QQ567 YZ Escavatore su Ruote per Ferrovie",
          "nl-NL": "QQ567 YZ Spoorweg Wiellader Graafmachine",
          "pt-PT": "QQ567 YZ Escavadeira Rodoviária para Ferrovias",
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
          "de-DE": "qq567-yz",
          "en": undefined,
          "en-AU": "qq567-yz",
          "en-GB": "qq567-yz",
          "en-NZ": "qq567-yz",
          "en-UK": "qq567-yz",
          "en-US": "qq567-yz",
          "es-ES": "qq567-yz",
          "fr": undefined,
          "fr-FR": "qq567-yz",
          "it-IT": "qq567-yz",
          "nl-NL": "qq567-yz",
          "pt-PT": "qq567-yz",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "qq567-yz-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "qq567-yz-2023",
          },
        ],
      }
    `);
  });

  it(`should return a qq567Yz preset when built for graphql`, () => {
    const qq567YzPresetGraphql = qq567Yz().buildGraphql<TProductDraft>();
    expect(qq567YzPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "railroad-wheeled-excavators",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Schienenradbagger mit hoher Kapazität und fortschrittlichen Funktionen für effizienten Bahnbau.",
          },
          {
            "locale": "it-IT",
            "value": "Escavatore su ruote per ferrovie ad alta capacità con caratteristiche avanzate per la costruzione efficiente di ferrovie.",
          },
          {
            "locale": "en-UK",
            "value": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          },
          {
            "locale": "nl-NL",
            "value": "Hoogcapaciteits spoorweg wiellader graafmachine met geavanceerde functies voor efficiënte spoorwegbouw.",
          },
          {
            "locale": "fr-FR",
            "value": "Excavatrice sur roues pour chemin de fer haute capacité avec des fonctionnalités avancées pour une construction ferroviaire efficace.",
          },
          {
            "locale": "en-AU",
            "value": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          },
          {
            "locale": "es-ES",
            "value": "Excavadora de ruedas para ferrocarril de alta capacidad con características avanzadas para una construcción ferroviaria eficiente.",
          },
          {
            "locale": "en-GB",
            "value": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          },
          {
            "locale": "en-NZ",
            "value": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          },
          {
            "locale": "pt-PT",
            "value": "Escavadeira rodoviária de alta capacidade com características avançadas para construção eficiente de ferrovias.",
          },
          {
            "locale": "en-US",
            "value": "High-capacity railroad wheeled excavator with advanced features for efficient railway construction.",
          },
        ],
        "key": "qq567-yz",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2015.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "qq567-yz-2015",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "QQ567 YZ Railroad Schienenradbagger",
          },
          {
            "locale": "it-IT",
            "value": "QQ567 YZ Escavatore su Ruote per Ferrovie",
          },
          {
            "locale": "en-UK",
            "value": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          },
          {
            "locale": "nl-NL",
            "value": "QQ567 YZ Spoorweg Wiellader Graafmachine",
          },
          {
            "locale": "fr-FR",
            "value": "QQ567 YZ Railroad Excavatrice sur roues pour chemin de fer",
          },
          {
            "locale": "en-AU",
            "value": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          },
          {
            "locale": "es-ES",
            "value": "QQ567 YZ Railroad Excavadora de ruedas para ferrocarril",
          },
          {
            "locale": "en-GB",
            "value": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          },
          {
            "locale": "en-NZ",
            "value": "QQ567 YZ Railroad Railroad Wheeled Excavator",
          },
          {
            "locale": "pt-PT",
            "value": "QQ567 YZ Escavadeira Rodoviária para Ferrovias",
          },
          {
            "locale": "en-US",
            "value": "QQ567 YZ Railroad Railroad Wheeled Excavator",
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
            "value": "qq567-yz",
          },
          {
            "locale": "it-IT",
            "value": "qq567-yz",
          },
          {
            "locale": "en-UK",
            "value": "qq567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "qq567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "qq567-yz",
          },
          {
            "locale": "en-AU",
            "value": "qq567-yz",
          },
          {
            "locale": "es-ES",
            "value": "qq567-yz",
          },
          {
            "locale": "en-GB",
            "value": "qq567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "qq567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "qq567-yz",
          },
          {
            "locale": "en-US",
            "value": "qq567-yz",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2019.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "qq567-yz-2019",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/qq567-yz-2023.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "qq567-yz-2023",
          },
        ],
      }
    `);
  });
});
