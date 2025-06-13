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
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Grau",
                  "en-GB": "Grey",
                  "en-US": "Gray",
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
                "de-DE": "Helles Schiefer grau",
                "en-GB": "Lightslate Gray",
                "en-US": "Lightslate Gray",
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
              "value": {
                "de-DE": "#778899",
                "en-GB": "#778899",
                "en-US": "#778899",
              },
            },
            {
              "name": "finish-code",
              "value": {
                "de-DE": "#000000",
                "en-GB": "#000000",
                "en-US": "#000000",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 3376,
                "w": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.1.jpeg",
            },
          ],
          "key": "nalaTwoSeaterSofa01",
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
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Blau",
                    "en-GB": "Blue",
                    "en-US": "Blue",
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
                  "de-DE": "Königs blau",
                  "en-GB": "Royal Blue",
                  "en-US": "Royal Blue",
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
                "value": {
                  "de-DE": "#4169E1",
                  "en-GB": "#4169E1",
                  "en-US": "#4169E1",
                },
              },
              {
                "name": "finish-code",
                "value": {
                  "de-DE": "#000000",
                  "en-GB": "#000000",
                  "en-US": "#000000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-2.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-2.2.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa02",
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
            "sku": "NTSS-02",
          },
          {
            "assets": undefined,
            "attributes": [
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
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Braun",
                    "en-GB": "Brown",
                    "en-US": "Brown",
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
                  "de-DE": "Peru",
                  "en-GB": "Peru",
                  "en-US": "Peru",
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
                "value": {
                  "de-DE": "#CD853F",
                  "en-GB": "#CD853F",
                  "en-US": "#CD853F",
                },
              },
              {
                "name": "finish-code",
                "value": {
                  "de-DE": "#000000",
                  "en-GB": "#000000",
                  "en-US": "#000000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-3.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-3.2.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa03",
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
            "sku": "NTSS-03",
          },
          {
            "assets": undefined,
            "attributes": [
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
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Blau",
                    "en-GB": "Blue",
                    "en-US": "Blue",
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
                  "de-DE": "Tiefes Himmel blau",
                  "en-GB": "Deep Sky Blue",
                  "en-US": "Deep Sky Blue",
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
                "value": {
                  "de-DE": "#00BFFF",
                  "en-GB": "#00BFFF",
                  "en-US": "#00BFFF",
                },
              },
              {
                "name": "finish-code",
                "value": {
                  "de-DE": "#000000",
                  "en-GB": "#000000",
                  "en-US": "#000000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-4.1.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa04",
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
            "sku": "NTTS-04",
          },
          {
            "assets": undefined,
            "attributes": [
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
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Grau",
                    "en-GB": "Grey",
                    "en-US": "Gray",
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
                  "de-DE": "Hell grau",
                  "en-GB": "Light Grey",
                  "en-US": "Light Gray",
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
                "value": {
                  "de-DE": "#D3D3D3",
                  "en-GB": "#D3D3D3",
                  "en-US": "#D3D3D3",
                },
              },
              {
                "name": "finish-code",
                "value": {
                  "de-DE": "#000000",
                  "en-GB": "#000000",
                  "en-US": "#000000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-5.1.jpeg",
              },
              {
                "dimensions": {
                  "h": 3376,
                  "w": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-5.2.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa05",
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
            "sku": "NTSS-05",
          },
          {
            "assets": undefined,
            "attributes": [
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
                  "de-DE": "Dunkles See grün",
                  "en-GB": "Dark Sea Green",
                  "en-US": "Dark Sea Green",
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
                "value": {
                  "de-DE": "#8FBC8F",
                  "en-GB": "#8FBC8F",
                  "en-US": "#8FBC8F",
                },
              },
              {
                "name": "finish-code",
                "value": {
                  "de-DE": "#000000",
                  "en-GB": "#000000",
                  "en-US": "#000000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-6.1.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa06",
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
            "sku": "NTSS-06",
          },
          {
            "assets": undefined,
            "attributes": [
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
                "name": "search-color",
                "value": [
                  {
                    "de-DE": "Grau",
                    "en-GB": "Grey",
                    "en-US": "Gray",
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
                  "de-DE": "Dunkles Schiefer grau",
                  "en-GB": "Dark Slate Grey",
                  "en-US": "Dark Slate Gray",
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
                "value": {
                  "de-DE": "#2F4F4F",
                  "en-GB": "#2F4F4F",
                  "en-US": "#2F4F4F",
                },
              },
              {
                "name": "finish-code",
                "value": {
                  "de-DE": "#000000",
                  "en-GB": "#000000",
                  "en-US": "#000000",
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
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-7.1.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa07",
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
        "attributes": null,
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
        "description": [
          {
            "locale": "en-GB",
            "value": "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind.",
          },
          {
            "locale": "de-DE",
            "value": "Dieses moderne 2-Sitzer-Sofa ist eine stilvolle und komfortable Ergänzung für jeden Wohnbereich. Das Sofa hat ein schlichtes und minimalistisches Design mit klaren Linien und einer zeitgenössischen Ästhetik. Es ist mit einem hochwertigen Baumwollstoff gepolstert, der sich weich anfühlt und leicht zu reinigen ist. Die beiden Sitzkissen sind weich und stützend und bieten einen bequemen Platz zum Sitzen und Entspannen. Die Rückenlehne ist gut gepolstert und stützt den Rücken, während die Armlehnen sanft geschwungen sind, um ein bequemes und entspanntes Gefühl zu vermitteln. Das Gestell des Sofas ist aus robustem Holz oder Metall gefertigt, so dass es viele Jahre halten wird. Mit seinem modernen und minimalistischen Stil fügt sich dieses Sofa nahtlos in jede moderne Einrichtung ein, während die bequeme und hochwertige Polsterung es zu einem großartigen Ort zum Entspannen und Relaxen macht.",
          },
          {
            "locale": "en-US",
            "value": "This modern 2-seater sofa is a stylish and comfortable addition to any living space. The sofa features a sleek and minimalistic design, with clean lines and a contemporary aesthetic. It is upholstered in high-quality cotton fabric, which is soft to the touch and easy to clean. The two seat cushions are plush and supportive, offering a comfortable place to sit and relax. The backrest is well-padded, providing ample back support, while the armrests are gently curved for a comfortable and relaxed feel. The sofa's frame is made from sturdy wood, ensuring it will last for years to come. With a modern and minimalist style, this sofa can fit in seamlessly with any modern decor, while the comfortable and high-quality upholstery makes it a great place to relax and unwind.",
          },
        ],
        "key": "nala-two-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "new-arrival",
              "value": "true",
            },
            {
              "name": "productspec",
              "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Lightslate Gray","de-DE":"Helles Schiefer grau","en-US":"Lightslate Gray"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"#778899","en-GB":"#778899","de-DE":"#778899"}",
            },
            {
              "name": "finish-code",
              "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3376,
                "width": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 3376,
                "width": 6000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-1.1.jpeg",
            },
          ],
          "key": "nalaTwoSeaterSofa01",
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
              "key": "129900GBP",
              "recurrencePolicy": undefined,
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
              "key": "129900USD",
              "recurrencePolicy": undefined,
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
            "locale": "en-GB",
            "value": "Nala Two-Seater Sofa",
          },
          {
            "locale": "de-DE",
            "value": "Nala Zweisitzer-Sofa",
          },
          {
            "locale": "en-US",
            "value": "Nala Two-Seater Sofa",
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
            "value": "nala-two-seater-sofa",
          },
          {
            "locale": "de-DE",
            "value": "nala-zweisitzer-sofa",
          },
          {
            "locale": "en-US",
            "value": "nala-two-seater-sofa",
          },
        ],
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
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Blue","en-GB":"Blue","de-DE":"Blau"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Royal Blue","de-DE":"Königs blau","en-US":"Royal Blue"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
              },
              {
                "name": "color-code",
                "value": "{"en-US":"#4169E1","en-GB":"#4169E1","de-DE":"#4169E1"}",
              },
              {
                "name": "finish-code",
                "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-2.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-2.2.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa02",
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
                "key": "129900GBP",
                "recurrencePolicy": undefined,
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
                "key": "129900USD",
                "recurrencePolicy": undefined,
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
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Brown","en-GB":"Brown","de-DE":"Braun"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Peru","de-DE":"Peru","en-US":"Peru"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
              },
              {
                "name": "color-code",
                "value": "{"en-US":"#CD853F","en-GB":"#CD853F","de-DE":"#CD853F"}",
              },
              {
                "name": "finish-code",
                "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-3.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-3.2.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa03",
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
                "key": "129900GBP",
                "recurrencePolicy": undefined,
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
                "key": "129900USD",
                "recurrencePolicy": undefined,
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
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Blue","en-GB":"Blue","de-DE":"Blau"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Deep Sky Blue","de-DE":"Tiefes Himmel blau","en-US":"Deep Sky Blue"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
              },
              {
                "name": "color-code",
                "value": "{"en-US":"#00BFFF","en-GB":"#00BFFF","de-DE":"#00BFFF"}",
              },
              {
                "name": "finish-code",
                "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-4.1.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa04",
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
                "key": "129900GBP",
                "recurrencePolicy": undefined,
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
                "key": "129900USD",
                "recurrencePolicy": undefined,
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
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Light Grey","de-DE":"Hell grau","en-US":"Light Gray"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
              },
              {
                "name": "color-code",
                "value": "{"en-US":"#D3D3D3","en-GB":"#D3D3D3","de-DE":"#D3D3D3"}",
              },
              {
                "name": "finish-code",
                "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-5.1.jpeg",
              },
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-5.2.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa05",
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
                "key": "129900GBP",
                "recurrencePolicy": undefined,
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
                "key": "129900USD",
                "recurrencePolicy": undefined,
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
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Green","en-GB":"Green","de-DE":"Grün"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Dark Sea Green","de-DE":"Dunkles See grün","en-US":"Dark Sea Green"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
              },
              {
                "name": "color-code",
                "value": "{"en-US":"#8FBC8F","en-GB":"#8FBC8F","de-DE":"#8FBC8F"}",
              },
              {
                "name": "finish-code",
                "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-6.1.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa06",
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
                "key": "129900GBP",
                "recurrencePolicy": undefined,
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
                "key": "129900USD",
                "recurrencePolicy": undefined,
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
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
              },
              {
                "name": "search-color",
                "value": "[{"en-US":"Gray","en-GB":"Grey","de-DE":"Grau"}]",
              },
              {
                "name": "search-finish",
                "value": "[{"en-US":"Black","en-GB":"Black","de-DE":"Schwarz"}]",
              },
              {
                "name": "color-label",
                "value": "{"en-GB":"Dark Slate Grey","de-DE":"Dunkles Schiefer grau","en-US":"Dark Slate Gray"}",
              },
              {
                "name": "finish-label",
                "value": "{"en-GB":"Black","de-DE":"Schwarz","en-US":"Black"}",
              },
              {
                "name": "color-code",
                "value": "{"en-US":"#2F4F4F","en-GB":"#2F4F4F","de-DE":"#2F4F4F"}",
              },
              {
                "name": "finish-code",
                "value": "{"en-US":"#000000","en-GB":"#000000","de-DE":"#000000"}",
              },
            ],
            "images": [
              {
                "dimensions": {
                  "height": 3376,
                  "width": 6000,
                },
                "label": undefined,
                "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Nala_Two_Seater_Sofa-7.1.jpeg",
              },
            ],
            "key": "nalaTwoSeaterSofa07",
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
                "key": "129900GBP",
                "recurrencePolicy": undefined,
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
                "key": "129900USD",
                "recurrencePolicy": undefined,
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
