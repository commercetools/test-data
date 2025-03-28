import type { TProductDraft } from '../../../types';
import harmonyDrinkingGlass from './harmony-drinking-glass';

describe(`with harmonyDrinkingGlass preset`, () => {
  it(`should return a harmonyDrinkingGlass preset`, () => {
    const harmonyDrinkingGlassPreset =
      harmonyDrinkingGlass().build<TProductDraft>();
    expect(harmonyDrinkingGlassPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Das Trinkglas Harmonie wurde entwickelt, um Wasser oder andere Getränke zu servieren. Es hat eine Kapazität von etwa 230 bis 350ml. Das Design des Wasserglases soll das Halten und Trinken einfach und bequem machen. Es hat einen geraden Körper mit glatten Seiten und einer dicken, stabilen Basis, die für Gleichgewicht und Stabilität sorgt. Der Rand des Glases ist leicht gewölbt oder abgerundet, was das Trinken angenehm macht. Das Trinkglas Harmonie kann für eine Vielzahl von Getränken verwendet werden, darunter Wasser, Saft, Eistee und andere alkoholfreie Getränke. Die Trinkgläser sind im Allgemeinen leicht zu reinigen und zu pflegen. Sie können von Hand oder in der Spülmaschine gewaschen werden und sollten gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden. Insgesamt ist das Harmonie Trinkglas ein schlichter und funktionaler Trinkglastyp, der sich ideal für den täglichen Gebrauch eignet. Sein einfaches Design und seine Vielseitigkeit machen es zu einer beliebten Wahl für lässige und formelle Anlässe.",
          "en": undefined,
          "en-GB": "The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.",
          "en-US": "The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.",
          "fr": undefined,
        },
        "key": "harmony-drinking-glass",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 3000,
                "w": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Harmony_Drinking_Glass-1.1.jpeg",
            },
          ],
          "key": "harmonyDrinkingGlass01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2499EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2499,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2499GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2499,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599GBP_dist",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2599,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2499USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2499,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "HDG-02",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Harmonie Trinkglas",
          "en": undefined,
          "en-GB": "Harmony Drinking Glass",
          "en-US": "Harmony Drinking Glass",
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
          "de-DE": "harmonie-trinkglas",
          "en": undefined,
          "en-GB": "harmony-drinking-glass",
          "en-US": "harmony-drinking-glass",
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

  it(`should return a harmonyDrinkingGlass preset when built for graphql`, () => {
    const harmonyDrinkingGlassPresetGraphql =
      harmonyDrinkingGlass().buildGraphql<TProductDraft>();
    expect(harmonyDrinkingGlassPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.",
          },
          {
            "locale": "en-US",
            "value": "The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.",
          },
          {
            "locale": "de-DE",
            "value": "Das Trinkglas Harmonie wurde entwickelt, um Wasser oder andere Getränke zu servieren. Es hat eine Kapazität von etwa 230 bis 350ml. Das Design des Wasserglases soll das Halten und Trinken einfach und bequem machen. Es hat einen geraden Körper mit glatten Seiten und einer dicken, stabilen Basis, die für Gleichgewicht und Stabilität sorgt. Der Rand des Glases ist leicht gewölbt oder abgerundet, was das Trinken angenehm macht. Das Trinkglas Harmonie kann für eine Vielzahl von Getränken verwendet werden, darunter Wasser, Saft, Eistee und andere alkoholfreie Getränke. Die Trinkgläser sind im Allgemeinen leicht zu reinigen und zu pflegen. Sie können von Hand oder in der Spülmaschine gewaschen werden und sollten gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden. Insgesamt ist das Harmonie Trinkglas ein schlichter und funktionaler Trinkglastyp, der sich ideal für den täglichen Gebrauch eignet. Sein einfaches Design und seine Vielseitigkeit machen es zu einer beliebten Wahl für lässige und formelle Anlässe.",
          },
        ],
        "key": "harmony-drinking-glass",
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
          ],
          "images": [
            {
              "dimensions": {
                "height": 3000,
                "width": 3000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Harmony_Drinking_Glass-1.1.jpeg",
            },
          ],
          "key": "harmonyDrinkingGlass01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2499EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2499,
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
              "key": "2499GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2499,
                  "currencyCode": "GBP",
                },
              },
            },
            {
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599GBP_dist",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2599,
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
              "key": "2499USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2499,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "HDG-02",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Harmony Drinking Glass",
          },
          {
            "locale": "en-GB",
            "value": "Harmony Drinking Glass",
          },
          {
            "locale": "de-DE",
            "value": "Harmonie Trinkglas",
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
            "value": "harmony-drinking-glass",
          },
          {
            "locale": "en-GB",
            "value": "harmony-drinking-glass",
          },
          {
            "locale": "de-DE",
            "value": "harmonie-trinkglas",
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
