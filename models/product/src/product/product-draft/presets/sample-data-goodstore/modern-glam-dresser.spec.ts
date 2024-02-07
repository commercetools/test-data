import type { TProductDraft } from '../../../types';
import modernGlamDresser from './modern-glam-dresser';

describe(`with modernGlamDresser preset`, () => {
  it(`should return a modernGlamDresser preset`, () => {
    const modernGlamDresserPreset = modernGlamDresser().build<TProductDraft>();
    expect(modernGlamDresserPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Eine moderne glamouröse Kommode ist ein stilvolles und elegantes Möbelstück, das modernes Design mit glamourösen Akzenten verbindet. Sie zeichnet sich durch klare Linien, glatte Oberflächen und Metallic-Finish aus, wodurch ein schickes und anspruchsvolles Aussehen entsteht, das jedem Schlafzimmer einen Hauch von Luxus verleiht. Die Kommode ist aus hochwertigen Materialien gefertigt. Die Schubladen sind geräumig und lassen sich leicht öffnen und schließen und bieten reichlich Stauraum für Kleidung, Accessoires und andere Gegenstände. Die Kommode verfügt außerdem über glamouröse Metallgriffe, die dem Möbelstück einen Hauch von Eleganz und Raffinesse verleihen. Das Gesamtdesign der Kommode ist schlank und minimalistisch, mit einem Schwerpunkt auf klaren Linien und einfachen Formen. Eine moderne, glamouröse Kommode ist eine schöne Ergänzung für jedes Schlafzimmer und verleiht dem Raum einen Hauch von Luxus und Raffinesse. Die klaren Linien, die metallischen Oberflächen und die glamourösen Akzente sorgen für einen modernen und eleganten Look, der eine Vielzahl von Einrichtungsstilen ergänzen kann.",
          "en": undefined,
          "en-GB": "A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.",
          "en-US": "A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.",
          "fr": undefined,
        },
        "key": "modern-glam-dresser",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "finish",
              "value": {
                "de-DE": "silver",
                "en-GB": "#8A8071",
                "en-US": "silver",
              },
            },
            {
              "name": "finishlabel",
              "value": {
                "de-DE": "Suede",
                "en-GB": "Suede",
                "en-US": "Suede",
              },
            },
            {
              "name": "productspec",
              "value": {
                "de-DE": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
                "en-GB": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
                "en-US": "- 3 large drawers
      - suede  and nickel finish on drawer handles
      - assembly on site",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#C0C0C0",
                "label": {
                  "de-DE": "Silber",
                  "en-GB": "Silver",
                  "en-US": "Silver",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.3.jpeg",
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
                "centAmount": 179900,
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
                "centAmount": 179900,
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
                "centAmount": 179900,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MGD-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Moderne glamouröse Kommode",
          "en": undefined,
          "en-GB": "Modern Glam Dresser",
          "en-US": "Modern Glam Dresser",
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
          "de-DE": "moderne-glamourse-kommode",
          "en": undefined,
          "en-GB": "modern-glam-dresser",
          "en-US": "modern-glam-dresser",
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

  it(`should return a modernGlamDresser preset when built for graphql`, () => {
    const modernGlamDresserPresetGraphql =
      modernGlamDresser().buildGraphql<TProductDraft>();
    expect(modernGlamDresserPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
          {
            "key": "storage--tables",
            "typeId": "category",
          },
          {
            "key": "bedroom-furniture",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.",
          },
          {
            "locale": "de-DE",
            "value": "Eine moderne glamouröse Kommode ist ein stilvolles und elegantes Möbelstück, das modernes Design mit glamourösen Akzenten verbindet. Sie zeichnet sich durch klare Linien, glatte Oberflächen und Metallic-Finish aus, wodurch ein schickes und anspruchsvolles Aussehen entsteht, das jedem Schlafzimmer einen Hauch von Luxus verleiht. Die Kommode ist aus hochwertigen Materialien gefertigt. Die Schubladen sind geräumig und lassen sich leicht öffnen und schließen und bieten reichlich Stauraum für Kleidung, Accessoires und andere Gegenstände. Die Kommode verfügt außerdem über glamouröse Metallgriffe, die dem Möbelstück einen Hauch von Eleganz und Raffinesse verleihen. Das Gesamtdesign der Kommode ist schlank und minimalistisch, mit einem Schwerpunkt auf klaren Linien und einfachen Formen. Eine moderne, glamouröse Kommode ist eine schöne Ergänzung für jedes Schlafzimmer und verleiht dem Raum einen Hauch von Luxus und Raffinesse. Die klaren Linien, die metallischen Oberflächen und die glamourösen Akzente sorgen für einen modernen und eleganten Look, der eine Vielzahl von Einrichtungsstilen ergänzen kann.",
          },
          {
            "locale": "en-US",
            "value": "A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.",
          },
        ],
        "key": "modern-glam-dresser",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "finish",
              "value": "{"en-US":"silver","en-GB":"#8A8071","de-DE":"silver"}",
            },
            {
              "name": "finishlabel",
              "value": "{"en-US":"Suede","en-GB":"Suede","de-DE":"Suede"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site","en-GB":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site","de-DE":"- 3 large drawers\\n- suede  and nickel finish on drawer handles\\n- assembly on site"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#C0C0C0","label":{"de-DE":"Silber","en-GB":"Silver","en-US":"Silver"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Glam_Dresser-1.3.jpeg",
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
                  "centAmount": 179900,
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
                  "centAmount": 179900,
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
                  "centAmount": 179900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MGD-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Modern Glam Dresser",
          },
          {
            "locale": "de-DE",
            "value": "Moderne glamouröse Kommode",
          },
          {
            "locale": "en-US",
            "value": "Modern Glam Dresser",
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
            "value": "modern-glam-dresser",
          },
          {
            "locale": "de-DE",
            "value": "moderne-glamourse-kommode",
          },
          {
            "locale": "en-US",
            "value": "modern-glam-dresser",
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
