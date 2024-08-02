import type { TProductDraft } from '../../../types';
import ryeWhiskeyGlass from './rye-whiskey-glass';

describe(`with ryeWhiskeyGlass preset`, () => {
  it(`should return a ryeWhiskeyGlass preset`, () => {
    const ryeWhiskeyGlassPreset = ryeWhiskeyGlass().build<TProductDraft>();
    expect(ryeWhiskeyGlassPreset).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "bar-and-glassware",
      "typeId": "category",
    },
    {
      "key": "glassware",
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
    "de-DE": "Das Rye-Whiskyglas wurde speziell für den Genuss von Whisky und anderen Spirituosen entwickelt. Es hat eine breite Form mit einer dickglasigen, schweren Basis, die für Stabilität und Gleichgewicht sorgt.  Das Design des Whiskyglases ist auf ein verbessertes Trinkerlebnis abgestimmt, bei dem die Aromen der Geschmack des Whiskys im Mittelpunkt stehen. Die breite Öffnung des Glases ermöglicht es dem Genießer, die Farbe, Klarheit und Textur des Whiskys voll und ganz wahrzunehmen, während der schwere Boden für Stabilität beim Abstellen sorgt.  Insgesamt ist das Rye-Whiskyglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma von feinem Whisky zu genießen. Sein schlichtes, aber elegantes Design macht es zu einer beliebten Wahl für Whiskykenner und Gelegenheitsgenießer gleichermaßen.",
    "en": undefined,
    "en-GB": "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
    "en-US": "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
    "fr": undefined,
  },
  "key": "rye-whiskey-glass",
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
        "name": "color",
        "value": {
          "de-DE": "Transparent:transparent",
          "en-GB": "Transparent:transparent",
          "en-US": "Transparent:transparent",
        },
      },
      {
        "name": "finish",
        "value": {
          "de-DE": "Glas:transparent",
          "en-GB": "Glass:transparent",
          "en-US": "Glass:transparent",
        },
      },
    ],
    "images": [
      {
        "dimensions": {
          "h": 2990,
          "w": 2848,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.1.jpeg",
      },
      {
        "dimensions": {
          "h": 2268,
          "w": 2632,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.2.jpeg",
      },
    ],
    "key": undefined,
    "prices": [
      {
        "channel": undefined,
        "country": "DE",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3499,
          "currencyCode": "EUR",
        },
      },
      {
        "channel": undefined,
        "country": "GB",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3499,
          "currencyCode": "GBP",
        },
      },
      {
        "channel": undefined,
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3499,
          "currencyCode": "USD",
        },
      },
    ],
    "sku": "RWG-09",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Rye-Whiskyglas",
    "en": undefined,
    "en-GB": "Rye Whiskey Glass",
    "en-US": "Rye Whiskey Glass",
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
    "de-DE": "roggen-whisky-glas",
    "en": undefined,
    "en-GB": "rye-whiskey-glass",
    "en-US": "rye-whiskey-glass",
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

  it(`should return a ryeWhiskeyGlass preset when built for graphql`, () => {
    const ryeWhiskeyGlassPresetGraphql =
      ryeWhiskeyGlass().buildGraphql<TProductDraft>();
    expect(ryeWhiskeyGlassPresetGraphql).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "bar-and-glassware",
      "typeId": "category",
    },
    {
      "key": "glassware",
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
      "value": "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
    },
    {
      "locale": "en-US",
      "value": "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.  Overall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
    },
    {
      "locale": "de-DE",
      "value": "Das Rye-Whiskyglas wurde speziell für den Genuss von Whisky und anderen Spirituosen entwickelt. Es hat eine breite Form mit einer dickglasigen, schweren Basis, die für Stabilität und Gleichgewicht sorgt.  Das Design des Whiskyglases ist auf ein verbessertes Trinkerlebnis abgestimmt, bei dem die Aromen der Geschmack des Whiskys im Mittelpunkt stehen. Die breite Öffnung des Glases ermöglicht es dem Genießer, die Farbe, Klarheit und Textur des Whiskys voll und ganz wahrzunehmen, während der schwere Boden für Stabilität beim Abstellen sorgt.  Insgesamt ist das Rye-Whiskyglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma von feinem Whisky zu genießen. Sein schlichtes, aber elegantes Design macht es zu einer beliebten Wahl für Whiskykenner und Gelegenheitsgenießer gleichermaßen.",
    },
  ],
  "key": "rye-whiskey-glass",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": "{"en-GB":"- Set includes 6 glasses","en-US":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser"}",
      },
      {
        "name": "color",
        "value": "{"en-GB":"Transparent:transparent","de-DE":"Transparent:transparent","en-US":"Transparent:transparent"}",
      },
      {
        "name": "finish",
        "value": "{"en-GB":"Glass:transparent","de-DE":"Glas:transparent","en-US":"Glass:transparent"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 2990,
          "width": 2848,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.1.jpeg",
      },
      {
        "dimensions": {
          "height": 2268,
          "width": 2632,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.2.jpeg",
      },
    ],
    "key": undefined,
    "prices": [
      {
        "channel": undefined,
        "country": "DE",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3499,
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
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3499,
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
        "key": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3499,
            "currencyCode": "USD",
          },
        },
      },
    ],
    "sku": "RWG-09",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Rye Whiskey Glass",
    },
    {
      "locale": "en-GB",
      "value": "Rye Whiskey Glass",
    },
    {
      "locale": "de-DE",
      "value": "Rye-Whiskyglas",
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
      "value": "rye-whiskey-glass",
    },
    {
      "locale": "en-GB",
      "value": "rye-whiskey-glass",
    },
    {
      "locale": "de-DE",
      "value": "roggen-whisky-glas",
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
