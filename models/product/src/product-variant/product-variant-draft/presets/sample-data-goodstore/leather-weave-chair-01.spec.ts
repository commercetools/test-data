import type { TProductVariantDraft } from '../../../types';
import leatherWeaveChair01 from './leather-weave-chair-01';

describe(`with leatherWeaveChair01 preset`, () => {
  it(`should return a leatherWeaveChair01 preset`, () => {
    const leatherWeaveChair01Preset =
      leatherWeaveChair01().build<TProductVariantDraft>();
    expect(leatherWeaveChair01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Holzstuhl mit Lederbezug ist ein schönes und funktionales Möbelstück, das natürliche Materialien mit einem Hauch von Luxus verbindet. Der Stuhl verfügt über einen robusten und langlebigen Holzrahmen aus hochwertigem Hartholz, der eine solide Grundlage für Sitz und Rückenlehne bietet.  Der Sitz und die Rückenlehne des Stuhls bestehen aus einem engen Gewebe aus Lederstreifen, wodurch eine einzigartige und auffällige Textur entsteht, die den Gesamteindruck des Stuhls verstärkt.  Der Stuhl hat ein einfaches und elegantes Design mit klaren Linien und einer minimalistischen Ästhetik, die sich leicht in eine Vielzahl von Einrichtungsstilen integrieren lässt.  Die Beine des Stuhls sind aus Stabilitätsgründen leicht nach außen geneigt. Die Unterseite der Beine kann mit Schutzkappen versehen werden, um Kratzer oder Schäden an Ihren Böden zu vermeiden.  Insgesamt ist ein Holzstuhl mit Lederbezug ein vielseitiges und stilvolles Möbelstück, das jedem Raum Wärme, Textur und visuelles Interesse verleiht. Seine Kombination aus natürlichen Materialien und luxuriösen Details macht es zu einer beliebten Wahl für alle, die ihrem Zuhause einen Hauch von Raffinesse und Eleganz verleihen möchten.",
              "en-GB": "A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.",
              "en-US": "A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.",
            },
          },
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_426344321-mhfsESbj.jpeg",
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
      }
    `);
  });

  it(`should return a leatherWeaveChair01 preset when built for graphql`, () => {
    const leatherWeaveChair01PresetGraphql =
      leatherWeaveChair01().buildGraphql<TProductVariantDraft>();
    expect(leatherWeaveChair01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": "{"en-GB":"A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.","en-US":"A wooden chair with leather weave upholstery is a beautiful and functional piece of furniture that blends natural materials with a touch of luxury. The chair features a sturdy and durable wooden frame, crafted from high-quality hardwood, that provides a solid foundation for the seat and backrest.  The seat and backrest of the chair are made from a tight weave of leather strips, creating a unique and eye-catching texture that adds to the chair's overall appeal.   The chair has a simple and elegant design, with clean lines and a minimalist aesthetic that makes it easy to incorporate into a variety of interior design styles.   The legs of the chair are angled slightly outward for stability. The bottom of the legs may be fitted with protective caps to prevent scratches or damage to your floors.  Overall, a wooden chair with leather weave upholstery is a versatile and stylish piece of furniture that can add warmth, texture, and visual interest to any room. Its combination of natural materials and luxurious details makes it a popular choice for anyone looking to add a touch of sophistication and elegance to their home.","de-DE":"Ein Holzstuhl mit Lederbezug ist ein schönes und funktionales Möbelstück, das natürliche Materialien mit einem Hauch von Luxus verbindet. Der Stuhl verfügt über einen robusten und langlebigen Holzrahmen aus hochwertigem Hartholz, der eine solide Grundlage für Sitz und Rückenlehne bietet.  Der Sitz und die Rückenlehne des Stuhls bestehen aus einem engen Gewebe aus Lederstreifen, wodurch eine einzigartige und auffällige Textur entsteht, die den Gesamteindruck des Stuhls verstärkt.  Der Stuhl hat ein einfaches und elegantes Design mit klaren Linien und einer minimalistischen Ästhetik, die sich leicht in eine Vielzahl von Einrichtungsstilen integrieren lässt.  Die Beine des Stuhls sind aus Stabilitätsgründen leicht nach außen geneigt. Die Unterseite der Beine kann mit Schutzkappen versehen werden, um Kratzer oder Schäden an Ihren Böden zu vermeiden.  Insgesamt ist ein Holzstuhl mit Lederbezug ein vielseitiges und stilvolles Möbelstück, das jedem Raum Wärme, Textur und visuelles Interesse verleiht. Seine Kombination aus natürlichen Materialien und luxuriösen Details macht es zu einer beliebten Wahl für alle, die ihrem Zuhause einen Hauch von Raffinesse und Eleganz verleihen möchten."}",
          },
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_426344321-mhfsESbj.jpeg",
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
      }
    `);
  });
});
