import type { TProductDraft } from '../../../types';
import alternator from './alternator';

describe(`with alternator preset`, () => {
  it(`should return a alternator preset`, () => {
    const alternatorPreset = alternator().build<TProductDraft>();
    expect(alternatorPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Lädt die Batterie und versorgt das elektrische System mit Strom.",
          "en": undefined,
          "en-AU": "Charges the battery and powers the electrical system.",
          "en-GB": "Charges the battery and powers the electrical system.",
          "en-NZ": "Charges the battery and powers the electrical system.",
          "en-US": "Charges the battery and powers the electrical system.",
          "es-ES": "Carga la batería y alimenta el sistema eléctrico.",
          "fr": undefined,
          "fr-FR": "Charge la batterie et alimente le système électrique.",
          "it-IT": "Carica la batteria e alimenta il sistema elettrico.",
          "nl-NL": "Laadt de accu op en voorziet het elektrische systeem van stroom.",
          "pt-PT": "Carrega a bateria e alimenta o sistema elétrico.",
        },
        "key": "alternator",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/alternator.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "alternator",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Lichtmaschine",
          "en": undefined,
          "en-AU": "Alternator",
          "en-GB": "Alternator",
          "en-NZ": "Alternator",
          "en-US": "Alternator",
          "es-ES": "Alternador",
          "fr": undefined,
          "fr-FR": "Alternateur",
          "it-IT": "Alternatore",
          "nl-NL": "Dynamo",
          "pt-PT": "Alternador",
        },
        "priceMode": "Standalone",
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "alternator",
          "en": undefined,
          "en-AU": "alternator",
          "en-GB": "alternator",
          "en-NZ": "alternator",
          "en-US": "alternator",
          "es-ES": "alternator",
          "fr": undefined,
          "fr-FR": "alternator",
          "it-IT": "alternator",
          "nl-NL": "alternator",
          "pt-PT": "alternator",
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

  it(`should return a alternator preset when built for graphql`, () => {
    const alternatorPresetGraphql = alternator().buildGraphql<TProductDraft>();
    expect(alternatorPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "Lädt die Batterie und versorgt das elektrische System mit Strom.",
          },
          {
            "locale": "it-IT",
            "value": "Carica la batteria e alimenta il sistema elettrico.",
          },
          {
            "locale": "nl-NL",
            "value": "Laadt de accu op en voorziet het elektrische systeem van stroom.",
          },
          {
            "locale": "fr-FR",
            "value": "Charge la batterie et alimente le système électrique.",
          },
          {
            "locale": "es-ES",
            "value": "Carga la batería y alimenta el sistema eléctrico.",
          },
          {
            "locale": "pt-PT",
            "value": "Carrega a bateria e alimenta o sistema elétrico.",
          },
          {
            "locale": "en-US",
            "value": "Charges the battery and powers the electrical system.",
          },
          {
            "locale": "en-GB",
            "value": "Charges the battery and powers the electrical system.",
          },
          {
            "locale": "en-AU",
            "value": "Charges the battery and powers the electrical system.",
          },
          {
            "locale": "en-NZ",
            "value": "Charges the battery and powers the electrical system.",
          },
        ],
        "key": "alternator",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/alternator.webp",
            },
          ],
          "key": undefined,
          "prices": undefined,
          "sku": "alternator",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "de-DE",
            "value": "Lichtmaschine",
          },
          {
            "locale": "it-IT",
            "value": "Alternatore",
          },
          {
            "locale": "nl-NL",
            "value": "Dynamo",
          },
          {
            "locale": "fr-FR",
            "value": "Alternateur",
          },
          {
            "locale": "es-ES",
            "value": "Alternador",
          },
          {
            "locale": "pt-PT",
            "value": "Alternador",
          },
          {
            "locale": "en-US",
            "value": "Alternator",
          },
          {
            "locale": "en-GB",
            "value": "Alternator",
          },
          {
            "locale": "en-AU",
            "value": "Alternator",
          },
          {
            "locale": "en-NZ",
            "value": "Alternator",
          },
        ],
        "priceMode": "Standalone",
        "productType": {
          "key": "generic-product",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "de-DE",
            "value": "alternator",
          },
          {
            "locale": "it-IT",
            "value": "alternator",
          },
          {
            "locale": "nl-NL",
            "value": "alternator",
          },
          {
            "locale": "fr-FR",
            "value": "alternator",
          },
          {
            "locale": "es-ES",
            "value": "alternator",
          },
          {
            "locale": "pt-PT",
            "value": "alternator",
          },
          {
            "locale": "en-US",
            "value": "alternator",
          },
          {
            "locale": "en-GB",
            "value": "alternator",
          },
          {
            "locale": "en-AU",
            "value": "alternator",
          },
          {
            "locale": "en-NZ",
            "value": "alternator",
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
