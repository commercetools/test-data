import type { TProductDraft } from '../../../types';
import amaliaRug from './amalia-rug';

describe(`with amaliaRug preset`, () => {
  it(`should return a amaliaRug preset`, () => {
    const amaliaRugPreset = amaliaRug().build<TProductDraft>();
    expect(amaliaRugPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rugs",
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
          "de-DE": "Dieser runde Plüsch-Akzent-Teppich weich und bequem. Der dichte Flor vermittelt ein weiches Gefühl. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Der Teppich ist ein großartiger dekorativer Akzent in einem Schlafzimmer, Wohnzimmer oder anderen Bereichen, in denen ein kleiner Hauch von Weichheit und Komfort erwünscht ist.  Aufgrund ihrer geringen Größe lassen sich runde Plüschteppiche leicht bewegen und neu positionieren, was sie zu einer vielseitigen Ergänzung für jedes Zuhause macht. Sie sind außerdem leicht zu reinigen und zu pflegen, was sie zu einer praktischen Wahl für stark frequentierte Bereiche macht.  Insgesamt ist ein runder Teppich mit Plüschakzenten eine gemütliche und einladende Ergänzung für jeden Raum. Seine weiche Textur und luxuriöse Haptik machen es zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum einen Hauch von Komfort und Stil verleihen möchten.",
          "en": undefined,
          "en-GB": "A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.",
          "en-US": "A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.",
          "fr": undefined,
        },
        "key": "amalia-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- 6 Fuß x 6 Fuß",
                "en-GB": "- 6ft x 6ft",
                "en-US": "- 6ft x 6ft",
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
                "h": 3000,
                "w": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Amalia_Rug-1.1.jpeg",
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
              "key": "13999EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 13999,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "13999GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 13999,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "13999USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 13999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "AMR-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Teppich "Amalia"",
          "en": undefined,
          "en-GB": "Amalia Rug",
          "en-US": "Amalia Rug",
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
          "de-DE": "amalia-teppich",
          "en": undefined,
          "en-GB": "amalia-rug",
          "en-US": "amalia-rug",
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

  it(`should return a amaliaRug preset when built for graphql`, () => {
    const amaliaRugPresetGraphql = amaliaRug().buildGraphql<TProductDraft>();
    expect(amaliaRugPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "rugs",
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
            "locale": "en-GB",
            "value": "A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.",
          },
          {
            "locale": "en-US",
            "value": "A round plush accent rug is designed to be soft and comfortable underfoot, with a thick and dense pile that provides a plush feel. The fibers are densely packed together, giving the rug a lush and luxurious feel. The rug is a great decorative accent in a bedroom, living room, or other area where a small touch of softness and comfort is desired.  Because of their small size, round plush accent rugs are easy to move and reposition, making them a versatile addition to any home. They are also easy to clean and maintain, making them a practical choice for high-traffic areas.  Overall, a round plush accent rug is a cozy and inviting addition to any room. Its soft texture and luxurious feel make it a popular choice for those who want to add a touch of comfort and style to their living space.",
          },
          {
            "locale": "de-DE",
            "value": "Dieser runde Plüsch-Akzent-Teppich weich und bequem. Der dichte Flor vermittelt ein weiches Gefühl. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Der Teppich ist ein großartiger dekorativer Akzent in einem Schlafzimmer, Wohnzimmer oder anderen Bereichen, in denen ein kleiner Hauch von Weichheit und Komfort erwünscht ist.  Aufgrund ihrer geringen Größe lassen sich runde Plüschteppiche leicht bewegen und neu positionieren, was sie zu einer vielseitigen Ergänzung für jedes Zuhause macht. Sie sind außerdem leicht zu reinigen und zu pflegen, was sie zu einer praktischen Wahl für stark frequentierte Bereiche macht.  Insgesamt ist ein runder Teppich mit Plüschakzenten eine gemütliche und einladende Ergänzung für jeden Raum. Seine weiche Textur und luxuriöse Haptik machen es zu einer beliebten Wahl für diejenigen, die ihrem Wohnraum einen Hauch von Komfort und Stil verleihen möchten.",
          },
        ],
        "key": "amalia-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- 6ft x 6ft","de-DE":"- 6 Fuß x 6 Fuß","en-US":"- 6ft x 6ft"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"White:#FFFFFF","de-DE":"Weiß:#FFFFFF","en-US":"White:#FFFFFF"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3000,
                "width": 4500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Amalia_Rug-1.1.jpeg",
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
              "key": "13999EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 13999,
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
              "key": "13999GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 13999,
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
              "key": "13999USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 13999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "AMR-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Amalia Rug",
          },
          {
            "locale": "en-GB",
            "value": "Amalia Rug",
          },
          {
            "locale": "de-DE",
            "value": "Teppich "Amalia"",
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
            "value": "amalia-rug",
          },
          {
            "locale": "en-GB",
            "value": "amalia-rug",
          },
          {
            "locale": "de-DE",
            "value": "amalia-teppich",
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
