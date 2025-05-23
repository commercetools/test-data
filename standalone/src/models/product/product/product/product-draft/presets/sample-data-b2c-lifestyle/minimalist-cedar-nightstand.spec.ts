import type { TProductDraft } from '../../../types';
import minimalistCedarNightstand from './minimalist-cedar-nightstand';

describe(`with minimalistCedarNightstand preset`, () => {
  it(`should return a minimalistCedarNightstand preset`, () => {
    const minimalistCedarNightstandPreset =
      minimalistCedarNightstand().build<TProductDraft>();
    expect(minimalistCedarNightstandPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "tables",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-minimalist",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Der minimalistische Nachttisch aus Zedernholz bietet eine einfache und funktionelle Ablagefläche für Gegenstände neben dem Bett. Der Nachttisch zeichnet sich durch ein klares und schlichtes Design mit minimalen dekorativen Elementen aus, ganz im Sinne der minimalistischen Ästhetik. Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Langlebigkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz ist mit einer hellen Beize oder einem Klarlack behandelt, um die natürliche Schönheit des Holzes hervorzuheben. Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionelle Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design passt zu einer Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur.",
          "en": undefined,
          "en-GB": "The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.",
          "en-US": "The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.",
          "fr": undefined,
        },
        "key": "minimalist-cedar-nightstand",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "finish",
              "value": {
                "de-DE": "Gainsboro:#dcdcdc",
                "en-GB": "Gainsboro:#dcdcdc",
                "en-US": "Gainsboro:#dcdcdc",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 6016,
                "w": 4011,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.3.jpeg",
            },
            {
              "dimensions": {
                "h": 6016,
                "w": 4011,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 6016,
                "w": 4011,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.2.jpeg",
            },
          ],
          "key": "minimalistCedarNightstand01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "7900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 7900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "7900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 7900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "7900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 7900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "CNS-0434",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Minimalistischer Zedernholz Nachttisch",
          "en": undefined,
          "en-GB": "Minimalist Cedar Nightstand",
          "en-US": "Minimalist Cedar Nightstand",
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
          "de-DE": "minimalistischer-nachttisch-aus-zedernholz",
          "en": undefined,
          "en-GB": "minimalist-cedar-nightstand",
          "en-US": "minimalist-cedar-nightstand",
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

  it(`should return a minimalistCedarNightstand preset when built for graphql`, () => {
    const minimalistCedarNightstandPresetGraphql =
      minimalistCedarNightstand().buildGraphql<TProductDraft>();
    expect(minimalistCedarNightstandPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "tables",
            "typeId": "category",
          },
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-minimalist",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.",
          },
          {
            "locale": "de-DE",
            "value": "Der minimalistische Nachttisch aus Zedernholz bietet eine einfache und funktionelle Ablagefläche für Gegenstände neben dem Bett. Der Nachttisch zeichnet sich durch ein klares und schlichtes Design mit minimalen dekorativen Elementen aus, ganz im Sinne der minimalistischen Ästhetik. Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Langlebigkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz ist mit einer hellen Beize oder einem Klarlack behandelt, um die natürliche Schönheit des Holzes hervorzuheben. Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionelle Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design passt zu einer Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur.",
          },
          {
            "locale": "en-US",
            "value": "The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.",
          },
        ],
        "key": "minimalist-cedar-nightstand",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "finish",
              "value": "{"en-GB":"Gainsboro:#dcdcdc","de-DE":"Gainsboro:#dcdcdc","en-US":"Gainsboro:#dcdcdc"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 6016,
                "width": 4011,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.3.jpeg",
            },
            {
              "dimensions": {
                "height": 6016,
                "width": 4011,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 6016,
                "width": 4011,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.2.jpeg",
            },
          ],
          "key": "minimalistCedarNightstand01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "7900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 7900,
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
              "key": "7900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 7900,
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
              "key": "7900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 7900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "CNS-0434",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Minimalist Cedar Nightstand",
          },
          {
            "locale": "de-DE",
            "value": "Minimalistischer Zedernholz Nachttisch",
          },
          {
            "locale": "en-US",
            "value": "Minimalist Cedar Nightstand",
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
            "locale": "en-GB",
            "value": "minimalist-cedar-nightstand",
          },
          {
            "locale": "de-DE",
            "value": "minimalistischer-nachttisch-aus-zedernholz",
          },
          {
            "locale": "en-US",
            "value": "minimalist-cedar-nightstand",
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
