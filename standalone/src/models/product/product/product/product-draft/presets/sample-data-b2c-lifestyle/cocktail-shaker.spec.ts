import type { TProductDraft } from '../../../types';
import cocktailShaker from './cocktail-shaker';
describe(`with cocktailShaker preset`, () => {
  it('should return a sample cocktailShaker product preset', () => {
    const cocktailShakerPreset = cocktailShaker().build<TProductDraft>();
    expect(cocktailShakerPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein Cocktailshaker ist ein Werkzeug, das zum Mischen und Zubereiten von alkoholischen Getränken wie Cocktails verwendet wird. Es ist ein Metallbehälter mit einem Deckel, der dicht abschließt, um ein Verschütten zu verhindern. Der Behälter hat eine sich verjüngende Form mit einer breiteren Basis und einer schmaleren Oberseite. Dieses Design ermöglicht ein einfaches Mischen der Zutaten durch Schütteln. Der Deckel hat ein eingebautes Sieb, um die Flüssigkeit vom Eis und anderen festen Zutaten zu trennen. Material: Edelstahöl",
          "en": undefined,
          "en-GB": "A cocktail shaker is a tool used in mixing and preparing alcoholic beverages such as cocktails. It is a metal container with a lid that seals tightly to prevent spills. The container has a tapered shape, with a wider base and a narrower top. This design allows for easy mixing of ingredients by shaking them together. The lid has a built-in strainer to separate the liquid from the ice and other solid ingredients. The shaker is made of stainless steel.",
          "en-US": "A cocktail shaker is a tool used in mixing and preparing alcoholic beverages such as cocktails. It is a metal container with a lid that seals tightly to prevent spills. The container has a tapered shape, with a wider base and a narrower top. This design allows for easy mixing of ingredients by shaking them together. The lid has a built-in strainer to separate the liquid from the ice and other solid ingredients. The shaker is made of stainless steel.",
          "fr": undefined,
        },
        "key": "cocktail-shaker",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Inklusive eingebautem Sieb
      - Edelstahl
      - Spülmaschinenfest",
                "en-GB": "- Includes built in strainer
      - Stainless steel
      - Dishwasher safe",
                "en-US": "- Includes built in strainer
      - Stainless steel
      - Dishwasher safe",
              },
            },
            {
              "name": "search-finish",
              "value": "silver",
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Silber",
                "en-GB": "Silver",
                "en-US": "Silver",
              },
            },
            {
              "name": "finish-code",
              "value": "#C0C0C0",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5500,
                "w": 3850,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 3750,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker-1.2.jpeg",
            },
          ],
          "key": "cocktailShaker01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 699,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 699,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "699USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 699,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "COCT-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Cocktail Shaker",
          "en": undefined,
          "en-GB": "Cocktail Shaker",
          "en-US": "Cocktail Shaker",
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
          "de-DE": "cocktail-shaker",
          "en": undefined,
          "en-GB": "cocktail-shaker",
          "en-US": "cocktail-shaker",
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
