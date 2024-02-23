import type { TProductDraft } from '../../../types';
import taperedRollerBearing from './tapered-roller-bearing';

describe(`with taperedRollerBearing preset`, () => {
  it(`should return a taperedRollerBearing preset`, () => {
    const taperedRollerBearingPreset =
      taperedRollerBearing().build<TProductDraft>();
    expect(taperedRollerBearingPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Wird in Radnaben und anderen Komponenten verwendet.",
          "en": undefined,
          "en-US": "Used in wheel hubs and other components.",
          "es-ES": "Se utiliza en bujes de rueda y otros componentes.",
          "fr": undefined,
          "fr-FR": "Utilisé dans les moyeux de roue et autres composants.",
          "it-IT": "Utilizzato nei mozzi delle ruote e in altri componenti.",
          "nl-NL": "Gebruikt in wielnaven en andere componenten.",
          "pt-PT": "Usado em cubos de roda e outros componentes.",
        },
        "key": "tapered-roller-bearing",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tapered-roller-bearing.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "tapered-roller-bearing",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kegelrollenlager",
          "en": undefined,
          "en-US": "Tapered Roller Bearing",
          "es-ES": "Rodamiento de rodillos cónicos",
          "fr": undefined,
          "fr-FR": "Roulement à rouleaux coniques",
          "it-IT": "Cuscinetto a rulli conici",
          "nl-NL": "Kegellager",
          "pt-PT": "Rolamento de rolos cônicos",
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
          "de-DE": "tapered-roller-bearing",
          "en": undefined,
          "en-US": "tapered-roller-bearing",
          "es-ES": "tapered-roller-bearing",
          "fr": undefined,
          "fr-FR": "tapered-roller-bearing",
          "it-IT": "tapered-roller-bearing",
          "nl-NL": "tapered-roller-bearing",
          "pt-PT": "tapered-roller-bearing",
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

  it(`should return a taperedRollerBearing preset when built for graphql`, () => {
    const taperedRollerBearingPresetGraphql =
      taperedRollerBearing().buildGraphql<TProductDraft>();
    expect(taperedRollerBearingPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Wird in Radnaben und anderen Komponenten verwendet.",
          },
          {
            "locale": "it-IT",
            "value": "Utilizzato nei mozzi delle ruote e in altri componenti.",
          },
          {
            "locale": "nl-NL",
            "value": "Gebruikt in wielnaven en andere componenten.",
          },
          {
            "locale": "fr-FR",
            "value": "Utilisé dans les moyeux de roue et autres composants.",
          },
          {
            "locale": "es-ES",
            "value": "Se utiliza en bujes de rueda y otros componentes.",
          },
          {
            "locale": "pt-PT",
            "value": "Usado em cubos de roda e outros componentes.",
          },
          {
            "locale": "en-US",
            "value": "Used in wheel hubs and other components.",
          },
        ],
        "key": "tapered-roller-bearing",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/tapered-roller-bearing.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "tapered-roller-bearing",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Kegelrollenlager",
          },
          {
            "locale": "it-IT",
            "value": "Cuscinetto a rulli conici",
          },
          {
            "locale": "nl-NL",
            "value": "Kegellager",
          },
          {
            "locale": "fr-FR",
            "value": "Roulement à rouleaux coniques",
          },
          {
            "locale": "es-ES",
            "value": "Rodamiento de rodillos cónicos",
          },
          {
            "locale": "pt-PT",
            "value": "Rolamento de rolos cônicos",
          },
          {
            "locale": "en-US",
            "value": "Tapered Roller Bearing",
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
            "value": "tapered-roller-bearing",
          },
          {
            "locale": "it-IT",
            "value": "tapered-roller-bearing",
          },
          {
            "locale": "nl-NL",
            "value": "tapered-roller-bearing",
          },
          {
            "locale": "fr-FR",
            "value": "tapered-roller-bearing",
          },
          {
            "locale": "es-ES",
            "value": "tapered-roller-bearing",
          },
          {
            "locale": "pt-PT",
            "value": "tapered-roller-bearing",
          },
          {
            "locale": "en-US",
            "value": "tapered-roller-bearing",
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
