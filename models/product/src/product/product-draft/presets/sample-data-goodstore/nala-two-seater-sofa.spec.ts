import type { TProductDraft } from '../../../types';
import nalaTwoSeaterSofa from './nala-two-seater-sofa';

describe(`with nalaTwoSeaterSofa preset`, () => {
  it(`should return a nalaTwoSeaterSofa preset`, () => {
    const nalaTwoSeaterSofaPreset = nalaTwoSeaterSofa().build<TProductDraft>();
    expect(nalaTwoSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieses moderne 2-Sitzer-Sofa ist eine stilvolle und komfortable Ergänzung für jeden Wohnbereich. Das Sofa hat ein schlichtes und minimalistisches Design mit klaren Linien und einer zeitgenössischen Ästhetik. Es ist mit einem hochwertigen Baumwollstoff gepolstert, der sich weich anfühlt und leicht zu reinigen ist. Die beiden Sitzkissen sind weich und stützend und bieten einen bequemen Platz zum Sitzen und Entspannen. Die Rückenlehne ist gut gepolstert und stützt den Rücken, während die Armlehnen sanft geschwungen sind, um ein bequemes und entspanntes Gefühl zu vermitteln. Das Gestell des Sofas ist aus robustem Holz oder Metall gefertigt, so dass es viele Jahre halten wird. Mit seinem modernen und minimalistischen Stil fügt sich dieses Sofa nahtlos in jede moderne Einrichtung ein, während die bequeme und hochwertige Polsterung es zu einem großartigen Ort zum Entspannen und Relaxen macht.",
          "en": undefined,
          "en-GB": "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind.",
          "en-US": "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind.",
          "fr": undefined,
        },
        "key": "nala-two-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "de-DE": "#5B5858",
                "en-GB": "#5B5858",
                "en-US": "#5B5858",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#090909",
                "en-GB": "#090909",
                "en-US": "#090909",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Stahlgrau",
                "en-GB": "Steel Gray",
                "en-US": "Steel Gray",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Ebenholz",
                "en-GB": "Ebony",
                "en-US": "Ebony",
              },
            },
            {
              "name": "new-arrival",
              "value": true,
            },
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
                "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
                "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 3376,
                "w": 6000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969001-vPDGxuEM.jpeg",
            },
            {
              "dimensions": {
                "h": 3376,
                "w": 6000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286520-Il0fLxCr.jpeg",
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
              "key": undefined,
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
              "key": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 129900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "NTSS-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Nala Zweisitzer-Sofa",
          "en": undefined,
          "en-GB": "Nala Two-Seater Sofa",
          "en-US": "Nala Two-Seater Sofa",
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
          "de-DE": "nala-zweisitzer-sofa",
          "en": undefined,
          "en-GB": "nala-two-seater-sofa",
          "en-US": "nala-two-seater-sofa",
          "fr": undefined,
        },
        "state": undefined,
        "taxCategory": {
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": {
                  "de-DE": "#335EB7",
                  "en-GB": "#335EB7",
                  "en-US": "#335EB7",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Königsblau",
                  "en-GB": "Royal Blue",
                  "en-US": "Royal Blue",
                },
              },
              {
                "name": "finishlabel",
                "value": {
                  "de-DE": "Ebenholz",
                  "en-GB": "Ebony",
                  "en-US": "Ebony",
                },
              },
              {
                "name": "new-arrival",
                "value": true,
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "#090909",
                  "en-GB": "#090909",
                  "en-US": "#090909",
                },
              },
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
                  "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
                  "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#0000FF",
                  "label": {
                    "de-DE": "Blau",
                    "en-GB": "Blue",
                    "en-US": "Blue",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969217-cd3PFq1G.jpeg",
              },
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566285321-BTEIw6qM.jpeg",
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
                "key": undefined,
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
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "NTSS-02",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": {
                  "de-DE": "#B13704",
                  "en-GB": "#B13704",
                  "en-US": "#B13704",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Terrakotta",
                  "en-GB": "Terracotta",
                  "en-US": "Terracotta",
                },
              },
              {
                "name": "finishlabel",
                "value": {
                  "de-DE": "Ebenholz",
                  "en-GB": "Ebony",
                  "en-US": "Ebony",
                },
              },
              {
                "name": "new-arrival",
                "value": true,
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "#090909",
                  "en-GB": "#090909",
                  "en-US": "#090909",
                },
              },
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
                  "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
                  "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#FFA500",
                  "label": {
                    "de-DE": "Orange",
                    "en-GB": "Orange",
                    "en-US": "Orange",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969241-aLftk1PS.jpeg",
              },
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566285394-z1exVK19.jpeg",
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
                "key": undefined,
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
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "NTSS-03",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": {
                  "de-DE": "#077D94",
                  "en-GB": "#077D94",
                  "en-US": "#077D94",
                },
              },
              {
                "name": "new-arrival",
                "value": true,
              },
              {
                "name": "finishlabel",
                "value": {
                  "de-DE": "Ebenholz",
                  "en-GB": "Ebony",
                  "en-US": "Ebony",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Pfauenblau",
                  "en-GB": "Peacock Blue",
                  "en-US": "Peacock Blue",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "#090909",
                  "en-GB": "#090909",
                  "en-US": "#090909",
                },
              },
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
                  "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
                  "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#0000FF",
                  "label": {
                    "de-DE": "Blau",
                    "en-GB": "Blue",
                    "en-US": "Blue",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969285-YwwoAWiR.jpeg",
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
                "key": undefined,
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
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "NTTS-04",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "finish",
                "value": {
                  "de-DE": "#090909",
                  "en-GB": "#090909",
                  "en-US": "#090909",
                },
              },
              {
                "name": "finishlabel",
                "value": {
                  "de-DE": "Ebenholz",
                  "en-GB": "Ebony",
                  "en-US": "Ebony",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Federgrau",
                  "en-GB": "Feather Gray",
                  "en-US": "Feather Gray",
                },
              },
              {
                "name": "new-arrival",
                "value": true,
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#EDEDED",
                  "en-GB": "#EDEDED",
                  "en-US": "#EDEDED",
                },
              },
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
                  "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
                  "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
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
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Grey-xp6LQN7S.jpeg",
              },
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286242-yDdr0FtS.jpeg",
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
                "key": undefined,
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
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "NTSS-05",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
                  "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
                  "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#96A789",
                  "en-GB": "#96A789",
                  "en-US": "#96A789",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Salbeigrün",
                  "en-GB": "Sage Green",
                  "en-US": "Sage Green",
                },
              },
              {
                "name": "finishlabel",
                "value": {
                  "de-DE": "Ebenholz",
                  "en-GB": "Ebony",
                  "en-US": "Ebony",
                },
              },
              {
                "name": "new-arrival",
                "value": true,
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "#090909",
                  "en-GB": "#090909",
                  "en-US": "#090909",
                },
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#00FF00",
                  "label": {
                    "de-DE": "Grün",
                    "en-GB": "Green",
                    "en-US": "Green",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sage-1KpTSqVS.jpeg",
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
                "key": undefined,
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
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "NTSS-06",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": {
                  "de-DE": "- Zweisitzer-Sofa
      - Polsterung aus Baumwollleinen",
                  "en-GB": "- Two-seater sofa
      - Cotton linen upholstery",
                  "en-US": "- Two-seater sofa
      - Cotton linen upholstery",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "#121312",
                  "en-GB": "#121312",
                  "en-US": "#121312",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "#090909",
                  "en-GB": "#090909",
                  "en-US": "#090909",
                },
              },
              {
                "name": "colorlabel",
                "value": {
                  "de-DE": "Holzkohle",
                  "en-GB": "Charcoal",
                  "en-US": "Charcoal",
                },
              },
              {
                "name": "finishlabel",
                "value": {
                  "de-DE": "Ebenholz",
                  "en-GB": "Ebony",
                  "en-US": "Ebony",
                },
              },
              {
                "name": "new-arrival",
                "value": true,
              },
              {
                "name": "color-filter",
                "value": {
                  "key": "#000",
                  "label": {
                    "de-DE": "Schwarz",
                    "en-GB": "Black",
                    "en-US": "Black",
                  },
                },
              },
            ],
            "images": [
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286286-GrIUsCns.jpeg",
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
                "key": undefined,
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
                "key": undefined,
                "tiers": undefined,
                "validFrom": undefined,
                "validUntil": undefined,
                "value": {
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            ],
            "sku": "NTSS-07",
          },
        ],
      }
    `);
  });

  it(`should return a nalaTwoSeaterSofa preset when built for graphql`, () => {
    const nalaTwoSeaterSofaPresetGraphql =
      nalaTwoSeaterSofa().buildGraphql<TProductDraft>();
    expect(nalaTwoSeaterSofaPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "sofas",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "furniture",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "new-arrivals",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "the-traditionalist",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "collections",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Dieses moderne 2-Sitzer-Sofa ist eine stilvolle und komfortable Ergänzung für jeden Wohnbereich. Das Sofa hat ein schlichtes und minimalistisches Design mit klaren Linien und einer zeitgenössischen Ästhetik. Es ist mit einem hochwertigen Baumwollstoff gepolstert, der sich weich anfühlt und leicht zu reinigen ist. Die beiden Sitzkissen sind weich und stützend und bieten einen bequemen Platz zum Sitzen und Entspannen. Die Rückenlehne ist gut gepolstert und stützt den Rücken, während die Armlehnen sanft geschwungen sind, um ein bequemes und entspanntes Gefühl zu vermitteln. Das Gestell des Sofas ist aus robustem Holz oder Metall gefertigt, so dass es viele Jahre halten wird. Mit seinem modernen und minimalistischen Stil fügt sich dieses Sofa nahtlos in jede moderne Einrichtung ein, während die bequeme und hochwertige Polsterung es zu einem großartigen Ort zum Entspannen und Relaxen macht.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind.",
          },
        ],
        "key": "nala-two-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"en-GB":"#5B5858","de-DE":"#5B5858","en-US":"#5B5858"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Steel Gray","de-DE":"Stahlgrau","en-US":"Steel Gray"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
            },
            {
              "name": "new-arrival",
              "value": "true",
            },
            {
              "name": "productspec",
              "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3376,
                "width": 6000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969001-vPDGxuEM.jpeg",
            },
            {
              "dimensions": {
                "height": 3376,
                "width": 6000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286520-Il0fLxCr.jpeg",
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
                  "centAmount": 129900,
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
                  "centAmount": 129900,
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
                  "centAmount": 129900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "NTSS-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Nala Two-Seater Sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Nala Zweisitzer-Sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Nala Two-Seater Sofa",
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
            "value": "nala-two-seater-sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "nala-zweisitzer-sofa",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "nala-two-seater-sofa",
          },
        ],
        "state": undefined,
        "taxCategory": {
          "__typename": "Reference",
          "key": "standard-tax",
          "typeId": "tax-category",
        },
        "variants": [
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": "{"en-GB":"#335EB7","de-DE":"#335EB7","en-US":"#335EB7"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-GB":"Royal Blue","de-DE":"Königsblau","en-US":"Royal Blue"}",
              },
              {
                "name": "finishlabel",
                "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969217-cd3PFq1G.jpeg",
              },
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566285321-BTEIw6qM.jpeg",
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "NTSS-02",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": "{"en-GB":"#B13704","de-DE":"#B13704","en-US":"#B13704"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-GB":"Terracotta","de-DE":"Terrakotta","en-US":"Terracotta"}",
              },
              {
                "name": "finishlabel",
                "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#FFA500","label":{"de-DE":"Orange","en-GB":"Orange","en-US":"Orange"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969241-aLftk1PS.jpeg",
              },
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566285394-z1exVK19.jpeg",
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "NTSS-03",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "color",
                "value": "{"en-GB":"#077D94","de-DE":"#077D94","en-US":"#077D94"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "finishlabel",
                "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-GB":"Peacock Blue","de-DE":"Pfauenblau","en-US":"Peacock Blue"}",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#0000FF","label":{"de-DE":"Blau","en-GB":"Blue","en-US":"Blue"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_542969285-YwwoAWiR.jpeg",
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "NTTS-04",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "finish",
                "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
              },
              {
                "name": "finishlabel",
                "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-GB":"Feather Gray","de-DE":"Federgrau","en-US":"Feather Gray"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "color",
                "value": "{"en-GB":"#EDEDED","de-DE":"#EDEDED","en-US":"#EDEDED"}",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#808080","label":{"de-DE":"Grau","en-GB":"Gray","en-US":"Gray"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Grey-xp6LQN7S.jpeg",
              },
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286242-yDdr0FtS.jpeg",
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "NTSS-05",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "color",
                "value": "{"en-GB":"#96A789","de-DE":"#96A789","en-US":"#96A789"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-GB":"Sage Green","de-DE":"Salbeigrün","en-US":"Sage Green"}",
              },
              {
                "name": "finishlabel",
                "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#00FF00","label":{"de-DE":"Grün","en-GB":"Green","en-US":"Green"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Sage-1KpTSqVS.jpeg",
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "NTSS-06",
          },
          {
            "assets": undefined,
            "attributes": [
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "color",
                "value": "{"en-GB":"#121312","de-DE":"#121312","en-US":"#121312"}",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"#090909","de-DE":"#090909","en-US":"#090909"}",
              },
              {
                "name": "colorlabel",
                "value": "{"en-GB":"Charcoal","de-DE":"Holzkohle","en-US":"Charcoal"}",
              },
              {
                "name": "finishlabel",
                "value": "{"en-GB":"Ebony","de-DE":"Ebenholz","en-US":"Ebony"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "color-filter",
                "value": "{"key":"#000","label":{"de-DE":"Schwarz","en-GB":"Black","en-US":"Black"}}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_566286286-GrIUsCns.jpeg",
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
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
                    "centAmount": 129900,
                    "currencyCode": "USD",
                  },
                },
              },
            ],
            "sku": "NTSS-07",
          },
        ],
      }
    `);
  });
});
