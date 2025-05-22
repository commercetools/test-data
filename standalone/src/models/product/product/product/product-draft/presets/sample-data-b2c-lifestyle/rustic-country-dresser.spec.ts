import type { TProductDraft } from '../../../types';
import rusticCountryDresser from './rustic-country-dresser';

describe(`with rusticCountryDresser preset`, () => {
  it(`should return a rusticCountryDresser preset`, () => {
    const rusticCountryDresserPreset =
      rusticCountryDresser().build<TProductDraft>();
    expect(rusticCountryDresserPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Die rustikale Landhauskommode mit viel Stauraum ist ein charmantes und praktisches Möbelstück, das jedem Schlafzimmer oder Wohnzimmer Wärme und Charakter verleiht. Die stabile Kommode mit Holzrahmen ist im Vintage-Look gehalten und wirkt sowohl rustikal als auch einladend.  Die Kommode ist mit einer Reihe von Schubladen in verschiedenen Größen ausgestattet, die ausreichend Stauraum für Kleidung, Bettwäsche und andere Gegenstände bieten. Die Schubladen sind mit Schwalbenschwanzverbindungen und Gleitbeschlägen konstruiert, um sicherzustellen, dass sie langlebig und einfach zu bedienen sind. Die Schubladenfronten sind mit rustikalen Metallgriffen geschmückt, die den Charme und Charakter des Möbelstücks noch verstärken. Die Platte der Kommode bietet zusätzlichen Stauraum für dekorative Gegenstände wie Vasen, Kerzen oder Bilderrahmen.  Eine rustikale Landhauskommode schafft auf praktische und stilvolle Weise Stauraum für und verleiht jedem Schlaf- oder Wohnraum gleichzeitig Wärme und Charme. Die robuste Konstruktion und das schlichte Design machen sie zu einer funktionalen und schönen Ergänzung für jedes Zuhause mit rustikalem oder ländlichem Einrichtungsstil.",
          "en": undefined,
          "en-GB": "A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.",
          "en-US": "A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.",
          "fr": undefined,
        },
        "key": "rustic-country-dresser",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- 3 small drawers and 4 large drawers
      - Nickel drawer handles
      - Assembled on site",
                "en-GB": "- 3 small drawers and 4 large drawers
      - Nickel drawer handles
      - Assembled on site",
                "en-US": "- 3 small drawers and 4 large drawers
      - Nickel drawer handles
      - Assembled on site",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Hell grau:#D3D3D3",
                "en-GB": "Light Gray:#D3D3D3",
                "en-US": "Light Gray:#D3D3D3",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.4.jpeg",
            },
          ],
          "key": "rusticCountryDresser01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 159900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RCD-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Rustikale Landhauskommode",
          "en": undefined,
          "en-GB": "Rustic Country Dresser",
          "en-US": "Rustic Country Dresser",
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
          "de-DE": "rustikale-landhauskommode",
          "en": undefined,
          "en-GB": "rustic-country-dresser",
          "en-US": "rustic-country-dresser",
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

  it(`should return a rusticCountryDresser preset when built for graphql`, () => {
    const rusticCountryDresserPresetGraphql =
      rusticCountryDresser().buildGraphql<TProductDraft>();
    expect(rusticCountryDresserPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.",
          },
          {
            "locale": "en-US",
            "value": "A rustic country dresser with ample storage is a charming and practical piece of furniture that can add warmth and character to any bedroom or living space. The dresser features a sturdy wooden frame and a vintage look that is both rustic and inviting.  The dresser is equipped with a range of drawers in various sizes, providing ample storage space for clothing, linens, and other items. The drawers are constructed with dovetail joints and gliding hardware, ensuring that they are durable and easy to use. The drawer fronts are adorned with rustic metal pulls, adding to the charm and character of the piece.  The top of the dresser provides additional storage space, allowing you to display decorative items, such as vases, candles, or picture frames.   Overall, a rustic country dresser with ample storage is a practical and stylish piece of furniture that can add warmth and character to any bedroom or living space. Its sturdy construction, ample storage space, and charming design make it a functional and beautiful addition to any home with a rustic or country decor style.",
          },
          {
            "locale": "de-DE",
            "value": "Die rustikale Landhauskommode mit viel Stauraum ist ein charmantes und praktisches Möbelstück, das jedem Schlafzimmer oder Wohnzimmer Wärme und Charakter verleiht. Die stabile Kommode mit Holzrahmen ist im Vintage-Look gehalten und wirkt sowohl rustikal als auch einladend.  Die Kommode ist mit einer Reihe von Schubladen in verschiedenen Größen ausgestattet, die ausreichend Stauraum für Kleidung, Bettwäsche und andere Gegenstände bieten. Die Schubladen sind mit Schwalbenschwanzverbindungen und Gleitbeschlägen konstruiert, um sicherzustellen, dass sie langlebig und einfach zu bedienen sind. Die Schubladenfronten sind mit rustikalen Metallgriffen geschmückt, die den Charme und Charakter des Möbelstücks noch verstärken. Die Platte der Kommode bietet zusätzlichen Stauraum für dekorative Gegenstände wie Vasen, Kerzen oder Bilderrahmen.  Eine rustikale Landhauskommode schafft auf praktische und stilvolle Weise Stauraum für und verleiht jedem Schlaf- oder Wohnraum gleichzeitig Wärme und Charme. Die robuste Konstruktion und das schlichte Design machen sie zu einer funktionalen und schönen Ergänzung für jedes Zuhause mit rustikalem oder ländlichem Einrichtungsstil.",
          },
        ],
        "key": "rustic-country-dresser",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-US":"- 3 small drawers and 4 large drawers\\n- Nickel drawer handles\\n- Assembled on site","en-GB":"- 3 small drawers and 4 large drawers\\n- Nickel drawer handles\\n- Assembled on site","de-DE":"- 3 small drawers and 4 large drawers\\n- Nickel drawer handles\\n- Assembled on site"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"Light Gray:#D3D3D3","en-GB":"Light Gray:#D3D3D3","de-DE":"Hell grau:#D3D3D3"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.3.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.4.jpeg",
            },
          ],
          "key": "rusticCountryDresser01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "159900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
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
              "key": "159900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
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
              "key": "159900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 159900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RCD-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Rustic Country Dresser",
          },
          {
            "locale": "en-GB",
            "value": "Rustic Country Dresser",
          },
          {
            "locale": "de-DE",
            "value": "Rustikale Landhauskommode",
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
            "value": "rustic-country-dresser",
          },
          {
            "locale": "en-GB",
            "value": "rustic-country-dresser",
          },
          {
            "locale": "de-DE",
            "value": "rustikale-landhauskommode",
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
