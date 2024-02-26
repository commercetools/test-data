import type { TProductDraft } from '../../../types';
import ledWorkLight from './led-work-light';

describe(`with ledWorkLight preset`, () => {
  it(`should return a ledWorkLight preset`, () => {
    const ledWorkLightPreset = ledWorkLight().build<TProductDraft>();
    expect(ledWorkLightPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Bietet Beleuchtung für Arbeiten bei Nacht oder bei schwachem Licht.",
          "en": undefined,
          "en-US": "Provides illumination for night-time or low-light work.",
          "es-ES": "Proporciona iluminación para trabajar de noche o en condiciones de poca luz.",
          "fr": undefined,
          "fr-FR": "Fournit un éclairage pour le travail de nuit ou en faible luminosité.",
          "it-IT": "Fornisce illuminazione per lavori notturni o in condizioni di scarsa luce.",
          "nl-NL": "Zorgt voor verlichting voor nachtwerk of werk bij weinig licht.",
          "pt-PT": "Fornece iluminação para trabalho noturno ou em condições de pouca luz.",
        },
        "key": "led-work-light",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/led-work-light.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "led-work-light",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "LED-Arbeitsleuchte",
          "en": undefined,
          "en-US": "LED Work Light",
          "es-ES": "Luz de trabajo LED",
          "fr": undefined,
          "fr-FR": "Lumière de travail LED",
          "it-IT": "Luce di lavoro a LED",
          "nl-NL": "LED-werklamp",
          "pt-PT": "Luz de trabalho LED",
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
          "de-DE": "led-work-light",
          "en": undefined,
          "en-US": "led-work-light",
          "es-ES": "led-work-light",
          "fr": undefined,
          "fr-FR": "led-work-light",
          "it-IT": "led-work-light",
          "nl-NL": "led-work-light",
          "pt-PT": "led-work-light",
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

  it(`should return a ledWorkLight preset when built for graphql`, () => {
    const ledWorkLightPresetGraphql =
      ledWorkLight().buildGraphql<TProductDraft>();
    expect(ledWorkLightPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Bietet Beleuchtung für Arbeiten bei Nacht oder bei schwachem Licht.",
          },
          {
            "locale": "it-IT",
            "value": "Fornisce illuminazione per lavori notturni o in condizioni di scarsa luce.",
          },
          {
            "locale": "nl-NL",
            "value": "Zorgt voor verlichting voor nachtwerk of werk bij weinig licht.",
          },
          {
            "locale": "fr-FR",
            "value": "Fournit un éclairage pour le travail de nuit ou en faible luminosité.",
          },
          {
            "locale": "es-ES",
            "value": "Proporciona iluminación para trabajar de noche o en condiciones de poca luz.",
          },
          {
            "locale": "pt-PT",
            "value": "Fornece iluminação para trabalho noturno ou em condições de pouca luz.",
          },
          {
            "locale": "en-US",
            "value": "Provides illumination for night-time or low-light work.",
          },
        ],
        "key": "led-work-light",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/led-work-light.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "led-work-light",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "LED-Arbeitsleuchte",
          },
          {
            "locale": "it-IT",
            "value": "Luce di lavoro a LED",
          },
          {
            "locale": "nl-NL",
            "value": "LED-werklamp",
          },
          {
            "locale": "fr-FR",
            "value": "Lumière de travail LED",
          },
          {
            "locale": "es-ES",
            "value": "Luz de trabajo LED",
          },
          {
            "locale": "pt-PT",
            "value": "Luz de trabalho LED",
          },
          {
            "locale": "en-US",
            "value": "LED Work Light",
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
            "value": "led-work-light",
          },
          {
            "locale": "it-IT",
            "value": "led-work-light",
          },
          {
            "locale": "nl-NL",
            "value": "led-work-light",
          },
          {
            "locale": "fr-FR",
            "value": "led-work-light",
          },
          {
            "locale": "es-ES",
            "value": "led-work-light",
          },
          {
            "locale": "pt-PT",
            "value": "led-work-light",
          },
          {
            "locale": "en-US",
            "value": "led-work-light",
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
