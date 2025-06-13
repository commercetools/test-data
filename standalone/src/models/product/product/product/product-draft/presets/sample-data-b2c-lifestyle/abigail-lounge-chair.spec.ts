import type { TProductDraft } from '../../../types';
import abigailLoungeChair from './abigail-lounge-chair';

describe(`with abigailLoungeChair preset`, () => {
  it(`should return a abigailLoungeChair preset`, () => {
    const abigailLoungeChairPreset =
      abigailLoungeChair().build<TProductDraft>();
    expect(abigailLoungeChairPreset).toMatchInlineSnapshot(`
      {
        "categories": [
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
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Loungesessel mit rosafarbener Samtpolsterung und Spindelbeinen aus Messing ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer, Schlafzimmer oder Büro einen Hauch von Glamour verleihen kann. Der Stuhl verfügt über einen bequemen und geräumigen Sitz mit weicher und plüschiger Samtpolsterung in zartrosa Farbe.  Die Rückenlehne und die Armlehnen des Stuhls sind leicht gebogen und bieten einen bequemen und stützenden Platz zum Sitzen und Entspannen. Die Spindelbeine aus Messing sind konisch zulaufend und tragen zur allgemeinen Eleganz und Raffinesse des Designs bei.  Die Kombination aus rosafarbenem Samt und Messing ist sowohl opulent als auch schick und macht diesen Loungesessel zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu Vintage-inspiriert und glamourös. Seine weiche Polsterung, kombiniert mit seinem eleganten und zeitlosen Design, machen ihn zu einem perfekten Ort, um sich stilvoll zu entspannen.",
          "en": undefined,
          "en-GB": "A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.",
          "en-US": "A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.",
          "fr": undefined,
        },
        "key": "abigail-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Wird mit passendem Kissen geliefert
      - Samtpolsterung
      - Wird zusammengebaut geliefert",
                "en-GB": "- Comes with matching throw pillow
      - Velvet upholstery
      - Pre-assembled",
                "en-US": "- Comes with matching throw pillow
      - Velvet upholstery
      - Pre-assembled",
              },
            },
            {
              "name": "search-color",
              "value": [
                {
                  "de-DE": "Rosa",
                  "en-GB": "Pink",
                  "en-US": "Pink",
                },
              ],
            },
            {
              "name": "search-finish",
              "value": [
                {
                  "de-DE": "Gold",
                  "en-GB": "Gold",
                  "en-US": "Gold",
                },
              ],
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Hell rosa",
                "en-GB": "Light Pink",
                "en-US": "Light Pink",
              },
            },
            {
              "name": "finish-label",
              "value": {
                "de-DE": "Gold",
                "en-GB": "Gold",
                "en-US": "Gold",
              },
            },
            {
              "name": "color-code",
              "value": {
                "de-DE": "#FFB6C1",
                "en-GB": "#FFB6C1",
                "en-US": "#FFB6C1",
              },
            },
            {
              "name": "finish-code",
              "value": {
                "de-DE": "#FFD700",
                "en-GB": "#FFD700",
                "en-US": "#FFD700",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4000,
                "w": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Abigail_Lounge_Chair-1.1.jpeg",
            },
          ],
          "key": "abigailLoungeChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "75000EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 75000,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "75000GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 75000,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "70000USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 70000,
                "currencyCode": "USD",
              },
            },
            {
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "75000USD_dist",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 75000,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "ALC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Abigail Lounge-Sessel",
          "en": undefined,
          "en-GB": "Abigail Lounge Chair",
          "en-US": "Abigail Lounge Chair",
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
          "de-DE": "abigail-lounge-stuhl",
          "en": undefined,
          "en-GB": "abigail-lounge-chair",
          "en-US": "abigail-lounge-chair",
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

  it(`should return a abigailLoungeChair preset when built for graphql`, () => {
    const abigailLoungeChairPresetGraphql =
      abigailLoungeChair().buildGraphql<TProductDraft>();
    expect(abigailLoungeChairPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
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
          {
            "key": "new-arrivals",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.",
          },
          {
            "locale": "en-US",
            "value": "A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.",
          },
          {
            "locale": "de-DE",
            "value": "Ein Loungesessel mit rosafarbener Samtpolsterung und Spindelbeinen aus Messing ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer, Schlafzimmer oder Büro einen Hauch von Glamour verleihen kann. Der Stuhl verfügt über einen bequemen und geräumigen Sitz mit weicher und plüschiger Samtpolsterung in zartrosa Farbe.  Die Rückenlehne und die Armlehnen des Stuhls sind leicht gebogen und bieten einen bequemen und stützenden Platz zum Sitzen und Entspannen. Die Spindelbeine aus Messing sind konisch zulaufend und tragen zur allgemeinen Eleganz und Raffinesse des Designs bei.  Die Kombination aus rosafarbenem Samt und Messing ist sowohl opulent als auch schick und macht diesen Loungesessel zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu Vintage-inspiriert und glamourös. Seine weiche Polsterung, kombiniert mit seinem eleganten und zeitlosen Design, machen ihn zu einem perfekten Ort, um sich stilvoll zu entspannen.",
          },
        ],
        "key": "abigail-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-US":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","en-GB":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","de-DE":"- Wird mit passendem Kissen geliefert\\n- Samtpolsterung\\n- Wird zusammengebaut geliefert"}",
            },
            {
              "name": "search-color",
              "value": "[{"en-US":"Pink","en-GB":"Pink","de-DE":"Rosa"}]",
            },
            {
              "name": "search-finish",
              "value": "[{"en-US":"Gold","en-GB":"Gold","de-DE":"Gold"}]",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Light Pink","de-DE":"Hell rosa","en-US":"Light Pink"}",
            },
            {
              "name": "finish-label",
              "value": "{"en-GB":"Gold","de-DE":"Gold","en-US":"Gold"}",
            },
            {
              "name": "color-code",
              "value": "{"en-US":"#FFB6C1","en-GB":"#FFB6C1","de-DE":"#FFB6C1"}",
            },
            {
              "name": "finish-code",
              "value": "{"en-US":"#FFD700","en-GB":"#FFD700","de-DE":"#FFD700"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Abigail_Lounge_Chair-1.1.jpeg",
            },
          ],
          "key": "abigailLoungeChair01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "75000EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 75000,
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
              "key": "75000GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 75000,
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
              "key": "70000USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 70000,
                  "currencyCode": "USD",
                },
              },
            },
            {
              "channel": {
                "key": "distribution-channel",
                "typeId": "channel",
              },
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "75000USD_dist",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 75000,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "ALC-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Abigail Lounge Chair",
          },
          {
            "locale": "en-GB",
            "value": "Abigail Lounge Chair",
          },
          {
            "locale": "de-DE",
            "value": "Abigail Lounge-Sessel",
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
            "value": "abigail-lounge-chair",
          },
          {
            "locale": "en-GB",
            "value": "abigail-lounge-chair",
          },
          {
            "locale": "de-DE",
            "value": "abigail-lounge-stuhl",
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
