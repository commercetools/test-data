import type { TProductDraft } from '../../../types';
import meadowRug from './meadow-rug';

describe(`with meadowRug preset`, () => {
  it(`should return a meadowRug preset`, () => {
    const meadowRugPreset = meadowRug().build<TProductDraft>();
    expect(meadowRugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "key": "rugs",
            "typeId": "category",
          },
          {
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "key": "meadow-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- 3ft x 5ft",
      "de-DE": "- 3 Fuß x 5 Fuß",
      "en-US": "- 3ft x 5ft"
    }
  },
  {
    "name": "color",
    "value": {
      "en-GB": "#b3b1ab",
      "de-DE": "#b3b1ab",
      "en-US": "#b3b1ab"
    }
  },
  {
    "name": "colorlabel",
    "value": {
      "en-GB": "Gray",
      "de-DE": "Grau",
      "en-US": "Gray"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
      "en-US": "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
      "de-DE": "Ein Plüschteppich ist eine Art Teppich, der so konzipiert ist, dass er weich und bequem unter den Füßen ist. Plüschteppiche zeichnen sich durch ihren dicken Flor aus. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl.  Aufgrund ihrer Weichheit und ihres Komforts werden Plüschteppiche oft in Schlafzimmern, Wohnzimmern und anderen Bereichen verwendet, in denen Menschen viel Zeit damit verbringen, auf dem Boden zu sitzen oder zu faulenzen. Sie sind auch eine beliebte Wahl für Kindergärten und Kinderzimmer, da sie einen sicheren und komfortablen Spielplatz für Kinder bieten.  Insgesamt ist ein Plüschteppich eine gemütliche und einladende Ergänzung für jedes Zuhause. Seine weiche Textur und luxuriöse Haptik machen es zu einer beliebten Wahl für diejenigen, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen möchten."
    }
  },
  {
    "name": "color-filter",
    "value": {
      "key": "#808080",
      "label": {
        "de-DE": "Grau",
        "en-GB": "Gray",
        "en-US": "Gray"
      }
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_269458764-r6hlYeat.jpeg",
    "dimensions": {
      "w": 4500,
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
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 29900,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Meadow Teppich",
            "en-GB": "Meadow Rug",
            "en-US": "Meadow Rug"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "meadow-teppich",
            "en-GB": "meadow-rug",
            "en-US": "meadow-rug"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": [
[object Promise],
[object Promise]
       ]
      }
    `);
  });
});
