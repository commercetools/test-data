import type { TProductDraft } from '../../../types';
import aaa789Uv from './aaa-789-uv';

describe(`with aaa789Uv preset`, () => {
  it(`should return a aaa789Uv preset`, () => {
    const aaa789UvPreset = aaa789Uv().build<TProductDraft>();
    expect(aaa789UvPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Fortgeschrittener Erkundungsbohrer mit präzisen Bohrfähigkeiten für geotechnische Untersuchungen.",
          "en": undefined,
          "en-AU": "Advanced exploration drill with precision drilling capabilities for geotechnical investigations.",
          "en-GB": "Advanced exploration drill with precision drilling capabilities for geotechnical investigations.",
          "en-NZ": "Advanced exploration drill with precision drilling capabilities for geotechnical investigations.",
          "en-US": "Advanced exploration drill with precision drilling capabilities for geotechnical investigations.",
          "es-ES": "Perforadora de exploración avanzada con capacidades de perforación de precisión para investigaciones geotécnicas.",
          "fr": undefined,
          "fr-FR": "Forage d'exploration avancé avec des capacités de forage de précision pour des investigations géotechniques.",
          "it-IT": "Trapano avanzato per esplorazione con capacità di trapanazione di precisione per indagini geotecniche.",
          "nl-NL": "Geavanceerde exploratieboor met precisieboorcapaciteiten voor geotechnisch onderzoek.",
          "pt-PT": "Perfuratriz de exploração avançada com capacidades de perfuração de precisão para investigações geotécnicas.",
        },
        "key": "aaa789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 10000,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "aaa789-uv-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "AAA789 UV Erkundungsbohrer",
          "en": undefined,
          "en-AU": "AAA789 UV Exploration Drill",
          "en-GB": "AAA789 UV Exploration Drill",
          "en-NZ": "AAA789 UV Exploration Drill",
          "en-US": "AAA789 UV Exploration Drill",
          "es-ES": "AAA789 UV Perforadora de exploración",
          "fr": undefined,
          "fr-FR": "AAA789 UV Forage d'exploration",
          "it-IT": "AAA789 UV Trapano per Esplorazione",
          "nl-NL": "AAA789 UV Exploratieboor",
          "pt-PT": "AAA789 UV Perfuratriz de Exploração",
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
          "de-DE": "aaa789-uv",
          "en": undefined,
          "en-AU": "aaa789-uv",
          "en-GB": "aaa789-uv",
          "en-NZ": "aaa789-uv",
          "en-US": "aaa789-uv",
          "es-ES": "aaa789-uv",
          "fr": undefined,
          "fr-FR": "aaa789-uv",
          "it-IT": "aaa789-uv",
          "nl-NL": "aaa789-uv",
          "pt-PT": "aaa789-uv",
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
                "value": 10000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "aaa789-uv-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 10000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "aaa789-uv-green",
          },
        ],
      }
    `);
  });

  it(`should return a aaa789Uv preset when built for graphql`, () => {
    const aaa789UvPresetGraphql = aaa789Uv().buildGraphql<TProductDraft>();
    expect(aaa789UvPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Fortgeschrittener Erkundungsbohrer mit präzisen Bohrfähigkeiten für geotechnische Untersuchungen.",
          },
          {
            "locale": "it-IT",
            "value": "Trapano avanzato per esplorazione con capacità di trapanazione di precisione per indagini geotecniche.",
          },
          {
            "locale": "nl-NL",
            "value": "Geavanceerde exploratieboor met precisieboorcapaciteiten voor geotechnisch onderzoek.",
          },
          {
            "locale": "fr-FR",
            "value": "Forage d'exploration avancé avec des capacités de forage de précision pour des investigations géotechniques.",
          },
          {
            "locale": "en-AU",
            "value": "Advanced exploration drill with precision drilling capabilities for geotechnical investigations.",
          },
          {
            "locale": "es-ES",
            "value": "Perforadora de exploración avanzada con capacidades de perforación de precisión para investigaciones geotécnicas.",
          },
          {
            "locale": "en-GB",
            "value": "Advanced exploration drill with precision drilling capabilities for geotechnical investigations.",
          },
          {
            "locale": "en-NZ",
            "value": "Advanced exploration drill with precision drilling capabilities for geotechnical investigations.",
          },
          {
            "locale": "pt-PT",
            "value": "Perfuratriz de exploração avançada com capacidades de perfuração de precisão para investigações geotécnicas.",
          },
          {
            "locale": "en-US",
            "value": "Advanced exploration drill with precision drilling capabilities for geotechnical investigations.",
          },
        ],
        "key": "aaa789-uv",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "10000",
            },
            {
              "name": "color",
              "value": "{"key":"RED","label":{"de-DE":"Rot","it-IT":"Rosso","nl-NL":"Rood","fr-FR":"Rouge","en-AU":"Red","es-ES":"Rojo","en-GB":"Red","en-NZ":"Red","pt-PT":"Vermelho","en-US":"Red"}}",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "aaa789-uv-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "AAA789 UV Erkundungsbohrer",
          },
          {
            "locale": "it-IT",
            "value": "AAA789 UV Trapano per Esplorazione",
          },
          {
            "locale": "nl-NL",
            "value": "AAA789 UV Exploratieboor",
          },
          {
            "locale": "fr-FR",
            "value": "AAA789 UV Forage d'exploration",
          },
          {
            "locale": "en-AU",
            "value": "AAA789 UV Exploration Drill",
          },
          {
            "locale": "es-ES",
            "value": "AAA789 UV Perforadora de exploración",
          },
          {
            "locale": "en-GB",
            "value": "AAA789 UV Exploration Drill",
          },
          {
            "locale": "en-NZ",
            "value": "AAA789 UV Exploration Drill",
          },
          {
            "locale": "pt-PT",
            "value": "AAA789 UV Perfuratriz de Exploração",
          },
          {
            "locale": "en-US",
            "value": "AAA789 UV Exploration Drill",
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
            "value": "aaa789-uv",
          },
          {
            "locale": "it-IT",
            "value": "aaa789-uv",
          },
          {
            "locale": "nl-NL",
            "value": "aaa789-uv",
          },
          {
            "locale": "fr-FR",
            "value": "aaa789-uv",
          },
          {
            "locale": "en-AU",
            "value": "aaa789-uv",
          },
          {
            "locale": "es-ES",
            "value": "aaa789-uv",
          },
          {
            "locale": "en-GB",
            "value": "aaa789-uv",
          },
          {
            "locale": "en-NZ",
            "value": "aaa789-uv",
          },
          {
            "locale": "pt-PT",
            "value": "aaa789-uv",
          },
          {
            "locale": "en-US",
            "value": "aaa789-uv",
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
                "value": "10000",
              },
              {
                "name": "color",
                "value": "{"key":"BLUE","label":{"de-DE":"Blau","it-IT":"Blu","nl-NL":"Blauw","fr-FR":"Bleu","en-AU":"Blue","es-ES":"Azul","en-GB":"Blue","en-NZ":"Blue","pt-PT":"Azul","en-US":"Blue"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "aaa789-uv-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "10000",
              },
              {
                "name": "color",
                "value": "{"key":"GREEN","label":{"de-DE":"Grün","it-IT":"Verde","nl-NL":"Groen","fr-FR":"Vert","en-AU":"Green","es-ES":"Verde","en-GB":"Green","en-NZ":"Green","pt-PT":"Verde","en-US":"Green"}}",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/aaa789-uv-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "aaa789-uv-green",
          },
        ],
      }
    `);
  });
});
