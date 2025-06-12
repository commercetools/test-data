import type { TProductDraft } from '../../../types';
import chiantiWineGlass from './chianti-wine-glass';

describe(`with chiantiWineGlass preset`, () => {
  it(`should return a chiantiWineGlass preset`, () => {
    const chiantiWineGlassPreset = chiantiWineGlass().build<TProductDraft>();
    expect(chiantiWineGlassPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Das Chianti Weinglas wurde speziell entwickelt, um das Erlebnis beim Trinken von Rotwein zu verbessern. Es hat einen runden oder leicht konisch zulaufenden Körper, der größer ist als der eines Weißweinglases, wodurch der Wein atmen und sein volles Aroma und seinen vollen Geschmack entfalten kann.  Das Rotweinglas ist unten breiter und verjüngt sich leicht nach oben, wodurch die Aromen des Weins konzentriert und zur Nase geleitet werden. Der Stiel des Glases ist lang und schlank. Dadurch kann das Glas gehalten werden, ohne den Wein zu erwärmen. Dieses Rotweinglas ist ein stilvolles und funktionales Glas, das speziell entwickelt wurde, um den Geschmack und das Aroma von Rotwein zu verbessern. Sein elegantes Design und die Liebe zum Detail machen es zu einer beliebten Wahl für Weinliebhaber und Gelegenheitstrinker gleichermaßen.",
          "en": undefined,
          "en-GB": "The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.",
          "en-US": "The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.",
          "fr": undefined,
        },
        "key": "chianti-wine-glass",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Das Set enthält 6 Gläser",
                "en-GB": "- Set includes 6 glasses",
                "en-US": "- Set includes 6 glasses",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Transparent",
                  "en-GB": "Transparent",
                  "en-US": "Transparent",
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
                "de-DE": "Transparent",
                "en-GB": "Transparent",
                "en-US": "Transparent",
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
                "de-DE": "transparent",
                "en-GB": "transparent",
                "en-US": "transparent",
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
                "h": 3138,
                "w": 2457,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Chianti_Wine_Glass-1.1.jpeg",
            },
          ],
          "key": "chiantiWineGlass01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2599,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2599,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CWG-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Chianti Weinglas",
          "en": undefined,
          "en-GB": "Chianti Wine Glass",
          "en-US": "Chianti Wine Glass",
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
          "de-DE": "chianti-weinglas",
          "en": undefined,
          "en-GB": "chianti-wine-glass",
          "en-US": "chianti-wine-glass",
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

  it(`should return a chiantiWineGlass preset when built for graphql`, () => {
    const chiantiWineGlassPresetGraphql =
      chiantiWineGlass().buildGraphql<TProductDraft>();
    expect(chiantiWineGlassPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "glassware",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.",
          },
          {
            "locale": "en-US",
            "value": "The Chianti Wine Glass is specifically designed to enhance the experience of drinking red wine. It has a round or slightly tapered bowl that is larger than that of a white wine glass, allowing the wine to breathe and develop its full aroma and flavor.  The bowl of a red wine glass is wider at the base and tapers slightly towards the top, helping to concentrate the aromas of the wine and directing them towards the nose. The stem of the glass is typically long and slender, allowing the drinker to hold the glass without warming the wine with their body heat.  Overall, a red wine glass is a stylish and functional piece of glassware that is specifically designed to enhance the flavor and aroma of red wine. Its elegant design and attention to detail make it a popular choice for wine enthusiasts and casual drinkers alike.",
          },
          {
            "locale": "de-DE",
            "value": "Das Chianti Weinglas wurde speziell entwickelt, um das Erlebnis beim Trinken von Rotwein zu verbessern. Es hat einen runden oder leicht konisch zulaufenden Körper, der größer ist als der eines Weißweinglases, wodurch der Wein atmen und sein volles Aroma und seinen vollen Geschmack entfalten kann.  Das Rotweinglas ist unten breiter und verjüngt sich leicht nach oben, wodurch die Aromen des Weins konzentriert und zur Nase geleitet werden. Der Stiel des Glases ist lang und schlank. Dadurch kann das Glas gehalten werden, ohne den Wein zu erwärmen. Dieses Rotweinglas ist ein stilvolles und funktionales Glas, das speziell entwickelt wurde, um den Geschmack und das Aroma von Rotwein zu verbessern. Sein elegantes Design und die Liebe zum Detail machen es zu einer beliebten Wahl für Weinliebhaber und Gelegenheitstrinker gleichermaßen.",
          },
        ],
        "key": "chianti-wine-glass",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser","en-US":"- Set includes 6 glasses"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Transparent","en-GB":"Transparent","de-DE":"Transparent"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Glass","en-GB":"Glass","de-DE":"Glas"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Transparent","de-DE":"Transparent","en-US":"Transparent"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Glass","de-DE":"Glas","en-US":"Glass"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
            },
            {
              "name": "finish-code",
              "value": "{"en-US":"transparent","en-GB":"transparent","de-DE":"transparent"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3138,
                "width": 2457,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Chianti_Wine_Glass-1.1.jpeg",
            },
          ],
          "key": "chiantiWineGlass01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2599,
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
              "key": "2599GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2599,
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
              "key": "2599USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2599,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CWG-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Chianti Wine Glass",
          },
          {
            "locale": "en-GB",
            "value": "Chianti Wine Glass",
          },
          {
            "locale": "de-DE",
            "value": "Chianti Weinglas",
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
            "value": "chianti-wine-glass",
          },
          {
            "locale": "en-GB",
            "value": "chianti-wine-glass",
          },
          {
            "locale": "de-DE",
            "value": "chianti-weinglas",
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
