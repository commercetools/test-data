import type { TProductDraft } from '../../../types';
import cocktailStrainer from './cocktail-strainer';
describe(`with cocktailStrainer preset`, () => {
  it('should return a sample cocktailStrainer product preset', () => {
    const cocktailStrainerPreset = cocktailStrainer().build<TProductDraft>();
    expect(cocktailStrainerPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Dieses Sieb für Cocktailshaker ist ein Barwerkzeug, das verwendet wird, um Eis und andere feste Zutaten aus Mixgetränken zu trennen, während der flüssige Teil des Cocktails in ein Servierglas gegossen wird. Das Sieb besteht aus Metall und passt über die Öffnung eines klassischen Cocktail-Shakers. Das Sieb wird an Ort und Stelle gehalten, indem man einen Finger über den kleinen, griffartigen Vorsprung auf einer Seite des Siebes legt, während man die Flüssigkeit durch die größere Öffnung auf der anderen Seite ausgießt. Das Sieb hilft dabei, kleine Eis- oder Fruchtstücke herauszufiltern, die in der Mischung zurückbleiben könnten, was zu einem smoothen und raffinierten Cocktail führt. Das Sieb hat auch eine Feder um den Rand, die hilft, es sicher über dem Shaker zu halten und so ein Verschütten oder Tropfen zu verhindern.",
          "en": undefined,
          "en-GB": "A strainer for cocktail shakers is a bar tool used to strain ice and other solid ingredients from mixed drinks, while pouring the liquid portion of the cocktail into a serving glass. It is made of metal, with a flat, perforated disc that fits over the mouth of the shaker. The strainer is held in place by placing a finger over the small, handle-like protrusion on one side of the disc, while pouring the liquid out through the larger opening on the other side. The perforated disc helps to filter out any small bits of ice or fruit that might be left in the mixture, resulting in a smooth and refined cocktail. The strainer also has a spring around the edge of the disc that helps to hold it securely in place over the shaker, preventing any spills or drips.",
          "en-US": "A strainer for cocktail shakers is a bar tool used to strain ice and other solid ingredients from mixed drinks, while pouring the liquid portion of the cocktail into a serving glass. It is made of metal, with a flat, perforated disc that fits over the mouth of the shaker. The strainer is held in place by placing a finger over the small, handle-like protrusion on one side of the disc, while pouring the liquid out through the larger opening on the other side. The perforated disc helps to filter out any small bits of ice or fruit that might be left in the mixture, resulting in a smooth and refined cocktail. The strainer also has a spring around the edge of the disc that helps to hold it securely in place over the shaker, preventing any spills or drips.",
          "fr": undefined,
        },
        "key": "cocktail-strainer",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 3648,
                "w": 5472,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cocktail_Strainer-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 5472,
                "w": 3648,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cocktail_Strainer-1.2.jpeg",
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
                "centAmount": 399,
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
                "centAmount": 399,
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
                "centAmount": 399,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "STRA-095",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Cocktailsieb",
          "en": undefined,
          "en-GB": "Cocktail Strainer",
          "en-US": "Cocktail Strainer",
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
          "de-DE": "cocktailsieb",
          "en": undefined,
          "en-GB": "cocktail-strainer",
          "en-US": "cocktail-strainer",
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
