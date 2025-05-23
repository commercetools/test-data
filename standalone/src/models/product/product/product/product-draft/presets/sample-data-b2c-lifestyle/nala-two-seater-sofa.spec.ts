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
                "de-DE": "Helles Schiefer grau:#778899",
                "en-GB": "Lightslate Gray:#778899",
                "en-US": "Lightslate Gray:#778899",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Schwarz:#000000",
                "en-GB": "Black:#000000",
                "en-US": "Black:#000000",
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
                "name": "color",
                "value": {
                  "de-DE": "Königs blau:#4169E1",
                  "en-GB": "Royal Blue:#4169E1",
                  "en-US": "Royal Blue:#4169E1",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "Schwarz:#000000",
                  "en-GB": "Black:#000000",
                  "en-US": "Black:#000000",
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
                "name": "color",
                "value": {
                  "de-DE": "Peru:#CD853F",
                  "en-GB": "Peru:#CD853F",
                  "en-US": "Peru:#CD853F",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "Schwarz:#000000",
                  "en-GB": "Black:#000000",
                  "en-US": "Black:#000000",
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
                "name": "color",
                "value": {
                  "de-DE": "Tiefes Himmel blau:#00BFFF",
                  "en-GB": "Deep Sky Blue:#00BFFF",
                  "en-US": "Deep Sky Blue:#00BFFF",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "Schwarz:#000000",
                  "en-GB": "Black:#000000",
                  "en-US": "Black:#000000",
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
                "name": "finish",
                "value": {
                  "de-DE": "Schwarz:#000000",
                  "en-GB": "Black:#000000",
                  "en-US": "Black:#000000",
                },
              },
              {
                "name": "color",
                "value": {
                  "de-DE": "Hell grau:#D3D3D3",
                  "en-GB": "Light Grey:#D3D3D3",
                  "en-US": "Light Gray:#D3D3D3",
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
                "name": "color",
                "value": {
                  "de-DE": "Dunkles See grün:#8FBC8F",
                  "en-GB": "Dark Sea Green:#8FBC8F",
                  "en-US": "Dark Sea Green:#8FBC8F",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "Schwarz:#000000",
                  "en-GB": "Black:#000000",
                  "en-US": "Black:#000000",
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
                "name": "color",
                "value": {
                  "de-DE": "Dunkles Schiefer grau:#2F4F4F",
                  "en-GB": "Dark Slate Grey:#2F4F4F",
                  "en-US": "Dark Slate Gray:#2F4F4F",
                },
              },
              {
                "name": "finish",
                "value": {
                  "de-DE": "Schwarz:#000000",
                  "en-GB": "Black:#000000",
                  "en-US": "Black:#000000",
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
              "name": "color",
              "value": "{"en-GB":"Lightslate Gray:#778899","de-DE":"Helles Schiefer grau:#778899","en-US":"Lightslate Gray:#778899"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
            },
            {
              "name": "new-arrival",
              "value": "true",
            },
            {
              "name": "productspec",
              "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
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
                "name": "color",
                "value": "{"en-GB":"Royal Blue:#4169E1","de-DE":"Königs blau:#4169E1","en-US":"Royal Blue:#4169E1"}",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
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
                "name": "color",
                "value": "{"en-GB":"Peru:#CD853F","de-DE":"Peru:#CD853F","en-US":"Peru:#CD853F"}",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
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
                "name": "color",
                "value": "{"en-GB":"Deep Sky Blue:#00BFFF","de-DE":"Tiefes Himmel blau:#00BFFF","en-US":"Deep Sky Blue:#00BFFF"}",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
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
                "name": "finish",
                "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
              },
              {
                "name": "color",
                "value": "{"en-GB":"Light Grey:#D3D3D3","de-DE":"Hell grau:#D3D3D3","en-US":"Light Gray:#D3D3D3"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
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
                "name": "color",
                "value": "{"en-GB":"Dark Sea Green:#8FBC8F","de-DE":"Dunkles See grün:#8FBC8F","en-US":"Dark Sea Green:#8FBC8F"}",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
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
                "name": "color",
                "value": "{"en-GB":"Dark Slate Grey:#2F4F4F","de-DE":"Dunkles Schiefer grau:#2F4F4F","en-US":"Dark Slate Gray:#2F4F4F"}",
              },
              {
                "name": "finish",
                "value": "{"en-GB":"Black:#000000","de-DE":"Schwarz:#000000","en-US":"Black:#000000"}",
              },
              {
                "name": "new-arrival",
                "value": "true",
              },
              {
                "name": "productspec",
                "value": "{"en-GB":"- Two-seater sofa\\n- Cotton linen upholstery","de-DE":"- Zweisitzer-Sofa\\n- Polsterung aus Baumwollleinen","en-US":"- Two-seater sofa\\n- Cotton linen upholstery"}",
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
