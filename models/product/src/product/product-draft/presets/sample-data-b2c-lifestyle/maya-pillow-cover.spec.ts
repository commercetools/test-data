import type { TProductDraft } from '../../../types';
import mayaPillowCover from './maya-pillow-cover';

describe(`with mayaPillowCover preset`, () => {
  it(`should return a mayaPillowCover preset`, () => {
    const mayaPillowCoverPreset = mayaPillowCover().build<TProductDraft>();
    expect(mayaPillowCoverPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein brauner Mikrofaser-Kissenbezug ist ein weicher und bequemer Kissenbezug aus synthetischen Fasern. Das Mikrofasermaterial fühlt sich weich und seidig an und bietet ein komfortables und gemütliches Schlaferlebnis.  Die braune Farbe des Kissenbezugs ist typisch warm und einladend und schafft eine gemütliche und entspannende Atmosphäre in einem Schlafzimmer. Es kann auch eine vielseitige Farbe sein, die gut zu einer Vielzahl anderer Farben und Dekorstile passt.  Kissenbezüge aus Mikrofaser sind bekannt für ihre Strapazierfähigkeit und Pflegeleichtigkeit. Sie sind in der Regel knitter- und schrumpffrei und somit ideal für vielbeschäftigte Haushalte. Sie sind auch hypoallergen, was sie zu einer großartigen Option für Menschen mit Allergien oder Empfindlichkeiten macht.  Insgesamt ist ein brauner Kissenbezug aus Mikrofaser eine praktische und bequeme Wahl für jedes Schlafzimmer. Es ist weich, strapazierfähig und pflegeleicht und bietet eine gemütliche und einladende Schlafumgebung für einen erholsamen Schlaf.",
          "en": undefined,
          "en-GB": "A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.",
          "en-US": "A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.",
          "fr": undefined,
        },
        "key": "maya-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Waschmaschinenfest
      - Kissen nicht im Lieferumfang enthalten",
                "en-GB": "- Machine washable
      - Does not include pillow",
                "en-US": "- Machine washable
      - Does not include pillow",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Pflaume:#DDA0DD",
                "en-GB": "Plum:#DDA0DD",
                "en-US": "Plum:#DDA0DD",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Maya_Pillow_Cover-1.1.jpeg",
            },
          ],
          "key": "mayaPillowCover01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "899EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 899,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "899GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 899,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "899USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 899,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MPC-02",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Maya Kissenbezug",
          "en": undefined,
          "en-GB": "Maya Pillow Cover",
          "en-US": "Maya Pillow Cover",
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
          "de-DE": "maya-kissenbezug",
          "en": undefined,
          "en-GB": "maya-pillow-cover",
          "en-US": "maya-pillow-cover",
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
      - Does not include pillow",
                  "en-US": "- Machine washable
      - Does not include pillow",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "Beige:#F5F5DC",
                  "en-GB": "Beige:#F5F5DC",
                  "en-US": "Beige:#F5F5DC",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Maya_Pillow_Cover-2.1.jpeg",
              },
            ],
            "key": "mayaPillowCover02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "899EUR",
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 899,
                  "currencyCode": "EUR",
                },
              },
              {
                "channel": undefined,
                "country": "GB",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "899GBP",
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 899,
                  "currencyCode": "GBP",
                },
              },
              {
                "channel": undefined,
                "country": "US",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "899USD",
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 899,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "MPC-07",
          },
        ],
      }
    `);
  });

  it(`should return a mayaPillowCover preset when built for graphql`, () => {
    const mayaPillowCoverPresetGraphql =
      mayaPillowCover().buildGraphql<TProductDraft>();
    expect(mayaPillowCoverPresetGraphql).toMatchInlineSnapshot(`
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
            "locale": "en-GB",
            "value": "A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.",
          },
          {
            "locale": "en-US",
            "value": "A microfiber brown pillowcase is a soft and comfortable pillow cover made from synthetic fibers. The microfiber material is designed to be soft and silky to the touch, providing a comfortable and cozy sleeping experience.  The brown color of the pillowcase is typically warm and inviting, creating a cozy and relaxing atmosphere in a bedroom. It can also be a versatile color that matches well with a variety of other colors and decor styles.  Microfiber pillowcases are known for their durability and easy care. They are typically resistant to wrinkles and shrinkage, making them ideal for busy households. They are also hypoallergenic, making them a great option for people with allergies or sensitivities.  Overall, a microfiber brown pillowcase is a practical and comfortable choice for any bedroom. It is soft, durable, and easy to care for, providing a cozy and inviting sleeping environment for a restful night's sleep.",
          },
          {
            "locale": "de-DE",
            "value": "Ein brauner Mikrofaser-Kissenbezug ist ein weicher und bequemer Kissenbezug aus synthetischen Fasern. Das Mikrofasermaterial fühlt sich weich und seidig an und bietet ein komfortables und gemütliches Schlaferlebnis.  Die braune Farbe des Kissenbezugs ist typisch warm und einladend und schafft eine gemütliche und entspannende Atmosphäre in einem Schlafzimmer. Es kann auch eine vielseitige Farbe sein, die gut zu einer Vielzahl anderer Farben und Dekorstile passt.  Kissenbezüge aus Mikrofaser sind bekannt für ihre Strapazierfähigkeit und Pflegeleichtigkeit. Sie sind in der Regel knitter- und schrumpffrei und somit ideal für vielbeschäftigte Haushalte. Sie sind auch hypoallergen, was sie zu einer großartigen Option für Menschen mit Allergien oder Empfindlichkeiten macht.  Insgesamt ist ein brauner Kissenbezug aus Mikrofaser eine praktische und bequeme Wahl für jedes Schlafzimmer. Es ist weich, strapazierfähig und pflegeleicht und bietet eine gemütliche und einladende Schlafumgebung für einen erholsamen Schlaf.",
          },
        ],
        "key": "maya-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Machine washable\\n- Does not include pillow","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Does not include pillow"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Plum:#DDA0DD","de-DE":"Pflaume:#DDA0DD","en-US":"Plum:#DDA0DD"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4160,
                "width": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Maya_Pillow_Cover-1.1.jpeg",
            },
          ],
          "key": "mayaPillowCover01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "899EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 899,
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
              "key": "899GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 899,
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
              "key": "899USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 899,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MPC-02",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Maya Pillow Cover",
          },
          {
            "locale": "en-GB",
            "value": "Maya Pillow Cover",
          },
          {
            "locale": "de-DE",
            "value": "Maya Kissenbezug",
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
            "value": "maya-pillow-cover",
          },
          {
            "locale": "en-GB",
            "value": "maya-pillow-cover",
          },
          {
            "locale": "de-DE",
            "value": "maya-kissenbezug",
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
                "value": "{"en-GB":"- Machine washable\\n- Does not include pillow","de-DE":"- Waschmaschinenfest\\n- Kissen nicht im Lieferumfang enthalten","en-US":"- Machine washable\\n- Does not include pillow"}",
              },
              {
                "name": "color",
                "value": "{"en-GB":"Beige:#F5F5DC","de-DE":"Beige:#F5F5DC","en-US":"Beige:#F5F5DC"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 4160,
                  "width": 6240,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Maya_Pillow_Cover-2.1.jpeg",
              },
            ],
            "key": "mayaPillowCover02",
            "prices": [
              {
                "channel": undefined,
                "country": "DE",
                "custom": undefined,
                "customerGroup": undefined,
                "discounted": undefined,
                "key": "899EUR",
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 899,
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
                "key": "899GBP",
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 899,
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
                "key": "899USD",
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centPrecision": {
                    "centAmount": 899,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "MPC-07",
          },
        ],
      }
    `);
  });
});
