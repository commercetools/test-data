import type { TProductDraft } from '../../../types';
import rusticOvenCasserole from './rustic-oven-casserole';

describe(`with rusticOvenCasserole preset`, () => {
  it(`should return a rusticOvenCasserole preset`, () => {
    const rusticOvenCasserolePreset =
      rusticOvenCasserole().build<TProductDraft>();
    expect(rusticOvenCasserolePreset).toMatchInlineSnapshot(`
      {
        "categories": [],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Die rustikale Keramik-Kasserolle eignet sich ideal zum Backen oder Braten von Aufläufen, Eintöpfen oder anderen Ofengerichten. Im traditionellen Stil gehalten, hat die Ofenform ein rustikales Aussehen, ist in erdigen Farben und mit strukturierter Oberfläche und unebenen Rändern gestaltet.  Die Dicke des Materials macht sie langlebig und temperaturfest, sodass Risse und Absplitterungen ausgeschlossen werden können. Das Material ist zudem so beständig, dass es nicht auf saure oder scharfe Speisen reagiert. Die Aromen der Gerichte bleiben somit jederzeit unverändert.  Das Design der Keramikform sorgt für rustikalen Charme in der Küche und im Essbereich. Besonders in der kalten Jahreszeit eignet sich die Ofenform außerdem ideal zum Servieren warmer und herzhafter Speisen.  Für die Reinigung der rustikalen Servierform empfiehlt es sich, sie nach vollständigem Abkühlen mit warmem Seifenwasser zu waschen. Sie sollte vor der Lagerung gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Eine rustikale Auflaufform aus Keramik ist ein praktisches und ästhetisch ansprechendes Kochgeschirr, das jeder Küche einen Hauch von Wärme und Charakter verleiht. Die robuste Machart und das klassische Design machen sie zum Must-have der Küchenausstattung für Hobbyköche und Köche gleichermaßen.",
          "en": undefined,
          "en-GB": "A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.",
          "en-US": "A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.",
          "fr": undefined,
        },
        "key": "rustic-oven-casserole",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Ohne Deckel",
                "en-GB": "- Does not include lid",
                "en-US": "- Does not include lid",
              },
            },
            {
              "name": "search-color",
              "value": "brown",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Peru",
                "en-GB": "Peru",
                "en-US": "Peru",
              },
            },
            {
              "name": "color-code",
              "value": "#CD853F",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3710,
                "w": 4746,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Oven_Casserole-1.1.jpeg",
            },
          ],
          "key": "rusticOvenCasserole01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2599,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599GBP",
              "recurrencePolicy": undefined,
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
              "key": "2599USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 2599,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RCC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Rustikale Auflaufform",
          "en": undefined,
          "en-GB": "Rustic Oven Casserole",
          "en-US": "Rustic Oven Casserole",
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
          "de-DE": "rustikaler-ofentopf",
          "en": undefined,
          "en-GB": "rustic-oven-casserole",
          "en-US": "rustic-oven-casserole",
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

  it(`should return a rusticOvenCasserole preset when built for graphql`, () => {
    const rusticOvenCasserolePresetGraphql =
      rusticOvenCasserole().buildGraphql<TProductDraft>();
    expect(rusticOvenCasserolePresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "de-DE",
            "value": "Die rustikale Keramik-Kasserolle eignet sich ideal zum Backen oder Braten von Aufläufen, Eintöpfen oder anderen Ofengerichten. Im traditionellen Stil gehalten, hat die Ofenform ein rustikales Aussehen, ist in erdigen Farben und mit strukturierter Oberfläche und unebenen Rändern gestaltet.  Die Dicke des Materials macht sie langlebig und temperaturfest, sodass Risse und Absplitterungen ausgeschlossen werden können. Das Material ist zudem so beständig, dass es nicht auf saure oder scharfe Speisen reagiert. Die Aromen der Gerichte bleiben somit jederzeit unverändert.  Das Design der Keramikform sorgt für rustikalen Charme in der Küche und im Essbereich. Besonders in der kalten Jahreszeit eignet sich die Ofenform außerdem ideal zum Servieren warmer und herzhafter Speisen.  Für die Reinigung der rustikalen Servierform empfiehlt es sich, sie nach vollständigem Abkühlen mit warmem Seifenwasser zu waschen. Sie sollte vor der Lagerung gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.  Eine rustikale Auflaufform aus Keramik ist ein praktisches und ästhetisch ansprechendes Kochgeschirr, das jeder Küche einen Hauch von Wärme und Charakter verleiht. Die robuste Machart und das klassische Design machen sie zum Must-have der Küchenausstattung für Hobbyköche und Köche gleichermaßen.",
          },
          {
            "locale": "en-GB",
            "value": "A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.",
          },
          {
            "locale": "en-US",
            "value": "A rustic ceramic oven casserole is a cooking dish made of ceramic that is designed to be used in the oven for baking or roasting casseroles, stews, or other dishes. It has a traditional and rustic look, often featuring earthy colors, textured surfaces, and uneven edges.  The ceramic material is thick and durable, allowing it to withstand high temperatures in the oven without cracking or chipping. It is also non-reactive, meaning it won't interact with acidic or spicy foods, ensuring that the flavors of the dish remain intact.  The rustic design of the ceramic oven casserole adds a touch of warmth and charm to the kitchen and dining area. It is perfect for serving hot and hearty meals, particularly during colder months.  To clean a rustic ceramic oven casserole, it is recommended to let it cool down after use before washing it with warm, soapy water. It should be dried thoroughly before storing to prevent any moisture from being trapped inside.  Overall, a rustic ceramic oven casserole is a practical and aesthetically pleasing cooking dish that adds a touch of warmth and character to any kitchen. Its sturdy construction and classic design make it a staple for home cooks and chefs alike.",
          },
        ],
        "key": "rustic-oven-casserole",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Does not include lid","en-US":"- Does not include lid","de-DE":"- Ohne Deckel"}",
            },
            {
              "name": "search-color",
              "value": ""brown"",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Peru","de-DE":"Peru","en-US":"Peru"}",
            },
            {
              "name": "color-code",
              "value": ""#CD853F"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3710,
                "width": 4746,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Oven_Casserole-1.1.jpeg",
            },
          ],
          "key": "rusticOvenCasserole01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "2599EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2599,
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
              "key": "2599GBP",
              "recurrencePolicy": undefined,
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
              "key": "2599USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 2599,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RCC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Rustic Oven Casserole",
          },
          {
            "locale": "en-GB",
            "value": "Rustic Oven Casserole",
          },
          {
            "locale": "de-DE",
            "value": "Rustikale Auflaufform",
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
            "value": "rustic-oven-casserole",
          },
          {
            "locale": "en-GB",
            "value": "rustic-oven-casserole",
          },
          {
            "locale": "de-DE",
            "value": "rustikaler-ofentopf",
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
