import type { TProductDraft } from '../../../types';
import ravenBowl from './raven-bowl';

describe(`with ravenBowl preset`, () => {
  it(`should return a ravenBowl preset`, () => {
    const ravenBowlPreset = ravenBowl().build<TProductDraft>();
    expect(ravenBowlPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bowls",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Die Schüssel >Raven< wurde zum Servieren von Suppen und anderer Flüssigspeisen designt. Die quadratische Form aus vier geraden Seiten und einem flachen Boden verleiht dem Suppentellerl einen modernen und zeitgemäßen Look.  Durch die einzigartige Form und das zeitgemäße Design ist >Raven< eine beliebte Wahl für all diejenigen, die Ästhetik und Praktikabilität auf ihrem Esstisch schätzen.",
          "en": undefined,
          "en-GB": "This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.",
          "en-US": "This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.",
          "fr": undefined,
        },
        "key": "raven-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Schüssel",
                "en-GB": "- Includes 1 bowl",
                "en-US": "- Includes 1 bowl",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Weiß:#FFFFFF",
                "en-GB": "White:#FFFFFF",
                "en-US": "White:#FFFFFF",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2904,
                "w": 4232,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Raven_Bowl-1.1.jpeg",
            },
          ],
          "key": "ravenBowl01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RB-093",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Suppenschüssel >Raven<",
          "en": undefined,
          "en-GB": "Raven Bowl",
          "en-US": "Raven Bowl",
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
          "de-DE": "rabenschssel",
          "en": undefined,
          "en-GB": "raven-bowl",
          "en-US": "raven-bowl",
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

  it(`should return a ravenBowl preset when built for graphql`, () => {
    const ravenBowlPresetGraphql = ravenBowl().buildGraphql<TProductDraft>();
    expect(ravenBowlPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bowls",
            "typeId": "category",
          },
          {
            "key": "dinnerware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.",
          },
          {
            "locale": "en-US",
            "value": "This bowl is a dish designed to serve soup and other liquid-based foods. It is a square-shaped bowl with four straight sides and a flat bottom, creating a modern and contemporary look for dining.  Overall, a square soup bowl is a functional and stylish choice for serving soup and other liquid-based foods. Its unique shape and contemporary design make it a popular choice for those who appreciate modern aesthetics and practicality.",
          },
          {
            "locale": "de-DE",
            "value": "Die Schüssel >Raven< wurde zum Servieren von Suppen und anderer Flüssigspeisen designt. Die quadratische Form aus vier geraden Seiten und einem flachen Boden verleiht dem Suppentellerl einen modernen und zeitgemäßen Look.  Durch die einzigartige Form und das zeitgemäße Design ist >Raven< eine beliebte Wahl für all diejenigen, die Ästhetik und Praktikabilität auf ihrem Esstisch schätzen.",
          },
        ],
        "key": "raven-bowl",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 bowl","en-US":"- Includes 1 bowl","de-DE":"- Enthält 1 Schüssel"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2904,
                "width": 4232,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Raven_Bowl-1.1.jpeg",
            },
          ],
          "key": "ravenBowl01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
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
              "key": "299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
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
              "key": "299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RB-093",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Raven Bowl",
          },
          {
            "locale": "en-GB",
            "value": "Raven Bowl",
          },
          {
            "locale": "de-DE",
            "value": "Suppenschüssel >Raven<",
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
            "value": "raven-bowl",
          },
          {
            "locale": "en-GB",
            "value": "raven-bowl",
          },
          {
            "locale": "de-DE",
            "value": "rabenschssel",
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
