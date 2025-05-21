import type { TProductDraft } from '../../../types';
import ccc567Yz from './ccc-567-yz';

describe(`with ccc567Yz preset`, () => {
  it(`should return a ccc567Yz preset`, () => {
    const ccc567YzPreset = ccc567Yz().build<TProductDraft>();
    expect(ccc567YzPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "production-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Robuster Produktionsbohrer mit fortschrittlichen Bohrfähigkeiten für kontinuierliche Bergbauoperationen im Schwerlastbereich.",
          "en": undefined,
          "en-AU": "Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.",
          "en-GB": "Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.",
          "en-NZ": "Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.",
          "en-US": "Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.",
          "es-ES": "Perforadora de producción robusta con capacidades avanzadas de perforación para operaciones mineras continuas y de servicio pesado.",
          "fr": undefined,
          "fr-FR": "Forage de production robuste avec des capacités de forage avancées pour des opérations minières continues et intensives.",
          "it-IT": "Trapano robusto per produzione con capacità avanzate di trapanazione per operazioni minerarie continue e pesanti.",
          "nl-NL": "Robuuste productieboor met geavanceerde boorcapaciteiten voor continue zware mijnbouwoperaties.",
          "pt-PT": "Perfuratriz de produção robusta com capacidades avançadas de perfuração para operações contínuas de mineração pesada.",
        },
        "key": "ccc567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 18000,
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ccc567-yz-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ccc567-yz-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "CCC567 YZ Produktionsbohrer",
          "en": undefined,
          "en-AU": "CCC567 YZ Production Drill",
          "en-GB": "CCC567 YZ Production Drill",
          "en-NZ": "CCC567 YZ Production Drill",
          "en-US": "CCC567 YZ Production Drill",
          "es-ES": "CCC567 YZ Perforadora de producción",
          "fr": undefined,
          "fr-FR": "CCC567 YZ Forage de production",
          "it-IT": "CCC567 YZ Trapano per Produzione",
          "nl-NL": "CCC567 YZ Productieboor",
          "pt-PT": "CCC567 YZ Perfuratriz de Produção",
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
          "de-DE": "ccc567-yz",
          "en": undefined,
          "en-AU": "ccc567-yz",
          "en-GB": "ccc567-yz",
          "en-NZ": "ccc567-yz",
          "en-US": "ccc567-yz",
          "es-ES": "ccc567-yz",
          "fr": undefined,
          "fr-FR": "ccc567-yz",
          "it-IT": "ccc567-yz",
          "nl-NL": "ccc567-yz",
          "pt-PT": "ccc567-yz",
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
                "value": 18000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ccc567-yz-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ccc567-yz-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 18000,
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ccc567-yz-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ccc567-yz-green",
          },
        ],
      }
    `);
  });

  it(`should return a ccc567Yz preset when built for graphql`, () => {
    const ccc567YzPresetGraphql = ccc567Yz().buildGraphql<TProductDraft>();
    expect(ccc567YzPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "production-drills",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Robuster Produktionsbohrer mit fortschrittlichen Bohrfähigkeiten für kontinuierliche Bergbauoperationen im Schwerlastbereich.",
          },
          {
            "locale": "it-IT",
            "value": "Trapano robusto per produzione con capacità avanzate di trapanazione per operazioni minerarie continue e pesanti.",
          },
          {
            "locale": "nl-NL",
            "value": "Robuuste productieboor met geavanceerde boorcapaciteiten voor continue zware mijnbouwoperaties.",
          },
          {
            "locale": "fr-FR",
            "value": "Forage de production robuste avec des capacités de forage avancées pour des opérations minières continues et intensives.",
          },
          {
            "locale": "en-AU",
            "value": "Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.",
          },
          {
            "locale": "es-ES",
            "value": "Perforadora de producción robusta con capacidades avanzadas de perforación para operaciones mineras continuas y de servicio pesado.",
          },
          {
            "locale": "en-GB",
            "value": "Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.",
          },
          {
            "locale": "en-NZ",
            "value": "Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.",
          },
          {
            "locale": "pt-PT",
            "value": "Perfuratriz de produção robusta com capacidades avançadas de perfuração para operações contínuas de mineração pesada.",
          },
          {
            "locale": "en-US",
            "value": "Robust production drill with advanced drilling capabilities for continuous heavy-duty mining operations.",
          },
        ],
        "key": "ccc567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "18000",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ccc567-yz-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "ccc567-yz-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "CCC567 YZ Produktionsbohrer",
          },
          {
            "locale": "it-IT",
            "value": "CCC567 YZ Trapano per Produzione",
          },
          {
            "locale": "nl-NL",
            "value": "CCC567 YZ Productieboor",
          },
          {
            "locale": "fr-FR",
            "value": "CCC567 YZ Forage de production",
          },
          {
            "locale": "en-AU",
            "value": "CCC567 YZ Production Drill",
          },
          {
            "locale": "es-ES",
            "value": "CCC567 YZ Perforadora de producción",
          },
          {
            "locale": "en-GB",
            "value": "CCC567 YZ Production Drill",
          },
          {
            "locale": "en-NZ",
            "value": "CCC567 YZ Production Drill",
          },
          {
            "locale": "pt-PT",
            "value": "CCC567 YZ Perfuratriz de Produção",
          },
          {
            "locale": "en-US",
            "value": "CCC567 YZ Production Drill",
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
            "value": "ccc567-yz",
          },
          {
            "locale": "it-IT",
            "value": "ccc567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "ccc567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "ccc567-yz",
          },
          {
            "locale": "en-AU",
            "value": "ccc567-yz",
          },
          {
            "locale": "es-ES",
            "value": "ccc567-yz",
          },
          {
            "locale": "en-GB",
            "value": "ccc567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "ccc567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "ccc567-yz",
          },
          {
            "locale": "en-US",
            "value": "ccc567-yz",
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
                "value": "18000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ccc567-yz-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ccc567-yz-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "18000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/ccc567-yz-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "ccc567-yz-green",
          },
        ],
      }
    `);
  });
});
