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
        "key": "purple-landscape-painting",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
  {
    "name": "productspec",
    "value": {
      "en-GB": "- Oil painting on canvas\n- Frame not included\n- Size: 4ft by 3ft",
      "de-DE": "- Ölgemälde auf Leinwand\n- Rahmen nicht im Lieferumfang enthalten\n- Größe: 4 Fuß x 3 Fuß",
      "en-US": "- Oil painting on canvas\n- Frame not included\n- Size: 4ft by 3ft"
    }
  },
  {
    "name": "product-description",
    "value": {
      "en-GB": "A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.",
      "en-US": "A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.",
      "de-DE": "Ein lila Landschaftsgemälde auf Leinwand ist ein visuell beeindruckendes Kunstwerk, das eine Reihe von Emotionen und Gefühlen hervorrufen kann. Das Gemälde wurde mit Ölfarben auf einer gespannten Leinwand erstellt und weist eine Reihe von Violetttönen auf, von tiefem Indigo bis zu hellem Lavendel.  Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung wie einen Wald, eine Bergkette oder ein Feld darstellt. Die Verwendung von Lila im Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Mysterium darstellen.  Der Künstler hat möglicherweise eine Vielzahl von Techniken verwendet, wie z. B. Schichten, Mischen oder Tüpfeln, um ein dynamisches und visuell interessantes Stück zu schaffen. Die Textur des Gemäldes kann auch durch sichtbare Pinselstriche oder dicke pastose Bereiche betont werden.  Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Statement an die Wand gehängt werden. Das violette Farbschema des Gemäldes kann einen starken Brennpunkt schaffen, den Blick darauf lenken und ein Gefühl von Dramatik erzeugen.  Insgesamt ist ein lila Landschaftsgemälde auf Leinwand ein fesselndes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl von Staunen und Verzauberung verleihen kann."
    }
  }
]
,
          "images": [
  {
    "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_460846480-mbPRv_s2.jpeg",
    "dimensions": {
      "w": 3755,
      "h": 3902
    }
  }
]
,
          "sku": undefined,
          "prices": [
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "EUR",
      "centAmount": 8999,
      "fractionDigits": 2
    },
    "country": "DE"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "GBP",
      "centAmount": 8999,
      "fractionDigits": 2
    },
    "country": "GB"
  },
  {
    "value": {
      "type": "centPrecision",
      "currencyCode": "USD",
      "centAmount": 8999,
      "fractionDigits": 2
    },
    "country": "US"
  }
]
,
        },
      "metaDescription": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "metaTitle": {
            "de-DE": "",
            "en-GB": "",
            "en-US": ""
          },
      "name": {
            "de-DE": "Lila Landschaftsmalerei",
            "en-GB": "Purple Landscape Painting",
            "en-US": "Purple Landscape Painting"
          },
        "priceMode": Embedded,
        "productType": {
          "key": "furniture-and-decor",
          "typeId": "product-type",
        },
        "publish": true,
        "searchKeywords": undefined,
        "slug": {
            "de-DE": "lila-landschaftsmalerei",
            "en-GB": "purple-landscape-painting",
            "en-US": "purple-landscape-painting"
          },
        "taxCategory": {
          "key": "standard-tax-category",
          "typeId": "tax-category",
        },
        "variants": undefined,
      }
    `);
  });
});
