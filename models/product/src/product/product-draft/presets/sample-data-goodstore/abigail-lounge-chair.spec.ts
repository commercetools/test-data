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
        "description": undefined,
        "key": "abigail-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "de-DE": "lightpink",
                "en-GB": "lightpink",
                "en-US": "lightpink",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Soft Pink",
                "en-GB": "Soft Pink",
                "en-US": "Soft Pink",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Brass",
                "en-GB": "Brass",
                "en-US": "Brass",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "goldenrod",
                "en-GB": "goldenrod",
                "en-US": "goldenrod",
              },
            },
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
              "name": "product-description",
              "value": {
                "de-DE": "Ein Loungesessel mit rosafarbener Samtpolsterung und Spindelbeinen aus Messing ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer, Schlafzimmer oder Büro einen Hauch von Glamour verleihen kann. Der Stuhl verfügt über einen bequemen und geräumigen Sitz mit weicher und plüschiger Samtpolsterung in zartrosa Farbe.  Die Rückenlehne und die Armlehnen des Stuhls sind leicht gebogen und bieten einen bequemen und stützenden Platz zum Sitzen und Entspannen. Die Spindelbeine aus Messing sind konisch zulaufend und tragen zur allgemeinen Eleganz und Raffinesse des Designs bei.  Die Kombination aus rosafarbenem Samt und Messing ist sowohl opulent als auch schick und macht diesen Loungesessel zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu Vintage-inspiriert und glamourös. Seine weiche Polsterung, kombiniert mit seinem eleganten und zeitlosen Design, machen ihn zu einem perfekten Ort, um sich stilvoll zu entspannen.",
                "en-GB": "A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.",
                "en-US": "A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#FFC0CB",
                "label": {
                  "de-DE": "Rosa",
                  "en-GB": "Pink",
                  "en-US": "Pink",
                },
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
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_378975371-myB5QCrw.jpeg",
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
              "key": undefined,
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
              "key": undefined,
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
        "categories": [
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
            "key": "armchairs",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "new-arrivals",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": undefined,
        "key": "abigail-lounge-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"en-US":"lightpink","en-GB":"lightpink","de-DE":"lightpink"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-US":"Soft Pink","en-GB":"Soft Pink","de-DE":"Soft Pink"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-US":"Brass","en-GB":"Brass","de-DE":"Brass"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"goldenrod","en-GB":"goldenrod","de-DE":"goldenrod"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","en-GB":"- Comes with matching throw pillow\\n- Velvet upholstery\\n- Pre-assembled","de-DE":"- Wird mit passendem Kissen geliefert\\n- Samtpolsterung\\n- Wird zusammengebaut geliefert"}",
            },
            {
              "name": "product-description",
              "value": "{"en-GB":"A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.","en-US":"A lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and stylish piece of furniture that can add a touch of glamour to any living room, bedroom or office. The chair features a comfortable and spacious seat with soft and plush velvet upholstery in soft pink color.  The backrest and armrests of the chair are slightly curved, providing a comfortable and supportive place to sit and relax. The brass spindle legs are tapered, adding to the overall elegance and sophistication of the design.  The combination of pink velvet and brass is both opulent and chic, making the lounge chair a perfect addition to a range of decor styles, from modern and minimalist to vintage-inspired and glam.  Overall, a lounge chair with pink velvet upholstery and brass spindle legs is a luxurious and comfortable piece of furniture that can add a touch of glamour and sophistication to any space. Its soft and plush upholstery, combined with its elegant and timeless design, make it a perfect place to relax and unwind in style.","de-DE":"Ein Loungesessel mit rosafarbener Samtpolsterung und Spindelbeinen aus Messing ist ein luxuriöses und stilvolles Möbelstück, das jedem Wohnzimmer, Schlafzimmer oder Büro einen Hauch von Glamour verleihen kann. Der Stuhl verfügt über einen bequemen und geräumigen Sitz mit weicher und plüschiger Samtpolsterung in zartrosa Farbe.  Die Rückenlehne und die Armlehnen des Stuhls sind leicht gebogen und bieten einen bequemen und stützenden Platz zum Sitzen und Entspannen. Die Spindelbeine aus Messing sind konisch zulaufend und tragen zur allgemeinen Eleganz und Raffinesse des Designs bei.  Die Kombination aus rosafarbenem Samt und Messing ist sowohl opulent als auch schick und macht diesen Loungesessel zu einer perfekten Ergänzung für eine Reihe von Einrichtungsstilen, von modern und minimalistisch bis hin zu Vintage-inspiriert und glamourös. Seine weiche Polsterung, kombiniert mit seinem eleganten und zeitlosen Design, machen ihn zu einem perfekten Ort, um sich stilvoll zu entspannen."}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#FFC0CB","label":{"de-DE":"Rosa","en-GB":"Pink","en-US":"Pink"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4000,
                "width": 5000,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_378975371-myB5QCrw.jpeg",
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
              "key": undefined,
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
              "key": undefined,
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
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Abigail Lounge Chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Abigail Lounge-Sessel",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Abigail Lounge Chair",
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
            "value": "abigail-lounge-chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "abigail-lounge-stuhl",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "abigail-lounge-chair",
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
