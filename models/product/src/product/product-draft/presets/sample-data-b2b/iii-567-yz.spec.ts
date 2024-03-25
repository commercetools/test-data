import type { TProductDraft } from '../../../types';
import iii567Yz from './iii-567-yz';

describe(`with iii567Yz preset`, () => {
  it(`should return a iii567Yz preset`, () => {
    const iii567YzPreset = iii567Yz().build<TProductDraft>();
    expect(iii567YzPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "piling-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Robuster Rammpfahlhammer mit fortschrittlicher Schlagkraftregelung für effizientes und kontrolliertes Rammen von Fundamenten.",
          "en": undefined,
          "en-AU": "Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.",
          "en-GB": "Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.",
          "en-NZ": "Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.",
          "en-US": "Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.",
          "es-ES": "Martillo de pilotaje robusto con control avanzado de la fuerza de impacto para pilotes de cimentación eficientes y controlados.",
          "fr": undefined,
          "fr-FR": "Marteau de battage robuste avec un contrôle avancé de la force d&#39;impact pour un fonçage de fondation efficace et maîtrisé.",
          "it-IT": "Martello robusto per pali con controllo avanzato della forza d&#39;impatto per piantare pali in modo efficiente e controllato.",
          "nl-NL": "Robuuste heihamer met geavanceerde slagkrachtcontrole voor efficiënt en gecontroleerd heien van funderingen.",
          "pt-PT": "Martelo de cravação robusto com controle avançado de força de impacto para cravação eficiente e controlada de fundações.",
        },
        "key": "iii567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": 25000,
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
                "key": "fixed",
                "label": "Fixed",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "iii567-yz-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "III567 YZ Rammpfahlhammer",
          "en": undefined,
          "en-AU": "III567 YZ Piling Hammer",
          "en-GB": "III567 YZ Piling Hammer",
          "en-NZ": "III567 YZ Piling Hammer",
          "en-US": "III567 YZ Piling Hammer",
          "es-ES": "III567 YZ Martillo de pilotaje",
          "fr": undefined,
          "fr-FR": "III567 YZ Marteau de battage",
          "it-IT": "III567 YZ Martello per Pali",
          "nl-NL": "III567 YZ Heihamer",
          "pt-PT": "III567 YZ Martelo de Cravação",
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
          "de-DE": "iii567-yz",
          "en": undefined,
          "en-AU": "iii567-yz",
          "en-GB": "iii567-yz",
          "en-NZ": "iii567-yz",
          "en-US": "iii567-yz",
          "es-ES": "iii567-yz",
          "fr": undefined,
          "fr-FR": "iii567-yz",
          "it-IT": "iii567-yz",
          "nl-NL": "iii567-yz",
          "pt-PT": "iii567-yz",
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
                "value": 25000,
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
                  "key": "fixed",
                  "label": "Fixed",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "iii567-yz-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": 25000,
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
                  "key": "fixed",
                  "label": "Fixed",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "iii567-yz-green",
          },
        ],
      }
    `);
  });

  it(`should return a iii567Yz preset when built for graphql`, () => {
    const iii567YzPresetGraphql = iii567Yz().buildGraphql<TProductDraft>();
    expect(iii567YzPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "piling-hammers",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Robuster Rammpfahlhammer mit fortschrittlicher Schlagkraftregelung für effizientes und kontrolliertes Rammen von Fundamenten.",
          },
          {
            "locale": "it-IT",
            "value": "Martello robusto per pali con controllo avanzato della forza d&#39;impatto per piantare pali in modo efficiente e controllato.",
          },
          {
            "locale": "nl-NL",
            "value": "Robuuste heihamer met geavanceerde slagkrachtcontrole voor efficiënt en gecontroleerd heien van funderingen.",
          },
          {
            "locale": "fr-FR",
            "value": "Marteau de battage robuste avec un contrôle avancé de la force d&#39;impact pour un fonçage de fondation efficace et maîtrisé.",
          },
          {
            "locale": "en-AU",
            "value": "Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.",
          },
          {
            "locale": "es-ES",
            "value": "Martillo de pilotaje robusto con control avanzado de la fuerza de impacto para pilotes de cimentación eficientes y controlados.",
          },
          {
            "locale": "en-GB",
            "value": "Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.",
          },
          {
            "locale": "en-NZ",
            "value": "Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.",
          },
          {
            "locale": "pt-PT",
            "value": "Martelo de cravação robusto com controle avançado de força de impacto para cravação eficiente e controlada de fundações.",
          },
          {
            "locale": "en-US",
            "value": "Robust piling hammer with advanced impact force control for efficient and controlled foundation piling.",
          },
        ],
        "key": "iii567-yz",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "capacity",
              "value": "25000",
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
              "value": "{"key":"fixed","label":"Fixed"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-red.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "iii567-yz-red",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "III567 YZ Rammpfahlhammer",
          },
          {
            "locale": "it-IT",
            "value": "III567 YZ Martello per Pali",
          },
          {
            "locale": "nl-NL",
            "value": "III567 YZ Heihamer",
          },
          {
            "locale": "fr-FR",
            "value": "III567 YZ Marteau de battage",
          },
          {
            "locale": "en-AU",
            "value": "III567 YZ Piling Hammer",
          },
          {
            "locale": "es-ES",
            "value": "III567 YZ Martillo de pilotaje",
          },
          {
            "locale": "en-GB",
            "value": "III567 YZ Piling Hammer",
          },
          {
            "locale": "en-NZ",
            "value": "III567 YZ Piling Hammer",
          },
          {
            "locale": "pt-PT",
            "value": "III567 YZ Martelo de Cravação",
          },
          {
            "locale": "en-US",
            "value": "III567 YZ Piling Hammer",
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
            "value": "iii567-yz",
          },
          {
            "locale": "it-IT",
            "value": "iii567-yz",
          },
          {
            "locale": "nl-NL",
            "value": "iii567-yz",
          },
          {
            "locale": "fr-FR",
            "value": "iii567-yz",
          },
          {
            "locale": "en-AU",
            "value": "iii567-yz",
          },
          {
            "locale": "es-ES",
            "value": "iii567-yz",
          },
          {
            "locale": "en-GB",
            "value": "iii567-yz",
          },
          {
            "locale": "en-NZ",
            "value": "iii567-yz",
          },
          {
            "locale": "pt-PT",
            "value": "iii567-yz",
          },
          {
            "locale": "en-US",
            "value": "iii567-yz",
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
                "value": "25000",
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
                "value": "{"key":"fixed","label":"Fixed"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-blue.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "iii567-yz-blue",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "capacity",
                "value": "25000",
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
                "value": "{"key":"fixed","label":"Fixed"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 1024,
                  "width": 1024,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/iii567-yz-green.webp",
              },
            ],
            "key": undefined,
            "prices": undefined,
            "sku": "iii567-yz-green",
          },
        ],
      }
    `);
  });
});
