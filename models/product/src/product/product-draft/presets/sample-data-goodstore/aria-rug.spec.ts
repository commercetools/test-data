import type { TProductDraft } from '../../../types';
import ariaRug from './aria-rug';

describe(`with ariaRug preset`, () => {
  it(`should return a ariaRug preset`, () => {
    const ariaRugPreset = ariaRug().build<TProductDraft>();
    expect(ariaRugPreset).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "rugs",
      "typeId": "category",
    },
    {
      "key": "room-decor",
      "typeId": "category",
    },
    {
      "key": "home-decor",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": {
    "de": undefined,
    "de-DE": "Der Aria-Teppich ist ein Flächenteppich mit einem geometrischen Muster, das ein sich wiederholendes Design aus Formen und Linien aufweist, das sowohl modern als auch vielseitig ist. Es kann einem Raum visuelles Interesse und Textur verleihen und dabei helfen, einen Raum zu definieren und zu verankern.  Insgesamt ist ein Teppich mit geometrischem Muster eine vielseitige und stilvolle Wahl für jeden Raum. Sein mutiges und markantes Design kann einem Raum Charakter und Interesse verleihen, während seine weiche und komfortable Textur eine gemütliche und einladende Atmosphäre schaffen kann.",
    "en": undefined,
    "en-GB": "The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.",
    "en-US": "The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.",
    "fr": undefined,
  },
  "key": "aria-rug",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
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
          "de-DE": "Elfenbein:#FFFFF0",
          "en-GB": "Ivory:#FFFFF0",
          "en-US": "Ivory:#FFFFF0",
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
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.1.jpeg",
      },
      {
        "dimensions": {
          "h": 3900,
          "w": 5200,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.2.jpeg",
      },
      {
        "dimensions": {
          "h": 3900,
          "w": 5200,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.4.jpeg",
      },
      {
        "dimensions": {
          "h": 3900,
          "w": 5200,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.3.jpeg",
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
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": {
    "de": undefined,
    "de-DE": "Teppich "Aria"",
    "en": undefined,
    "en-GB": "Aria Rug",
    "en-US": "Aria Rug",
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
    "de-DE": "aria-teppich",
    "en": undefined,
    "en-GB": "aria-rug",
    "en-US": "aria-rug",
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

  it(`should return a ariaRug preset when built for graphql`, () => {
    const ariaRugPresetGraphql = ariaRug().buildGraphql<TProductDraft>();
    expect(ariaRugPresetGraphql).toMatchInlineSnapshot(`
{
  "categories": [
    {
      "key": "rugs",
      "typeId": "category",
    },
    {
      "key": "room-decor",
      "typeId": "category",
    },
    {
      "key": "home-decor",
      "typeId": "category",
    },
  ],
  "categoryOrderHints": undefined,
  "description": [
    {
      "locale": "de-DE",
      "value": "Der Aria-Teppich ist ein Flächenteppich mit einem geometrischen Muster, das ein sich wiederholendes Design aus Formen und Linien aufweist, das sowohl modern als auch vielseitig ist. Es kann einem Raum visuelles Interesse und Textur verleihen und dabei helfen, einen Raum zu definieren und zu verankern.  Insgesamt ist ein Teppich mit geometrischem Muster eine vielseitige und stilvolle Wahl für jeden Raum. Sein mutiges und markantes Design kann einem Raum Charakter und Interesse verleihen, während seine weiche und komfortable Textur eine gemütliche und einladende Atmosphäre schaffen kann.",
    },
    {
      "locale": "en-GB",
      "value": "The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.",
    },
    {
      "locale": "en-US",
      "value": "The Aria Rug is an area rug with a geometric pattern that features a repeating design made up of shapes and lines, which is both modern and eclectic. It can add visual interest and texture to a room, and can help define and anchor a space.  Overall, an area rug with a geometric pattern is a versatile and stylish choice for any room. Its bold and striking design can add character and interest to a space, while its soft and comfortable texture can create a cozy and inviting atmosphere.",
    },
  ],
  "key": "aria-rug",
  "masterVariant": {
    "assets": undefined,
    "attributes": [
      {
        "name": "productspec",
        "value": "{"en-GB":"- Dry clean only\\n- 5ft x 7ft","de-DE":"- Nur chemische Reinigung\\n- 5 Fuß x 7 Fuß","en-US":"- Dry clean only\\n- 5ft x 7ft"}",
      },
      {
        "name": "color",
        "value": "{"en-GB":"Ivory:#FFFFF0","de-DE":"Elfenbein:#FFFFF0","en-US":"Ivory:#FFFFF0"}",
      },
    ],
    "images": [
      {
        "dimensions": {
          "height": 3900,
          "width": 5200,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.1.jpeg",
      },
      {
        "dimensions": {
          "height": 3900,
          "width": 5200,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.2.jpeg",
      },
      {
        "dimensions": {
          "height": 3900,
          "width": 5200,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.4.jpeg",
      },
      {
        "dimensions": {
          "height": 3900,
          "width": 5200,
        },
        "label": undefined,
        "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.3.jpeg",
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
  },
  "metaDescription": undefined,
  "metaKeywords": undefined,
  "metaTitle": undefined,
  "name": [
    {
      "locale": "en-US",
      "value": "Aria Rug",
    },
    {
      "locale": "en-GB",
      "value": "Aria Rug",
    },
    {
      "locale": "de-DE",
      "value": "Teppich "Aria"",
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
      "value": "aria-rug",
    },
    {
      "locale": "en-GB",
      "value": "aria-rug",
    },
    {
      "locale": "de-DE",
      "value": "aria-teppich",
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
