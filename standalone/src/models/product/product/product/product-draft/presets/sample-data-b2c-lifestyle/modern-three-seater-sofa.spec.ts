import type { TProductDraft } from '../../../types';
import modernThreeSeaterSofa from './modern-three-seater-sofa';

describe(`with modernThreeSeaterSofa preset`, () => {
  it(`should return a modernThreeSeaterSofa preset`, () => {
    const modernThreeSeaterSofaPreset =
      modernThreeSeaterSofa().build<TProductDraft>();
    expect(modernThreeSeaterSofaPreset).toMatchInlineSnapshot(`
      {
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": {
          "de": undefined,
          "de-DE": "Das Dreisitzer-Sofa im modernen Stil mit Nackenkissen ist ein elegantes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischer Raffinesse verleihen kann. Das Sofa besteht aus einem Holzrahmen, der mit einer weichen und strapazierfähigen Polsterung überzogen ist. Das Design des Sofas zeichnet sich durch klare Linien und einfache Formen aus, mit einem niedrigen Profil, das einen modernen und minimalistischen Look erzeugt. Die Rückenlehne und die Sitzkissen sind mit dem Rahmen verbunden, so dass ein nahtloses und stromlinienförmiges Erscheinungsbild entsteht, das die schlichte Ästhetik des Sofas unterstreicht. Das Sofa ist häufig mit Nackenkissen ausgestattet. Das sind lange, zylindrische Kissen, die als Armlehnen oder zur Unterstützung des unteren Rückens beim Sitzen verwendet werden können. Die Nackenkissen sind mit dem gleichen Bezugsstoff wie der Rest des Sofas bezogen, wodurch ein einheitliches und abgestimmtes Aussehen entsteht. Die vier Beine des Sofas sind aus Holz und haben ein einfaches und schnörkelloses Design, das die moderne Ästhetik des Sofas ergänzt. Die Größe des Sofas als Dreisitzer bietet ausreichend Platz für drei Personen und ist damit die ideale Wahl für ein kleines bis mittelgroßes Wohnzimmer oder ein Familienzimmer. Das Sofa kann mit einer Reihe von Akzentstühlen, Couchtischen und anderen Möbelstücken kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen. Insgesamt ist ein Dreisitzer-Sofa im modernen Stil ein elegantes und anspruchsvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischem Stil verleihen kann. Seine klaren Linien, einfachen Formen und sein minimalistisches Design machen es zu einer vielseitigen und stilvollen Wahl für jedes moderne Zuhause.",
          "en": undefined,
          "en-GB": "A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.",
          "en-US": "A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.",
          "fr": undefined,
        },
        "key": "modern-three-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": {
                "de-DE": "Dunkles Schiefer grau:#2F4F4F",
                "en-GB": "Dark Slate Grey:#2F4F4F",
                "en-US": "Dark Slate Gray:#2F4F4F",
              },
            },
            {
              "name": "finish",
              "value": {
                "de-DE": "Sattel braun:#8b4513",
                "en-GB": "Saddle Brown:#8b4513",
                "en-US": "Saddle Brown:#8b4513",
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
          ],
          "images": [
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.2.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "h": 2500,
                "w": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.4.jpeg",
            },
            {
              "dimensions": {
                "h": 3840,
                "w": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.3.jpeg",
            },
          ],
          "key": "modernThreeSeaterSofa01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "249900EUR",
              "recurrencePolicy": undefined,
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
              "key": "249900GBP",
              "recurrencePolicy": undefined,
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
              "key": "249900USD",
              "recurrencePolicy": undefined,
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
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": {
          "de": undefined,
          "de-DE": "Modernes Dreisitzer-Sofa",
          "en": undefined,
          "en-GB": "Modern Three Seater Sofa",
          "en-US": "Modern Three Seater Sofa",
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
          "de-DE": "modernes-dreisitzer-sofa",
          "en": undefined,
          "en-GB": "modern-three-seater-sofa",
          "en-US": "modern-three-seater-sofa",
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

  it(`should return a modernThreeSeaterSofa preset when built for graphql`, () => {
    const modernThreeSeaterSofaPresetGraphql =
      modernThreeSeaterSofa().buildGraphql<TProductDraft>();
    expect(modernThreeSeaterSofaPresetGraphql).toMatchInlineSnapshot(`
      {
        "attributes": null,
        "categories": [
          {
            "key": "living-room-furniture",
            "typeId": "category",
          },
          {
            "key": "sofas",
            "typeId": "category",
          },
          {
            "key": "furniture",
            "typeId": "category",
          },
          {
            "key": "collections",
            "typeId": "category",
          },
          {
            "key": "the-modernist",
            "typeId": "category",
          },
        ],
        "categoryOrderHints": undefined,
        "description": [
          {
            "locale": "en-GB",
            "value": "A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.",
          },
          {
            "locale": "de-DE",
            "value": "Das Dreisitzer-Sofa im modernen Stil mit Nackenkissen ist ein elegantes und stilvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischer Raffinesse verleihen kann. Das Sofa besteht aus einem Holzrahmen, der mit einer weichen und strapazierfähigen Polsterung überzogen ist. Das Design des Sofas zeichnet sich durch klare Linien und einfache Formen aus, mit einem niedrigen Profil, das einen modernen und minimalistischen Look erzeugt. Die Rückenlehne und die Sitzkissen sind mit dem Rahmen verbunden, so dass ein nahtloses und stromlinienförmiges Erscheinungsbild entsteht, das die schlichte Ästhetik des Sofas unterstreicht. Das Sofa ist häufig mit Nackenkissen ausgestattet. Das sind lange, zylindrische Kissen, die als Armlehnen oder zur Unterstützung des unteren Rückens beim Sitzen verwendet werden können. Die Nackenkissen sind mit dem gleichen Bezugsstoff wie der Rest des Sofas bezogen, wodurch ein einheitliches und abgestimmtes Aussehen entsteht. Die vier Beine des Sofas sind aus Holz und haben ein einfaches und schnörkelloses Design, das die moderne Ästhetik des Sofas ergänzt. Die Größe des Sofas als Dreisitzer bietet ausreichend Platz für drei Personen und ist damit die ideale Wahl für ein kleines bis mittelgroßes Wohnzimmer oder ein Familienzimmer. Das Sofa kann mit einer Reihe von Akzentstühlen, Couchtischen und anderen Möbelstücken kombiniert werden, um einen zusammenhängenden und stilvollen Wohnraum zu schaffen. Insgesamt ist ein Dreisitzer-Sofa im modernen Stil ein elegantes und anspruchsvolles Möbelstück, das jedem Wohnraum einen Hauch von zeitgenössischem Stil verleihen kann. Seine klaren Linien, einfachen Formen und sein minimalistisches Design machen es zu einer vielseitigen und stilvollen Wahl für jedes moderne Zuhause.",
          },
          {
            "locale": "en-US",
            "value": "A three seater sofa in modern style with bolster cushions is a sleek and stylish piece of furniture that can add a touch of contemporary sophistication to any living space. The sofa features a wooden frame that is covered in soft and durable upholstery.  The sofa's design is characterized by clean lines and simple shapes, with a low profile that creates a modern and minimalist look. The backrest and seat cushions are attached to the frame, with a seamless and streamlined appearance that enhances the sofa's sleek aesthetic.  The sofa is often equipped with bolster cushions, which are long, cylindrical cushions that can be used as armrests or to support the lower back while seated. The bolster cushions are covered in the same upholstery fabric as the rest of the sofa, creating a cohesive and coordinated look.  The four legs of the sofa are made of wood, with a simple and unadorned design that complements the sofa's modern aesthetic.  The three-seater size of the sofa provides ample seating space for three people, making it an ideal choice for a small to medium-sized living room or family room. The sofa can be paired with a range of accent chairs, coffee tables, and other furniture pieces to create a cohesive and stylish living space.  Overall, a three seater sofa in modern style is a sleek and sophisticated piece of furniture that can add a touch of contemporary style to any living space. Its clean lines, simple shapes, and minimalistic design make it a versatile and stylish choice for any modern home.",
          },
        ],
        "key": "modern-three-seater-sofa",
        "masterVariant": {
          "assets": undefined,
          "attributes": [
            {
              "name": "color",
              "value": "{"en-US":"Dark Slate Gray:#2F4F4F","en-GB":"Dark Slate Grey:#2F4F4F","de-DE":"Dunkles Schiefer grau:#2F4F4F"}",
            },
            {
              "name": "finish",
              "value": "{"en-US":"Saddle Brown:#8b4513","en-GB":"Saddle Brown:#8b4513","de-DE":"Sattel braun:#8b4513"}",
            },
            {
              "name": "productspec",
              "value": "{"en-US":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site","en-GB":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site","de-DE":"- Velvet upholstery\\n- 3-seater sofa\\n- Assembled on site"}",
            },
          ],
          "images": [
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.2.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.1.jpeg",
            },
            {
              "dimensions": {
                "height": 2500,
                "width": 2500,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.4.jpeg",
            },
            {
              "dimensions": {
                "height": 3840,
                "width": 5760,
              },
              "label": undefined,
              "url": "https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.3.jpeg",
            },
          ],
          "key": "modernThreeSeaterSofa01",
          "prices": [
            {
              "channel": undefined,
              "country": "DE",
              "custom": undefined,
              "customerGroup": undefined,
              "discounted": undefined,
              "key": "249900EUR",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 249900,
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
              "key": "249900GBP",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 249900,
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
              "key": "249900USD",
              "recurrencePolicy": undefined,
              "tiers": undefined,
              "validFrom": undefined,
              "validUntil": undefined,
              "value": {
                "centPrecision": {
                  "centAmount": 249900,
                  "currencyCode": "USD",
                },
              },
            },
          ],
          "sku": "MTSS-01",
        },
        "metaDescription": undefined,
        "metaKeywords": undefined,
        "metaTitle": undefined,
        "name": [
          {
            "locale": "en-GB",
            "value": "Modern Three Seater Sofa",
          },
          {
            "locale": "de-DE",
            "value": "Modernes Dreisitzer-Sofa",
          },
          {
            "locale": "en-US",
            "value": "Modern Three Seater Sofa",
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
            "value": "modern-three-seater-sofa",
          },
          {
            "locale": "de-DE",
            "value": "modernes-dreisitzer-sofa",
          },
          {
            "locale": "en-US",
            "value": "modern-three-seater-sofa",
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
