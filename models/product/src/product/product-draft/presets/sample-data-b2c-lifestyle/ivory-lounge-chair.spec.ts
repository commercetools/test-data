import type { TProductDraft } from '../../../types';
import ivoryLoungeChair from './ivory-lounge-chair';

describe(`with ivoryLoungeChair preset`, () => {
  it(`should return a ivoryLoungeChair preset`, () => {
    const ivoryLoungeChairPreset = ivoryLoungeChair().build<TProductDraft>();
    expect(ivoryLoungeChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "new-arrivals",
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
            "key": "armchairs",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Dieser Sessel ist ein kühnes und flippiges Möbelstück, das seine Inspiration aus den eklektischen Stilen der 1970er Jahre bezieht. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die für längere Zeit bequemen Sitz bietet.  Die Armlehnen des Stuhls sind breit und rund und schaffen einen bequemen und stützenden Platz, an dem Sie Ihre Arme beim Faulenzen ausruhen können.  Insgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen.",
          "en": undefined,
          "en-GB": "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
          "en-US": "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
          "fr": undefined,
        },
        "key": "ivory-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Nur chemische Reinigung
      - Montage im Lieferumfang enthalten",
                "en-GB": "- Dry clean only
      - Assembly included in delivery",
                "en-US": "- Dry clean only
      - Assembly included in delivery",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Elfenbein:#FFFFF0",
                "en-GB": "Ivory:#FFFFF0",
                "en-US": "Ivory:#FFFFF0",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4400,
                "w": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 4500,
                "w": 3375,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 5000,
                "w": 3750,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.3.jpeg",
            },
          ],
          "key": "ivoryLoungeChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "29900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 29900,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "29900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 29900,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "29900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 29900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "ILC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Elfenbein Lounge Stuhl",
          "en": undefined,
          "en-GB": "Ivory Lounge Chair",
          "en-US": "Ivory Lounge Chair",
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
          "de-DE": "elfenbein-lounge-stuhl",
          "en": undefined,
          "en-GB": "ivory-lounge-chair",
          "en-US": "ivory-lounge-chair",
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

  it(`should return a ivoryLoungeChair preset when built for graphql`, () => {
    const ivoryLoungeChairPresetGraphql =
      ivoryLoungeChair().buildGraphql<TProductDraft>();
    expect(ivoryLoungeChairPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "new-arrivals",
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
            "key": "armchairs",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
          },
          {
            "locale": "en-US",
            "value": "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.  The arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.   Overall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
          },
          {
            "locale": "de-DE",
            "value": "Dieser Sessel ist ein kühnes und flippiges Möbelstück, das seine Inspiration aus den eklektischen Stilen der 1970er Jahre bezieht. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die für längere Zeit bequemen Sitz bietet.  Die Armlehnen des Stuhls sind breit und rund und schaffen einen bequemen und stützenden Platz, an dem Sie Ihre Arme beim Faulenzen ausruhen können.  Insgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen.",
          },
        ],
        "key": "ivory-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Dry clean only\\n- Assembly included in delivery","de-DE":"- Nur chemische Reinigung\\n- Montage im Lieferumfang enthalten","en-US":"- Dry clean only\\n- Assembly included in delivery"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Ivory:#FFFFF0","de-DE":"Elfenbein:#FFFFF0","en-US":"Ivory:#FFFFF0"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4400,
                "width": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 4500,
                "width": 3375,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 5000,
                "width": 3750,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.3.jpeg",
            },
          ],
          "key": "ivoryLoungeChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "29900EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 29900,
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
              "key": "29900GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 29900,
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
              "key": "29900USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 29900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "ILC-01",
          "staged": true,
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Ivory Lounge Chair",
          },
          {
            "locale": "en-GB",
            "value": "Ivory Lounge Chair",
          },
          {
            "locale": "de-DE",
            "value": "Elfenbein Lounge Stuhl",
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
            "value": "ivory-lounge-chair",
          },
          {
            "locale": "en-GB",
            "value": "ivory-lounge-chair",
          },
          {
            "locale": "de-DE",
            "value": "elfenbein-lounge-stuhl",
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
