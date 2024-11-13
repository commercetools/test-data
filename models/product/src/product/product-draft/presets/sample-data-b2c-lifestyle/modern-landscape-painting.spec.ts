import type { TProductDraft } from '../../../types';
import modernLandscapePainting from './modern-landscape-painting';

describe(`with modernLandscapePainting preset`, () => {
  it(`should return a modernLandscapePainting preset`, () => {
    const modernLandscapePaintingPreset =
      modernLandscapePainting().build<TProductDraft>();
    expect(modernLandscapePaintingPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-accents",
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
          "de-DE": "Ein modernes kubistisches Landschaftsgemälde ist ein eindrucksvolles und dynamisches Kunstwerk, das Elemente der traditionellen Landschaftsmalerei mit dem gebrochenen und abstrakten Stil des Kubismus verbindet. Das Gemälde wurde mit Ölfarben auf Leinwand gemalt und weist eine Reihe kräftiger Farben und geometrischer Formen auf. Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung darstellt. Die Szene ist jedoch fragmentiert und abstrahiert, mit sich überlagernden Farbflächen und geometrischen Formen, die die Landschaft verzerren und zerbrechen. Die Farbgebung des Gemäldes ist lebhaft und kräftig, mit starken Kontrasten zwischen hellen und dunklen Bereichen. Der Künstler hat möglicherweise eine Reihe von Techniken angewandt, wie z. B. Schichtung, Überblendung oder Tupfen, um ein dynamisches und visuell interessantes Werk zu schaffen. Der moderne und abstrakte Charakter des Gemäldes macht es zu einer perfekten Ergänzung für zeitgenössische Innenarchitekturen. Insgesamt ist ein modernes kubistisches Landschaftsgemälde ein kühnes und innovatives Kunstwerk, das jedem Raum ein Gefühl von Energie und Dynamik verleihen kann. Die fragmentierte und abstrahierte Komposition lädt den Betrachter dazu ein, das Gemälde auf seine eigene Weise zu interpretieren und mit ihm in Verbindung zu treten, während die Verwendung kräftiger Farben und geometrischer Formen ein Gefühl von Dramatik und Aufregung erzeugt.",
          "en": undefined,
          "en-GB": "A modern cubist landscape painting is a striking and dynamic work of art that combines elements of traditional landscape painting with the fractured and abstract style of cubism. The painting is created with oil paints on canvas, and features a range of bold colors and geometric shapes.  The composition of the painting is a landscape scene, depicting a natural setting. However, the scene is fragmented and abstracted, with overlapping planes of color and geometric shapes that distort and fracture the landscape.  The use of color in the painting is vibrant and bold, with strong contrasts between light and dark areas. The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece.  The modern and abstract nature of the painting makes it a perfect addition to contemporary interior design schemes.  Overall, a modern cubist landscape painting is a bold and innovative work of art that can add a sense of energy and dynamism to any space. Its fragmented and abstracted composition invites viewers to interpret and connect with the painting in their own way, while the use of bold colors and geometric shapes creates a sense of drama and excitement.",
          "en-US": "A modern cubist landscape painting is a striking and dynamic work of art that combines elements of traditional landscape painting with the fractured and abstract style of cubism. The painting is created with oil paints on canvas, and features a range of bold colors and geometric shapes.  The composition of the painting is a landscape scene, depicting a natural setting. However, the scene is fragmented and abstracted, with overlapping planes of color and geometric shapes that distort and fracture the landscape.  The use of color in the painting is vibrant and bold, with strong contrasts between light and dark areas. The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece.  The modern and abstract nature of the painting makes it a perfect addition to contemporary interior design schemes.  Overall, a modern cubist landscape painting is a bold and innovative work of art that can add a sense of energy and dynamism to any space. Its fragmented and abstracted composition invites viewers to interpret and connect with the painting in their own way, while the use of bold colors and geometric shapes creates a sense of drama and excitement.",
          "fr": undefined,
        },
        "key": "modern-landscape-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Öl auf Leinwand
      - Rahmen nicht im Lieferumfang enthalten
      - 3 Fuß mal 4 Fuß",
                "en-GB": "- Oil on canvas
      - Frame not included
      - 3ft by 4ft",
                "en-US": "- Oil on canvas
      - Frame not included
      - 3ft by 4ft",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Himmel blau:#87CEEB",
                "en-GB": "Sky Blue:#87CEEB",
                "en-US": "Sky Blue:#87CEEB",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 5355,
                "w": 5313,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Landscape_Painting-1.1.jpeg",
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
              "key": "5299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 5299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "5299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 5299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "5299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 5299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "MLP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Moderne Landschaftsmalerei",
          "en": undefined,
          "en-GB": "Modern Landscape Painting",
          "en-US": "Modern Landscape Painting",
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
          "de-DE": "moderne-landschaftsmalerei",
          "en": undefined,
          "en-GB": "modern-landscape-painting",
          "en-US": "modern-landscape-painting",
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

  it(`should return a modernLandscapePainting preset when built for graphql`, () => {
    const modernLandscapePaintingPresetGraphql =
      modernLandscapePainting().buildGraphql<TProductDraft>();
    expect(modernLandscapePaintingPresetGraphql).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "home-accents",
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
            "locale": "en-GB",
            "value": "A modern cubist landscape painting is a striking and dynamic work of art that combines elements of traditional landscape painting with the fractured and abstract style of cubism. The painting is created with oil paints on canvas, and features a range of bold colors and geometric shapes.  The composition of the painting is a landscape scene, depicting a natural setting. However, the scene is fragmented and abstracted, with overlapping planes of color and geometric shapes that distort and fracture the landscape.  The use of color in the painting is vibrant and bold, with strong contrasts between light and dark areas. The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece.  The modern and abstract nature of the painting makes it a perfect addition to contemporary interior design schemes.  Overall, a modern cubist landscape painting is a bold and innovative work of art that can add a sense of energy and dynamism to any space. Its fragmented and abstracted composition invites viewers to interpret and connect with the painting in their own way, while the use of bold colors and geometric shapes creates a sense of drama and excitement.",
          },
          {
            "locale": "de-DE",
            "value": "Ein modernes kubistisches Landschaftsgemälde ist ein eindrucksvolles und dynamisches Kunstwerk, das Elemente der traditionellen Landschaftsmalerei mit dem gebrochenen und abstrakten Stil des Kubismus verbindet. Das Gemälde wurde mit Ölfarben auf Leinwand gemalt und weist eine Reihe kräftiger Farben und geometrischer Formen auf. Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung darstellt. Die Szene ist jedoch fragmentiert und abstrahiert, mit sich überlagernden Farbflächen und geometrischen Formen, die die Landschaft verzerren und zerbrechen. Die Farbgebung des Gemäldes ist lebhaft und kräftig, mit starken Kontrasten zwischen hellen und dunklen Bereichen. Der Künstler hat möglicherweise eine Reihe von Techniken angewandt, wie z. B. Schichtung, Überblendung oder Tupfen, um ein dynamisches und visuell interessantes Werk zu schaffen. Der moderne und abstrakte Charakter des Gemäldes macht es zu einer perfekten Ergänzung für zeitgenössische Innenarchitekturen. Insgesamt ist ein modernes kubistisches Landschaftsgemälde ein kühnes und innovatives Kunstwerk, das jedem Raum ein Gefühl von Energie und Dynamik verleihen kann. Die fragmentierte und abstrahierte Komposition lädt den Betrachter dazu ein, das Gemälde auf seine eigene Weise zu interpretieren und mit ihm in Verbindung zu treten, während die Verwendung kräftiger Farben und geometrischer Formen ein Gefühl von Dramatik und Aufregung erzeugt.",
          },
          {
            "locale": "en-US",
            "value": "A modern cubist landscape painting is a striking and dynamic work of art that combines elements of traditional landscape painting with the fractured and abstract style of cubism. The painting is created with oil paints on canvas, and features a range of bold colors and geometric shapes.  The composition of the painting is a landscape scene, depicting a natural setting. However, the scene is fragmented and abstracted, with overlapping planes of color and geometric shapes that distort and fracture the landscape.  The use of color in the painting is vibrant and bold, with strong contrasts between light and dark areas. The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece.  The modern and abstract nature of the painting makes it a perfect addition to contemporary interior design schemes.  Overall, a modern cubist landscape painting is a bold and innovative work of art that can add a sense of energy and dynamism to any space. Its fragmented and abstracted composition invites viewers to interpret and connect with the painting in their own way, while the use of bold colors and geometric shapes creates a sense of drama and excitement.",
          },
        ],
        "key": "modern-landscape-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Oil on canvas\\n- Frame not included\\n- 3ft by 4ft","de-DE":"- Öl auf Leinwand\\n- Rahmen nicht im Lieferumfang enthalten\\n- 3 Fuß mal 4 Fuß","en-US":"- Oil on canvas\\n- Frame not included\\n- 3ft by 4ft"}",
            },
            {
              "name": "color",
              "value": "{"en-US":"Sky Blue:#87CEEB","en-GB":"Sky Blue:#87CEEB","de-DE":"Himmel blau:#87CEEB"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 5355,
                "width": 5313,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Landscape_Painting-1.1.jpeg",
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
              "key": "5299EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 5299,
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
              "key": "5299GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 5299,
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
              "key": "5299USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 5299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MLP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Modern Landscape Painting",
          },
          {
            "locale": "de-DE",
            "value": "Moderne Landschaftsmalerei",
          },
          {
            "locale": "en-US",
            "value": "Modern Landscape Painting",
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
            "value": "modern-landscape-painting",
          },
          {
            "locale": "de-DE",
            "value": "moderne-landschaftsmalerei",
          },
          {
            "locale": "en-US",
            "value": "modern-landscape-painting",
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
