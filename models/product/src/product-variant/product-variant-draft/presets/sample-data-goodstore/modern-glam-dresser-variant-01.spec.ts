import type { TProductVariantDraft } from '../../../types';
import modernGlamDresserVariant01 from './modern-glam-dresser-variant-01';
describe(`with modernGlamDresserVariant01 preset`, () => {
  it('should return a sample modernGlamDresserVariant01 product preset', () => {
    const modernGlamDresserVariant01Preset =
      modernGlamDresserVariant01().build<TProductVariantDraft>();
    expect(modernGlamDresserVariant01Preset).toMatchInlineSnapshot(`
      {
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
            "name": "product-description",
            "value": {
              "de-DE": "Eine Modern Glam Kommode ist ein stilvolles und elegantes Möbelstück, das modernes Design mit glamourösen Akzenten verbindet. Es zeichnet sich durch klare Linien, glatte Oberflächen und Metallic-Oberflächen aus und schafft einen schicken und raffinierten Look, der jedem Schlafzimmer einen Hauch von Luxus verleiht.  Die Kommode ist aus hochwertigen Materialien gefertigt. Die Schubladen sind geräumig und leicht zu öffnen und zu schließen und bieten ausreichend Stauraum für Kleidung, Accessoires und andere Gegenstände.  Die Kommode verfügt auch über glamouröse Griffe mit Metallakzenten, die dem Stück einen Hauch von Eleganz und Raffinesse verleihen. Das Gesamtdesign der Kommode ist schlicht und minimalistisch, mit Betonung auf klaren Linien und einfachen Formen.  Eine moderne, glamouröse Kommode kann eine schöne Ergänzung für jedes Schlafzimmer sein und dem Raum einen Hauch von Luxus und Raffinesse verleihen. Seine klaren Linien, metallischen Oberflächen und glamourösen Akzente schaffen einen modernen und eleganten Look, der eine Vielzahl von Einrichtungsstilen ergänzen kann.",
              "en-GB": "A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.",
              "en-US": "A modern glam dresser is a stylish and elegant piece of furniture that combines modern design with glamorous accents. It features clean lines, sleek surfaces, and metallic finishes, creating a chic and sophisticated look that adds a touch of luxury to any bedroom.  The dresser is made of high-quality materials. The drawers are spacious and easy to open and close, providing ample storage space for clothing, accessories, and other items.  The dresser also features glamorous metal accents handles, adding a touch of elegance and sophistication to the piece. The overall design of the dresser is sleek and minimalist, with an emphasis on clean lines and simple shapes.  A modern glam dresser can be a beautiful addition to any bedroom, adding a touch of luxury and sophistication to the space. Its clean lines, metallic finishes, and glamorous accents create a modern and elegant look that can complement a variety of decor styles.",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650073-NL2GuIBX.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305650236-phU3WdJ7.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305652757--mQZtlpW.jpeg",
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
      }
    `);
  });
});
