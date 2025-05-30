import type { TProductTypeDraft } from '../../../types';
import * as heavyLiftingAndSpecializedEquipmentPresets from './heavy-lifting-and-specialized-equipment';

describe(`with heavyLiftingAndSpecializedEquipment preset`, () => {
  it(`should return a heavyLiftingAndSpecializedEquipment preset`, () => {
    const heavyLiftingAndSpecializedEquipmentPreset =
      heavyLiftingAndSpecializedEquipmentPresets
        .restPreset()
        .build<TProductTypeDraft>();
    expect(heavyLiftingAndSpecializedEquipmentPreset).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Kapazität",
              "en": undefined,
              "en-AU": "Capacity",
              "en-GB": "Capacity",
              "en-NZ": "Capacity",
              "en-US": "Capacity",
              "es-ES": "Capacidad",
              "fr": undefined,
              "fr-FR": "Capacité",
              "it-IT": "Capacità",
              "nl-NL": "Capaciteit",
              "pt-PT": "Capacidade",
            },
            "name": "capacity",
            "type": {
              "name": "number",
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "ISO 45001 zertifiziert",
              "en": undefined,
              "en-AU": "ISO 45001 certified",
              "en-GB": "ISO 45001 certified",
              "en-NZ": "ISO 45001 certified",
              "en-US": "ISO 45001 certified",
              "es-ES": "Certificado ISO 45001",
              "fr": undefined,
              "fr-FR": "Certifié ISO 45001",
              "it-IT": "Certificato ISO 45001",
              "nl-NL": "ISO 45001 gecertificeerd",
              "pt-PT": "Certificado ISO 45001",
            },
            "name": "iso45001",
            "type": {
              "name": "boolean",
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Verwandte Produkte",
              "en": undefined,
              "en-AU": "Related products",
              "en-GB": "Related products",
              "en-NZ": "Related products",
              "en-US": "Related products",
              "es-ES": "Productos relacionados",
              "fr": undefined,
              "fr-FR": "Produits associés",
              "it-IT": "Prodotti correlati",
              "nl-NL": "Gerelateerde producten",
              "pt-PT": "Produtos relacionados",
            },
            "name": "relatedProducts",
            "type": {
              "elementType": {
                "name": "reference",
                "referenceTypeId": "product",
              },
              "name": "set",
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Mobilität",
              "en": undefined,
              "en-AU": "Mobility",
              "en-GB": "Mobility",
              "en-NZ": "Mobility",
              "en-US": "Mobility",
              "es-ES": "Movilidad",
              "fr": undefined,
              "fr-FR": "Mobilité",
              "it-IT": "Mobilità",
              "nl-NL": "Mobiliteit",
              "pt-PT": "Mobilidade",
            },
            "name": "mobility",
            "type": {
              "name": "enum",
              "values": [
                {
                  "key": "tracked",
                  "label": "Tracked",
                },
                {
                  "key": "wheeled",
                  "label": "Wheeled",
                },
                {
                  "key": "fixed",
                  "label": "Fixed",
                },
                {
                  "key": "marine",
                  "label": "Marine",
                },
              ],
            },
          },
          {
            "attributeConstraint": "Unique",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": true,
            "isSearchable": true,
            "label": {
              "de": undefined,
              "de-DE": "Farbe",
              "en": undefined,
              "en-AU": "Color",
              "en-GB": "Color",
              "en-NZ": "Color",
              "en-US": "Color",
              "es-ES": "Color",
              "fr": undefined,
              "fr-FR": "Couleur",
              "it-IT": "Colore",
              "nl-NL": "Kleur",
              "pt-PT": "Cor",
            },
            "name": "color",
            "type": {
              "name": "lenum",
              "values": [
                {
                  "key": "RED",
                  "label": {
                    "de": undefined,
                    "de-DE": "Rot",
                    "en": undefined,
                    "en-AU": "Red",
                    "en-GB": "Red",
                    "en-NZ": "Red",
                    "en-US": "Red",
                    "es-ES": "Rojo",
                    "fr": undefined,
                    "fr-FR": "Rouge",
                    "it-IT": "Rosso",
                    "nl-NL": "Rood",
                    "pt-PT": "Vermelho",
                  },
                },
                {
                  "key": "BLUE",
                  "label": {
                    "de": undefined,
                    "de-DE": "Blau",
                    "en": undefined,
                    "en-AU": "Blue",
                    "en-GB": "Blue",
                    "en-NZ": "Blue",
                    "en-US": "Blue",
                    "es-ES": "Azul",
                    "fr": undefined,
                    "fr-FR": "Bleu",
                    "it-IT": "Blu",
                    "nl-NL": "Blauw",
                    "pt-PT": "Azul",
                  },
                },
                {
                  "key": "GREEN",
                  "label": {
                    "de": undefined,
                    "de-DE": "Grün",
                    "en": undefined,
                    "en-AU": "Green",
                    "en-GB": "Green",
                    "en-NZ": "Green",
                    "en-US": "Green",
                    "es-ES": "Verde",
                    "fr": undefined,
                    "fr-FR": "Vert",
                    "it-IT": "Verde",
                    "nl-NL": "Groen",
                    "pt-PT": "Verde",
                  },
                },
              ],
            },
          },
        ],
        "description": "Equipment designed for heavy lifting and specialized tasks",
        "key": "heavy-lifting-and-specialized-equipment",
        "name": "Heavy Lifting and Specialized Equipment",
      }
    `);
  });

  it(`should return a heavyLiftingAndSpecializedEquipment preset when built for graphql`, () => {
    const heavyLiftingAndSpecializedEquipmentPresetGraphql =
      heavyLiftingAndSpecializedEquipmentPresets
        .graphqlPreset()
        .buildGraphql<TProductTypeDraft>();
    expect(heavyLiftingAndSpecializedEquipmentPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "attributeDefinitions": [
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "de-DE",
                "value": "Kapazität",
              },
              {
                "locale": "it-IT",
                "value": "Capacità",
              },
              {
                "locale": "nl-NL",
                "value": "Capaciteit",
              },
              {
                "locale": "fr-FR",
                "value": "Capacité",
              },
              {
                "locale": "en-AU",
                "value": "Capacity",
              },
              {
                "locale": "es-ES",
                "value": "Capacidad",
              },
              {
                "locale": "en-GB",
                "value": "Capacity",
              },
              {
                "locale": "en-NZ",
                "value": "Capacity",
              },
              {
                "locale": "pt-PT",
                "value": "Capacidade",
              },
              {
                "locale": "en-US",
                "value": "Capacity",
              },
            ],
            "level": "Variant",
            "name": "capacity",
            "type": {
              "number": {
                "dummy": null,
              },
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "de-DE",
                "value": "ISO 45001 zertifiziert",
              },
              {
                "locale": "it-IT",
                "value": "Certificato ISO 45001",
              },
              {
                "locale": "nl-NL",
                "value": "ISO 45001 gecertificeerd",
              },
              {
                "locale": "fr-FR",
                "value": "Certifié ISO 45001",
              },
              {
                "locale": "en-AU",
                "value": "ISO 45001 certified",
              },
              {
                "locale": "es-ES",
                "value": "Certificado ISO 45001",
              },
              {
                "locale": "en-GB",
                "value": "ISO 45001 certified",
              },
              {
                "locale": "en-NZ",
                "value": "ISO 45001 certified",
              },
              {
                "locale": "pt-PT",
                "value": "Certificado ISO 45001",
              },
              {
                "locale": "en-US",
                "value": "ISO 45001 certified",
              },
            ],
            "level": "Variant",
            "name": "iso45001",
            "type": {
              "boolean": {
                "dummy": null,
              },
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "de-DE",
                "value": "Verwandte Produkte",
              },
              {
                "locale": "it-IT",
                "value": "Prodotti correlati",
              },
              {
                "locale": "nl-NL",
                "value": "Gerelateerde producten",
              },
              {
                "locale": "fr-FR",
                "value": "Produits associés",
              },
              {
                "locale": "en-AU",
                "value": "Related products",
              },
              {
                "locale": "es-ES",
                "value": "Productos relacionados",
              },
              {
                "locale": "en-GB",
                "value": "Related products",
              },
              {
                "locale": "en-NZ",
                "value": "Related products",
              },
              {
                "locale": "pt-PT",
                "value": "Produtos relacionados",
              },
              {
                "locale": "en-US",
                "value": "Related products",
              },
            ],
            "level": "Variant",
            "name": "relatedProducts",
            "type": {
              "set": {
                "elementType": {
                  "reference": {
                    "referenceTypeId": "product",
                  },
                },
              },
            },
          },
          {
            "attributeConstraint": "SameForAll",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": false,
            "isSearchable": true,
            "label": [
              {
                "locale": "de-DE",
                "value": "Mobilität",
              },
              {
                "locale": "it-IT",
                "value": "Mobilità",
              },
              {
                "locale": "nl-NL",
                "value": "Mobiliteit",
              },
              {
                "locale": "fr-FR",
                "value": "Mobilité",
              },
              {
                "locale": "en-AU",
                "value": "Mobility",
              },
              {
                "locale": "es-ES",
                "value": "Movilidad",
              },
              {
                "locale": "en-GB",
                "value": "Mobility",
              },
              {
                "locale": "en-NZ",
                "value": "Mobility",
              },
              {
                "locale": "pt-PT",
                "value": "Mobilidade",
              },
              {
                "locale": "en-US",
                "value": "Mobility",
              },
            ],
            "level": "Variant",
            "name": "mobility",
            "type": {
              "enum": {
                "values": [
                  {
                    "key": "tracked",
                    "label": "Tracked",
                  },
                  {
                    "key": "wheeled",
                    "label": "Wheeled",
                  },
                  {
                    "key": "fixed",
                    "label": "Fixed",
                  },
                  {
                    "key": "marine",
                    "label": "Marine",
                  },
                ],
              },
            },
          },
          {
            "attributeConstraint": "Unique",
            "inputHint": "SingleLine",
            "inputTip": undefined,
            "isRequired": true,
            "isSearchable": true,
            "label": [
              {
                "locale": "de-DE",
                "value": "Farbe",
              },
              {
                "locale": "it-IT",
                "value": "Colore",
              },
              {
                "locale": "nl-NL",
                "value": "Kleur",
              },
              {
                "locale": "fr-FR",
                "value": "Couleur",
              },
              {
                "locale": "en-AU",
                "value": "Color",
              },
              {
                "locale": "es-ES",
                "value": "Color",
              },
              {
                "locale": "en-GB",
                "value": "Color",
              },
              {
                "locale": "en-NZ",
                "value": "Color",
              },
              {
                "locale": "pt-PT",
                "value": "Cor",
              },
              {
                "locale": "en-US",
                "value": "Color",
              },
            ],
            "level": "Variant",
            "name": "color",
            "type": {
              "lenum": {
                "values": [
                  {
                    "key": "RED",
                    "label": [
                      {
                        "locale": "de-DE",
                        "value": "Rot",
                      },
                      {
                        "locale": "it-IT",
                        "value": "Rosso",
                      },
                      {
                        "locale": "nl-NL",
                        "value": "Rood",
                      },
                      {
                        "locale": "fr-FR",
                        "value": "Rouge",
                      },
                      {
                        "locale": "en-AU",
                        "value": "Red",
                      },
                      {
                        "locale": "es-ES",
                        "value": "Rojo",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Red",
                      },
                      {
                        "locale": "en-NZ",
                        "value": "Red",
                      },
                      {
                        "locale": "pt-PT",
                        "value": "Vermelho",
                      },
                      {
                        "locale": "en-US",
                        "value": "Red",
                      },
                    ],
                  },
                  {
                    "key": "BLUE",
                    "label": [
                      {
                        "locale": "de-DE",
                        "value": "Blau",
                      },
                      {
                        "locale": "it-IT",
                        "value": "Blu",
                      },
                      {
                        "locale": "nl-NL",
                        "value": "Blauw",
                      },
                      {
                        "locale": "fr-FR",
                        "value": "Bleu",
                      },
                      {
                        "locale": "en-AU",
                        "value": "Blue",
                      },
                      {
                        "locale": "es-ES",
                        "value": "Azul",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Blue",
                      },
                      {
                        "locale": "en-NZ",
                        "value": "Blue",
                      },
                      {
                        "locale": "pt-PT",
                        "value": "Azul",
                      },
                      {
                        "locale": "en-US",
                        "value": "Blue",
                      },
                    ],
                  },
                  {
                    "key": "GREEN",
                    "label": [
                      {
                        "locale": "de-DE",
                        "value": "Grün",
                      },
                      {
                        "locale": "it-IT",
                        "value": "Verde",
                      },
                      {
                        "locale": "nl-NL",
                        "value": "Groen",
                      },
                      {
                        "locale": "fr-FR",
                        "value": "Vert",
                      },
                      {
                        "locale": "en-AU",
                        "value": "Green",
                      },
                      {
                        "locale": "es-ES",
                        "value": "Verde",
                      },
                      {
                        "locale": "en-GB",
                        "value": "Green",
                      },
                      {
                        "locale": "en-NZ",
                        "value": "Green",
                      },
                      {
                        "locale": "pt-PT",
                        "value": "Verde",
                      },
                      {
                        "locale": "en-US",
                        "value": "Green",
                      },
                    ],
                  },
                ],
              },
            },
          },
        ],
        "description": "Equipment designed for heavy lifting and specialized tasks",
        "key": "heavy-lifting-and-specialized-equipment",
        "name": "Heavy Lifting and Specialized Equipment",
      }
    `);
  });
});
