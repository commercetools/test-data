import type { TProductVariantDraft } from '../../../types';
import idunPillowCover01 from './idun-pillow-cover-01';

describe(`with idunPillowCover01 preset`, () => {
  it(`should return a idunPillowCover01 preset`, () => {
    const idunPillowCover01Preset =
      idunPillowCover01().build<TProductVariantDraft>();
    expect(idunPillowCover01Preset).toMatchInlineSnapshot(`
      {
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
            "name": "product-description",
            "value": {
              "de-DE": "Ein brauner Samt-Kissenbezug ist eine Art Textilbezug für ein dekoratives Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse, Textur und einen Hauch von Luxus zu verleihen. Es besteht aus einem weichen und plüschigen Samtstoff, der für seine glatte Oberfläche, seine satte Farbe und seinen glänzenden Schimmer bekannt ist. Der Kissenbezug ist so konzipiert, dass er über ein dekoratives Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Er hat eine quadratische Form und eine warme braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann. Der Samtstoff fühlt sich seidig und luxuriös an und verleiht dem Kissen einen Hauch von Raffinesse und Eleganz. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht. Der Kissenbezug wird oft verwendet, um eine gemütliche und einladende Atmosphäre in einem Raum zu schaffen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Er kann allein oder in Kombination mit anderen dekorativen Kissen in verschiedenen Texturen und Farben verwendet werden, um ein mehrschichtiges und harmonisches Aussehen zu schaffen. Insgesamt ist ein Kissenbezug aus braunem Samt ein wunderschönes und luxuriöses Accessoire, das den Komfort und den Stil eines jeden Raumes im Haus verbessern kann. ",
              "en-GB": "A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.",
              "en-US": "A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#964B00",
              "label": {
                "de-DE": "Dunkelbraun",
                "en-GB": "Dark Brown",
                "en-US": "Dark Brown",
              },
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#9B614C",
              "en-GB": "#9B614C",
              "en-US": "#9B614C",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Kupfer",
              "en-GB": "Copper",
              "en-US": "Copper",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Idun%20Pillow%20Cover-H2e2M2lY.jpeg",
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 1399,
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
              "centAmount": 1399,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "IPC-09",
      }
    `);
  });

  it(`should return a idunPillowCover01 preset when built for graphql`, () => {
    const idunPillowCover01PresetGraphql =
      idunPillowCover01().buildGraphql<TProductVariantDraft>();
    expect(idunPillowCover01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
          },
          {
            "name": "product-description",
            "value": "{"en-GB":"A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.","en-US":"A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.","de-DE":"Ein brauner Samt-Kissenbezug ist eine Art Textilbezug für ein dekoratives Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse, Textur und einen Hauch von Luxus zu verleihen. Es besteht aus einem weichen und plüschigen Samtstoff, der für seine glatte Oberfläche, seine satte Farbe und seinen glänzenden Schimmer bekannt ist. Der Kissenbezug ist so konzipiert, dass er über ein dekoratives Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Er hat eine quadratische Form und eine warme braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann. Der Samtstoff fühlt sich seidig und luxuriös an und verleiht dem Kissen einen Hauch von Raffinesse und Eleganz. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht. Der Kissenbezug wird oft verwendet, um eine gemütliche und einladende Atmosphäre in einem Raum zu schaffen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Er kann allein oder in Kombination mit anderen dekorativen Kissen in verschiedenen Texturen und Farben verwendet werden, um ein mehrschichtiges und harmonisches Aussehen zu schaffen. Insgesamt ist ein Kissenbezug aus braunem Samt ein wunderschönes und luxuriöses Accessoire, das den Komfort und den Stil eines jeden Raumes im Haus verbessern kann. "}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#964B00","label":{"de-DE":"Dunkelbraun","en-GB":"Dark Brown","en-US":"Dark Brown"}}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#9B614C","de-DE":"#9B614C","en-US":"#9B614C"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Copper","de-DE":"Kupfer","en-US":"Copper"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3996,
              "width": 5994,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Idun%20Pillow%20Cover-H2e2M2lY.jpeg",
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
            "key": undefined,
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
                "centAmount": 1399,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "IPC-09",
      }
    `);
  });
});
