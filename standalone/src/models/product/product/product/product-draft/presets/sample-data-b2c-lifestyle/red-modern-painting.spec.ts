import type { TProductDraft } from '../../../types';
import redModernPainting from './red-modern-painting';

describe(`with redModernPainting preset`, () => {
  it(`should return a redModernPainting preset`, () => {
    const redModernPaintingPreset = redModernPainting().build<TProductDraft>();
    expect(redModernPaintingPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Das rote moderne Gemälde aus Acrylfarben auf Leinwand ist ein kühnes und markantes Kunst-Statement, das jedem Raum ein zeitgenössisches Flair verleiht. Die Größenwirkung des Gemäldes kann variiert werden, indem es entweder mit mehreren Kunstwerken zusammen oder aber als eigenständiges Statement Piece aufgehängt wird. Das rote Farbschema des Gemäldes kann eine optische Spannung schaffen und ein Gefühl von Dramatik erzeugen. Der zeitgenössische Stil des Gemäldes legt seinen Schwerpunkt darauf, Emotionen und Ideen durch Farbe und Form auszudrücken. Die rote Farbe kann symbolisch gedeutet und als Leidenschaft, Stärke oder Energie ausgelegt werden. Die rote moderne Malerei auf Leinwand ist insgesamt ein lebendiges und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Dramatik und Aufregung verleiht.",
          "en": undefined,
          "en-GB": "A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.",
          "en-US": "A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.",
          "fr": undefined,
        },
        "key": "red-modern-painting",
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
              "name": "search-color",
              "value": "red",
            },
            {
              "name": "color-label",
              "value": {
                "de-DE": "Rot",
                "en-GB": "Red",
                "en-US": "Red",
              },
            },
            {
              "name": "color-code",
              "value": "#ff0000",
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3894,
                "w": 3893,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Red_Modern_Painting-1.1.jpeg",
            },
          ],
          "key": "redModernPainting01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3299EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3299GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3299USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 3299,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "RMP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Rotes modernes Gemälde",
          "en": undefined,
          "en-GB": "Red Modern Painting",
          "en-US": "Red Modern Painting",
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
          "de-DE": "rote-moderne-malerei",
          "en": undefined,
          "en-GB": "red-modern-painting",
          "en-US": "red-modern-painting",
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

  it(`should return a redModernPainting preset when built for graphql`, () => {
    const redModernPaintingPresetGraphql =
      redModernPainting().buildGraphql<TProductDraft>();
    expect(redModernPaintingPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
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
            "value": "A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.",
          },
          {
            "locale": "en-US",
            "value": "A red modern painting on canvas is a bold and striking piece of art that can add a contemporary flair to any room. The painting is created with acrylic paints on a stretched canvas, and features a range of shades of red.  The size of the painting can vary, from a small piece that can be hung on a wall as part of a gallery grouping, to a large statement piece that dominates the room. The red color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  The style of the painting is contemporary, with a focus on expressing emotions and ideas through color and form. The red color may be symbolic, representing passion, strength, or energy, depending on the artist's intentions.  Overall, a red modern painting on canvas is a vibrant and expressive work of art that can add a sense of drama and excitement to any space.",
          },
          {
            "locale": "de-DE",
            "value": "Das rote moderne Gemälde aus Acrylfarben auf Leinwand ist ein kühnes und markantes Kunst-Statement, das jedem Raum ein zeitgenössisches Flair verleiht. Die Größenwirkung des Gemäldes kann variiert werden, indem es entweder mit mehreren Kunstwerken zusammen oder aber als eigenständiges Statement Piece aufgehängt wird. Das rote Farbschema des Gemäldes kann eine optische Spannung schaffen und ein Gefühl von Dramatik erzeugen. Der zeitgenössische Stil des Gemäldes legt seinen Schwerpunkt darauf, Emotionen und Ideen durch Farbe und Form auszudrücken. Die rote Farbe kann symbolisch gedeutet und als Leidenschaft, Stärke oder Energie ausgelegt werden. Die rote moderne Malerei auf Leinwand ist insgesamt ein lebendiges und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Dramatik und Aufregung verleiht.",
          },
        ],
        "key": "red-modern-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Acrylic on canvas\\n- 2ft by 2ft","en-US":"- Acrylic on canvas\\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\\n- 2 Fuß mal 2 Fuß"}",
            },
            {
              "name": "search-color",
              "value": ""red"",
            },
            {
              "name": "color-label",
              "value": "{"en-GB":"Red","de-DE":"Rot","en-US":"Red"}",
            },
            {
              "name": "color-code",
              "value": ""#ff0000"",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3894,
                "width": 3893,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Red_Modern_Painting-1.1.jpeg",
            },
          ],
          "key": "redModernPainting01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "3299EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
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
              "key": "3299GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
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
              "key": "3299USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 3299,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "RMP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-US",
            "value": "Red Modern Painting",
          },
          {
            "locale": "en-GB",
            "value": "Red Modern Painting",
          },
          {
            "locale": "de-DE",
            "value": "Rotes modernes Gemälde",
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
            "value": "red-modern-painting",
          },
          {
            "locale": "en-GB",
            "value": "red-modern-painting",
          },
          {
            "locale": "de-DE",
            "value": "rote-moderne-malerei",
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
