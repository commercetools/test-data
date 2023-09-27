import type { TProductVariantDraft } from '../../../types';
import ariaRug01 from './aria-rug-01';

describe(`with ariaRug01 preset`, () => {
  it(`should return a ariaRug01 preset`, () => {
    const ariaRug01Preset = ariaRug01().build<TProductVariantDraft>();
    expect(ariaRug01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": {
              "de-DE": "Der Aria-Teppich ist ein Flächenteppich mit einem geometrischen Muster, das ein sich wiederholendes Design aus Formen und Linien aufweist, das sowohl modern als auch vielseitig ist. Es kann einem Raum visuelles Interesse und Textur verleihen und dabei helfen, einen Raum zu definieren und zu verankern.  Insgesamt ist ein Teppich mit geometrischem Muster eine vielseitige und stilvolle Wahl für jeden Raum. Sein mutiges und markantes Design kann einem Raum Charakter und Interesse verleihen, während seine weiche und komfortable Textur eine gemütliche und einladende Atmosphäre schaffen kann.",
              "en-GB": "The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.",
              "en-US": "The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#FFFFF0",
              "label": {
                "de-DE": "Elfenbein",
                "en-GB": "Ivory",
                "en-US": "Ivory",
              },
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Nur chemische Reinigung
      - 5 Fuß x 7 Fuß",
              "en-GB": "- Dry clean only
      - 5ft x 7ft",
              "en-US": "- Dry clean only
      - 5ft x 7ft",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "#DED6D1",
              "en-GB": "#DED6D1",
              "en-US": "#DED6D1",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Elfenbein",
              "en-GB": "Ivory",
              "en-US": "Ivory",
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3900,
              "w": 5200,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419866-oorvaUqv.jpeg",
          },
          {
            "dimensions": {
              "h": 3900,
              "w": 5200,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419522-HuyvQGhQ.jpeg",
          },
          {
            "dimensions": {
              "h": 3900,
              "w": 5200,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419242-noY5_ut3.jpeg",
          },
          {
            "dimensions": {
              "h": 3900,
              "w": 5200,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419416-9KGitTwO.jpeg",
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
              "centAmount": 12499,
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
              "centAmount": 12499,
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
              "centAmount": 12499,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "AAR-34",
      }
    `);
  });

  it(`should return a ariaRug01 preset when built for graphql`, () => {
    const ariaRug01PresetGraphql =
      ariaRug01().buildGraphql<TProductVariantDraft>();
    expect(ariaRug01PresetGraphql).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "product-description",
            "value": "{"de-DE":"Der Aria-Teppich ist ein Flächenteppich mit einem geometrischen Muster, das ein sich wiederholendes Design aus Formen und Linien aufweist, das sowohl modern als auch vielseitig ist. Es kann einem Raum visuelles Interesse und Textur verleihen und dabei helfen, einen Raum zu definieren und zu verankern.  Insgesamt ist ein Teppich mit geometrischem Muster eine vielseitige und stilvolle Wahl für jeden Raum. Sein mutiges und markantes Design kann einem Raum Charakter und Interesse verleihen, während seine weiche und komfortable Textur eine gemütliche und einladende Atmosphäre schaffen kann.","en-GB":"The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.","en-US":"The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere."}",
          },
          {
            "name": "color-filter",
            "value": "{"key":"#FFFFF0","label":{"de-DE":"Elfenbein","en-GB":"Ivory","en-US":"Ivory"}}",
          },
          {
            "name": "productspec",
            "value": "{"en-GB":"- Dry clean only\\n- 5ft x 7ft","de-DE":"- Nur chemische Reinigung\\n- 5 Fuß x 7 Fuß","en-US":"- Dry clean only\\n- 5ft x 7ft"}",
          },
          {
            "name": "color",
            "value": "{"en-GB":"#DED6D1","de-DE":"#DED6D1","en-US":"#DED6D1"}",
          },
          {
            "name": "colorlabel",
            "value": "{"en-GB":"Ivory","de-DE":"Elfenbein","en-US":"Ivory"}",
          },
        ],
        "images": [
          {
            "dimensions": {
              "height": 3900,
              "width": 5200,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419866-oorvaUqv.jpeg",
          },
          {
            "dimensions": {
              "height": 3900,
              "width": 5200,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419522-HuyvQGhQ.jpeg",
          },
          {
            "dimensions": {
              "height": 3900,
              "width": 5200,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419242-noY5_ut3.jpeg",
          },
          {
            "dimensions": {
              "height": 3900,
              "width": 5200,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_355419416-9KGitTwO.jpeg",
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
                "centAmount": 12499,
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
                "centAmount": 12499,
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
                "centAmount": 12499,
                "currencyCode": "USD",
              },
            },
          },
        ],
        "sku": "AAR-34",
      }
    `);
  });
});
