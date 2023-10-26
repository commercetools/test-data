import type { TProductDraft } from '../../../types';
import purpleMinimalistAbstractPainting from './purple-minimalist-abstract-painting';

describe(`with purpleMinimalistAbstractPainting preset`, () => {
  it(`should return a purpleMinimalistAbstractPainting preset`, () => {
    const purpleMinimalistAbstractPaintingPreset =
      purpleMinimalistAbstractPainting().build<TProductDraft>();
    expect(purpleMinimalistAbstractPaintingPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein lilafarbenes minimalistisches abstraktes Gemälde ist ein einfaches und elegantes Kunstwerk, das durch die Verwendung minimaler Elemente und einer begrenzten Farbpalette eine beeindruckende visuelle Wirkung erzielt. Das Gemälde wurde mit Acrylfarben auf Leinwand gemalt. Das Farbschema des Gemäldes ist überwiegend violett, mit wenig bis gar keiner Verwendung anderer Farben. Die Verwendung von Violett in dem Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Geheimnisse darstellen. Das Gemälde kann als Teil einer Galeriegruppe an die Wand gehängt werden. Der minimalistische Charakter des Gemäldes erlaubt es, es nahtlos mit einer Vielzahl von Einrichtungsstilen und Farbschemata zu kombinieren. Insgesamt ist ein lilafarbenes, minimalistisches, abstraktes Gemälde ein raffiniertes und unaufdringliches Kunstwerk, das jedem Raum ein Gefühl von Gelassenheit und Harmonie verleihen kann. Die einfache Komposition und die begrenzte Farbpalette können eine beruhigende und meditative Atmosphäre schaffen, während die Verwendung von Lila dem Gemälde ein Gefühl von Geheimnis und Tiefe verleiht.",
          "en": undefined,
          "en-GB": "A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.",
          "en-US": "A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.",
          "fr": undefined,
        },
        "key": "purple-minimalist-abstract-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Acryl auf Leinwand
      - 2 Fuß mal 2 Fuß",
                "en-GB": "- Acrylic on canvas
      - 2ft by 2ft",
                "en-US": "- Acrylic on canvas
      - 2ft by 2ft",
              },
            },
            {
              "name": "color-filter",
              "value": {
                "key": "#A020F0",
                "label": {
                  "de-DE": "Lila",
                  "en-GB": "Purple",
                  "en-US": "Purple",
                },
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 2903,
                "w": 3148,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Purple_Minimalist_Abstract_Painting-1.1.jpeg",
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
                "centAmount": 2999,
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
                "centAmount": 2999,
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
                "centAmount": 2999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "PMAP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Lila Minimalistische Abstrakte Malerei",
          "en": undefined,
          "en-GB": "Purple Minimalist Abstract Painting",
          "en-US": "Purple Minimalist Abstract Painting",
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
          "de-DE": "lila-minimalistische-abstrakte-malerei",
          "en": undefined,
          "en-GB": "purple-minimalist-abstract-painting",
          "en-US": "purple-minimalist-abstract-painting",
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

  it(`should return a purpleMinimalistAbstractPainting preset when built for graphql`, () => {
    const purpleMinimalistAbstractPaintingPresetGraphql =
      purpleMinimalistAbstractPainting().buildGraphql<TProductDraft>();
    expect(purpleMinimalistAbstractPaintingPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "__typename": "Reference",
            "key": "home-accents",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "room-decor",
            "typeId": "category",
          },
          {
            "__typename": "Reference",
            "key": "home-decor",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein lilafarbenes minimalistisches abstraktes Gemälde ist ein einfaches und elegantes Kunstwerk, das durch die Verwendung minimaler Elemente und einer begrenzten Farbpalette eine beeindruckende visuelle Wirkung erzielt. Das Gemälde wurde mit Acrylfarben auf Leinwand gemalt. Das Farbschema des Gemäldes ist überwiegend violett, mit wenig bis gar keiner Verwendung anderer Farben. Die Verwendung von Violett in dem Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Geheimnisse darstellen. Das Gemälde kann als Teil einer Galeriegruppe an die Wand gehängt werden. Der minimalistische Charakter des Gemäldes erlaubt es, es nahtlos mit einer Vielzahl von Einrichtungsstilen und Farbschemata zu kombinieren. Insgesamt ist ein lilafarbenes, minimalistisches, abstraktes Gemälde ein raffiniertes und unaufdringliches Kunstwerk, das jedem Raum ein Gefühl von Gelassenheit und Harmonie verleihen kann. Die einfache Komposition und die begrenzte Farbpalette können eine beruhigende und meditative Atmosphäre schaffen, während die Verwendung von Lila dem Gemälde ein Gefühl von Geheimnis und Tiefe verleiht.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.",
          },
        ],
        "key": "purple-minimalist-abstract-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Acrylic on canvas\\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\\n- 2 Fuß mal 2 Fuß","en-US":"- Acrylic on canvas\\n- 2ft by 2ft"}",
            },
            {
              "name": "color-filter",
              "value": "{"key":"#A020F0","label":{"de-DE":"Lila","en-GB":"Purple","en-US":"Purple"}}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2903,
                "width": 3148,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Purple_Minimalist_Abstract_Painting-1.1.jpeg",
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
                  "centAmount": 2999,
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
                  "centAmount": 2999,
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
                  "centAmount": 2999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "PMAP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Purple Minimalist Abstract Painting",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Lila Minimalistische Abstrakte Malerei",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Purple Minimalist Abstract Painting",
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
            "value": "purple-minimalist-abstract-painting",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "lila-minimalistische-abstrakte-malerei",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "purple-minimalist-abstract-painting",
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
