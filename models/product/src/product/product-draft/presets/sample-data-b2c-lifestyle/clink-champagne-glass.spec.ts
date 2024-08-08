import type { TProductDraft } from '../../../types';
import clinkChampagneGlass from './clink-champagne-glass';

describe(`with clinkChampagneGlass preset`, () => {
  it(`should return a clinkChampagneGlass preset`, () => {
    const clinkChampagneGlassPreset =
      clinkChampagneGlass().build<TProductDraft>();
    expect(clinkChampagneGlassPreset).toMatchInlineSnapshot(`
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
    "de-DE": "Ein konisches Champagnerglas, auch als Champagnerflöte bekannt, ist ein Glas, das speziell entwickelt wurde, um das Erlebnis beim Trinken von Champagner oder Sekt zu verbessern. Das Glas hat einen hohen, schmalen Kelch, der sich nach oben hin verjüngt - schauen Sie zu wie sich die Bläschen in Ihrem Glas tanzen. Der hohe, schlanke Stiel des Glases verhindert das Aufwärmen des Getränks durch Körperwärme. Die Basis des Glases ist breit und flach und sorgt für Stabilität und Balance.  Das Design des konisch zulaufenden Sektglases soll das Aroma und den Geschmack des Getränks verstärken. Der schmale Kelch konzentriert die Bläschen und das Aroma des Champagner. Dadurch können Sie den Geschmack des Champagners voll und ganz genießen.  Das konische Sektglas wird typischerweise zum Servieren von Sekt oder anderen Schaumweinen verwendet, kann aber auch für andere kohlensäurehaltige Getränke oder Cocktails verwendet werden. Es ist leicht zu reinigen und zu pflegen und kann von Hand oder in der Spülmaschine gewaschen werden.  Insgesamt ist das konische Champagnerglas ein stilvolles und elegantes Stielglas, das speziell entwickelt wurde, um das Erlebnis beim Trinken von Champagner oder Sekt zu verbessern. Sein einzigartiges Design und die Liebe zum Detail machen es zu einer beliebten Wahl für besondere Anlässe und Feiern.",
    "en": undefined,
    "en-GB": "A tapered champagne glass, also known as a champagne flute, is a type of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. The glass has a tall, narrow bowl that tapers towards the top, allowing the drinker to see the bubbles rising to the surface of the drink.  The tall, slender stem of the glass helps to keep the drinker's hand away from the bowl, preventing the champagne from being warmed by body heat. The base of the glass is typically wide and flat, providing stability and balance.  The design of the tapered champagne glass is intended to enhance the aroma and flavor of the drink. The narrow bowl concentrates the bubbles and the aroma of the champagne, directing it towards the drinker's nose. This allows the drinker to fully appreciate the aroma and flavor of the champagne.  The tapered champagne glass is typically used for serving champagne or other sparkling wines, but may also be used for other carbonated drinks or cocktails. It is easy to clean and maintain, and can be washed by hand or in a dishwasher.  Overall, the tapered champagne glass is a stylish and elegant piece of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. Its unique design and attention to detail make it a popular choice for special occasions and celebrations.",
    "en-US": "A tapered champagne glass, also known as a champagne flute, is a type of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. The glass has a tall, narrow bowl that tapers towards the top, allowing the drinker to see the bubbles rising to the surface of the drink.  The tall, slender stem of the glass helps to keep the drinker's hand away from the bowl, preventing the champagne from being warmed by body heat. The base of the glass is typically wide and flat, providing stability and balance.  The design of the tapered champagne glass is intended to enhance the aroma and flavor of the drink. The narrow bowl concentrates the bubbles and the aroma of the champagne, directing it towards the drinker's nose. This allows the drinker to fully appreciate the aroma and flavor of the champagne.  The tapered champagne glass is typically used for serving champagne or other sparkling wines, but may also be used for other carbonated drinks or cocktails. It is easy to clean and maintain, and can be washed by hand or in a dishwasher.  Overall, the tapered champagne glass is a stylish and elegant piece of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. Its unique design and attention to detail make it a popular choice for special occasions and celebrations.",
    "fr": undefined,
  },
  "key": "clink-champagne-glass",
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
        "name": "color",
        "value": {
          "de-DE": "Transparent:transparent",
          "en-GB": "Transparent:transparent",
          "en-US": "Transparent:transparent",
        },
      },
      {
        "name": "finish",
        "value": {
          "de-DE": "Glas:transparent",
          "en-GB": "Glass:transparent",
          "en-US": "Glass:transparent",
        },
      },
    ],
    "images": [
      {
        "dimensions": {
          "h": 3000,
          "w": 3000,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Clink_Champagne_Glass-1.1.jpeg",
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
          "centAmount": 5499,
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
          "centAmount": 5499,
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
          "centAmount": 5499,
          "currencyCode": "USD",
        },
      },
    ],
    "sku": "CCG-02",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Sektgläser zum Anstoßen",
    "en": undefined,
    "en-GB": "Clink Champagne Glass",
    "en-US": "Clink Champagne Glass",
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
    "de-DE": "sektglas-anstoen",
    "en": undefined,
    "en-GB": "clink-champagne-glass",
    "en-US": "clink-champagne-glass",
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

  it(`should return a clinkChampagneGlass preset when built for graphql`, () => {
    const clinkChampagneGlassPresetGraphql =
      clinkChampagneGlass().buildGraphql<TProductDraft>();
    expect(clinkChampagneGlassPresetGraphql).toMatchInlineSnapshot(`
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
  "description": [
    {
      "locale": "en-GB",
      "value": "A tapered champagne glass, also known as a champagne flute, is a type of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. The glass has a tall, narrow bowl that tapers towards the top, allowing the drinker to see the bubbles rising to the surface of the drink.  The tall, slender stem of the glass helps to keep the drinker's hand away from the bowl, preventing the champagne from being warmed by body heat. The base of the glass is typically wide and flat, providing stability and balance.  The design of the tapered champagne glass is intended to enhance the aroma and flavor of the drink. The narrow bowl concentrates the bubbles and the aroma of the champagne, directing it towards the drinker's nose. This allows the drinker to fully appreciate the aroma and flavor of the champagne.  The tapered champagne glass is typically used for serving champagne or other sparkling wines, but may also be used for other carbonated drinks or cocktails. It is easy to clean and maintain, and can be washed by hand or in a dishwasher.  Overall, the tapered champagne glass is a stylish and elegant piece of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. Its unique design and attention to detail make it a popular choice for special occasions and celebrations.",
    },
    {
      "locale": "en-US",
      "value": "A tapered champagne glass, also known as a champagne flute, is a type of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. The glass has a tall, narrow bowl that tapers towards the top, allowing the drinker to see the bubbles rising to the surface of the drink.  The tall, slender stem of the glass helps to keep the drinker's hand away from the bowl, preventing the champagne from being warmed by body heat. The base of the glass is typically wide and flat, providing stability and balance.  The design of the tapered champagne glass is intended to enhance the aroma and flavor of the drink. The narrow bowl concentrates the bubbles and the aroma of the champagne, directing it towards the drinker's nose. This allows the drinker to fully appreciate the aroma and flavor of the champagne.  The tapered champagne glass is typically used for serving champagne or other sparkling wines, but may also be used for other carbonated drinks or cocktails. It is easy to clean and maintain, and can be washed by hand or in a dishwasher.  Overall, the tapered champagne glass is a stylish and elegant piece of stemware that is specifically designed to enhance the experience of drinking champagne or sparkling wine. Its unique design and attention to detail make it a popular choice for special occasions and celebrations.",
    },
    {
      "locale": "de-DE",
      "value": "Ein konisches Champagnerglas, auch als Champagnerflöte bekannt, ist ein Glas, das speziell entwickelt wurde, um das Erlebnis beim Trinken von Champagner oder Sekt zu verbessern. Das Glas hat einen hohen, schmalen Kelch, der sich nach oben hin verjüngt - schauen Sie zu wie sich die Bläschen in Ihrem Glas tanzen. Der hohe, schlanke Stiel des Glases verhindert das Aufwärmen des Getränks durch Körperwärme. Die Basis des Glases ist breit und flach und sorgt für Stabilität und Balance.  Das Design des konisch zulaufenden Sektglases soll das Aroma und den Geschmack des Getränks verstärken. Der schmale Kelch konzentriert die Bläschen und das Aroma des Champagner. Dadurch können Sie den Geschmack des Champagners voll und ganz genießen.  Das konische Sektglas wird typischerweise zum Servieren von Sekt oder anderen Schaumweinen verwendet, kann aber auch für andere kohlensäurehaltige Getränke oder Cocktails verwendet werden. Es ist leicht zu reinigen und zu pflegen und kann von Hand oder in der Spülmaschine gewaschen werden.  Insgesamt ist das konische Champagnerglas ein stilvolles und elegantes Stielglas, das speziell entwickelt wurde, um das Erlebnis beim Trinken von Champagner oder Sekt zu verbessern. Sein einzigartiges Design und die Liebe zum Detail machen es zu einer beliebten Wahl für besondere Anlässe und Feiern.",
    },
  ],
  "key": "clink-champagne-glass",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": "{"en-GB":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser","en-US":"- Set includes 6 glasses"}",
      },
      {
        "name": "color",
        "value": "{"en-GB":"Transparent:transparent","de-DE":"Transparent:transparent","en-US":"Transparent:transparent"}",
      },
      {
        "name": "finish",
        "value": "{"en-GB":"Glass:transparent","de-DE":"Glas:transparent","en-US":"Glass:transparent"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 3000,
          "width": 3000,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Clink_Champagne_Glass-1.1.jpeg",
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
            "centAmount": 5499,
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
            "centAmount": 5499,
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
            "centAmount": 5499,
            "currencyCode": "USD",
          },
        },
      },
    ],
    "sku": "CCG-02",
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Clink Champagne Glass",
    },
    {
      "locale": "en-GB",
      "value": "Clink Champagne Glass",
    },
    {
      "locale": "de-DE",
      "value": "Sektgläser zum Anstoßen",
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
      "value": "clink-champagne-glass",
    },
    {
      "locale": "en-GB",
      "value": "clink-champagne-glass",
    },
    {
      "locale": "de-DE",
      "value": "sektglas-anstoen",
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
