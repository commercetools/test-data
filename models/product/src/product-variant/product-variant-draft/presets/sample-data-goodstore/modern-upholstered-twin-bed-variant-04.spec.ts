import type { TProductVariantDraft } from '../../../types';
import modernUpholsteredTwinBedVariant04 from './modern-upholstered-twin-bed-variant-04';
describe(`with modernUpholsteredTwinBedVariant04 preset`, () => {
  it('should return a sample modernUpholsteredTwinBedVariant04 product preset', () => {
    const modernUpholsteredTwinBedVariant04Preset =
      modernUpholsteredTwinBedVariant04().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBedVariant04Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
              "en-GB": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
              "en-US": "- Cotton upholstery 
      - Manufactured wood
      - Twin size
      - Assembled on site",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "lightslategrey",
              "en-GB": "lightslategrey",
              "en-US": "lightslategrey",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Oak",
              "en-GB": "Oak",
              "en-US": "Oak",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Tan",
              "en-GB": "Tan",
              "en-US": "Tan",
            },
          },
          {
            "name": "color",
            "value": {
              "de-DE": "tan",
              "en-GB": "tan",
              "en-US": "tan",
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Twin-Size-Bett mit Stoffpolsterung in modernem Stil ist ein elegantes und stilvolles Möbelstück, das jedem Schlafzimmer einen Hauch von Raffinesse verleihen kann. Das Bett hat typischerweise ein einfaches und minimalistisches Design mit klaren Linien und geometrischen Formen, die charakteristisch für den modernen Stil sind.  Der Rahmen des Bettes ist aus Holz gefertigt und hat ein niedriges Profil, das einen eleganten und modernen Look erzeugt. Die Stoffpolsterung bedeckt das Kopfteil, das Fußteil und die Seitengitter des Bettes und bietet eine weiche und bequeme Oberfläche zum Anlehnen oder Ausruhen.  Die Größe des Bettes ist Twin, was es zu einer idealen Wahl für kleinere Schlafzimmer oder Gästezimmer macht. Es kann mit einer Reihe von Bettwäsche und Accessoires kombiniert werden, um einen zusammenhängenden und stilvollen Look zu schaffen, der Ihren persönlichen Stil widerspiegelt.  Insgesamt ist ein Twin-Size-Bett mit Stoffpolsterung in modernem Stil ein elegantes und raffiniertes Möbelstück, das das Erscheinungsbild jedes Schlafzimmers aufwerten kann. Sein einfaches, aber stilvolles Design, kombiniert mit seiner bequemen und weichen Polsterung, machen es zu einem perfekten Ort, um sich stilvoll auszuruhen und zu entspannen.",
              "en-GB": "A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.",
              "en-US": "A twin size bed with fabric upholstery in a modern style is a sleek and stylish piece of furniture that can add a touch of sophistication to any bedroom. The bed typically features a simple and minimalistic design, with clean lines and geometric shapes that are characteristic of modern style.  The frame of the bed is made from wood, with a low profile that creates a sleek and contemporary look. The fabric upholstery covers the headboard, footboard, and side rails of the bed, providing a soft and comfortable surface to lean against or rest on.  The size of the bed is twin, which makes it an ideal choice for smaller bedrooms or guest rooms. It can be paired with a range of bedding and accessories to create a cohesive and stylish look that reflects your personal style.  Overall, a twin size bed with fabric upholstery in a modern style is a sleek and sophisticated piece of furniture that can elevate the look and feel of any bedroom. Its simple yet stylish design, combined with its comfortable and soft upholstery, make it a perfect place to rest and relax in style.",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#D2B48C",
              "label": {
                "de-DE": "Bräunen",
                "en-GB": "Tan",
                "en-US": "Tan",
              },
            },
          },
        ],
        "images": [
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_158695978-0_umu8m8.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_158695983-n4MNAzUn.jpeg",
          },
          {
            "dimensions": {
              "h": 3000,
              "w": 3000,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_158695968-APIXecTC.jpeg",
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
              "centAmount": 45000,
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
              "centAmount": 45000,
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
              "centAmount": 45000,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MUTB-04",
      }
    `);
  });
});
