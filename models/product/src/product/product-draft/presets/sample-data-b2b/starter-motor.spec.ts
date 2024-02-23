import type { TProductDraft } from '../../../types';
import starterMotor from './starter-motor';

describe(`with starterMotor preset`, () => {
  it(`should return a starterMotor preset`, () => {
    const starterMotorPreset = starterMotor().build<TProductDraft>();
    expect(starterMotorPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "spare-parts",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Elektromotor, der den Motor startet.",
          "en": undefined,
          "en-US": "Electric motor that starts the engine.",
          "es-ES": "Motor eléctrico que arranca el motor.",
          "fr": undefined,
          "fr-FR": "Moteur électrique qui démarre le moteur.",
          "it-IT": "Motore elettrico che avvia il motore.",
          "nl-NL": "Elektromotor die de motor start.",
          "pt-PT": "Motor elétrico que arranca o motor.",
        },
        "key": "starter-motor",
        "masterVariant": {
          "assets": undefined,
          "attributes": [],
          "images": [
            {
              "dimensions": {
                "h": 1024,
                "w": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/starter-motor.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "starter-motor",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Anlasser",
          "en": undefined,
          "en-US": "Starter Motor",
          "es-ES": "Motor de arranque",
          "fr": undefined,
          "fr-FR": "Moteur de démarrage",
          "it-IT": "Motorino di avviamento",
          "nl-NL": "Startmotor",
          "pt-PT": "Motor de arranque",
        },
        "priceMode": undefined,
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "starter-motor",
          "en": undefined,
          "en-US": "starter-motor",
          "es-ES": "starter-motor",
          "fr": undefined,
          "fr-FR": "starter-motor",
          "it-IT": "starter-motor",
          "nl-NL": "starter-motor",
          "pt-PT": "starter-motor",
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });

  it(`should return a starterMotor preset when built for graphql`, () => {
    const starterMotorPresetGraphql =
      starterMotor().buildGraphql<TProductDraft>();
    expect(starterMotorPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "spare-parts",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Elektromotor, der den Motor startet.",
          },
          {
            "locale": "it-IT",
            "value": "Motore elettrico che avvia il motore.",
          },
          {
            "locale": "nl-NL",
            "value": "Elektromotor die de motor start.",
          },
          {
            "locale": "fr-FR",
            "value": "Moteur électrique qui démarre le moteur.",
          },
          {
            "locale": "es-ES",
            "value": "Motor eléctrico que arranca el motor.",
          },
          {
            "locale": "pt-PT",
            "value": "Motor elétrico que arranca o motor.",
          },
          {
            "locale": "en-US",
            "value": "Electric motor that starts the engine.",
          },
        ],
        "key": "starter-motor",
        "masterVariant": {
          "assets": undefined,
          "attributes": [],
          "images": [
            {
              "dimensions": {
                "height": 1024,
                "width": 1024,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/starter-motor.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "starter-motor",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Anlasser",
          },
          {
            "locale": "it-IT",
            "value": "Motorino di avviamento",
          },
          {
            "locale": "nl-NL",
            "value": "Startmotor",
          },
          {
            "locale": "fr-FR",
            "value": "Moteur de démarrage",
          },
          {
            "locale": "es-ES",
            "value": "Motor de arranque",
          },
          {
            "locale": "pt-PT",
            "value": "Motor de arranque",
          },
          {
            "locale": "en-US",
            "value": "Starter Motor",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "starter-motor",
          },
          {
            "locale": "it-IT",
            "value": "starter-motor",
          },
          {
            "locale": "nl-NL",
            "value": "starter-motor",
          },
          {
            "locale": "fr-FR",
            "value": "starter-motor",
          },
          {
            "locale": "es-ES",
            "value": "starter-motor",
          },
          {
            "locale": "pt-PT",
            "value": "starter-motor",
          },
          {
            "locale": "en-US",
            "value": "starter-motor",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
