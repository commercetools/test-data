import type { TProductDraft, TProductDraftGraphql } from '../../../types';
import stoutBeerGlass from './stout-beer-glass';

describe(`with stoutBeerGlass preset`, () => {
  it(`should return a stoutBeerGlass preset`, () => {
    const stoutBeerGlassPreset = stoutBeerGlass().build<TProductDraft>();
    expect(stoutBeerGlassPreset).toMatchInlineSnapshot(`
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
    "de-DE": "Ein Stout-Bierglas, auch als "Pintglas" bekannt, ist ein Trinkglas, das speziell zum Servieren und Genießen von Starkbieren entwickelt wurde. Es hat eine kurze, breite Form mit einem dicken, schweren Boden, der für Stabilität und Gleichgewicht sorgt.  Das Design des Stout-Bierglases unterstützt das Trinkerlebnis, indem es die volle Geschmacks- und Aromenvielfalt des Bieres zur Geltung bringt. Die breite Öffnung des Glases lässt die Farbe und Klarheit des Bieres erkennen, während der schwere Boden dazu beiträgt, dass das Bier nicht verschüttet oder umkippt.  Ein Pintglas ist ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma feiner Stout-Biere zu genießen. Sein einfaches aber elegantes Design macht es zu einer beliebten Wahl für Bierliebhaber und Gelegenheitsgeniesser gleichermaßen.",
    "en": undefined,
    "en-GB": "A stout beer glass, also known as a "pint glass," is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.",
    "en-US": "A stout beer glass, also known as a "pint glass," is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.",
    "fr": undefined,
  },
  "key": "stout-beer-glass",
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
          "h": 3000,
          "w": 3000,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Stout_Beer_Glass-1.1.jpeg",
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
          "centAmount": 5699,
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
          "centAmount": 5699,
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
          "centAmount": 5999,
          "currencyCode": "USD",
        },
      },
    ],
    "sku": "SBG-09",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Stout-Bierglas",
    "en": undefined,
    "en-GB": "Stout Beer Glass",
    "en-US": "Stout Beer Glass",
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
    "de-DE": "starkes-bierglas",
    "en": undefined,
    "en-GB": "stout-beer-glass",
    "en-US": "stout-beer-glass",
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

  it(`should return a stoutBeerGlass preset when built for graphql`, () => {
    const stoutBeerGlassPresetGraphql =
      stoutBeerGlass().buildGraphql<TProductDraftGraphql>();
    expect(stoutBeerGlassPresetGraphql).toMatchInlineSnapshot(`
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
  "description": [
    {
      "locale": "en-US",
      "value": "A stout beer glass, also known as a "pint glass," is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.",
    },
    {
      "locale": "de-DE",
      "value": "Ein Stout-Bierglas, auch als "Pintglas" bekannt, ist ein Trinkglas, das speziell zum Servieren und Genießen von Starkbieren entwickelt wurde. Es hat eine kurze, breite Form mit einem dicken, schweren Boden, der für Stabilität und Gleichgewicht sorgt.  Das Design des Stout-Bierglases unterstützt das Trinkerlebnis, indem es die volle Geschmacks- und Aromenvielfalt des Bieres zur Geltung bringt. Die breite Öffnung des Glases lässt die Farbe und Klarheit des Bieres erkennen, während der schwere Boden dazu beiträgt, dass das Bier nicht verschüttet oder umkippt.  Ein Pintglas ist ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma feiner Stout-Biere zu genießen. Sein einfaches aber elegantes Design macht es zu einer beliebten Wahl für Bierliebhaber und Gelegenheitsgeniesser gleichermaßen.",
    },
    {
      "locale": "en-GB",
      "value": "A stout beer glass, also known as a "pint glass," is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.",
    },
  ],
  "key": "stout-beer-glass",
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
          "height": 3000,
          "width": 3000,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Stout_Beer_Glass-1.1.jpeg",
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
            "centAmount": 5699,
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
            "centAmount": 5699,
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
            "centAmount": 5999,
            "currencyCode": "USD",
          },
        },
      },
    ],
    "sku": "SBG-09",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Stout Beer Glass",
    },
    {
      "locale": "en-GB",
      "value": "Stout Beer Glass",
    },
    {
      "locale": "de-DE",
      "value": "Stout-Bierglas",
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
      "value": "stout-beer-glass",
    },
    {
      "locale": "en-GB",
      "value": "stout-beer-glass",
    },
    {
      "locale": "de-DE",
      "value": "starkes-bierglas",
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
