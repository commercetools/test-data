import type { TProductTypeDraft } from '../../../types';
import heavyEarthmovingAndConstructionEquipment from './heavy-earthmoving-and-construction-equipment';

describe(`with heavyEarthmovingAndConstructionEquipment preset`, () => {
  it(`should return a heavyEarthmovingAndConstructionEquipment preset`, () => {
    const heavyEarthmovingAndConstructionEquipmentPreset =
      heavyEarthmovingAndConstructionEquipment().build<TProductTypeDraft>();
    expect(heavyEarthmovingAndConstructionEquipmentPreset)
      .toMatchInlineSnapshot(`
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
              "de-DE": "Modell",
              "en": undefined,
              "en-AU": "Model",
              "en-GB": "Model",
              "en-NZ": "Model",
              "en-US": "Model",
              "es-ES": "Modelo",
              "fr": undefined,
              "fr-FR": "Modèle",
              "it-IT": "Modello",
              "nl-NL": "Model",
              "pt-PT": "Modelo",
            },
            "name": "model",
            "type": {
              "name": "number",
            },
          },
        ],
        "description": "Equipment used in heavy earthmoving and construction activities",
        "key": "heavy-earthmoving-and-construction-equipment",
        "name": "Heavy Earthmoving and Construction Equipment",
      }
    `);
  });

  it(`should return a heavyEarthmovingAndConstructionEquipment preset when built for graphql`, () => {
    const heavyEarthmovingAndConstructionEquipmentPresetGraphql =
      heavyEarthmovingAndConstructionEquipment().buildGraphql<TProductTypeDraft>();
    expect(heavyEarthmovingAndConstructionEquipmentPresetGraphql)
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
            "name": "iso45001",
            "type": {
              "dummy": null,
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
            "name": "relatedProducts",
            "type": {
              "set": {
                "elementType": {
                  "referenceTypeId": "product",
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
            "label": [
              {
                "locale": "de-DE",
                "value": "Modell",
              },
              {
                "locale": "it-IT",
                "value": "Modello",
              },
              {
                "locale": "nl-NL",
                "value": "Model",
              },
              {
                "locale": "fr-FR",
                "value": "Modèle",
              },
              {
                "locale": "en-AU",
                "value": "Model",
              },
              {
                "locale": "es-ES",
                "value": "Modelo",
              },
              {
                "locale": "en-GB",
                "value": "Model",
              },
              {
                "locale": "en-NZ",
                "value": "Model",
              },
              {
                "locale": "pt-PT",
                "value": "Modelo",
              },
              {
                "locale": "en-US",
                "value": "Model",
              },
            ],
            "name": "model",
            "type": {
              "number": {
                "dummy": null,
              },
            },
          },
        ],
        "description": "Equipment used in heavy earthmoving and construction activities",
        "key": "heavy-earthmoving-and-construction-equipment",
        "name": "Heavy Earthmoving and Construction Equipment",
      }
    `);
  });
});
