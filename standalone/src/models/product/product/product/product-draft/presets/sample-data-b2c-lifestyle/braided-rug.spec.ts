import type { TProductDraft } from '../../../types';
import braidedRug from './braided-rug';

describe(`with braidedRug preset`, () => {
  it(`should return a braidedRug preset`, () => {
    const braidedRugPreset = braidedRug().build<TProductDraft>();
    expect(braidedRugPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Dieser geflochtene, runde Juteteppich für das Wohnzimmer ist ein stilvolles und natürliches Wohnaccessoire, welches jedem Raum Wärme und Struktur verleiht. Der Teppich besteht aus strapazierfähigen und nachhaltigen Jutefasern, die zu einer runden Form zusammengeflochten sind.  Das Flechtmuster des Teppichs erzeugt eine strukturierte Oberfläche, die sowohl weich als auch strapazierfähig ist. Die Naturfasern der Jute verleihen dem Teppich ein warmes und erdiges Aussehen und machen ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu rustikal und unkonventionell.  Die runde Form des Teppichs ist ideal, um einen gemütlichen und intimen Sitzbereich in einem größeren Wohnzimmer zu schaffen oder um einem kleineren Raum visuelle Finesse zu verleihen. Ein geflochtener runder Juteteppich eine stilvolle und natürliche Möglichkeit, einem Wohnzimmer Wärme und Textur zu verleihen. Seine langlebige und nachhaltige Konstruktion, kombiniert mit seinem warmen und erdigen Aussehen, machen es zu einem vielseitigen und zeitlosen Wohnaccessoire, an dem Sie jahrelang Freude haben werden.",
          "en": undefined,
          "en-GB": "A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.",
          "en-US": "A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.",
          "fr": undefined,
        },
        "key": "braided-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "search-color",
              "value": [
                "yellow",
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
            {
              "name": "color-code",
              "value": "#D2B48C",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4720,
                "w": 4924,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3373,
                "w": 5060,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 3685,
                "w": 5527,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.2.jpeg",
            },
          ],
          "key": "braidedRug01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "9999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 9999,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "9999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 9999,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "9999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 9999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "BR-0983",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Geflochtener Teppich",
          "en": undefined,
          "en-GB": "Braided Rug",
          "en-US": "Braided Rug",
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
          "de-DE": "geflochtener-teppich",
          "en": undefined,
          "en-GB": "braided-rug",
          "en-US": "braided-rug",
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

  it(`should return a braidedRug preset when built for graphql`, () => {
    const braidedRugPresetGraphql = braidedRug().buildGraphql<TProductDraft>();
    expect(braidedRugPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.",
          },
          {
            "locale": "en-US",
            "value": "A braided round jute rug for the living room is a stylish and natural home decor accessory that can add warmth and texture to any space. The rug is made from durable and sustainable jute fibers, which are braided together to create a round shape.  The braided construction of the rug creates a textured surface that is both soft and durable underfoot. The natural fibers of the jute give the rug a warm and earthy appearance, making it a perfect complement to a range of decor styles, from modern and minimalist to rustic and bohemian.  The round shape of the rug is ideal for creating a cozy and intimate seating area in a larger living room or for adding visual interest to a smaller space.   Overall, a braided round jute rug is a stylish and natural way to add warmth and texture to a living room. Its durable and sustainable construction, combined with its warm and earthy appearance, make it a versatile and timeless home decor accessory that can be enjoyed for years to come.",
          },
          {
            "locale": "de-DE",
            "value": "Dieser geflochtene, runde Juteteppich für das Wohnzimmer ist ein stilvolles und natürliches Wohnaccessoire, welches jedem Raum Wärme und Struktur verleiht. Der Teppich besteht aus strapazierfähigen und nachhaltigen Jutefasern, die zu einer runden Form zusammengeflochten sind.  Das Flechtmuster des Teppichs erzeugt eine strukturierte Oberfläche, die sowohl weich als auch strapazierfähig ist. Die Naturfasern der Jute verleihen dem Teppich ein warmes und erdiges Aussehen und machen ihn zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu rustikal und unkonventionell.  Die runde Form des Teppichs ist ideal, um einen gemütlichen und intimen Sitzbereich in einem größeren Wohnzimmer zu schaffen oder um einem kleineren Raum visuelle Finesse zu verleihen. Ein geflochtener runder Juteteppich eine stilvolle und natürliche Möglichkeit, einem Wohnzimmer Wärme und Textur zu verleihen. Seine langlebige und nachhaltige Konstruktion, kombiniert mit seinem warmen und erdigen Aussehen, machen es zu einem vielseitigen und zeitlosen Wohnaccessoire, an dem Sie jahrelang Freude haben werden.",
          },
        ],
        "key": "braided-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "search-color",
              "value": "["yellow"]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
            },
            {
              "name": "color-code",
              "value": ""#D2B48C"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4720,
                "width": 4924,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3373,
                "width": 5060,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.3.jpeg",
            },
            {
              "dimensions": {
                "height": 3685,
                "width": 5527,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.2.jpeg",
            },
          ],
          "key": "braidedRug01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "9999EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 9999,
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
              "key": "9999GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 9999,
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
              "key": "9999USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 9999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "BR-0983",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Braided Rug",
          },
          {
            "locale": "en-GB",
            "value": "Braided Rug",
          },
          {
            "locale": "de-DE",
            "value": "Geflochtener Teppich",
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
            "value": "braided-rug",
          },
          {
            "locale": "en-GB",
            "value": "braided-rug",
          },
          {
            "locale": "de-DE",
            "value": "geflochtener-teppich",
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
