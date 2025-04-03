import type { TProductDraft } from '../../../types';
import zz456St from './zz-456-st';

describe(`with zz456St preset`, () => {
  it(`should return a zz456St preset`, () => {
    const zz456StPreset = zz456St().build<TProductDraft>();
    expect(zz456StPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "exploration-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Vielseitiger Erkundungsbohrer für verschiedene Bohraufgaben in Erkundungs- und geotechnischen Projekten geeignet.",
          "en": undefined,
          "en-AU": "Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.",
          "en-GB": "Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.",
          "en-NZ": "Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.",
          "en-US": "Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.",
          "es-ES": "Perforadora de exploración versátil adecuada para diversas tareas de perforación en proyectos de exploración y geotécnica.",
          "fr": undefined,
          "fr-FR": "Forage d'exploration polyvalent adapté à diverses tâches de forage dans des projets d'exploration et géotechniques.",
          "it-IT": "Trapano per esplorazione versatile adatto per vari compiti di trapanazione in progetti di esplorazione e geotecnici.",
          "nl-NL": "Veelzijdige exploratieboor geschikt voor diverse boortaken in exploratie- en geotechnische projecten.",
          "pt-PT": "Perfuratriz de exploração versátil adequada para várias tarefas de perfuração em projetos de exploração e geotécnicos.",
        },
        "key": "zz456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 8000,
            },
            {
              "name": "color",
              "value": {
                "key": "RED",
                "label": {
                  "de-DE": "Rot",
                  "en-AU": "Red",
                  "en-GB": "Red",
                  "en-NZ": "Red",
                  "en-US": "Red",
                  "es-ES": "Rojo",
                  "fr-FR": "Rouge",
                  "it-IT": "Rosso",
                  "nl-NL": "Rood",
                  "pt-PT": "Vermelho",
                },
              },
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "zz456-st-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "ZZ456 ST Erkundungsbohrer",
          "en": undefined,
          "en-AU": "ZZ456 ST Exploration Drill",
          "en-GB": "ZZ456 ST Exploration Drill",
          "en-NZ": "ZZ456 ST Exploration Drill",
          "en-US": "ZZ456 ST Exploration Drill",
          "es-ES": "ZZ456 ST Perforadora de exploración",
          "fr": undefined,
          "fr-FR": "ZZ456 ST Forage d'exploration",
          "it-IT": "ZZ456 ST Trapano per Esplorazione",
          "nl-NL": "ZZ456 ST Exploratieboor",
          "pt-PT": "ZZ456 ST Perfuratriz de Exploração",
        },
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "zz456-st",
          "en": undefined,
          "en-AU": "zz456-st",
          "en-GB": "zz456-st",
          "en-NZ": "zz456-st",
          "en-US": "zz456-st",
          "es-ES": "zz456-st",
          "fr": undefined,
          "fr-FR": "zz456-st",
          "it-IT": "zz456-st",
          "nl-NL": "zz456-st",
          "pt-PT": "zz456-st",
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
                "value": 8000,
              },
              {
                "name": "color",
                "value": {
                  "key": "BLUE",
                  "label": {
                    "de-DE": "Blau",
                    "en-AU": "Blue",
                    "en-GB": "Blue",
                    "en-NZ": "Blue",
                    "en-US": "Blue",
                    "es-ES": "Azul",
                    "fr-FR": "Bleu",
                    "it-IT": "Blu",
                    "nl-NL": "Blauw",
                    "pt-PT": "Azul",
                  },
                },
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "zz456-st-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 8000,
              },
              {
                "name": "color",
                "value": {
                  "key": "GREEN",
                  "label": {
                    "de-DE": "Grün",
                    "en-AU": "Green",
                    "en-GB": "Green",
                    "en-NZ": "Green",
                    "en-US": "Green",
                    "es-ES": "Verde",
                    "fr-FR": "Vert",
                    "it-IT": "Verde",
                    "nl-NL": "Groen",
                    "pt-PT": "Verde",
                  },
                },
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "zz456-st-green",
          },
        ],
      }
    `);
  });

  it(`should return a zz456St preset when built for graphql`, () => {
    const zz456StPresetGraphql = zz456St().buildGraphql<TProductDraft>();
    expect(zz456StPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "exploration-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Vielseitiger Erkundungsbohrer für verschiedene Bohraufgaben in Erkundungs- und geotechnischen Projekten geeignet.",
          },
          {
            "locale": "it-IT",
            "value": "Trapano per esplorazione versatile adatto per vari compiti di trapanazione in progetti di esplorazione e geotecnici.",
          },
          {
            "locale": "nl-NL",
            "value": "Veelzijdige exploratieboor geschikt voor diverse boortaken in exploratie- en geotechnische projecten.",
          },
          {
            "locale": "fr-FR",
            "value": "Forage d'exploration polyvalent adapté à diverses tâches de forage dans des projets d'exploration et géotechniques.",
          },
          {
            "locale": "en-AU",
            "value": "Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.",
          },
          {
            "locale": "es-ES",
            "value": "Perforadora de exploración versátil adecuada para diversas tareas de perforación en proyectos de exploración y geotécnica.",
          },
          {
            "locale": "en-GB",
            "value": "Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.",
          },
          {
            "locale": "en-NZ",
            "value": "Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.",
          },
          {
            "locale": "pt-PT",
            "value": "Perfuratriz de exploração versátil adequada para várias tarefas de perfuração em projetos de exploração e geotécnicos.",
          },
          {
            "locale": "en-US",
            "value": "Versatile exploration drill suitable for various drilling tasks in exploration and geotechnical projects.",
          },
        ],
        "key": "zz456-st",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "8000",
            },
            {
              "name": "color",
              "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "zz456-st-red",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "ZZ456 ST Erkundungsbohrer",
          },
          {
            "locale": "it-IT",
            "value": "ZZ456 ST Trapano per Esplorazione",
          },
          {
            "locale": "nl-NL",
            "value": "ZZ456 ST Exploratieboor",
          },
          {
            "locale": "fr-FR",
            "value": "ZZ456 ST Forage d'exploration",
          },
          {
            "locale": "en-AU",
            "value": "ZZ456 ST Exploration Drill",
          },
          {
            "locale": "es-ES",
            "value": "ZZ456 ST Perforadora de exploración",
          },
          {
            "locale": "en-GB",
            "value": "ZZ456 ST Exploration Drill",
          },
          {
            "locale": "en-NZ",
            "value": "ZZ456 ST Exploration Drill",
          },
          {
            "locale": "pt-PT",
            "value": "ZZ456 ST Perfuratriz de Exploração",
          },
          {
            "locale": "en-US",
            "value": "ZZ456 ST Exploration Drill",
          },
        ],
        "priceMode": "Standalone",
        "productType": {
          "key": "heavy-lifting-and-specialized-equipment",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "zz456-st",
          },
          {
            "locale": "it-IT",
            "value": "zz456-st",
          },
          {
            "locale": "nl-NL",
            "value": "zz456-st",
          },
          {
            "locale": "fr-FR",
            "value": "zz456-st",
          },
          {
            "locale": "en-AU",
            "value": "zz456-st",
          },
          {
            "locale": "es-ES",
            "value": "zz456-st",
          },
          {
            "locale": "en-GB",
            "value": "zz456-st",
          },
          {
            "locale": "en-NZ",
            "value": "zz456-st",
          },
          {
            "locale": "pt-PT",
            "value": "zz456-st",
          },
          {
            "locale": "en-US",
            "value": "zz456-st",
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
                "value": "8000",
              },
              {
                "name": "color",
                "value": "{"key":"BLUE","label":{"de-DE":"Blau","it-IT":"Blu","nl-NL":"Blauw","fr-FR":"Bleu","en-AU":"Blue","es-ES":"Azul","en-GB":"Blue","en-NZ":"Blue","pt-PT":"Azul","en-US":"Blue"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "zz456-st-blue",
            "staged": true,
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "8000",
              },
              {
                "name": "color",
                "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/zz456-st-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "zz456-st-green",
            "staged": true,
          },
        ],
      }
    `);
  });
});
