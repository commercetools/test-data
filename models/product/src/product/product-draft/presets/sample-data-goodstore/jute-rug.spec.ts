import type { TProductDraft } from '../../../types';
import juteRug from './jute-rug';

describe(`with juteRug preset`, () => {
  it(`should return a juteRug preset`, () => {
    const juteRugPreset = juteRug().build<TProductDraft>();
    expect(juteRugPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein Juteteppich ist eine Art Teppich aus Naturfasern, die aus der Jutepflanze gewonnen werden. Jute ist eine lange, weiche und glänzende Pflanzenfaser, die zu starken Fäden gesponnen und dann zu Textilien gewebt wird. Juteteppiche sind bekannt für ihre Langlebigkeit und ihr natürliches Aussehen, was sie zu einer beliebten Wahl für diejenigen macht, die einen Hauch von Natur in ihr Zuhause bringen möchten.  Da Jute eine Naturfaser ist, ist sie umweltfreundlich und nachhaltig. Es kann jedoch anfällig für Flecken und Wasserschäden sein, daher sollten Juteteppiche in wenig frequentierten Bereichen oder Räumen verwendet werden, die nicht viel Feuchtigkeit ausgesetzt sind. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen ein natürlicher, erdiger Look gewünscht wird.  Insgesamt ist ein Juteteppich eine schöne und umweltfreundliche Ergänzung für jedes Zuhause. Seine natürlichen Fasern und sein erdiges Aussehen machen es zu einer beliebten Wahl für diejenigen, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen möchten.",
          "en": undefined,
          "en-GB": "A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          "en-US": "A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          "fr": undefined,
        },
        "key": "jute-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- 10 Fuß x 12 Fuß",
                "en-GB": "- 10ft x 12ft",
                "en-US": "- 10ft x 12ft",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#F5F5DC",
                "label": {
                  "de-DE": "Beige",
                  "en-GB": "Beige",
                  "en-US": "Beige",
                },
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Jute",
                "en-GB": "Jute",
                "en-US": "Jute",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#EEDA99",
                "en-GB": "#EEDA99",
                "en-US": "#EEDA99",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5223,
                "w": 7600,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_449539663-lSkaNtxb.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_447839385-wEisIxmE.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_405760748-jH1fNEXu.jpeg",
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
                "centAmount": 39900,
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
                "centAmount": 39900,
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
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "JAR-08",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Jute Teppich",
          "en": undefined,
          "en-GB": "Jute Rug",
          "en-US": "Jute Rug",
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
          "de-DE": "jute-teppich",
          "en": undefined,
          "en-GB": "jute-rug",
          "en-US": "jute-rug",
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

  it(`should return a juteRug preset when built for graphql`, () => {
    const juteRugPresetGraphql = juteRug().buildGraphql<TProductDraft>();
    expect(juteRugPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "rugs",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein Juteteppich ist eine Art Teppich aus Naturfasern, die aus der Jutepflanze gewonnen werden. Jute ist eine lange, weiche und glänzende Pflanzenfaser, die zu starken Fäden gesponnen und dann zu Textilien gewebt wird. Juteteppiche sind bekannt für ihre Langlebigkeit und ihr natürliches Aussehen, was sie zu einer beliebten Wahl für diejenigen macht, die einen Hauch von Natur in ihr Zuhause bringen möchten.  Da Jute eine Naturfaser ist, ist sie umweltfreundlich und nachhaltig. Es kann jedoch anfällig für Flecken und Wasserschäden sein, daher sollten Juteteppiche in wenig frequentierten Bereichen oder Räumen verwendet werden, die nicht viel Feuchtigkeit ausgesetzt sind. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen ein natürlicher, erdiger Look gewünscht wird.  Insgesamt ist ein Juteteppich eine schöne und umweltfreundliche Ergänzung für jedes Zuhause. Seine natürlichen Fasern und sein erdiges Aussehen machen es zu einer beliebten Wahl für diejenigen, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen möchten.",
          },
        ],
        "key": "jute-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- 10ft x 12ft","de-DE":"- 10 Fuß x 12 Fuß","en-US":"- 10ft x 12ft"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Jute","de-DE":"Jute","en-US":"Jute"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#EEDA99","de-DE":"#EEDA99","en-US":"#EEDA99"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5223,
                "width": 7600,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_449539663-lSkaNtxb.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_447839385-wEisIxmE.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_405760748-jH1fNEXu.jpeg",
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
                  "centAmount": 39900,
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
                  "centAmount": 39900,
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
                  "centAmount": 39900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "JAR-08",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Jute Rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Jute Rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Jute Teppich",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "jute-rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "jute-rug",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "jute-teppich",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
