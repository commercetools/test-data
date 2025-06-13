import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import vanillaCandle from './vanilla-candle';

describe(`with vanillaCandle preset`, () => {
  it(`should return a vanillaCandle preset`, () => {
    const vanillaCandlePreset = vanillaCandle().build<TProductDraft>();
    expect(vanillaCandlePreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Eine Kerze mit Vanilleduft ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichhaltigem und cremigen Vanilleduft versehen ist.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht. Angezündet verströmt sie ein beruhigendes Aroma und erfüllt den Raum mit dem süßen Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für die Einstimmung auf einen gemütlichen Abend oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnbereich zu schaffen.  Diese Kerze ist eine klassische und beruhigende Wahl, um jedem Zuhause etwas mehr Wärme und Gemütlichkeit zu verleihen. Ihr süßes und beruhigendes Aroma trägt dazu bei, eine entspannte und einladende Atmosphäre zu schaffen, was sie zu einer beliebten Wahl für den Einsatz im Schlaf- oder Wohnbereich und in Badezimmern macht.",
          "en": undefined,
          "en-GB": "A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.",
          "en-US": "A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.",
          "fr": undefined,
        },
        "key": "vanilla-candle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Wird im Glas geliefert
      - 300 Gramm",
                "en-GB": "- Comes in glass jar
      - 300 grams",
                "en-US": "- Comes in glass jar
      - 300 grams",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Gelb",
                  "en-GB": "Yellow",
                  "en-US": "Yellow",
                },
              ],
            },
            {
              "name": "search-finish",
              "value": [
                {
                  "de-DE": "Glas",
                  "en-GB": "Glass",
                  "en-US": "Glass",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Glas",
                "en-GB": "Glass",
                "en-US": "Glass",
              },
            },
            {
              "name": "color-code",
              "value": {
                "de-DE": "#F5F5DC",
                "en-GB": "#F5F5DC",
                "en-US": "#F5F5DC",
              },
            },
            {
              "name": "finish-code",
              "value": {
                "de-DE": "transparent",
                "en-GB": "transparent",
                "en-US": "transparent",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3879,
                "w": 5819,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 4143,
                "w": 6214,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.2.jpeg",
            },
          ],
          "key": "vanillaCandle01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 999,
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
              "key": "1099EUR_dist",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1099,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 999,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "VC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kerze mit Vanilleduft",
          "en": undefined,
          "en-GB": "Vanilla Candle",
          "en-US": "Vanilla Candle",
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
          "de-DE": "vanille-kerze",
          "en": undefined,
          "en-GB": "vanilla-candle",
          "en-US": "vanilla-candle",
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

  it(`should return a vanillaCandle preset when built for graphql`, () => {
    const vanillaCandlePresetGraphql =
      vanillaCandle().buildGraphql<TProductDraftGraphql>();
    expect(vanillaCandlePresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-US",
            "value": "A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.",
          },
          {
            "locale": "de-DE",
            "value": "Eine Kerze mit Vanilleduft ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichhaltigem und cremigen Vanilleduft versehen ist.  Die Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht. Angezündet verströmt sie ein beruhigendes Aroma und erfüllt den Raum mit dem süßen Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für die Einstimmung auf einen gemütlichen Abend oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnbereich zu schaffen.  Diese Kerze ist eine klassische und beruhigende Wahl, um jedem Zuhause etwas mehr Wärme und Gemütlichkeit zu verleihen. Ihr süßes und beruhigendes Aroma trägt dazu bei, eine entspannte und einladende Atmosphäre zu schaffen, was sie zu einer beliebten Wahl für den Einsatz im Schlaf- oder Wohnbereich und in Badezimmern macht.",
          },
          {
            "locale": "en-GB",
            "value": "A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.  The candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.   When lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.  A vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.",
          },
        ],
        "key": "vanilla-candle",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Comes in glass jar\\n- 300 grams","en-US":"- Comes in glass jar\\n- 300 grams","de-DE":"- Wird im Glas geliefert\\n- 300 Gramm"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Yellow","en-GB":"Yellow","de-DE":"Gelb"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Glass","en-GB":"Glass","de-DE":"Glas"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Glass","de-DE":"Glas","en-US":"Glass"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"#F5F5DC","en-GB":"#F5F5DC","de-DE":"#F5F5DC"}",
            },
            {
              "name": "finish-code",
              "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3879,
                "width": 5819,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 4143,
                "width": 6214,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Vanilla_Candle-1.2.jpeg",
            },
          ],
          "key": "vanillaCandle01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 999,
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
              "key": "1099EUR_dist",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1099,
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
              "key": "999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 999,
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
              "key": "999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "VC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Vanilla Candle",
          },
          {
            "locale": "en-GB",
            "value": "Vanilla Candle",
          },
          {
            "locale": "de-DE",
            "value": "Kerze mit Vanilleduft",
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
            "value": "vanilla-candle",
          },
          {
            "locale": "en-GB",
            "value": "vanilla-candle",
          },
          {
            "locale": "de-DE",
            "value": "vanille-kerze",
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
