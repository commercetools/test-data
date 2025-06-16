import type { TProductDraft } from '../../../types';
import cocktailShakerSet from './cocktail-shaker-set';
describe(`with cocktailShakerSet preset`, () => {
  it('should return a sample cocktailShakerSet product preset', () => {
    const cocktailShakerSetPreset = cocktailShakerSet().build<TProductDraft>();
    expect(cocktailShakerSetPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Dieses Set für die Cocktailzubereitung umfasst einen Shaker, ein Sieb, einen Jigger und eine Zange, die alle aus vergoldetem Edelstahl bestehen. Der Shaker ist ein zweiteiliger Behälter mit einem Deckel, der fest sitzt, um ein Verschütten zu verhindern. Das Sieb passt über die Oberseite des Shakers, um feste Zutaten oder Eis aus dem Cocktail zu entfernen, wenn er in das Glas gegossen wird. Der Jigger ist ein kleiner Messbecher, der dabei hilft, die Zutaten präzise abzumessen. Das Gold-Finish verleiht dem Set ein luxuriöses, elegantes Aussehen, das sich perfekt für die Unterhaltung oder die Zubereitung besonderer Cocktails zu Hause eignet.",
          "en": undefined,
          "en-GB": "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
          "en-US": "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
          "fr": undefined,
        },
        "key": "cocktail-shaker-set",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Edelstahl
      - Handwäsche nur",
                "en-GB": "- Stainless steel
      - Hand wash only",
                "en-US": "- Stainless steel
      - Hand wash only",
              },
            },
            {
              "name": "search-finish",
              "value": "gold",
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            },
            {
              "name": "finish-code",
              "value": "#FFD700",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5334,
                "w": 4929,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker_Set-1.1.jpeg",
            },
          ],
          "key": "cocktailShakerSet01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1599EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1599,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1599GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1599,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1599USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "COC-0843",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Cocktail Shaker Set",
          "en": undefined,
          "en-GB": "Cocktail Shaker Set",
          "en-US": "Cocktail Shaker Set",
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
          "de-DE": "cocktail-shaker-set",
          "en": undefined,
          "en-GB": "cocktail-shaker-set",
          "en-US": "cocktail-shaker-set",
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
