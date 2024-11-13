import type { TProductDraft } from '../../../types';
import cocktailStirringSpoon from './cocktail-stirring-spoon';
describe(`with cocktailStirringSpoon preset`, () => {
  it('should return a sample cocktailStirringSpoon product preset', () => {
    const cocktailStirringSpoonPreset =
      cocktailStirringSpoon().build<TProductDraft>();
    expect(cocktailStirringSpoonPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bar-accessories",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "kitchen",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieser Cocktail-Rührlöffel ist ein schlankes Utensil aus Edelstahl, das zum Rühren und Mixen von Cocktails verwendet wird. Er ist etwa 8 cm lang und mit einem kleinen, flachen, scheibenförmigen Ende zum Vermischen von Zutaten und einem gedrehten oder spiralförmigen Griff zum einfachen Greifen versehen. Der gedrehte Griff dient nicht nur der Dekoration, sondern verhilft auch zu einem besseren Halt beim Mixen von Cocktails.",
          "en": undefined,
          "en-GB": "A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.",
          "en-US": "A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.",
          "fr": undefined,
        },
        "key": "cocktail-stirring-spoon",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Edelstahl
      - Spülmaschinenfest",
                "en-GB": "- Stainless steel
      - Dishwasher safe",
                "en-US": "- Stainless steel
      - Dishwasher safe",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Silber:#C0C0C0",
                "en-GB": "Silver:#C0C0C0",
                "en-US": "Silver:#C0C0C0",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4555,
                "w": 5757,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Stirring_Spoon-1.1.jpeg",
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
              "key": "199EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "199USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 199,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "SPOO-094",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Cocktail-Rührlöffel",
          "en": undefined,
          "en-GB": "Cocktail Stirring Spoon",
          "en-US": "Cocktail Stirring Spoon",
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
          "de-DE": "cocktail-rhrlffel",
          "en": undefined,
          "en-GB": "cocktail-stirring-spoon",
          "en-US": "cocktail-stirring-spoon",
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
});
