import type { TProductDraft } from '../../../types';
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
        "key": "stout-beer-glass",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Set includes 6 glasses",
      "de-DE": "- Das Set enthält 6 Gläser",
      "en-US": "- Set includes 6 glasses"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A stout beer glass, also known as a \"pint glass,\" is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.",
      "en-US": "A stout beer glass, also known as a \"pint glass,\" is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.",
      "de-DE": "Ein Stout-Bierglas, auch als \"Pintglas\" bekannt, ist eine Art Trinkglas, das speziell zum Servieren und Genießen von Stout-Bieren entwickelt wurde. Es hat eine kurze, breite Form mit einer dicken, schweren Basis, die für Stabilität und Gleichgewicht sorgt.  Das Design des Stout-Bierglases soll das Trinkerlebnis verbessern, indem es die volle Geschmacks- und Aromavielfalt des Bieres zur Geltung bringt. Die weite Öffnung des Glases ermöglicht es dem Trinker, die Farbe und Klarheit des Bieres voll und ganz zu schätzen, während der schwere Boden dazu beiträgt, dass das Bier nicht verschüttet oder umkippt.  Insgesamt ist ein Stout-Bierglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma feiner Stout-Biere zu genießen. Sein einfaches, aber elegantes Design macht es zu einer beliebten Wahl für Bierliebhaber und Gelegenheitstrinker gleichermaßen."
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Stout%20Beer%20Glass-fKjG9_Kd.jpeg",
    "dimensions": {
      "w": 3000,
      "h": 3000
    }
  }
]
,
          "sku": undefined,
          "prices": [
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "EUR",
      "centAmount": 5699,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 5699,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 5999,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaDescription": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Starkes Bierglas",
            "en-GB": "Stout Beer Glass",
            "en-US": "Stout Beer Glass"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "starkes-bierglas",
            "en-GB": "stout-beer-glass",
            "en-US": "stout-beer-glass"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
