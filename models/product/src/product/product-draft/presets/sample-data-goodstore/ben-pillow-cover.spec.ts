import type { TProductDraft } from '../../../types';
import benPillowCover from './ben-pillow-cover';

describe(`with benPillowCover preset`, () => {
  it(`should return a benPillowCover preset`, () => {
    const benPillowCoverPreset = benPillowCover().build<TProductDraft>();
    expect(benPillowCoverPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Der Kissenbezug "Ben" ist ein dekorativer Kissenbezug aus braunem Leinen. Er ist ein visueller Akzent in jedem Raum. Er besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein rechteckiges dekoratives Kissen in Standardgröße passt. Es verfügt über eine neutrale braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird oft verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Es kann allein verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.  Insgesamt ist ein dekorativer Kissenbezug aus braunem Leinen ein vielseitiges und zeitloses Akzentstück, das den Komfort und Stil jedes Raums im Haus verbessern kann.",
          "en": undefined,
          "en-GB": "The Ben Pillow Cover is a brown linen decorative pillowcase used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size rectangle decorative pillow. It features a neutral brown color that can complement a wide variety of decor styles and color schemes.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a brown linen decorative pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.",
          "en-US": "The Ben Pillow Cover is a brown linen decorative pillowcase used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size rectangle decorative pillow. It features a neutral brown color that can complement a wide variety of decor styles and color schemes.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a brown linen decorative pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.",
          "fr": undefined,
        },
        "key": "ben-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Waschmaschinenfest
      - Bezug ist abnehmbar
      - Kissen nicht im Lieferumfang enthalten",
                "en-GB": "- Machine-washable
      - Cover is removable
      - Does not include pillow",
                "en-US": "- Machine-washable
      - Cover is removable
      - Does not include pillow",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#D2B48C",
                "label": {
                  "de-DE": "Bräunen",
                  "en-GB": "Tan",
                  "en-US": "Tan",
                },
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#A69465",
                "en-GB": "#A69465",
                "en-US": "#A69465",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4160,
                "w": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ben_Pillow_Cover-1.1.jpeg",
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
                "centAmount": 1299,
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "LBPC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kissenbezug "Ben"",
          "en": undefined,
          "en-GB": "Ben Pillow Cover",
          "en-US": "Ben Pillow Cover",
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
          "de-DE": "ben-kissenbezug",
          "en": undefined,
          "en-GB": "ben-pillow-cover",
          "en-US": "ben-pillow-cover",
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

  it(`should return a benPillowCover preset when built for graphql`, () => {
    const benPillowCoverPresetGraphql =
      benPillowCover().buildGraphql<TProductDraft>();
    expect(benPillowCoverPresetGraphql).toMatchInlineSnapshot(`
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
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "The Ben Pillow Cover is a brown linen decorative pillowcase used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size rectangle decorative pillow. It features a neutral brown color that can complement a wide variety of decor styles and color schemes.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a brown linen decorative pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "The Ben Pillow Cover is a brown linen decorative pillowcase used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size rectangle decorative pillow. It features a neutral brown color that can complement a wide variety of decor styles and color schemes.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a brown linen decorative pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Der Kissenbezug "Ben" ist ein dekorativer Kissenbezug aus braunem Leinen. Er ist ein visueller Akzent in jedem Raum. Er besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein rechteckiges dekoratives Kissen in Standardgröße passt. Es verfügt über eine neutrale braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird oft verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Es kann allein verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.  Insgesamt ist ein dekorativer Kissenbezug aus braunem Leinen ein vielseitiges und zeitloses Akzentstück, das den Komfort und Stil jedes Raums im Haus verbessern kann.",
          },
        ],
        "key": "ben-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Machine-washable\\n- Cover is removable\\n- Does not include pillow","de-DE":"- Waschmaschinenfest\\n- Bezug ist abnehmbar\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine-washable\\n- Cover is removable\\n- Does not include pillow"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#A69465","de-DE":"#A69465","en-US":"#A69465"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4160,
                "width": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ben_Pillow_Cover-1.1.jpeg",
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
                  "centAmount": 1299,
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "LBPC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Ben Pillow Cover",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Ben Pillow Cover",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Kissenbezug "Ben"",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "ben-pillow-cover",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "ben-pillow-cover",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "ben-kissenbezug",
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
