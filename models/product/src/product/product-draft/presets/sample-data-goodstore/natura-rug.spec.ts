import type { TProductDraft } from '../../../types';
import naturaRug from './natura-rug';

describe(`with naturaRug preset`, () => {
  it(`should return a naturaRug preset`, () => {
    const naturaRugPreset = naturaRug().build<TProductDraft>();
    expect(naturaRugPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein runder Teppich aus Naturfasern ist ein kreisförmiger Teppich, der aus Materialien hergestellt wird, die in der Natur vorkommen. Zu den Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, gehören Jute, Sisal, Seegras und Bambus. Durch die Verwendung natürlicher Materialien haben diese Teppiche einen rustikalen und organischen Charakter, der einem Raum Wärme und Struktur verleihen kann. Die neutralen Farbtöne dieser Fasern machen sie außerdem vielseitig einsetzbar und passen zu einer Reihe von Einrichtungsstilen, von Bohème über Küsten- bis hin zu Landhausstil. Die Textur und Dicke eines runden Teppichs aus Naturfasern kann je nach verwendetem Material variieren. Jute und Sisal haben beispielsweise eine rauere Struktur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.  Die Herstellung dieser Teppiche erfolgt häufig in Handarbeit, was zu ihrer Einzigartigkeit beiträgt. Auch die Web- oder Flechttechnik, mit der der Teppich hergestellt wird, kann das Design optisch aufwerten, z. B. durch ein Fischgräten- oder Chevron-Muster.  Ein runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, vom Wohnzimmer über das Schlafzimmer bis zum Essbereich. Besonders beliebt sind sie im Bohème- und Küsten-Stil, wo sie dem Raum eine entspannte und lockere Atmosphäre verleihen können. Insgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Einrichtung Textur und Wärme verleihen möchten.",
          "en": undefined,
          "en-GB": "A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.",
          "en-US": "A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.",
          "fr": undefined,
        },
        "key": "natura-rug",
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
              "name": "color",
              "value": {
                "de-DE": "#F7ECD9 ",
                "en-GB": "#F7ECD9 ",
                "en-US": "#F7ECD9 ",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Beige",
                "en-GB": "Beige",
                "en-US": "Beige",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4000,
                "w": 8000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Natura_Rug-1.1.jpeg",
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
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
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
          "sku": "NR-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Natura Teppich",
          "en": undefined,
          "en-GB": "Natura Rug",
          "en-US": "Natura Rug",
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
          "de-DE": "natura-teppich",
          "en": undefined,
          "en-GB": "natura-rug",
          "en-US": "natura-rug",
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

  it(`should return a naturaRug preset when built for graphql`, () => {
    const naturaRugPresetGraphql = naturaRug().buildGraphql<TProductDraft>();
    expect(naturaRugPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.",
          },
          {
            "locale": "de-DE",
            "value": "Ein runder Teppich aus Naturfasern ist ein kreisförmiger Teppich, der aus Materialien hergestellt wird, die in der Natur vorkommen. Zu den Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, gehören Jute, Sisal, Seegras und Bambus. Durch die Verwendung natürlicher Materialien haben diese Teppiche einen rustikalen und organischen Charakter, der einem Raum Wärme und Struktur verleihen kann. Die neutralen Farbtöne dieser Fasern machen sie außerdem vielseitig einsetzbar und passen zu einer Reihe von Einrichtungsstilen, von Bohème über Küsten- bis hin zu Landhausstil. Die Textur und Dicke eines runden Teppichs aus Naturfasern kann je nach verwendetem Material variieren. Jute und Sisal haben beispielsweise eine rauere Struktur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.  Die Herstellung dieser Teppiche erfolgt häufig in Handarbeit, was zu ihrer Einzigartigkeit beiträgt. Auch die Web- oder Flechttechnik, mit der der Teppich hergestellt wird, kann das Design optisch aufwerten, z. B. durch ein Fischgräten- oder Chevron-Muster.  Ein runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, vom Wohnzimmer über das Schlafzimmer bis zum Essbereich. Besonders beliebt sind sie im Bohème- und Küsten-Stil, wo sie dem Raum eine entspannte und lockere Atmosphäre verleihen können. Insgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Einrichtung Textur und Wärme verleihen möchten.",
          },
          {
            "locale": "en-US",
            "value": "A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.  These rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.  The texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.  The construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.  A round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.  Overall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.",
          },
        ],
        "key": "natura-rug",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- 6ft x 6ft","de-DE":"- 6 Fuß x 6 Fuß","en-US":"- 6ft x 6ft"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#F5F5DC","label":{"de-DE":"Beige","en-GB":"Beige","en-US":"Beige"}}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#F7ECD9 ","de-DE":"#F7ECD9 ","en-US":"#F7ECD9 "}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Beige","de-DE":"Beige","en-US":"Beige"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4000,
                "width": 8000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Natura_Rug-1.1.jpeg",
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
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
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
          "sku": "NR-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Natura Rug",
          },
          {
            "locale": "de-DE",
            "value": "Natura Teppich",
          },
          {
            "locale": "en-US",
            "value": "Natura Rug",
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
            "locale": "en-GB",
            "value": "natura-rug",
          },
          {
            "locale": "de-DE",
            "value": "natura-teppich",
          },
          {
            "locale": "en-US",
            "value": "natura-rug",
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
