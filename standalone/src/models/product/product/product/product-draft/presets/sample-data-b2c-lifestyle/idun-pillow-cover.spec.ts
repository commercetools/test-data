import type { TProductDraft } from '../../../types';
import idunPillowCover from './idun-pillow-cover';

describe(`with idunPillowCover preset`, () => {
  it(`should return a idunPillowCover preset`, () => {
    const idunPillowCoverPreset = idunPillowCover().build<TProductDraft>();
    expect(idunPillowCoverPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
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
          "de-DE": "Ein brauner Samt-Kissenbezug ist eine Art Textilbezug für ein dekoratives Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse, Textur und einen Hauch von Luxus zu verleihen. Es besteht aus einem weichen und plüschigen Samtstoff, der für seine glatte Oberfläche, seine satte Farbe und seinen glänzenden Schimmer bekannt ist. Der Kissenbezug ist so konzipiert, dass er über ein dekoratives Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Er hat eine quadratische Form und eine warme braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann. Der Samtstoff fühlt sich seidig und luxuriös an und verleiht dem Kissen einen Hauch von Raffinesse und Eleganz. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht. Der Kissenbezug wird oft verwendet, um eine gemütliche und einladende Atmosphäre in einem Raum zu schaffen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Er kann allein oder in Kombination mit anderen dekorativen Kissen in verschiedenen Texturen und Farben verwendet werden, um ein mehrschichtiges und harmonisches Aussehen zu schaffen. Insgesamt ist ein Kissenbezug aus braunem Samt ein wunderschönes und luxuriöses Accessoire, das den Komfort und den Stil eines jeden Raumes im Haus verbessern kann. ",
          "en": undefined,
          "en-GB": "A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.",
          "en-US": "A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.",
          "fr": undefined,
        },
        "key": "idun-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Waschmaschinenfest
      - Kissen nicht im Lieferumfang enthalten",
                "en-GB": "- Machine washable
      - Pillow not included",
                "en-US": "- Machine washable
      - Pillow not included",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Braun",
                  "en-GB": "Brown",
                  "en-US": "Brown",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Siena",
                "en-GB": "Siena",
                "en-US": "Siena",
              },
            },
            {
              "name": "color-code",
              "value": {
                "de-DE": "#A0522D",
                "en-GB": "#A0522D",
                "en-US": "#A0522D",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3996,
                "w": 5994,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Idun_Pillow_Cover-1.1.jpeg",
            },
          ],
          "key": "idunPillowCover01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1399EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1399,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1399GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1399,
                "currencyCode": "GBP",
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
              "key": "1299GBP_dist",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1399USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1399,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "IPC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Idun Kissenbezug",
          "en": undefined,
          "en-GB": "Idun Pillow Cover",
          "en-US": "Idun Pillow Cover",
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
          "de-DE": "idun-kissenbezug",
          "en": undefined,
          "en-GB": "idun-pillow-cover",
          "en-US": "idun-pillow-cover",
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

  it(`should return a idunPillowCover preset when built for graphql`, () => {
    const idunPillowCoverPresetGraphql =
      idunPillowCover().buildGraphql<TProductDraft>();
    expect(idunPillowCoverPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "bedding",
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
            "value": "A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.",
          },
          {
            "locale": "en-US",
            "value": "A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.",
          },
          {
            "locale": "de-DE",
            "value": "Ein brauner Samt-Kissenbezug ist eine Art Textilbezug für ein dekoratives Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse, Textur und einen Hauch von Luxus zu verleihen. Es besteht aus einem weichen und plüschigen Samtstoff, der für seine glatte Oberfläche, seine satte Farbe und seinen glänzenden Schimmer bekannt ist. Der Kissenbezug ist so konzipiert, dass er über ein dekoratives Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Er hat eine quadratische Form und eine warme braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann. Der Samtstoff fühlt sich seidig und luxuriös an und verleiht dem Kissen einen Hauch von Raffinesse und Eleganz. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht. Der Kissenbezug wird oft verwendet, um eine gemütliche und einladende Atmosphäre in einem Raum zu schaffen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Er kann allein oder in Kombination mit anderen dekorativen Kissen in verschiedenen Texturen und Farben verwendet werden, um ein mehrschichtiges und harmonisches Aussehen zu schaffen. Insgesamt ist ein Kissenbezug aus braunem Samt ein wunderschönes und luxuriöses Accessoire, das den Komfort und den Stil eines jeden Raumes im Haus verbessern kann. ",
          },
        ],
        "key": "idun-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Siena","de-DE":"Siena","en-US":"Siena"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"#A0522D","en-GB":"#A0522D","de-DE":"#A0522D"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3996,
                "width": 5994,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Idun_Pillow_Cover-1.1.jpeg",
            },
          ],
          "key": "idunPillowCover01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1399EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1399,
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
              "key": "1399GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1399,
                  "currencyCode": "GBP",
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
              "key": "1299GBP_dist",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1299,
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
              "key": "1399USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1399,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "IPC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Idun Pillow Cover",
          },
          {
            "locale": "en-GB",
            "value": "Idun Pillow Cover",
          },
          {
            "locale": "de-DE",
            "value": "Idun Kissenbezug",
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
            "value": "idun-pillow-cover",
          },
          {
            "locale": "en-GB",
            "value": "idun-pillow-cover",
          },
          {
            "locale": "de-DE",
            "value": "idun-kissenbezug",
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
