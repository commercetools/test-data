import type { TProductDraft } from '../../../types';
import goldRimmedChampagneGlasses from './gold-rimmed-champagne-glasses';

describe(`with goldRimmedChampagneGlasses preset`, () => {
  it(`should return a goldRimmedChampagneGlasses preset`, () => {
    const goldRimmedChampagneGlassesPreset =
      goldRimmedChampagneGlasses().build<TProductDraft>();
    expect(goldRimmedChampagneGlassesPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "key": "glassware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Mit einem Set aus Champagner-Kristallgläsern mit Goldrand lässt sich auf luxuriöse und elegante Art Champagner oder Sekt servieren. Diese Gläser sind aus hochwertigem Kristall gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht, das die Blasen im Champagner wunderschön widerspiegelt.  Die Gläser verfügen über einen zarten und schlanken Stiel, der es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Die goldene Umrandung ist ein Detail, das dem Design einen zusätzlichen Hauch von Luxus und Raffinesse und den Gläsern damit ein glamouröses und opulentes Aussehen verleiht. Insgesamt ist das Set aus Champagner-Kristallgläsern mit Goldrand eine atemberaubende und luxuriöse Ergänzung für jede Hausbar oder Unterhaltungssammlung. Das elegante und zeitlose Design, kombiniert mit hochwertigen Materialien und aufwendigen Details, macht es zur perfekten Wahl, um die besonderen Momente des Lebens stilvoll zu feiern.",
          "en": undefined,
          "en-GB": "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.  The glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.  Overall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.",
          "en-US": "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.  The glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.  Overall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.",
          "fr": undefined,
        },
        "key": "gold-rimmed-champagne-glasses",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Set mit 5 Gläsern
      - Importierter Kristall
      - Goldpolitur an den Felgen",
                "en-GB": "- Set of 5 glasses
      - Imported crystal
      - Gold polish on the rims",
                "en-US": "- Set of 5 glasses
      - Imported crystal
      - Gold polish on the rims",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3288,
                "w": 2192,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 4113,
                "w": 5143,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 3435,
                "w": 6869,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.4.jpeg",
            },
            {
              "dimensions": {
                "h": 5077,
                "w": 8080,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.3.jpeg",
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
                "centAmount": 3000,
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
                "centAmount": 3000,
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
                "centAmount": 3000,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "GRCG-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Champagnergläser mit Goldrand",
          "en": undefined,
          "en-GB": "Gold Rimmed Champagne Glasses",
          "en-US": "Gold Rimmed Champagne Glasses",
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
          "de-DE": "champagnerglser-mit-goldrand",
          "en": undefined,
          "en-GB": "gold-rimmed-champagne-glasses",
          "en-US": "gold-rimmed-champagne-glasses",
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

  it(`should return a goldRimmedChampagneGlasses preset when built for graphql`, () => {
    const goldRimmedChampagneGlassesPresetGraphql =
      goldRimmedChampagneGlasses().buildGraphql<TProductDraft>();
    expect(goldRimmedChampagneGlassesPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "kitchen",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "bar-and-glassware",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "glassware",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.  The glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.  Overall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.  The glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.  Overall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Mit einem Set aus Champagner-Kristallgläsern mit Goldrand lässt sich auf luxuriöse und elegante Art Champagner oder Sekt servieren. Diese Gläser sind aus hochwertigem Kristall gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht, das die Blasen im Champagner wunderschön widerspiegelt.  Die Gläser verfügen über einen zarten und schlanken Stiel, der es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Die goldene Umrandung ist ein Detail, das dem Design einen zusätzlichen Hauch von Luxus und Raffinesse und den Gläsern damit ein glamouröses und opulentes Aussehen verleiht. Insgesamt ist das Set aus Champagner-Kristallgläsern mit Goldrand eine atemberaubende und luxuriöse Ergänzung für jede Hausbar oder Unterhaltungssammlung. Das elegante und zeitlose Design, kombiniert mit hochwertigen Materialien und aufwendigen Details, macht es zur perfekten Wahl, um die besonderen Momente des Lebens stilvoll zu feiern.",
          },
        ],
        "key": "gold-rimmed-champagne-glasses",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Set of 5 glasses\\n- Imported crystal\\n- Gold polish on the rims","de-DE":"- Set mit 5 Gläsern\\n- Importierter Kristall\\n- Goldpolitur an den Felgen","en-US":"- Set of 5 glasses\\n- Imported crystal\\n- Gold polish on the rims"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3288,
                "width": 2192,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 4113,
                "width": 5143,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 3435,
                "width": 6869,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.4.jpeg",
            },
            {
              "dimensions": {
                "height": 5077,
                "width": 8080,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.3.jpeg",
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
                  "centAmount": 3000,
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
                  "centAmount": 3000,
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
                  "centAmount": 3000,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "GRCG-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Gold Rimmed Champagne Glasses",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Gold Rimmed Champagne Glasses",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Champagnergläser mit Goldrand",
          },
        ],
        "priceMode": undefined,
        "productType": {
          "__typename": "Reference",
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "gold-rimmed-champagne-glasses",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "gold-rimmed-champagne-glasses",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "champagnerglser-mit-goldrand",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
