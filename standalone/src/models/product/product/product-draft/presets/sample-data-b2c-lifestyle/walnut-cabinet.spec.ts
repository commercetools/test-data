import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import walnutCabinet from './walnut-cabinet';

describe(`with walnutCabinet preset`, () => {
  it(`should return a walnutCabinet preset`, () => {
    const walnutCabinetPreset = walnutCabinet().build<TProductDraft>();
    expect(walnutCabinetPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieser Nussbaumschrank besticht durch seine Vielzahl an Schubladen, die in Reihen angeordnet sind, mit mehreren Schubladen pro Reihe. Die Schubladen sind groß und tief und bieten viel Stauraum. Die Schubladen sind mit einfachen Griffen zu haben.  Die Oberseite des Sideboards ist flach und glatt und kann zur Präsentation von Dekorationsartikeln wie Vasen oder Kerzen verwendet werden.  Das geräumige Sideboard mit vielen Schubladen ist ein funktionales und praktisches Möbelstück, das jedem Raum Stil und Stauraum verleiht.",
          "en": undefined,
          "en-GB": "This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.",
          "en-US": "This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.",
          "fr": undefined,
        },
        "key": "walnut-cabinet",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Montage im Lieferumfang enthalten",
                "en-GB": "- Assembly included in delivery",
                "en-US": "- Assembly included in delivery",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Braun:#a52a2a",
                "en-GB": "Brown:#a52a2a",
                "en-US": "Brown:#a52a2a",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2935,
                "w": 4400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2935,
                "w": 4400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.2.jpeg",
            },
          ],
          "key": "walnutCabinet01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900EUR_dist",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "WCS-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sideboard aus Nussbaumholz",
          "en": undefined,
          "en-GB": "Walnut Cabinet",
          "en-US": "Walnut Cabinet",
          "fr": undefined,
        },
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
          "de": undefined,
          "de-DE": "nussbaum-schrank",
          "en": undefined,
          "en-GB": "walnut-cabinet",
          "en-US": "walnut-cabinet",
          "fr": undefined,
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

  it(`should return a walnutCabinet preset when built for graphql`, () => {
    const walnutCabinetPresetGraphql =
      walnutCabinet().buildGraphql<TProductDraftGraphql>();
    expect(walnutCabinetPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.",
          },
          {
            "locale": "de-DE",
            "value": "Dieser Nussbaumschrank besticht durch seine Vielzahl an Schubladen, die in Reihen angeordnet sind, mit mehreren Schubladen pro Reihe. Die Schubladen sind groß und tief und bieten viel Stauraum. Die Schubladen sind mit einfachen Griffen zu haben.  Die Oberseite des Sideboards ist flach und glatt und kann zur Präsentation von Dekorationsartikeln wie Vasen oder Kerzen verwendet werden.  Das geräumige Sideboard mit vielen Schubladen ist ein funktionales und praktisches Möbelstück, das jedem Raum Stil und Stauraum verleiht.",
          },
          {
            "locale": "en-GB",
            "value": "This Walnut Cabinet has many drawers, which are arranged in rows, with several drawers per row. The drawers are large and deep, allowing for ample storage space. The drawers may have simple handles.  The top of the sideboard is flat and smooth, and can be used to display decorative items such as vases or candles.   Overall, a large sideboard with many drawers is a functional and practical piece of furniture that can add style and storage to any room.",
          },
        ],
        "key": "walnut-cabinet",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Assembly included in delivery","en-US":"- Assembly included in delivery","de-DE":"- Montage im Lieferumfang enthalten"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"Brown:#a52a2a","en-US":"Brown:#a52a2a","de-DE":"Braun:#a52a2a"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2935,
                "width": 4400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2935,
                "width": 4400,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Cabinet-1.2.jpeg",
            },
          ],
          "key": "walnutCabinet01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900EUR_dist",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
                  "currencyCode": "EUR",
                },
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "WCS-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Walnut Cabinet",
          },
          {
            "locale": "en-GB",
            "value": "Walnut Cabinet",
          },
          {
            "locale": "de-DE",
            "value": "Sideboard aus Nussbaumholz",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "locale": "en-US",
            "value": "walnut-cabinet",
          },
          {
            "locale": "en-GB",
            "value": "walnut-cabinet",
          },
          {
            "locale": "de-DE",
            "value": "nussbaum-schrank",
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
