import type { TProductDraft } from '../../../types';
import leatherWeaveChair from './leather-weave-chair';

describe(`with leatherWeaveChair preset`, () => {
  it(`should return a leatherWeaveChair preset`, () => {
    const leatherWeaveChairPreset = leatherWeaveChair().build<TProductDraft>();
    expect(leatherWeaveChairPreset).toMatchInlineSnapshot(`
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
            "key": "armchairs",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Ein Holzstuhl mit Lederbezug ist ein schönes und funktionales Möbelstück, das natürliche Materialien mit einem Hauch von Luxus verbindet. Der Stuhl verfügt über einen robusten und langlebigen Holzrahmen aus hochwertigem Hartholz, der eine solide Grundlage für Sitz und Rückenlehne bietet.  Der Sitz und die Rückenlehne des Stuhls bestehen aus einem engen Gewebe aus Lederstreifen, wodurch eine einzigartige und auffällige Textur entsteht, die den Gesamteindruck des Stuhls verstärkt.  Der Stuhl hat ein einfaches und elegantes Design mit klaren Linien und einer minimalistischen Ästhetik, die sich leicht in eine Vielzahl von Einrichtungsstilen integrieren lässt.  Die Beine des Stuhls sind aus Stabilitätsgründen leicht nach außen geneigt. Die Unterseite der Beine kann mit Schutzkappen versehen werden, um Kratzer oder Schäden an Ihren Böden zu vermeiden.  Insgesamt ist ein Holzstuhl mit Lederbezug ein vielseitiges und stilvolles Möbelstück, das jedem Raum Wärme, Textur und visuelles Interesse verleiht. Seine Kombination aus natürlichen Materialien und luxuriösen Details macht es zu einer beliebten Wahl für alle, die ihrem Zuhause einen Hauch von Raffinesse und Eleganz verleihen möchten.",
          "en": undefined,
          "en-GB": "A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.",
          "en-US": "A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.",
          "fr": undefined,
        },
        "key": "leather-weave-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color-filter",
              "value": {
                "key": "#D2B48C",
                "label": {
                  "de-DE": "Bräunen",
                  "en-GB": "Tan",
                  "en-US": "Tan",
                },
              },
            },
            {
              "name": "new-arrival",
              "value": true,
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Eiche",
                "en-GB": "Oak",
                "en-US": "Oak",
              },
            },
            {
              "name": "colorlabel",
              "value": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "#BC5724",
                "en-GB": "#BC5724",
                "en-US": "#BC5724",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "#E3AF81",
                "en-GB": "#E3AF81",
                "en-US": "#E3AF81",
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
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 4500,
                "w": 3375,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.2.jpeg",
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
                "centAmount": 39900,
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
                "centAmount": 34900,
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
                "centAmount": 39900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "BA-092",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Ledergeflecht Stuhl",
          "en": undefined,
          "en-GB": "Leather Weave Chair",
          "en-US": "Leather Weave Chair",
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
          "de-DE": "stuhl-aus-ledergeflecht",
          "en": undefined,
          "en-GB": "leather-weave-chair",
          "en-US": "leather-weave-chair",
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

  it(`should return a leatherWeaveChair preset when built for graphql`, () => {
    const leatherWeaveChairPresetGraphql =
      leatherWeaveChair().buildGraphql<TProductDraft>();
    expect(leatherWeaveChairPresetGraphql).toMatchInlineSnapshot(`
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
            "key": "armchairs",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein Holzstuhl mit Lederbezug ist ein schönes und funktionales Möbelstück, das natürliche Materialien mit einem Hauch von Luxus verbindet. Der Stuhl verfügt über einen robusten und langlebigen Holzrahmen aus hochwertigem Hartholz, der eine solide Grundlage für Sitz und Rückenlehne bietet.  Der Sitz und die Rückenlehne des Stuhls bestehen aus einem engen Gewebe aus Lederstreifen, wodurch eine einzigartige und auffällige Textur entsteht, die den Gesamteindruck des Stuhls verstärkt.  Der Stuhl hat ein einfaches und elegantes Design mit klaren Linien und einer minimalistischen Ästhetik, die sich leicht in eine Vielzahl von Einrichtungsstilen integrieren lässt.  Die Beine des Stuhls sind aus Stabilitätsgründen leicht nach außen geneigt. Die Unterseite der Beine kann mit Schutzkappen versehen werden, um Kratzer oder Schäden an Ihren Böden zu vermeiden.  Insgesamt ist ein Holzstuhl mit Lederbezug ein vielseitiges und stilvolles Möbelstück, das jedem Raum Wärme, Textur und visuelles Interesse verleiht. Seine Kombination aus natürlichen Materialien und luxuriösen Details macht es zu einer beliebten Wahl für alle, die ihrem Zuhause einen Hauch von Raffinesse und Eleganz verleihen möchten.",
          },
        ],
        "key": "leather-weave-chair",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color-filter",
              "value": "{"key":"#D2B48C","label":{"de-DE":"Bräunen","en-GB":"Tan","en-US":"Tan"}}",
            },
            {
              "name": "new-arrival",
              "value": "true",
            },
            {
              "name": "finishlabel",
              "value": "{"en-GB":"Oak","de-DE":"Eiche","en-US":"Oak"}",
            },
            {
              "name": "colorlabel",
              "value": "{"en-GB":"Tan","de-DE":"Bräunen","en-US":"Tan"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"#BC5724","de-DE":"#BC5724","en-US":"#BC5724"}",
            },
            {
              "name": "finish",
              "value": "{"en-GB":"#E3AF81","de-DE":"#E3AF81","en-US":"#E3AF81"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 4400,
                "width": 5500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 4500,
                "width": 3375,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.2.jpeg",
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
                  "centAmount": 39900,
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
                  "centAmount": 34900,
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
                  "centAmount": 39900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "BA-092",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Leather Weave Chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Leather Weave Chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ledergeflecht Stuhl",
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
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "leather-weave-chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "leather-weave-chair",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "stuhl-aus-ledergeflecht",
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
