import type { TProductVariantDraft } from '../../../types';
import harmonyDrinkingGlass01 from './harmony-drinking-glass-01';

describe(`with harmonyDrinkingGlass01 preset`, () => {
  it(`should return a harmonyDrinkingGlass01 preset`, () => {
    const harmonyDrinkingGlass01Preset =
      harmonyDrinkingGlass01().build<TProductVariantDraft>();
    expect(harmonyDrinkingGlass01Preset).toMatchInlineSnapshot(`
      {
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
            "name": "product-description",
            "value": {
              "de-DE": "Das Trinkglas Harmonie wurde entwickelt, um Wasser oder andere Getränke zu servieren. Es hat eine Kapazität von etwa 230 bis 350ml. Das Design des Wasserglases soll das Halten und Trinken einfach und bequem machen. Es hat einen geraden Körper mit glatten Seiten und einer dicken, stabilen Basis, die für Gleichgewicht und Stabilität sorgt. Der Rand des Glases ist leicht gewölbt oder abgerundet, was das Trinken angenehm macht. Das Trinkglas Harmonie kann für eine Vielzahl von Getränken verwendet werden, darunter Wasser, Saft, Eistee und andere alkoholfreie Getränke. Die Trinkgläser sind im Allgemeinen leicht zu reinigen und zu pflegen. Sie können von Hand oder in der Spülmaschine gewaschen werden und sollten gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden. Insgesamt ist das Harmonie Trinkglas ein schlichter und funktionaler Trinkglastyp, der sich ideal für den täglichen Gebrauch eignet. Sein einfaches Design und seine Vielseitigkeit machen es zu einer beliebten Wahl für lässige und formelle Anlässe.",
              "en-GB": "The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.",
              "en-US": "The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Harmony%20Drinking%20Gla-5OspWt5l.jpeg",
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
            "key": undefined,
            "tiers": undefined,
            "validFrom": undefined,
            "validUntil": undefined,
            "value": {
              "centAmount": 2499,
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
              "centAmount": 2499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "HDG-02",
      }
    `);
  });

  it(`should return a harmonyDrinkingGlass01 preset when built for graphql`, () => {
    const harmonyDrinkingGlass01PresetGraphql =
      harmonyDrinkingGlass01().buildGraphql<TProductVariantDraft>();
    expect(harmonyDrinkingGlass01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": "{"en-GB":"- Set includes 6 glasses","de-DE":"- Das Set enthält 6 Gläser","en-US":"- Set includes 6 glasses"}",
          },
          {
            "name": "product-description",
            "value": "{"en-GB":"The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.","en-US":"The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.  The design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.  The Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.  The drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.","de-DE":"Das Trinkglas Harmonie wurde entwickelt, um Wasser oder andere Getränke zu servieren. Es hat eine Kapazität von etwa 230 bis 350ml. Das Design des Wasserglases soll das Halten und Trinken einfach und bequem machen. Es hat einen geraden Körper mit glatten Seiten und einer dicken, stabilen Basis, die für Gleichgewicht und Stabilität sorgt. Der Rand des Glases ist leicht gewölbt oder abgerundet, was das Trinken angenehm macht. Das Trinkglas Harmonie kann für eine Vielzahl von Getränken verwendet werden, darunter Wasser, Saft, Eistee und andere alkoholfreie Getränke. Die Trinkgläser sind im Allgemeinen leicht zu reinigen und zu pflegen. Sie können von Hand oder in der Spülmaschine gewaschen werden und sollten gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden. Insgesamt ist das Harmonie Trinkglas ein schlichter und funktionaler Trinkglastyp, der sich ideal für den täglichen Gebrauch eignet. Sein einfaches Design und seine Vielseitigkeit machen es zu einer beliebten Wahl für lässige und formelle Anlässe."}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3000,
              "width": 3000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Harmony%20Drinking%20Gla-5OspWt5l.jpeg",
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
            "key": undefined,
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
                "centAmount": 2499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "HDG-02",
      }
    `);
  });
});
