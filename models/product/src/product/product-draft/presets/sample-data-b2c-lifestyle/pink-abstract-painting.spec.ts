import type { TProductDraft } from '../../../types';
import pinkAbstractPainting from './pink-abstract-painting';

describe(`with pinkAbstractPainting preset`, () => {
  it(`should return a pinkAbstractPainting preset`, () => {
    const pinkAbstractPaintingPreset =
      pinkAbstractPainting().build<TProductDraft>();
    expect(pinkAbstractPaintingPreset).toMatchInlineSnapshot(`
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
          "de-DE": "Ein rosafarbenes abstraktes Gemälde ist ein lebhaftes und auffälliges Kunstwerk, das eine Reihe von Emotionen und Interpretationen hervorrufen kann. Das Gemälde wurde mit Acrylfarben auf Leinwand gemalt. Die Komposition des Gemäldes ist abstrakt und enthält keine erkennbaren Objekte oder Figuren. Die Verwendung von Rosa auf dem Gemälde kann symbolisch sein und Liebe, Weiblichkeit oder Energie darstellen. Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Einzelstück an die Wand gehängt werden. Das Rosa des Gemäldes kann einen starken Fokuspunkt bilden, der das Auge auf das Bild lenkt und ein Gefühl von Energie erzeugt. Insgesamt ist ein rosafarbenes abstraktes Gemälde ein kühnes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Vitalität und Aufregung verleihen kann. Die lebendige Farbgebung und die abstrakte Komposition können ein geheimnisvolles Gefühl und Faszination erzeugen und den Betrachter dazu einladen, das Gemälde auf seine eigene Weise zu interpretieren und sich mit ihm zu verbinden.",
          "en": undefined,
          "en-GB": "A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.",
          "en-US": "A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.",
          "fr": undefined,
        },
        "key": "pink-abstract-painting",
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
              "name": "color",
              "value": {
                "de-DE": "Rosa:#FFC0CB",
                "en-GB": "Pink:#FFC0CB",
                "en-US": "Pink:#FFC0CB",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 3873,
                "w": 3873,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Pink_Abstract_Painting-1.1.jpeg",
            },
          ],
          "key": "pinkAbstractPainting01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "5999EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 5999,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "5999GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 5999,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "5999USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 5999,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "PAP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Abstrakte Rosa Malerei",
          "en": undefined,
          "en-GB": "Pink Abstract Painting",
          "en-US": "Pink Abstract Painting",
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
          "de-DE": "rosa-abstrakte-malerei",
          "en": undefined,
          "en-GB": "pink-abstract-painting",
          "en-US": "pink-abstract-painting",
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

  it(`should return a pinkAbstractPainting preset when built for graphql`, () => {
    const pinkAbstractPaintingPresetGraphql =
      pinkAbstractPainting().buildGraphql<TProductDraft>();
    expect(pinkAbstractPaintingPresetGraphql).toMatchInlineSnapshot(`
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
            "value": "A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.",
          },
          {
            "locale": "de-DE",
            "value": "Ein rosafarbenes abstraktes Gemälde ist ein lebhaftes und auffälliges Kunstwerk, das eine Reihe von Emotionen und Interpretationen hervorrufen kann. Das Gemälde wurde mit Acrylfarben auf Leinwand gemalt. Die Komposition des Gemäldes ist abstrakt und enthält keine erkennbaren Objekte oder Figuren. Die Verwendung von Rosa auf dem Gemälde kann symbolisch sein und Liebe, Weiblichkeit oder Energie darstellen. Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Einzelstück an die Wand gehängt werden. Das Rosa des Gemäldes kann einen starken Fokuspunkt bilden, der das Auge auf das Bild lenkt und ein Gefühl von Energie erzeugt. Insgesamt ist ein rosafarbenes abstraktes Gemälde ein kühnes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Vitalität und Aufregung verleihen kann. Die lebendige Farbgebung und die abstrakte Komposition können ein geheimnisvolles Gefühl und Faszination erzeugen und den Betrachter dazu einladen, das Gemälde auf seine eigene Weise zu interpretieren und sich mit ihm zu verbinden.",
          },
          {
            "locale": "en-US",
            "value": "A pink abstract painting is a vibrant and eye-catching work of art that can evoke a range of emotions and interpretations. The painting is created with acrylic paints on canvas.  The composition of the painting is abstract, with no recognizable objects or figures. The use of pink in the painting may be symbolic, representing love, femininity, or energy.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The pink color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of energy.  Overall, a pink abstract painting is a bold and expressive work of art that can add a sense of vitality and excitement to any space. Its vibrant color scheme and abstract composition can create a sense of mystery and intrigue, inviting viewers to interpret and connect with the painting in their own way.",
          },
        ],
        "key": "pink-abstract-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": "{"en-GB":"- Acrylic on canvas\\n- 2ft by 2ft","de-DE":"- Acryl auf Leinwand\\n- 2 Fuß mal 2 Fuß","en-US":"- Acrylic on canvas\\n- 2ft by 2ft"}",
            },
            {
              "name": "color",
              "value": "{"en-GB":"Pink:#FFC0CB","de-DE":"Rosa:#FFC0CB","en-US":"Pink:#FFC0CB"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 3873,
                "width": 3873,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Pink_Abstract_Painting-1.1.jpeg",
            },
          ],
          "key": "pinkAbstractPainting01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "5999EUR",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 5999,
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
              "key": "5999GBP",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 5999,
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
              "key": "5999USD",
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 5999,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "PAP-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Pink Abstract Painting",
          },
          {
            "locale": "de-DE",
            "value": "Abstrakte Rosa Malerei",
          },
          {
            "locale": "en-US",
            "value": "Pink Abstract Painting",
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
            "value": "pink-abstract-painting",
          },
          {
            "locale": "de-DE",
            "value": "rosa-abstrakte-malerei",
          },
          {
            "locale": "en-US",
            "value": "pink-abstract-painting",
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
