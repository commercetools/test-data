import type { TProductVariantDraft } from '../../../types';
import purpleMinimalistAbstractPaintingVariant01 from './purple-minimalist-abstract-painting-variant-01';
describe(`with purpleMinimalistAbstractPaintingVariant01 preset`, () => {
  it('should return a sample purpleMinimalistAbstractPaintingVariant01 product preset', () => {
    const purpleMinimalistAbstractPaintingVariant01Preset =
      purpleMinimalistAbstractPaintingVariant01().build<TProductVariantDraft>();
    expect(purpleMinimalistAbstractPaintingVariant01Preset)
      .toMatchInlineSnapshot(`
      {
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
            "name": "product-description",
            "value": {
              "de-DE": "Ein violettes minimalistisches abstraktes Gemälde ist ein einfaches und elegantes Kunstwerk, das auf der Verwendung minimaler Elemente und einer begrenzten Farbpalette beruht, um eine auffällige visuelle Wirkung zu erzielen. Das Gemälde entsteht mit Acrylfarben auf Leinwand.  Das Farbschema des Gemäldes ist überwiegend lila, mit wenig oder gar keiner Verwendung anderer Farben. Die Verwendung von Lila im Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Mysterium darstellen.  Das Gemälde kann als Teil einer Galeriegruppe an die Wand gehängt werden. Die minimalistische Natur des Gemäldes ermöglicht es, sich nahtlos in eine Vielzahl von Einrichtungsstilen und Farbschemata einzufügen.  Insgesamt ist ein purpurfarbenes minimalistisches abstraktes Gemälde ein raffiniertes und dezentes Kunstwerk, das jedem Raum ein Gefühl von Gelassenheit und Harmonie verleihen kann. Seine einfache Komposition und die begrenzte Farbpalette können eine beruhigende und meditative Atmosphäre schaffen, während die Verwendung von Lila dem Gemälde ein Gefühl von Geheimnis und Tiefe verleiht.",
              "en-GB": "A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.",
              "en-US": "A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_528254692-mZUzyQP9.jpeg",
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
      }
    `);
  });
});
