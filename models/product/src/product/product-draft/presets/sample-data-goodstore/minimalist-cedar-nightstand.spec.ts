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
          "de-DE": "Der minimalistische Nachttisch aus Zedernholz wurde entwickelt, um eine einfache und funktionale Oberfläche für die Platzierung von Gegenständen neben einem Bett zu bieten. Der Nachttisch verfügt über ein klares und schlankes Design mit minimalen dekorativen Elementen, die der minimalistischen Ästhetik entsprechen.  Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Haltbarkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz wird mit einer leichten Beize oder einer klaren Beschichtung versehen, um die natürliche Schönheit des Holzes hervorzuheben.  Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionale Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design ergänzt eine Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur.",
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
              "name": "finishlabel",
              "value": {
                "de-DE": "Zeder",
                "en-GB": "Cedar",
                "en-US": "Cedar",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#808080",
                "label": {
                  "de-DE": "Grau",
                  "en-GB": "Gray",
                  "en-US": "Gray",
                },
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#8C9585",
                "en-GB": "#8C9585",
                "en-US": "#8C9585",
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
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428984-nJKPXWcM.jpeg",
            },
            {
              "dimensions": {
                "h": 6016,
                "w": 4011,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428985-2CMGhCT8.jpeg",
            },
            {
              "dimensions": {
                "h": 6016,
                "w": 4011,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532429244-e0M2rOCa.jpeg",
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
              "key": undefined,
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
              "key": undefined,
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
          "de-DE": "Minimalistischer Nachttisch aus Zedernholz",
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
        "categories": [
          {
            "__typename": "Reference",
            "key": "tables",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "collections",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "the-minimalist",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Der minimalistische Nachttisch aus Zedernholz wurde entwickelt, um eine einfache und funktionale Oberfläche für die Platzierung von Gegenständen neben einem Bett zu bieten. Der Nachttisch verfügt über ein klares und schlankes Design mit minimalen dekorativen Elementen, die der minimalistischen Ästhetik entsprechen.  Der Nachttisch ist aus natürlichem Zedernholz gefertigt, das für seine Haltbarkeit, Fäulnisbeständigkeit und attraktive Maserung bekannt ist. Das Holz wird mit einer leichten Beize oder einer klaren Beschichtung versehen, um die natürliche Schönheit des Holzes hervorzuheben.  Insgesamt ist ein minimalistischer Nachttisch aus Zedernholz eine stilvolle und funktionale Ergänzung für jedes Schlafzimmer. Sein klares und einfaches Design ergänzt eine Vielzahl von Einrichtungsstilen, und die natürliche Schönheit des Zedernholzes verleiht dem Raum Wärme und Textur.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "The minimalist cedar nightstand is designed to provide a simple and functional surface for placing items next to a bed. The nightstand features a clean and sleek design with minimal decorative elements, in keeping with the minimalist aesthetic.  The nightstand is made from natural cedar wood, which is known for its durability, resistance to decay, and attractive grain patterns. The wood is finished with a light stain or clear coating to bring out the natural beauty of the wood.  Overall, a minimalist cedar nightstand is a stylish and functional addition to any bedroom. Its clean and simple design complements a variety of decor styles, and the natural beauty of the cedar wood adds warmth and texture to the space.",
          },
        ],
        "key": "minimalist-cedar-nightstand",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Cedar","de-DE":"Zeder","en-US":"Cedar"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#8C9585","de-DE":"#8C9585","en-US":"#8C9585"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 6016,
                "width": 4011,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428984-nJKPXWcM.jpeg",
            },
            {
              "dimensions": {
                "height": 6016,
                "width": 4011,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532428985-2CMGhCT8.jpeg",
            },
            {
              "dimensions": {
                "height": 6016,
                "width": 4011,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_532429244-e0M2rOCa.jpeg",
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
              "key": undefined,
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
              "key": undefined,
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
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Minimalist Cedar Nightstand",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Minimalistischer Nachttisch aus Zedernholz",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Minimalist Cedar Nightstand",
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
            "locale": "en-GB",
            "value": "minimalist-cedar-nightstand",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "minimalistischer-nachttisch-aus-zedernholz",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "minimalist-cedar-nightstand",
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
