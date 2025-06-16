import type { TProductDraft } from '../../../types';
import patternedPillowCover from './patterned-pillow-cover';

describe(`with patternedPillowCover preset`, () => {
  it(`should return a patternedPillowCover preset`, () => {
    const patternedPillowCoverPreset =
      patternedPillowCover().build<TProductDraft>();
    expect(patternedPillowCoverPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein Art-Deco-Samtkissenbezug mit geometrischem Muster ist ein luxuriöses und stilvolles Accessoire für jeden Raum in Ihrem Zuhause. Er ist aus weichem, plüschigem Samtstoff gefertigt, der sich weich und glatt anfühlt. Der Samt hat einen reichen, schimmernden Glanz, der dem Kissenbezug eine elegante und anspruchsvolle Note verleiht. Der Kissenbezug weist ein geometrisches Design auf, das vom Art-déco-Stil des frühen 20. Jahrhunderts inspiriert ist. Jahrhunderts inspiriert ist. Das Design umfasst kühne und eckige Formen. Der Kissenbezug wird oft als dekorativer Akzent für ein Bett, ein Sofa oder einen Sessel verwendet und kann jedem Raum im Haus einen Hauch von Glamour und Raffinesse verleihen. Er lässt sich mit anderen vom Art déco inspirierten Accessoires wie Lampen, Vasen und Wandbildern kombinieren, um ein stimmiges und stilvolles Gesamtbild zu schaffen. Der Samtstoff ist strapazierfähig und pflegeleicht und kann mit einem feuchten Tuch oder Schwamm abgewischt werden. Er sollte regelmäßig an der Luft getrocknet und aufgefächert werden, damit er seine Form und Struktur behält.  Insgesamt ist ein Art-Déco-Samtkissenbezug mit geometrischem Muster ein luxuriöses und stilvolles Accessoire, das die Schönheit und den Komfort eines jeden Raums im Haus verbessern kann.",
          "en": undefined,
          "en-GB": "An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.",
          "en-US": "An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.",
          "fr": undefined,
        },
        "key": "patterned-pillow-cover",
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
                  "de-DE": "Rosa",
                  "en-GB": "Pink",
                  "en-US": "Pink",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Lavendel",
                "en-GB": "Lavender Blush",
                "en-US": "Lavender Blush",
              },
            },
            {
              "name": "color-code",
              "value": "#fff0f5",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4160,
                "w": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Patterned_Pillow_Cover-1.1.jpeg",
            },
          ],
          "key": "patternedPillowCover01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1499EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1499,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1499GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1499,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1499USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1499,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "ADPC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Gemusterter Kissenbezug",
          "en": undefined,
          "en-GB": "Patterned Pillow Cover",
          "en-US": "Patterned Pillow Cover",
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
          "de-DE": "gemusterte-kissenhlle",
          "en": undefined,
          "en-GB": "patterned-pillow-cover",
          "en-US": "patterned-pillow-cover",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
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
                "name": "new-arrival",
                "value": false,
              },
              {
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Schwarz",
                    "en-GB": "Black",
                    "en-US": "Black",
                  },
                ],
              },
              {
                "name": "color-label",
                "value": {
                  "de-DE": "Schwarz",
                  "en-GB": "Black",
                  "en-US": "Black",
                },
              },
              {
                "name": "color-code",
                "value": "#000000",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 4031,
                  "w": 6047,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Patterned_Pillow_Cover-2.1.jpeg",
              },
            ],
            "key": "patternedPillowCover02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1499EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1499,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1499GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1499,
                  "currencyCode": "GBP",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1499USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 1499,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "ADPC-7",
          },
        ],
      }
    `);
  });

  it(`should return a patternedPillowCover preset when built for graphql`, () => {
    const patternedPillowCoverPresetGraphql =
      patternedPillowCover().buildGraphql<TProductDraft>();
    expect(patternedPillowCoverPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.",
          },
          {
            "locale": "de-DE",
            "value": "Ein Art-Deco-Samtkissenbezug mit geometrischem Muster ist ein luxuriöses und stilvolles Accessoire für jeden Raum in Ihrem Zuhause. Er ist aus weichem, plüschigem Samtstoff gefertigt, der sich weich und glatt anfühlt. Der Samt hat einen reichen, schimmernden Glanz, der dem Kissenbezug eine elegante und anspruchsvolle Note verleiht. Der Kissenbezug weist ein geometrisches Design auf, das vom Art-déco-Stil des frühen 20. Jahrhunderts inspiriert ist. Jahrhunderts inspiriert ist. Das Design umfasst kühne und eckige Formen. Der Kissenbezug wird oft als dekorativer Akzent für ein Bett, ein Sofa oder einen Sessel verwendet und kann jedem Raum im Haus einen Hauch von Glamour und Raffinesse verleihen. Er lässt sich mit anderen vom Art déco inspirierten Accessoires wie Lampen, Vasen und Wandbildern kombinieren, um ein stimmiges und stilvolles Gesamtbild zu schaffen. Der Samtstoff ist strapazierfähig und pflegeleicht und kann mit einem feuchten Tuch oder Schwamm abgewischt werden. Er sollte regelmäßig an der Luft getrocknet und aufgefächert werden, damit er seine Form und Struktur behält.  Insgesamt ist ein Art-Déco-Samtkissenbezug mit geometrischem Muster ein luxuriöses und stilvolles Accessoire, das die Schönheit und den Komfort eines jeden Raums im Haus verbessern kann.",
          },
          {
            "locale": "en-US",
            "value": "An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.",
          },
        ],
        "key": "patterned-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Pink","en-GB":"Pink","de-DE":"Rosa"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Lavender Blush","de-DE":"Lavendel","en-US":"Lavender Blush"}",
            },
            {
              "name": "color-code",
              "value": ""#fff0f5"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4160,
                "width": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Patterned_Pillow_Cover-1.1.jpeg",
            },
          ],
          "key": "patternedPillowCover01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1499EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1499,
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
              "key": "1499GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1499,
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
              "key": "1499USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 1499,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "ADPC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Patterned Pillow Cover",
          },
          {
            "locale": "de-DE",
            "value": "Gemusterter Kissenbezug",
          },
          {
            "locale": "en-US",
            "value": "Patterned Pillow Cover",
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
            "value": "patterned-pillow-cover",
          },
          {
            "locale": "de-DE",
            "value": "gemusterte-kissenhlle",
          },
          {
            "locale": "en-US",
            "value": "patterned-pillow-cover",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": "{"en-GB":"- Machine washable\\n- Pillow not included","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Pillow not included"}",
              },
              {
                "name": "new-arrival",
                "value": "false",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
              },
              {
                "name": "color-code",
                "value": ""#000000"",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 4031,
                  "width": 6047,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Patterned_Pillow_Cover-2.1.jpeg",
              },
            ],
            "key": "patternedPillowCover02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "1499EUR",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 1499,
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
                "key": "1499GBP",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 1499,
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
                "key": "1499USD",
                "recurrencePolicy": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 1499,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "ADPC-7",
          },
        ],
      }
    `);
  });
});
