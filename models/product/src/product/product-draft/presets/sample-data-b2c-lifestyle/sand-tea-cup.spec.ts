import type { TProductDraft } from '../../../types';
import sandTeaCup from './sand-tea-cup';

describe(`with sandTeaCup preset`, () => {
  it(`should return a sandTeaCup preset`, () => {
    const sandTeaCupPreset = sandTeaCup().build<TProductDraft>();
    expect(sandTeaCupPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Die sandfarbene Tasse ist mit ihrer zylindrischen oder leicht konischen Form und einem Fassungsvermögen von etwa 8 bis 16 Unzen das ideale Trinkgefäß für jeden Tee- oder Kaffeeliebhaber.  Der Keramikbecher hat glatte Seiten und eine breite Öffnung, die das Eingießen und den Genuss von Kaffee oder Tee erleichtern.  Der Henkel der Tasse ist so konzipiert, dass er für jede Handgröße angenehm zu greifen ist und bequem in der Hand liegt. Der Boden des Henkeltasse ist flach und stabil, um ein Umkippen und Verschütten zu verhindern.  Die hellbraune Teetasse ist leicht zu reinigen und zu pflegen. Sie kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Die Tasse ist ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Genuss von Heißgetränken Zuhause oder auf der Arbeit eignet. Die neutrale Farbe und das schlichte Design machen sie zu einer beliebten Wahl für alle Tee- und Kaffeeliebhaber, die einen klassischen und minimalistischen Look bevorzugen.",
          "en": undefined,
          "en-GB": "The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.",
          "en-US": "The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.",
          "fr": undefined,
        },
        "key": "sand-tea-cup",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Enthält 1 Tasse",
                "en-GB": "- Includes 1 mug",
                "en-US": "- Includes 1 mug",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Sand:#C2B280",
                "en-GB": "Sand:#C2B280",
                "en-US": "Sand:#C2B280",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4020,
                "w": 6046,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sand_Tea_Cup-1.1.jpeg",
            },
          ],
          "key": "sandTeaCup01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "STM-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sandfarbene Tasse",
          "en": undefined,
          "en-GB": "Sand Tea Cup",
          "en-US": "Sand Tea Cup",
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
          "de-DE": "sand-teetasse",
          "en": undefined,
          "en-GB": "sand-tea-cup",
          "en-US": "sand-tea-cup",
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

  it(`should return a sandTeaCup preset when built for graphql`, () => {
    const sandTeaCupPresetGraphql = sandTeaCup().buildGraphql<TProductDraft>();
    expect(sandTeaCupPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.",
          },
          {
            "locale": "en-US",
            "value": "The Sand Tea Cup is a type of drinking vessel that is designed to hold and serve tea and/or coffee. It has a cylindrical or slightly tapered shape, with a capacity of around 8 to 16 ounces, and is a light brownish color.  The mug is made of ceramic. The body of the mug is smooth-sided, with a wide opening that makes it easy to pour and drink coffee or tea.  The handle of the mug is designed to be easy to grip, with a comfortable shape and a size that fits most hands. The bottom of the mug is typically flat, with a stable base that helps to prevent tipping and spilling.  The Sand Tea Cup is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.  Overall, this mug is a practical and functional type of drinking vessel that is ideal for enjoying a hot drink at home or at work. Its neutral color and simple design make it a popular choice for coffee lovers who prefer a classic and understated look.",
          },
          {
            "locale": "de-DE",
            "value": "Die sandfarbene Tasse ist mit ihrer zylindrischen oder leicht konischen Form und einem Fassungsvermögen von etwa 8 bis 16 Unzen das ideale Trinkgefäß für jeden Tee- oder Kaffeeliebhaber.  Der Keramikbecher hat glatte Seiten und eine breite Öffnung, die das Eingießen und den Genuss von Kaffee oder Tee erleichtern.  Der Henkel der Tasse ist so konzipiert, dass er für jede Handgröße angenehm zu greifen ist und bequem in der Hand liegt. Der Boden des Henkeltasse ist flach und stabil, um ein Umkippen und Verschütten zu verhindern.  Die hellbraune Teetasse ist leicht zu reinigen und zu pflegen. Sie kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.  Die Tasse ist ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Genuss von Heißgetränken Zuhause oder auf der Arbeit eignet. Die neutrale Farbe und das schlichte Design machen sie zu einer beliebten Wahl für alle Tee- und Kaffeeliebhaber, die einen klassischen und minimalistischen Look bevorzugen.",
          },
        ],
        "key": "sand-tea-cup",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Includes 1 mug","en-US":"- Includes 1 mug","de-DE":"- Enthält 1 Tasse"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Sand:#C2B280","de-DE":"Sand:#C2B280","en-US":"Sand:#C2B280"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4020,
                "width": 6046,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sand_Tea_Cup-1.1.jpeg",
            },
          ],
          "key": "sandTeaCup01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
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
              "key": "299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
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
              "key": "299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "STM-09",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Sand Tea Cup",
          },
          {
            "locale": "en-GB",
            "value": "Sand Tea Cup",
          },
          {
            "locale": "de-DE",
            "value": "Sandfarbene Tasse",
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
            "value": "sand-tea-cup",
          },
          {
            "locale": "en-GB",
            "value": "sand-tea-cup",
          },
          {
            "locale": "de-DE",
            "value": "sand-teetasse",
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
