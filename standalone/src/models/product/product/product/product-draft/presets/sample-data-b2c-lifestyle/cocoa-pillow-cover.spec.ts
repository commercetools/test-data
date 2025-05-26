import type { TProductDraft } from '../../../types';
import cocoaPillowCover from './cocoa-pillow-cover';
describe(`with cocoaPillowCover preset`, () => {
  it('should return a sample cocoaPillowCover product preset', () => {
    const cocoaPillowCoverPreset = cocoaPillowCover().build<TProductDraft>();
    expect(cocoaPillowCoverPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "bedding",
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
          "de-DE": "Dieser quadratische Kissenbezug aus Leinen besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein quadratisches Kissen in Standardgröße passt, normalerweise etwa 30cm im Quadrat. Der Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind mit einer Paspelierung versehen, was dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Sessel platziert wird. Er kann alleine verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.  Dieser quadratische Kissenbezug aus Leinen ein vielseitiges und zeitloses Accessoire, das den Komfort und Stil jedes Raums im Haus verbessern kann.",
          "en": undefined,
          "en-GB": "A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.  The pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.",
          "en-US": "A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.  The pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.",
          "fr": undefined,
        },
        "key": "cocoa-pillow-cover",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "productspec",
              "value": {
                "de-DE": "- Waschmaschinenfest
      - Kissen nicht im Lieferumfang enthalten",
                "en-GB": "- Machine washable
      - Pillow not included",
                "en-US": "- Machine washable
      - Pillow not included",
              },
            },
            {
              "name": "color",
              "value": {
                "de-DE": "Bräunen:#D2B48C",
                "en-GB": "Tan:#D2B48C",
                "en-US": "Tan:#D2B48C",
              },
            },
          ],
          "images": [
            {
              "dimensions": {
                "h": 4160,
                "w": 6240,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocoa_Pillow_Cover-1.1.jpeg",
            },
          ],
          "key": "cocoaPillowCover01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1099EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1099,
                "currencyCode": "EUR",
              },
            },
            {
              "channel": undefined,
              "country": "GB",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1099GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1099,
                "currencyCode": "GBP",
              },
            },
            {
              "channel": undefined,
              "country": "US",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "1099USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centAmount": 1099,
                "currencyCode": "USD",
              },
            },
          ],
          "sku": "BLPC-09",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Kissenbezug "Kakao"",
          "en": undefined,
          "en-GB": "Cocoa Pillow Cover",
          "en-US": "Cocoa Pillow Cover",
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
          "de-DE": "kakao-kissenbezug",
          "en": undefined,
          "en-GB": "cocoa-pillow-cover",
          "en-US": "cocoa-pillow-cover",
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
});
