import type { TProductVariantDraft } from '../../../types';
import modernThreeSeaterSofaVariant01 from './modern-three-seater-sofa-variant-01';
describe(`with modernThreeSeaterSofaVariant01 preset`, () => {
  it('should return a sample modernThreeSeaterSofaVariant01 product preset', () => {
    const modernThreeSeaterSofaVariant01Preset =
      modernThreeSeaterSofaVariant01().build<TProductVariantDraft>();
    expect(modernThreeSeaterSofaVariant01Preset).toMatchInlineSnapshot(`
      {
        "assets": undefined,
        "attributes": [
          {
            "name": "color",
            "value": {
              "de-DE": "#292828",
              "en-GB": "#292828",
              "en-US": "#292828",
            },
          },
          {
            "name": "colorlabel",
            "value": {
              "de-DE": "Charcoal",
              "en-GB": "Charcoal",
              "en-US": "Charcoal",
            },
          },
          {
            "name": "finishlabel",
            "value": {
              "de-DE": "Briarsmoke",
              "en-GB": "Briarsmoke",
              "en-US": "Briarsmoke",
            },
          },
          {
            "name": "finish",
            "value": {
              "de-DE": "#5c513d",
              "en-GB": "#5c513d",
              "en-US": "#5c513d",
            },
          },
          {
            "name": "productspec",
            "value": {
              "de-DE": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
              "en-GB": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
              "en-US": "- Velvet upholstery
      - 3-seater sofa
      - Assembled on site",
            },
          },
          {
            "name": "color-filter",
            "value": {
              "key": "#808080",
              "label": {
                "de-DE": "Grau",
                "en-GB": "Gray",
                "en-US": "Gray",
              },
            },
          },
          {
            "name": "product-description",
            "value": {
              "de-DE": "Ein Dreisitzer-Sofa im modernen Stil mit Polsterkissen ist ein elegantes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgemäßer Raffinesse verleihen kann. Das Sofa verfügt über einen Holzrahmen, der mit einer weichen und strapazierfähigen Polsterung bezogen ist.  Das Design des Sofas zeichnet sich durch klare Linien und einfache Formen aus, mit einem niedrigen Profil, das einen modernen und minimalistischen Look erzeugt. Die Rückenlehne und die Sitzkissen sind am Rahmen befestigt, mit einem nahtlosen und stromlinienförmigen Erscheinungsbild, das die schlanke Ästhetik des Sofas verstärkt.  Das Sofa ist oft mit Nackenrollen ausgestattet, bei denen es sich um lange, zylindrische Kissen handelt, die als Armlehnen oder zur Unterstützung des unteren Rückens beim Sitzen verwendet werden können. Die Nackenrollenkissen sind mit dem gleichen Bezugsstoff bezogen wie der Rest des Sofas, wodurch ein zusammenhängender und koordinierter Look entsteht.  Die vier Beine des Sofas sind aus Holz gefertigt, mit einem einfachen und schnörkellosen Design, das die moderne Ästhetik des Sofas ergänzt.  Die Dreisitzer-Größe des Sofas bietet ausreichend Platz zum Sitzen für drei Personen und ist damit die ideale Wahl für ein kleines bis mittelgroßes Wohnzimmer oder Familienzimmer. Das Sofa kann mit einer Reihe von Akzentstühlen, Couchtischen und anderen Möbelstücken kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen.  Insgesamt ist ein Dreisitzer-Sofa im modernen Stil ein elegantes und raffiniertes Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischem Stil verleihen kann. Seine klaren Linien, einfachen Formen und sein minimalistisches Design machen ihn zu einer vielseitigen und stilvollen Wahl für jedes moderne Zuhause.",
              "en-GB": "A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.",
              "en-US": "A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.",
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
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369085-YrPs6-AN.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302368965-v3zLuGxk.jpeg",
          },
          {
            "dimensions": {
              "h": 2500,
              "w": 2500,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369766-4ePJc6Jk.jpeg",
          },
          {
            "dimensions": {
              "h": 3840,
              "w": 5760,
            },
            "label": undefined,
            "url": "https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_302369724-aEvV9s8N.jpeg",
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
              "centAmount": 249900,
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
              "centAmount": 249900,
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
              "centAmount": 249900,
              "currencyCode": "USD",
            },
          },
        ],
        "sku": "MTSS-01",
      }
    `);
  });
});
