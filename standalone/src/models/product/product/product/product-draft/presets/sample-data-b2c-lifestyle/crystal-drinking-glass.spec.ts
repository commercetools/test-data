import type { TProductDraft } from '../../../types';
import crystalDrinkingGlass from './crystal-drinking-glass';
describe(`with crystalDrinkingGlass preset`, () => {
  it('should return a sample crystalDrinkingGlass product preset', () => {
    const crystalDrinkingGlassPreset =
      crystalDrinkingGlass().build<TProductDraft>();
    expect(crystalDrinkingGlassPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "glassware",
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
          "de-DE": "Dieses Kristall-Glas besteht aus hochwertigem, bleifreiem Kristallglas, das dünn und zart, aber dennoch stark und langlebig ist. Das hochwertige Kristallmaterial wertet das Trinkerlebnis auf und lässt die Getränke funkelnder und farbenfroher erscheinen. Das Glas ist zudem so designed, dass es auch das Aroma und den Geschmack des Getränks verbessert. Das Design des Glases soll die Zugabe von Eis, Soda oder anderen Mixern ermöglichen und dennoch viel Platz für das Getränk selbst lassen. Die weite Öffnung des Glases lässt das Aroma des Getränkes aufsteigen, während die geraden Seiten und die glatte Oberfläche das Trinken und Genießen erleichtern.  Dieses Kristall-Glas ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Insgesamt ist dieses Glas aus Kristall ein stilvolles und elegantes Glasgeschirr, das sich perfekt zum Servieren von großen Mixgetränken eignet. Sein zartes Kristallmaterial und sein kompliziertes Design machen es zu einer beliebten Wahl für besondere Anlässe und gehobene Speiseerlebnisse.",
          "en": undefined,
          "en-GB": "This Crystal Drinking Glass is made of high-quality, lead-free crystal glass that is thin and delicate, yet strong and durable. The crystal material of the highball glass enhances the appearance of the drink, making it appear more sparkling and colorful. It also enhances the aroma and flavor of the drink, allowing the drinker to fully appreciate the complexity of the ingredients.  The design of the glass is intended to accommodate the addition of ice, soda, or other mixers, while still leaving plenty of room for the drink itself. The wide mouth of the glass allows the drinker to smell the aroma of the drink, while the straight sides and smooth surface make it easy to sip and enjoy.  The crystal highball glass is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the crystal highball glass is a stylish and elegant piece of glassware that is perfect for serving tall, mixed drinks. Its delicate crystal material and intricate design make it a popular choice for special occasions and fine dining experiences.",
          "en-US": "This Crystal Drinking Glass is made of high-quality, lead-free crystal glass that is thin and delicate, yet strong and durable. The crystal material of the highball glass enhances the appearance of the drink, making it appear more sparkling and colorful. It also enhances the aroma and flavor of the drink, allowing the drinker to fully appreciate the complexity of the ingredients.  The design of the glass is intended to accommodate the addition of ice, soda, or other mixers, while still leaving plenty of room for the drink itself. The wide mouth of the glass allows the drinker to smell the aroma of the drink, while the straight sides and smooth surface make it easy to sip and enjoy.  The crystal highball glass is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the crystal highball glass is a stylish and elegant piece of glassware that is perfect for serving tall, mixed drinks. Its delicate crystal material and intricate design make it a popular choice for special occasions and fine dining experiences.",
          "fr": undefined,
        },
        "key": "crystal-drinking-glass",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Das Set enthält 6 Gläser",
                "en-GB": "- Set includes 6 glasses",
                "en-US": "- Set includes 6 glasses",
              },
            },
            {
              "name": "search-color",
              "value": [
                "transparent",
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Transparent",
                "en-GB": "Transparent",
                "en-US": "Transparent",
              },
            },
            {
              "name": "color-code",
              "value": "transparent",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3000,
                "w": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Crystal_Drinking_Glass-1.1.jpeg",
            },
          ],
          "key": "crystalDrinkingGlass01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3499EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3499,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3499GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3499,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3499USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3499,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CDG-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kristall-Glas",
          "en": undefined,
          "en-GB": "Crystal Drinking Glass",
          "en-US": "Crystal Drinking Glass",
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
          "de-DE": "kristall-trinkglas",
          "en": undefined,
          "en-GB": "crystal-drinking-glass",
          "en-US": "crystal-drinking-glass",
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
