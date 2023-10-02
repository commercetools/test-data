import type { TProductDraft } from '../../../types';
import purpleLandscapePainting from './purple-landscape-painting';

describe(`with purpleLandscapePainting preset`, () => {
  it(`should return a purpleLandscapePainting preset`, () => {
    const purpleLandscapePaintingPreset =
      purpleLandscapePainting().build<TProductDraft>();
    expect(purpleLandscapePaintingPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein violettes Landschaftsgemälde auf Leinwand ist ein visuell beeindruckendes Kunstwerk, das eine Reihe von Emotionen und Gefühlen hervorrufen kann. Das Gemälde wurde mit Ölfarben auf einer aufgespannten Leinwand gemalt und zeigt eine Reihe von Lila-Tönen, von tiefem Indigo bis zu hellem Lavendel. Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung wie einen Wald, eine Bergkette oder ein Feld darstellt. Die Verwendung von Violett auf dem Gemälde kann symbolisch sein und für Kreativität, Spiritualität oder Geheimnisse stehen. Der Künstler schafft durch eine Vielzahl von Techniken, wie z. B. Schichtung, Überblendung oder Tupfen, ein dynamisches und visuell interessantes Werk. Die Textur des Gemäldes wird durch sichtbare Pinselstriche und dicke Impasto-Bereiche hervorgehoben. Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Kunstwerk an die Wand gehängt werden. Das violette Farbschema des Gemäldes kann einen starken Fokuspunkt bilden, der den Blick auf das Bild lenkt und ein Gefühl der Dramatik erzeugt.  Insgesamt ist ein lilafarbenes Landschaftsgemälde auf Leinwand ein fesselndes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl der Verwunderung und Verzauberung verleihen kann.",
          "en": undefined,
          "en-GB": "A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.",
          "en-US": "A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.",
          "fr": undefined,
        },
        "key": "purple-landscape-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Ölgemälde auf Leinwand
      - Rahmen nicht im Lieferumfang enthalten
      - Größe: 4 Fuß x 3 Fuß",
                "en-GB": "- Oil painting on canvas
      - Frame not included
      - Size: 4ft by 3ft",
                "en-US": "- Oil painting on canvas
      - Frame not included
      - Size: 4ft by 3ft",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3902,
                "w": 3755,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_460846480-mbPRv_s2.jpeg",
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
                "centAmount": 8999,
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
                "centAmount": 8999,
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
                "centAmount": 8999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "BLP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Lila Landschaftsmalerei",
          "en": undefined,
          "en-GB": "Purple Landscape Painting",
          "en-US": "Purple Landscape Painting",
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
          "de-DE": "lila-landschaftsmalerei",
          "en": undefined,
          "en-GB": "purple-landscape-painting",
          "en-US": "purple-landscape-painting",
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

  it(`should return a purpleLandscapePainting preset when built for graphql`, () => {
    const purpleLandscapePaintingPresetGraphql =
      purpleLandscapePainting().buildGraphql<TProductDraft>();
    expect(purpleLandscapePaintingPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Ein violettes Landschaftsgemälde auf Leinwand ist ein visuell beeindruckendes Kunstwerk, das eine Reihe von Emotionen und Gefühlen hervorrufen kann. Das Gemälde wurde mit Ölfarben auf einer aufgespannten Leinwand gemalt und zeigt eine Reihe von Lila-Tönen, von tiefem Indigo bis zu hellem Lavendel. Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung wie einen Wald, eine Bergkette oder ein Feld darstellt. Die Verwendung von Violett auf dem Gemälde kann symbolisch sein und für Kreativität, Spiritualität oder Geheimnisse stehen. Der Künstler schafft durch eine Vielzahl von Techniken, wie z. B. Schichtung, Überblendung oder Tupfen, ein dynamisches und visuell interessantes Werk. Die Textur des Gemäldes wird durch sichtbare Pinselstriche und dicke Impasto-Bereiche hervorgehoben. Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Kunstwerk an die Wand gehängt werden. Das violette Farbschema des Gemäldes kann einen starken Fokuspunkt bilden, der den Blick auf das Bild lenkt und ein Gefühl der Dramatik erzeugt.  Insgesamt ist ein lilafarbenes Landschaftsgemälde auf Leinwand ein fesselndes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl der Verwunderung und Verzauberung verleihen kann.",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.",
          },
        ],
        "key": "purple-landscape-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Oil painting on canvas\\n- Frame not included\\n- Size: 4ft by 3ft","de-DE":"- Ölgemälde auf Leinwand\\n- Rahmen nicht im Lieferumfang enthalten\\n- Größe: 4 Fuß x 3 Fuß","en-US":"- Oil painting on canvas\\n- Frame not included\\n- Size: 4ft by 3ft"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3902,
                "width": 3755,
              },
              "label": undefined,
              "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_460846480-mbPRv_s2.jpeg",
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
                  "centAmount": 8999,
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
                  "centAmount": 8999,
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
                  "centAmount": 8999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "BLP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "__typename": "LocalizedString",
            "locale": "en-GB",
            "value": "Purple Landscape Painting",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "Lila Landschaftsmalerei",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "Purple Landscape Painting",
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
            "value": "purple-landscape-painting",
          },
          {
            "__typename": "LocalizedString",
            "locale": "de-DE",
            "value": "lila-landschaftsmalerei",
          },
          {
            "__typename": "LocalizedString",
            "locale": "en-US",
            "value": "purple-landscape-painting",
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
