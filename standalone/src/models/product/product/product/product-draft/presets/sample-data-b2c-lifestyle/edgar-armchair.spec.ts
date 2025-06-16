import type { TProductDraft } from '../../../types';
import edgarArmchair from './edgar-armchair';
describe(`with edgarArmchair preset`, () => {
  it('should return a sample edgarArmchair product preset', () => {
    const edgarArmchairPreset = edgarArmchair().build<TProductDraft>();
    expect(edgarArmchairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Sessel im abstrakten modernen Stil mit Metallbeinen ist ein einzigartiges Möbelstück, das jedem Raum einen Hauch von Raffinesse verleiht. Der Stuhl ist mit klaren Linien und einem schlanken Profil gestaltet und verfügt über einen niedrigen, breiten Sitz und eine hohe Rückenlehne, die sich sanft um die Seiten des Stuhls krümmt. Der Sitz und die Rückenlehne sind mit einem strukturierten, strapazierfähigen Stoff bezogen, der dem klassischen Sesseldesign eine zeitgemäße Note verleiht. Die Metallbeine sind dünn und konisch zulaufend und bilden eine filigrane und dennoch stabile Basis für den Stuhl. Insgesamt ist dieser Sessel eine perfekte Mischung aus Stil und Komfort, was ihn zu einer großartigen Ergänzung für jeden modernen Wohnraum macht.",
          "en": undefined,
          "en-GB": "An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.",
          "en-US": "An abstract modern style armchair with metal legs is a unique piece of furniture that would add a touch of sophistication to any room. The chair is designed with clean lines and a sleek profile, featuring a low, wide seat and a tall backrest that curves gently around the sides of the chair. The seat and backrest are upholstered in a textured, durable fabric, which adds a contemporary edge to the classic armchair design. The metal legs are thin and tapered, providing a delicate yet sturdy base for the chair. Overall, this armchair is a perfect blend of style and comfort, making it a great addition to any modern living space.",
          "fr": undefined,
        },
        "key": "edgar-armchair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Montage bei Lieferung",
                "en-GB": "- Assembly on delivery",
                "en-US": "- Assembly on delivery",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Grün",
                  "en-GB": "Green",
                  "en-US": "Green",
                },
              ],
            },
            {
              "name": "search-finish",
              "value": [
                {
                  "de-DE": "Schwarz",
                  "en-GB": "Black",
                  "en-US": "Black",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Helles Oliv",
                "en-GB": "Light Olive",
                "en-US": "Light Olive",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Schwarz",
                "en-GB": "Black",
                "en-US": "Black",
              },
            },
            {
              "name": "color-code",
              "value": "#BAB86C",
            },
            {
              "name": "finish-code",
              "value": "#000000",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Edgar_Armchair-1.1.jpeg",
            },
          ],
          "key": "edgarArmchair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "129900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 129900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "129900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 129900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "129900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "EARM-04",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Sessel "Edgar"",
          "en": undefined,
          "en-GB": "Edgar Armchair",
          "en-US": "Edgar Armchair",
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
          "de-DE": "edgar-sessel",
          "en": undefined,
          "en-GB": "edgar-armchair",
          "en-US": "edgar-armchair",
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
