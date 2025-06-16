import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import walnutCounterStool from './walnut-counter-stool';

describe(`with walnutCounterStool preset`, () => {
  it(`should return a walnutCounterStool preset`, () => {
    const walnutCounterStoolPreset =
      walnutCounterStool().build<TProductDraft>();
    expect(walnutCounterStoolPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tables",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Der Barhocker ist aus Nussbaumholz gefertigt, das für seine Langlebigkeit und Stärke bekannt ist. Der Hocker hat ein schlichtes Design mit einer flachen Oberfläche und vier geraden Beinen. Die Beine sind für zusätzliches visuelles Interesse leicht konisch zulaufend designt. Das Nussbaumholz kann in seinem natürlichen Zustand belassen oder mit einer Beize oder einem Lack veredelt werden, um die natürliche Schönheit der Holzmaserung hervorzuheben. Der Hocker hat eine quadratische Sitzfläche. Der Barocker aus Nussbaumholz ist ein vielseitiges und funktionelles Möbelstück, das in einer Vielzahl von Wohnräumen verwendet werden kann.",
          "en": undefined,
          "en-GB": "The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.",
          "en-US": "The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.",
          "fr": undefined,
        },
        "key": "walnut-counter-stool",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Beinhaltet 1 Hocker",
                "en-GB": "- Includes 1 stool",
                "en-US": "- Includes 1 stool",
              },
            },
            {
              "name": "search-finish",
              "value": "brown",
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Sattel braun",
                "en-GB": "Saddle Brown",
                "en-US": "Saddle Brown",
              },
            },
            {
              "name": "finish-code",
              "value": "#8b4513",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5906,
                "w": 5906,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Counter_Stool-1.1.jpeg",
            },
          ],
          "key": "walnutCounterStool01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "8999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 8999,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "8999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 8999,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "8999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 8999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "WCSI-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Barhocker aus Nussbaumholz",
          "en": undefined,
          "en-GB": "Walnut Counter Stool",
          "en-US": "Walnut Counter Stool",
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
          "de-DE": "barhocker-aus-walnussholz",
          "en": undefined,
          "en-GB": "walnut-counter-stool",
          "en-US": "walnut-counter-stool",
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

  it(`should return a walnutCounterStool preset when built for graphql`, () => {
    const walnutCounterStoolPresetGraphql =
      walnutCounterStool().buildGraphql<TProductDraftGraphql>();
    expect(walnutCounterStoolPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "tables",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.",
          },
          {
            "locale": "de-DE",
            "value": "Der Barhocker ist aus Nussbaumholz gefertigt, das für seine Langlebigkeit und Stärke bekannt ist. Der Hocker hat ein schlichtes Design mit einer flachen Oberfläche und vier geraden Beinen. Die Beine sind für zusätzliches visuelles Interesse leicht konisch zulaufend designt. Das Nussbaumholz kann in seinem natürlichen Zustand belassen oder mit einer Beize oder einem Lack veredelt werden, um die natürliche Schönheit der Holzmaserung hervorzuheben. Der Hocker hat eine quadratische Sitzfläche. Der Barocker aus Nussbaumholz ist ein vielseitiges und funktionelles Möbelstück, das in einer Vielzahl von Wohnräumen verwendet werden kann.",
          },
          {
            "locale": "en-GB",
            "value": "The walnut stool is made from walnut wood, which is known for its durability and strength. The stool is a simple design, with a flat top surface and four straight legs. The legs are slightly tapered for added visual interest. The walnut wood may be left in its natural state or finished with a stain or varnish to bring out the natural beauty of the wood grain. The stool has a square top. Overall, a walnut stool is a versatile and functional piece of furniture that can be used in a variety of settings.",
          },
        ],
        "key": "walnut-counter-stool",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 stool","en-US":"- Includes 1 stool","de-DE":"- Beinhaltet 1 Hocker"}",
            },
            {
              "name": "search-finish",
              "value": ""brown"",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Saddle Brown","de-DE":"Sattel braun","en-US":"Saddle Brown"}",
            },
            {
              "name": "finish-code",
              "value": ""#8b4513"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5906,
                "width": 5906,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Walnut_Counter_Stool-1.1.jpeg",
            },
          ],
          "key": "walnutCounterStool01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "8999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 8999,
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
              "key": "8999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 8999,
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
              "key": "8999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 8999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "WCSI-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Walnut Counter Stool",
          },
          {
            "locale": "en-GB",
            "value": "Walnut Counter Stool",
          },
          {
            "locale": "de-DE",
            "value": "Barhocker aus Nussbaumholz",
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
            "value": "walnut-counter-stool",
          },
          {
            "locale": "en-GB",
            "value": "walnut-counter-stool",
          },
          {
            "locale": "de-DE",
            "value": "barhocker-aus-walnussholz",
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
